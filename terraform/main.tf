terraform {
  required_providers {
    aws = {
      source = "hashicorp/aws"
    }
  }

  backend "remote" {
    organization = "do-it-simple"

    workspaces {
      name = "kocoblo"
    }
  }
}

provider "aws" {
  access_key = var.AWS_ACCESS_KEY
  secret_key = var.AWS_SECRET_KEY
  region  = "us-east-1"
}

