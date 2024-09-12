#!/bin/bash

# env vars
export DATA_SOURCE=DYNAMODB
export AWS_DYNAMO_ENDPOINT=http://localhost:4566
export AWS_DEFAULT_REGION=us-west-2
export AWS_ACCESS_KEY_ID=dummy
export AWS_SECRET_ACCESS_KEY=dummy

curl -L -O https://github.com/climate-cooperative/home-energy-data-manager/releases/download/latest/dynamo-entries.tgz

#  standup dynamodb
docker-compose up -d localstack

npm run build:start:local