#!/bin/sh

# Code for AlphaServer SetUp

#Install the needed packages
sudo yum install -y gcc-c++ make
curl -sL https://rpm.nodesource.com/setup_10.x | sudo -E bash -
sudo yum install -y nodejs
npm install nodemon --save
sudo npm install -g express
npm install express

#Stop the firewall
sudo systemctl stop firewalld
sudo systemctl disable firewalld
sudo systemctl mask --now firewalld

#Make entry in rc.local to start this after reboot
sudo chmod +x /etc/rc.local
sudo echo sudo nohup /usr/bin/npm start &>/dev/null &  >> /etc/rc.local