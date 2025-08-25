#!/bin/bash

# Base2ML Website Deployment Script
# Deploys to S3 bucket "base2ml-site" with CloudFront and Route53 for base2ml.com

set -e

# Configuration
DOMAIN_NAME="base2ml.com"
BUCKET_NAME="base2ml-site-$(date +%Y%m%d)"
REGION="us-east-1"
STACK_NAME="base2ml-website-infrastructure"

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

echo -e "${BLUE}🚀 Base2ML Website Deployment Script${NC}"
echo -e "${BLUE}=====================================${NC}"

# Check if AWS CLI is installed and configured
if ! command -v aws &> /dev/null; then
    echo -e "${RED}❌ AWS CLI not found. Please install and configure AWS CLI first.${NC}"
    exit 1
fi

# Check AWS credentials
if ! aws sts get-caller-identity &> /dev/null; then
    echo -e "${RED}❌ AWS credentials not configured. Run 'aws configure' first.${NC}"
    exit 1
fi

echo -e "${GREEN}✅ AWS CLI configured${NC}"

# Check if SSL certificate exists for the domain
echo -e "${YELLOW}🔍 Checking for SSL certificate...${NC}"
CERT_ARN=$(aws acm list-certificates --region us-east-1 --query "CertificateSummaryList[?DomainName=='$DOMAIN_NAME' || DomainName=='*.$DOMAIN_NAME'].CertificateArn" --output text 2>/dev/null || echo "")

if [ -z "$CERT_ARN" ]; then
    echo -e "${YELLOW}⚠️  No SSL certificate found for $DOMAIN_NAME${NC}"
    echo -e "${YELLOW}   You'll need to request one manually in AWS Certificate Manager (us-east-1)${NC}"
    echo -e "${YELLOW}   Domain: $DOMAIN_NAME${NC}"
    echo -e "${YELLOW}   Subject Alternative Names: www.$DOMAIN_NAME${NC}"
    read -p "Continue without SSL certificate? (y/n): " -n 1 -r
    echo
    if [[ ! $REPLY =~ ^[Yy]$ ]]; then
        exit 1
    fi
    CERT_ARN=""
else
    echo -e "${GREEN}✅ SSL certificate found: $CERT_ARN${NC}"
fi

# Step 1: Build the Next.js application
echo -e "${YELLOW}📦 Building Next.js application...${NC}"
npm run build

if [ ! -d "out" ]; then
    echo -e "${RED}❌ Build failed. 'out' directory not found.${NC}"
    exit 1
fi

echo -e "${GREEN}✅ Build completed${NC}"

# Step 2: Check if CloudFormation stack exists
echo -e "${YELLOW}🔍 Checking CloudFormation stack...${NC}"
STACK_EXISTS=$(aws cloudformation describe-stacks --stack-name $STACK_NAME --region $REGION --query "Stacks[0].StackName" --output text 2>/dev/null || echo "")

if [ -z "$STACK_EXISTS" ]; then
    echo -e "${YELLOW}📋 Creating CloudFormation stack...${NC}"
    
    # Create stack parameters
    PARAMETERS=""
    if [ -n "$CERT_ARN" ]; then
        PARAMETERS="ParameterKey=DomainName,ParameterValue=$DOMAIN_NAME ParameterKey=CertificateArn,ParameterValue=$CERT_ARN ParameterKey=BucketName,ParameterValue=$BUCKET_NAME"
    else
        PARAMETERS="ParameterKey=DomainName,ParameterValue=$DOMAIN_NAME ParameterKey=BucketName,ParameterValue=$BUCKET_NAME"
    fi
    
    aws cloudformation create-stack \
        --stack-name $STACK_NAME \
        --template-body file://aws-base2ml-infrastructure.yml \
        --parameters $PARAMETERS \
        --capabilities CAPABILITY_NAMED_IAM \
        --region $REGION
    
    echo -e "${YELLOW}⏳ Waiting for stack creation to complete...${NC}"
    aws cloudformation wait stack-create-complete --stack-name $STACK_NAME --region $REGION
    
    if [ $? -eq 0 ]; then
        echo -e "${GREEN}✅ CloudFormation stack created successfully${NC}"
    else
        echo -e "${RED}❌ CloudFormation stack creation failed${NC}"
        exit 1
    fi
else
    echo -e "${GREEN}✅ CloudFormation stack exists${NC}"
fi

