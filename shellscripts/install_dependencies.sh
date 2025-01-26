#!/bin/bash
# Install Nginx (or Apache)
sudo yum install -y nginx
sudo systemctl enable nginx
sudo systemctl start nginx
