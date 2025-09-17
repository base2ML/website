# Subdomain Setup Checklist

Use this checklist for each new subdomain deployment.

## 1. Prerequisites ✅
- [ ] AWS CLI configured
- [ ] Wildcard SSL certificate exists (`*.base2ml.com`)
- [ ] Route53 hosted zone exists (`base2ml.com`)
- [ ] GitHub repository created

## 2. Deploy Infrastructure
```bash
./deploy-subdomain.sh <subdomain> base2ml.com
```

Example subdomains:
- `./deploy-subdomain.sh blog base2ml.com`
- `./deploy-subdomain.sh docs base2ml.com` 
- `./deploy-subdomain.sh app base2ml.com`
- `./deploy-subdomain.sh api base2ml.com`

## 3. GitHub Repository Setup

### Copy workflow file:
```bash
mkdir -p .github/workflows
cp ../website/.github/workflows/deploy.yml .github/workflows/
```

### Set GitHub Secrets:
- `AWS_ACCESS_KEY_ID`
- `AWS_SECRET_ACCESS_KEY`

### Set GitHub Variables (from deployment output):
- `BUCKET_NAME`
- `CLOUDFRONT_DISTRIBUTION_ID`
- `AWS_REGION`

## 4. Project Structure

### For Next.js projects:
```
my-subdomain/
├── .github/workflows/deploy.yml
├── package.json
├── next.config.mjs (with output: 'export')
├── app/ or pages/
└── public/
```

### For static sites:
```
my-subdomain/
├── .github/workflows/deploy.yml
├── package.json (with build script)
├── src/
└── dist/ or build/ (modify workflow accordingly)
```

## 5. Workflow Modifications

If your build output is different from `out/`, update the workflow:

```yaml
# Change this line in deploy.yml
- name: Deploy to S3
  run: |
    aws s3 sync dist/ s3://${{ env.BUCKET_NAME }} \  # Change 'out/' to 'dist/'
```

## 6. Testing

1. Push code to `main` branch
2. Check GitHub Actions for successful deployment
3. Visit `https://<subdomain>.base2ml.com`
4. Verify SSL certificate and DNS resolution

## 7. Common Patterns

### Blog (Next.js):
- Subdomain: `blog.base2ml.com`
- Tech: Next.js with static export
- Content: MDX files, CMS integration

### Documentation (Docusaurus/VitePress):
- Subdomain: `docs.base2ml.com`
- Tech: Docusaurus or VitePress
- Build output: Usually `build/` or `dist/`

### Web App (React/Vue):
- Subdomain: `app.base2ml.com`
- Tech: React, Vue, Angular
- Build output: Usually `dist/` or `build/`

### API Documentation (OpenAPI):
- Subdomain: `api.base2ml.com`
- Tech: Swagger UI, Redoc
- Static files: API specs and documentation

## 8. Cleanup

To remove a subdomain:
```bash
aws cloudformation delete-stack --stack-name <subdomain>-base2ml.com-infrastructure --region us-east-1
```

## 9. Cost Optimization

- CloudFront distributions: ~$0.60/month minimum
- S3 storage: Pay per GB stored
- Route53 queries: $0.40 per million queries
- SSL certificates: Free with ACM

Consider consolidating low-traffic subdomains or using path-based routing for cost savings.