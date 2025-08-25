# Base2ML Website Deployment Guide

Complete deployment guide for base2ml.com using AWS S3, CloudFront, and Route53.

## 🚀 Quick Deployment

```bash
# One-command deployment
./deploy-base2ml.sh
```

## 📋 Prerequisites

### 1. AWS CLI Setup
```bash
# Install AWS CLI
brew install awscli  # macOS
# or download from: https://aws.amazon.com/cli/

# Configure AWS credentials
aws configure
```

**Required AWS Permissions:**
- S3: Full access to create and manage buckets
- CloudFront: Full access to create distributions
- CloudFormation: Full access to create/update stacks
- Route53: Full access to manage DNS (if using custom domain)
- Certificate Manager: Access to request/list certificates
- IAM: Access to create deployment user (optional)

### 2. Domain Setup

**If you own base2ml.com:**
- Ensure you have access to update nameservers with your domain registrar

**If you don't own the domain:**
- Update `DOMAIN_NAME` in `deploy-base2ml.sh`
- Update domain references in CloudFormation template

## 🔧 Step-by-Step Setup

### Step 1: SSL Certificate (Required for Custom Domain)

**Option A: Request Certificate via AWS Console**
1. Go to AWS Certificate Manager (us-east-1 region)
2. Request public certificate
3. Domain: `base2ml.com`
4. Subject Alternative Names: `www.base2ml.com`
5. Validation: DNS validation (recommended)
6. Copy the certificate ARN

**Option B: Request Certificate via CLI**
```bash
aws acm request-certificate \
  --domain-name base2ml.com \
  --subject-alternative-names www.base2ml.com \
  --validation-method DNS \
  --region us-east-1
```

### Step 2: Deploy Infrastructure

```bash
# Run the deployment script
./deploy-base2ml.sh
```

**What the script does:**
1. ✅ Checks AWS CLI configuration
2. 🔍 Looks for existing SSL certificate
3. 📦 Builds your Next.js application
4. 🏗️ Creates/updates CloudFormation stack
5. ☁️ Uploads files to S3 bucket `base2ml-site`
6. 🔄 Invalidates CloudFront cache
7. 📊 Displays deployment results

### Step 3: DNS Configuration

**If the script created Route53 hosted zone:**

1. **Get nameservers from CloudFormation output:**
   ```bash
   aws cloudformation describe-stacks \
     --stack-name base2ml-website-infrastructure \
     --query "Stacks[0].Outputs[?OutputKey=='NameServers'].OutputValue" \
     --output text
   ```

2. **Update your domain registrar:**
   - Log into your domain registrar (GoDaddy, Namecheap, etc.)
   - Find DNS/Nameserver settings for base2ml.com
   - Replace existing nameservers with AWS Route53 nameservers
   - Save changes

**Manual DNS Setup (if you prefer existing DNS provider):**
- Create A record: `base2ml.com` → CloudFront domain (from script output)
- Create CNAME record: `www.base2ml.com` → CloudFront domain

### Step 4: Verification

1. **Wait for DNS propagation** (5-60 minutes)
2. **Test your website:**
   ```bash
   # Check DNS resolution
   nslookup base2ml.com
   
   # Test website
   curl -I https://base2ml.com
   ```

3. **Access your website:**
   - https://base2ml.com
   - https://www.base2ml.com

## 🔄 Future Deployments

After initial setup, deploy updates with:
```bash
./deploy-base2ml.sh
```

## 📊 AWS Resources Created

| Resource | Name | Purpose |
|----------|------|---------|
| S3 Bucket | `base2ml-site` | Static file hosting |
| CloudFront | Auto-generated | Global CDN |
| Route53 Hosted Zone | `base2ml.com` | DNS management |
| IAM User | `base2ml.com-deployment-user` | CI/CD access |
| CloudFormation Stack | `base2ml-website-infrastructure` | Infrastructure management |

## 💰 Expected Monthly Costs

| Service | Estimated Cost |
|---------|----------------|
| S3 Storage | $0.50-$2 |
| CloudFront | $1-$10 |
| Route53 Hosted Zone | $0.50 |
| **Total** | **$2-$13/month** |

## 🔧 Configuration

### Custom Domain
To use a different domain, edit `deploy-base2ml.sh`:
```bash
DOMAIN_NAME="yourdomain.com"
```

### Different S3 Bucket
To use a different S3 bucket name, edit `deploy-base2ml.sh`:
```bash
BUCKET_NAME="your-bucket-name"
```

### Different AWS Region
All resources are in `us-east-1` for optimal CloudFront performance. To change:
1. Update `REGION` in `deploy-base2ml.sh`
2. Update certificate region (must stay us-east-1 for CloudFront)

## 🚨 Troubleshooting

### Common Issues

**1. Certificate Not Found**
```bash
# List certificates
aws acm list-certificates --region us-east-1

# Check certificate status
aws acm describe-certificate --certificate-arn YOUR_CERT_ARN --region us-east-1
```

**2. S3 Bucket Already Exists**
- Choose a different bucket name in `deploy-base2ml.sh`
- Or delete existing bucket if you own it

**3. DNS Not Working**
```bash
# Check nameservers
dig NS base2ml.com

# Check DNS propagation
nslookup base2ml.com 8.8.8.8
```

**4. Website Shows 403/404**
- Wait 10-15 minutes for CloudFront cache
- Check S3 bucket policy and CloudFront OAC

### Useful Commands

```bash
# Check CloudFormation stack status
aws cloudformation describe-stacks --stack-name base2ml-website-infrastructure

# List S3 bucket contents
aws s3 ls s3://base2ml-site

# Check CloudFront distribution
aws cloudfront get-distribution --id YOUR_DISTRIBUTION_ID

# Manual cache invalidation
aws cloudfront create-invalidation --distribution-id YOUR_ID --paths "/*"
```

## 🔐 Security Features

- ✅ S3 bucket is private (no public access)
- ✅ CloudFront Origin Access Control (OAC)
- ✅ HTTPS redirect enforced
- ✅ Security headers policy applied
- ✅ Modern TLS versions only

## 📈 Performance Features

- ✅ Global CloudFront CDN
- ✅ Gzip compression enabled
- ✅ HTTP/2 and HTTP/3 support
- ✅ Optimized caching policies
- ✅ Static site generation

## 🔄 CI/CD Setup (Optional)

The CloudFormation template creates an IAM user for automated deployments.

**Get deployment user credentials:**
```bash
# Create access key for deployment user
aws iam create-access-key --user-name base2ml.com-deployment-user
```

**GitHub Actions Secrets:**
- `AWS_ACCESS_KEY_ID`: From above command
- `AWS_SECRET_ACCESS_KEY`: From above command
- `CLOUDFRONT_DISTRIBUTION_ID`: From CloudFormation output

## 📞 Support

**AWS Support:**
- Use AWS Support Center for infrastructure issues
- Check AWS Service Health Dashboard

**Script Issues:**
- Check AWS CloudTrail for API errors
- Review CloudFormation events in AWS Console
- Verify AWS CLI version: `aws --version`

---

🎉 **Your base2ML website will be live at https://base2ml.com!**