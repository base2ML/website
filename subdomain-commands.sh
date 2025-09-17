#!/bin/bash

# Quick reference commands for subdomain management

# Deploy new subdomain
deploy_subdomain() {
    local subdomain=$1
    local domain=${2:-base2ml.com}
    echo "Deploying ${subdomain}.${domain}..."
    ./deploy-subdomain.sh "$subdomain" "$domain"
}

# Get subdomain info
get_subdomain_info() {
    local subdomain=$1
    local domain=${2:-base2ml.com}
    local domain_safe=$(echo "$domain" | sed 's/\./-/g')
    local stack_name="${subdomain}-${domain_safe}-stack"
    
    echo "=== ${subdomain}.${domain} Info ==="
    aws cloudformation describe-stacks --stack-name "$stack_name" --query "Stacks[0].Outputs" --output table
}

# List all subdomains
list_subdomains() {
    echo "=== All Subdomain Stacks ==="
    aws cloudformation list-stacks --stack-status-filter CREATE_COMPLETE UPDATE_COMPLETE --query "StackSummaries[?contains(StackName, 'base2ml-com-stack')].StackName" --output table
}

# Delete subdomain
delete_subdomain() {
    local subdomain=$1
    local domain=${2:-base2ml.com}
    local domain_safe=$(echo "$domain" | sed 's/\./-/g')
    local stack_name="${subdomain}-${domain_safe}-stack"
    
    echo "⚠️  WARNING: This will permanently delete ${subdomain}.${domain}"
    read -p "Are you sure? (y/N): " -r
    if [[ $REPLY =~ ^[Yy]$ ]]; then
        aws cloudformation delete-stack --stack-name "$stack_name" --region us-east-1
        echo "Deletion initiated for ${subdomain}.${domain}"
    fi
}

# Test subdomain
test_subdomain() {
    local subdomain=$1
    local domain=${2:-base2ml.com}
    local url="https://${subdomain}.${domain}"
    
    echo "Testing ${url}..."
    curl -I "$url" -w "Response time: %{time_total}s\n"
}

# Usage examples:
# deploy_subdomain blog
# deploy_subdomain docs
# get_subdomain_info blog
# list_subdomains
# delete_subdomain old-subdomain
# test_subdomain blog