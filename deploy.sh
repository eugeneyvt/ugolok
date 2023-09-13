#!/bin/bash

# Use SSH to connect to your server and deploy
ssh -i "$PRIVATE_KEY" $USER@$HOST <<EOF
  # Pull updates
  git pull origin main

  # Deploying Frontend
  cd public_html/frontend
  npm install
  pm2 restart u-front

  # Deploying API
  cd domains/api.ugolok.shop/public_html/API
  npm install
  pm2 restart u-api
EOF
