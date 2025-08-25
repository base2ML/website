# Deployment Setup

This project uses GitHub Actions to automatically deploy to AWS S3 and CloudFront.

## Prerequisites

1. AWS S3 bucket configured for static website hosting
2. CloudFront distribution pointing to the S3 bucket
3. Route53 domain configured (optional)

## GitHub Setup

### 1. Required Secrets

In your GitHub repository, go to **Settings > Secrets and variables > Actions** and add these secrets:

- `AWS_ACCESS_KEY_ID` - Your AWS access key ID
- `AWS_SECRET_ACCESS_KEY` - Your AWS secret access key

### 2. Required Variables (Optional)

You can also set these as repository variables instead of hardcoding them:

- `AWS_REGION` - AWS region (default: us-east-1)
- `BUCKET_NAME` - Your S3 bucket name
- `CLOUDFRONT_DISTRIBUTION_ID` - Your CloudFront distribution ID

### 3. Environment Variables Priority

The workflow uses this priority order:
1. GitHub repository variables (`vars.VARIABLE_NAME`)
2. GitHub secrets (`secrets.VARIABLE_NAME`)
3. Default values (where applicable)

## Local Development

1. Copy `.env.example` to `.env.local`
2. Fill in your actual values
3. Never commit `.env.local` to version control

## Automatic Deployment

The workflow triggers automatically on:
- Push to `main` branch
- Manual trigger via GitHub Actions UI

## Deployment Process

1. Checkout code
2. Setup Node.js and install dependencies
3. Build Next.js application (static export)
4. Configure AWS credentials
5. Sync files to S3 bucket
6. Set proper content types for web assets
7. Invalidate CloudFront cache
8. Show deployment summary

## Manual Deployment

You can also deploy manually using the provided scripts:
- `./deploy.sh` - Simple deployment script
- `./deploy-base2ml.sh` - Full infrastructure deployment script

## Reusing for Other Projects

To reuse this workflow for other projects:

1. Copy `.github/workflows/deploy.yml` to your new project
2. Update the environment variables in GitHub settings
3. Modify the build command if needed (line 30 in deploy.yml)
4. Update the sync source directory if different from `out/`

## Troubleshooting

- **403 Errors**: Check S3 bucket policy and CloudFront Origin Access Control
- **Build Failures**: Verify Node.js version and dependencies
- **Deployment Timeouts**: Check AWS credentials and permissions
- **CloudFront Issues**: Ensure distribution ID is correct and active