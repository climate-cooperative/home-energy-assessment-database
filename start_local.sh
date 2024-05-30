#!/bin/bash

export AWS_ACCESS_KEY_ID=dummy
export AWS_SECRET_ACCESS_KEY=dummy

docker-compose up -d localstack

npm run build:start:local