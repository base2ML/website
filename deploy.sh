#!/bin/bash

# Base2ML Website Deployment Script
# Deploy Next.js static site to S3 and CloudFront

set -e

# Configuration
BUCKET_NAME="base2ml-website"
CLOUDFRONT_DISTRIBUTION_ID="E8O7JHOQKA0WB"  # Add your distribution ID here
REGION="us-east-1"

echo "🚀 Starting deployment for base2ML website..."

# Build the Next.js application for static export
echo "📦 Building Next.js application..."
npm run build

# Check if out directory exists
if [ ! -d "out" ]; then
    echo "❌ Error: 'out' directory not found. Make sure Next.js build completed successfully."
    exit 1
fi

# Sync files to S3 bucket
echo "☁️ Uploading to S3 bucket: $BUCKET_NAME..."
aws s3 sync out/ s3://$BUCKET_NAME --delete --region $REGION

# Set proper content types for specific files
echo "🔧 Setting content types..."
aws s3 cp s3://$BUCKET_NAME --recursive --exclude "*" --include "*.html" --content-type "text/html" --metadata-directive REPLACE
aws s3 cp s3://$BUCKET_NAME --recursive --exclude "*" --include "*.css" --content-type "text/css" --metadata-directive REPLACE
aws s3 cp s3://$BUCKET_NAME --recursive --exclude "*" --include "*.js" --content-type "application/javascript" --metadata-directive REPLACE
aws s3 cp s3://$BUCKET_NAME --recursive --exclude "*" --include "*.json" --content-type "application/json" --metadata-directive REPLACE

# Invalidate CloudFront cache if distribution ID is provided
if [ -n "$CLOUDFRONT_DISTRIBUTION_ID" ]; then
    echo "🔄 Invalidating CloudFront cache..."
    aws cloudfront create-invalidation --distribution-id $CLOUDFRONT_DISTRIBUTION_ID --paths "/*"
    echo "✅ CloudFront invalidation created"
else
    echo "⚠️  CloudFront distribution ID not set. Skipping cache invalidation."
fi

echo "🎉 Deployment completed successfully!"
echo "🌐 Your website should be available at your CloudFront URL"