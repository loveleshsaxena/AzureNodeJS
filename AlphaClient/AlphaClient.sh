#!/bin/sh

# Code for AlphaClient SetUp
bashRCContent=$(<~/.bashrc)

lookUpLine="Code for AlphaClient"

if [[ $bashRCContent =~ $lookUpLine ]]; then
    echo "AlphaClient already configured on this machine"
else
    echo "AlphaClient not configured on this machine. Will start configuring..."
    cat AlphaClient.config >> ~/.bashrc
    echo "AlphaClient configured successfully"
fi
