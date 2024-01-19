#!/bin/bash

# Prepare Server
echo "Preparing the server..."
curl -fsSL https://deb.nodesource.com/setup_18.x | bash -
apt-get update
apt-get install -y nodejs
if ! command -v node &> /dev/null; then
    echo "Error: Node.js installation failed."
    exit 1
fi
node -v

# Install Yarn
echo "Installing Yarn..."
npm install --global yarn
if ! command -v yarn &> /dev/null; then
    echo "Error: Yarn installation failed."
    exit 1
fi

# Install Nginx
echo "Installing Nginx..."
apt-get install -y nginx
if ! command -v nginx &> /dev/null; then
    echo "Error: Nginx installation failed."
    exit 1
fi

# Configure Nginx
echo "Configuring Nginx..."
nginx_config="./config/nginx/vsfcommunity"
nginx_config_dest="/etc/nginx/sites-available/vsfcommunity"

if [ -f "$nginx_config" ]; then
    cp "$nginx_config" "$nginx_config_dest"
else
    echo "Error: Nginx config file not found at $nginx_config."
    exit 1
fi

# Enable Nginx site
ln -s "$nginx_config_dest" "/etc/nginx/sites-enabled/"

# Set up certbot
echo "Setting up Certbot..."
apt-get install -y snapd
snap install --classic certbot
ln -s /snap/bin/certbot /usr/bin/certbot

echo "Server setup completed successfully."
