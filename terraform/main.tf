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

  handler = "index.handler"
  runtime = "nodejs10.x"

  role = aws_iam_role.kocoblo_lambda.arn

  source_code_hash = data.archive_file.form.output_base64sha256

  environment {
    variables = {
      SENDGRID_API_KEY = var.SENDGRID_API_KEY
      SENDGRID_AUTHORIZED_EMAIL = var.SENDGRID_AUTHORIZED_EMAIL
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

data "archive_file" "form" {
  type = "zip"
  source_dir = "${path.module}/../api/form"
  output_path = "${path.module}/../lambda/form.zip"
}

resource "aws_api_gateway_rest_api" "api" {
  name = "api"
  description = "Container for all of the other API Gateway objects"
}