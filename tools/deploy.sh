#! /bin/bash

# Get config
source "$1"

# Deploy services
serverless deploy -v
