#!/bin/bash

# Subdomain Deployment Script
# Usage: ./deploy-subdomain.sh <subdomain> [domain]

set -e

# Configuration
SUBDOMAIN_NAME="${1:-blog}"
DOMAIN_NAME="${2:-base2ml.com}"
AWS_REGION="us-east-1"

# Create a CloudFormation-safe stack name
# Replace dots with dashes and ensure it starts with a letter
DOMAIN_SAFE=$(echo "$DOMAIN_NAME" | sed 's/\./-/g')
STACK_NAME="${SUBDOMAIN_NAME}-${DOMAIN_SAFE}-stack"

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

echo -e "${BLUE}🚀 Deploying ${SUBDOMAIN_NAME}.${DOMAIN_NAME}${NC}"
echo -e "${BLUE}Stack Name: ${STACK_NAME}${NC}"
echo -e "${BLUE}================================${NC}"

# Validate inputs
if [ -z "$SUBDOMAIN_NAME" ]; then
    echo -e "${RED}❌ Error: Subdomain name required${NC}"
    echo "Usage: $0 <subdomain> [domain]"
    exit 1
fi

# Validate subdomain name (must start with letter, contain only letters, numbers, hyphens)
if ! [[ "$SUBDOMAIN_NAME" =~ ^[a-zA-Z][a-zA-Z0-9-]*$ ]]; then
    echo -e "${RED}❌ Error: Subdomain name must start with a letter and contain only letters, numbers, and hyphens${NC}"
    echo "Invalid: $SUBDOMAIN_NAME"
    exit 1
fi

# Validate stack name length (CloudFormation limit is 128 characters)
if [ ${#STACK_NAME} -gt 128 ]; then
    echo -e "${RED}❌ Error: Stack name too long: ${STACK_NAME}${NC}"
    echo "Length: ${#STACK_NAME} characters (max 128)"
    exit 1
fi

# Check AWS CLI
if ! command -v aws &> /dev/null; then
    echo -e "${RED}❌ AWS CLI not found${NC}"
    exit 1
fi

# Check AWS credentials
if ! aws sts get-caller-identity &> /dev/null; then
    echo -e "${RED}❌ AWS credentials not configured${NC}"
    exit 1
fi

echo -e "${GREEN}✅ AWS CLI configured${NC}"

# Get hosted zone ID
echo -e "${YELLOW}🔍 Getting hosted zone ID...${NC}"
HOSTED_ZONE_ID=$(aws route53 list-hosted-zones --query "HostedZones[?Name=='${DOMAIN_NAME}.'].Id" --output text | cut -d'/' -f3)

if [ -z "$HOSTED_ZONE_ID" ]; then
    echo -e "${RED}❌ Hosted zone not found for ${DOMAIN_NAME}${NC}"
    exit 1
fi

echo -e "${GREEN}✅ Hosted zone ID: ${HOSTED_ZONE_ID}${NC}"

# Get SSL certificate ARN
echo -e "${YELLOW}🔍 Getting SSL certificate...${NC}"
CERT_ARN=$(aws acm list-certificates --region us-east-1 --query "CertificateSummaryList[?DomainName=='*.${DOMAIN_NAME}' || DomainName=='${DOMAIN_NAME}'].CertificateArn" --output text)

if [ -z "$CERT_ARN" ]; then
    echo -e "${RED}❌ SSL certificate not found for *.${DOMAIN_NAME}${NC}"
    echo -e "${YELLOW}Please create a wildcard certificate in ACM (us-east-1)${NC}"
    exit 1
fi

echo -e "${GREEN}✅ SSL certificate found${NC}"

# Deploy CloudFormation stack
echo -e "${YELLOW}📋 Deploying CloudFormation stack...${NC}"

aws cloudformation deploy \
    --template-file subdomain-infrastructure.yml \
    --stack-name "$STACK_NAME" \
    --parameter-overrides \
        SubdomainName="$SUBDOMAIN_NAME" \
        DomainName="$DOMAIN_NAME" \
        CertificateArn="$CERT_ARN" \
        HostedZoneId="$HOSTED_ZONE_ID" \
    --capabilities CAPABILITY_IAM \
    --region "$AWS_REGION"

if [ $? -eq 0 ]; then
    echo -e "${GREEN}✅ CloudFormation deployment completed${NC}"
else
    echo -e "${RED}❌ CloudFormation deployment failed${NC}"
    exit 1
fi

# Get outputs
echo -e "${YELLOW}📊 Getting deployment outputs...${NC}"
BUCKET_NAME=$(aws cloudformation describe-stacks --stack-name "$STACK_NAME" --region "$AWS_REGION" --query "Stacks[0].Outputs[?OutputKey=='BucketName'].OutputValue" --output text)
DISTRIBUTION_ID=$(aws cloudformation describe-stacks --stack-name "$STACK_NAME" --region "$AWS_REGION" --query "Stacks[0].Outputs[?OutputKey=='DistributionId'].OutputValue" --output text)
WEBSITE_URL=$(aws cloudformation describe-stacks --stack-name "$STACK_NAME" --region "$AWS_REGION" --query "Stacks[0].Outputs[?OutputKey=='WebsiteURL'].OutputValue" --output text)

echo -e "${GREEN}🎉 Deployment completed successfully!${NC}"
echo -e "${GREEN}====================================${NC}"
echo -e "${GREEN}🌐 Website URL: ${WEBSITE_URL}${NC}"
echo -e "${GREEN}📦 S3 Bucket: ${BUCKET_NAME}${NC}"
echo -e "${GREEN}🔄 CloudFront Distribution: ${DISTRIBUTION_ID}${NC}"

echo -e "\n${BLUE}📝 Next Steps:${NC}"
echo -e "${BLUE}1. Set up GitHub repository variables:${NC}"
echo -e "   ${YELLOW}BUCKET_NAME=${BUCKET_NAME}${NC}"
echo -e "   ${YELLOW}CLOUDFRONT_DISTRIBUTION_ID=${DISTRIBUTION_ID}${NC}"
echo -e "   ${YELLOW}AWS_REGION=${AWS_REGION}${NC}"
echo -e "${BLUE}2. Set up GitHub repository secrets:${NC}"
echo -e "   ${YELLOW}AWS_ACCESS_KEY_ID=<your-access-key>${NC}"
echo -e "   ${YELLOW}AWS_SECRET_ACCESS_KEY=<your-secret-key>${NC}"
echo -e "${BLUE}3. Deploy your website files to: ${BUCKET_NAME}${NC}"
echo -e "${BLUE}4. Test your website at: ${WEBSITE_URL}${NC}"

# Create environment file for this subdomain
cat > ".env.${SUBDOMAIN_NAME}" << EOF
# Environment variables for ${SUBDOMAIN_NAME}.${DOMAIN_NAME}
AWS_REGION=${AWS_REGION}
BUCKET_NAME=${BUCKET_NAME}
CLOUDFRONT_DISTRIBUTION_ID=${DISTRIBUTION_ID}
WEBSITE_URL=${WEBSITE_URL}
EOF

echo -e "\n${GREEN}✅ Environment file created: .env.${SUBDOMAIN_NAME}${NC}"