# Step 3: Get CloudFront distribution ID
echo -e "${YELLOW}🔍 Getting CloudFront distribution ID...${NC}"
DISTRIBUTION_ID=$(aws cloudformation describe-stacks --stack-name $STACK_NAME --region $REGION --query "Stacks[0].Outputs[?OutputKey=='DistributionId'].OutputValue" --output text)

if [ -z "$DISTRIBUTION_ID" ]; then
    echo -e "${RED}❌ Could not get CloudFront distribution ID${NC}"
    exit 1
fi

echo -e "${GREEN}✅ CloudFront Distribution ID: $DISTRIBUTION_ID${NC}"

# Step 4: Deploy to S3
echo -e "${YELLOW}☁️  Uploading to S3 bucket: $BUCKET_NAME...${NC}"
aws s3 sync out/ s3://$BUCKET_NAME --delete --region $REGION

# Step 5: Set proper content types
echo -e "${YELLOW}🔧 Setting content types...${NC}"
aws s3 cp s3://$BUCKET_NAME s3://$BUCKET_NAME --recursive --exclude "*" --include "*.html" --content-type "text/html" --metadata-directive REPLACE --region $REGION
aws s3 cp s3://$BUCKET_NAME s3://$BUCKET_NAME --recursive --exclude "*" --include "*.css" --content-type "text/css" --metadata-directive REPLACE --region $REGION
aws s3 cp s3://$BUCKET_NAME s3://$BUCKET_NAME --recursive --exclude "*" --include "*.js" --content-type "application/javascript" --metadata-directive REPLACE --region $REGION
aws s3 cp s3://$BUCKET_NAME s3://$BUCKET_NAME --recursive --exclude "*" --include "*.json" --content-type "application/json" --metadata-directive REPLACE --region $REGION

# Step 6: Invalidate CloudFront cache
echo -e "${YELLOW}🔄 Invalidating CloudFront cache...${NC}"
INVALIDATION_ID=$(aws cloudfront create-invalidation --distribution-id $DISTRIBUTION_ID --paths "/*" --query "Invalidation.Id" --output text)
echo -e "${GREEN}✅ CloudFront invalidation created: $INVALIDATION_ID${NC}"

# Step 7: Get website URLs
CLOUDFRONT_URL=$(aws cloudformation describe-stacks --stack-name $STACK_NAME --region $REGION --query "Stacks[0].Outputs[?OutputKey=='DistributionDomainName'].OutputValue" --output text)
WEBSITE_URL=$(aws cloudformation describe-stacks --stack-name $STACK_NAME --region $REGION --query "Stacks[0].Outputs[?OutputKey=='WebsiteURL'].OutputValue" --output text)

echo -e "${GREEN}🎉 Deployment completed successfully!${NC}"
echo -e "${GREEN}====================================${NC}"
echo -e "${GREEN}🌐 CloudFront URL: https://$CLOUDFRONT_URL${NC}"
if [ -n "$CERT_ARN" ]; then
    echo -e "${GREEN}🌐 Custom Domain: $WEBSITE_URL${NC}"
else
    echo -e "${YELLOW}⚠️  Custom domain not configured (no SSL certificate)${NC}"
fi
echo -e "${GREEN}📦 S3 Bucket: $BUCKET_NAME${NC}"
echo -e "${GREEN}🔄 CloudFront Distribution: $DISTRIBUTION_ID${NC}"

echo -e "\n${BLUE}📝 Next Steps:${NC}"
if [ -z "$CERT_ARN" ]; then
    echo -e "${YELLOW}1. Request SSL certificate in AWS Certificate Manager (us-east-1 region)${NC}"
    echo -e "${YELLOW}2. Update CloudFormation stack with certificate ARN${NC}"
    echo -e "${YELLOW}3. Configure Route53 DNS records${NC}"
else
    echo -e "${GREEN}1. Configure Route53 DNS records (if not already done)${NC}"
fi
echo -e "${BLUE}2. Test your website at the URLs above${NC}"
echo -e "${BLUE}3. Set up monitoring and logging as needed${NC}"

echo -e "\n${BLUE}💡 Tips:${NC}"
echo -e "${BLUE}- DNS changes can take up to 48 hours to propagate globally${NC}"
echo -e "${BLUE}- CloudFront cache invalidation can take 10-15 minutes${NC}"
echo -e "${BLUE}- Monitor costs in AWS Cost Explorer${NC}"