# Base2ML Website Deployment Guide

This guide explains how to deploy your Next.js website to AWS S3 with CloudFront.

## Prerequisites

1. **AWS CLI installed and configured**
   ```bash
   aws configure
   ```

2. **Node.js and npm installed**
   ```bash
   node --version
   npm --version
   ```

## Step 1: Configure Next.js for Static Export

✅ Already done! Your `next.config.mjs` needs these settings:
```javascript
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  skipTrailingSlashRedirect: true,
  images: {
    unoptimized: true,
  },
}
```

## Step 2: Update Package.json Scripts

Add these scripts to your `package.json`:
```json
{
  "scripts": {
    "build": "next build",
    "export": "next build",
    "deploy": "npm run export && ./deploy.sh"
  }
}
```

## Step 3: Set Up AWS Infrastructure

### Option A: Using CloudFormation (Recommended)

1. **Request SSL Certificate (if using custom domain)**
   ```bash
   aws acm request-certificate \
     --domain-name base2ml.com \
     --subject-alternative-names www.base2ml.com \
     --validation-method DNS \
     --region us-east-1
   ```

2. **Deploy Infrastructure**
   ```bash
   aws cloudformation create-stack \
     --stack-name base2ml-website \
     --template-body file://aws-infrastructure.yml \
     --parameters ParameterKey=DomainName,ParameterValue=base2ml.com \
                  ParameterKey=CertificateArn,ParameterValue=arn:aws:acm:us-east-1:ACCOUNT:certificate/CERT-ID
   ```

### Option B: Manual Setup

1. **Create S3 Bucket**
   ```bash
   aws s3 mb s3://base2ml-website --region us-east-1
   ```

2. **Create CloudFront Distribution**
   - Go to AWS Console > CloudFront
   - Create Distribution
   - Origin: Your S3 bucket
   - Enable Origin Access Control (OAC)
   - Default Root Object: `index.html`

## Step 4: Configure Deployment Script

1. **Make deployment script executable**
   ```bash
   chmod +x deploy.sh
   ```

2. **Update script variables**
   Edit `deploy.sh` and set:
   ```bash
   BUCKET_NAME="base2ml-website"
   CLOUDFRONT_DISTRIBUTION_ID="YOUR_DISTRIBUTION_ID"
   ```

## Step 5: Deploy Your Website

### Manual Deployment
```bash
# Build the site
npm run build

# Deploy using script
./deploy.sh
```

### Automated Deployment
```bash
npm run deploy
```

## Step 6: Set Up Custom Domain (Optional)

1. **Create Route 53 Hosted Zone**
   ```bash
   aws route53 create-hosted-zone --name base2ml.com --caller-reference $(date +%s)
   ```

2. **Create DNS Records**
   - A record: `base2ml.com` → CloudFront distribution
   - CNAME record: `www.base2ml.com` → CloudFront distribution

## Step 7: Set Up GitHub Actions (Optional)

Create `.github/workflows/deploy.yml`:
```yaml
name: Deploy to AWS
on:
  push:
    branches: [main]
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      - run: npm install
      - run: npm run build
      - uses: aws-actions/configure-aws-credentials@v2
        with:
          aws-access-key-id: ${{ secrets.AWS_ACCESS_KEY_ID }}
          aws-secret-access-key: ${{ secrets.AWS_SECRET_ACCESS_KEY }}
          aws-region: us-east-1
      - run: ./deploy.sh
```

## Troubleshooting

### Common Issues

1. **404 errors on direct URL access**
   - Ensure CloudFront is configured to handle SPA routing
   - Set custom error pages to redirect 404/403 to index.html

2. **Images not loading**
   - Verify `images: { unoptimized: true }` in next.config.mjs
   - Check S3 bucket permissions

3. **CSS/JS files not loading**
   - Ensure proper content-type headers are set in S3
   - Check CloudFront cache behavior

### Useful Commands

```bash
# Check build output
ls -la out/

# Test locally before deploy
npx serve out

# Sync to S3 manually
aws s3 sync out/ s3://base2ml-website --delete

# Invalidate CloudFront cache
aws cloudfront create-invalidation --distribution-id YOUR_ID --paths "/*"

# Check CloudFormation stack status
aws cloudformation describe-stacks --stack-name base2ml-website
```

## Security Best Practices

1. **S3 Bucket**: Keep private, access only through CloudFront
2. **CloudFront**: Enable security headers policy
3. **SSL**: Always use HTTPS with valid certificates
4. **IAM**: Use least-privilege access for deployment credentials

## Cost Optimization

1. **CloudFront**: Use appropriate price class for your region
2. **S3**: Enable intelligent tiering for large sites
3. **Route 53**: Only create records you need

Your website will be available at:
- CloudFront URL: `https://d123456789.cloudfront.net`
- Custom domain: `https://base2ml.com` (if configured)

## Next Steps

1. Set up monitoring with CloudWatch
2. Configure AWS WAF for additional security
3. Set up automated backups
4. Configure CDN caching strategies