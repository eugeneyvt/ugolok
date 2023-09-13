#!/bin/bash

# Fetch secrets from environment variables
HOST=${DEPLOY_HOST}
PRIVATE_KEY=${DEPLOY_PRIVATE_KEY}
USER=${DEPLOY_USER}

# Use SSH to connect to your server and deploy
ssh -i "$PRIVATE_KEY" $USER@$HOST <<EOF
  # Pull updates
  cd /home/ugolok
  git pull origin main

  # Deploying Frontend
  cd /home/ugolok/public_html/frontend
  npm install
  pm2 restart u-front

  # Deploying API
  cd /home/ugolok/domains/api.ugolok.shop/public_html/API
  npm install
  pm2 restart u-api
EOF
