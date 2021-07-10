terraform {
  required_providers {
    aws = {
      source = "hashicorp/aws"
    }
  }
}

provider "aws" {
  profile = "personal"
  region  = "us-east-1"
}

resource "aws_lambda_function" "form" {
  function_name = "SendGridForm"

  s3_bucket = "kocoblo-api"
  s3_key    = "form.zip"

  handler = "form.handler"
  runtime = "nodejs10.x"

  role = aws_iam_role.kocoblo_lambda.arn

  environment {
    variables = {
      SENDGRID_API_KEY = var.SENDGRID_API_KEY
    }
  }
}

resource "aws_iam_role" "kocoblo_lambda" {
  name = "kocoblo-lambda"

  assume_role_policy = <<EOF
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Action": "sts:AssumeRole",
      "Principal": {
        "Service": "lambda.amazonaws.com"
      },
      "Effect": "Allow",
      "Sid": ""
    }
  ]
}
EOF
}