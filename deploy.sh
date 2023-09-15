#!/bin/bash

# Make sure the private key doesn't have any formatting issues and is usable
echo "$PRIVATE_KEY" > /tmp/deploy_key
chmod 600 /tmp/deploy_key

# Use SSH to connect to your server and deploy
ssh -o StrictHostKeyChecking=no -i /tmp/deploy_key $USER@$HOST <<EOF

  # Pull updates
  cd /home/ugolok
  git pull origin main

  # Deploying API
  # cd /home/ugolok/domains/api.ugolok.shop/public_html/API
  # npm install
  # pm2 restart u-api
  
  # Deploying Frontend
  cd /home/ugolok/public_html/frontend
  npm install
  pm2 restart u-front

EOF
