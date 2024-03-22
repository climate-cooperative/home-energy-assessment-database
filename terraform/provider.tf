terraform {
  required_providers {
    aws = {
      source = "hashicorp/aws"
      version = "~> 5.0"
    }
  }

  required_version = "~> 1.7"
}

provider "aws" {
  region = "us-west-2"
  assume_role {
    role_arn = "arn:aws:iam::590183810809:role/aws-reserved/sso.amazonaws.com/AWSReservedSSO_AdministratorAccess_dde881cfa488aa25"
  }
}