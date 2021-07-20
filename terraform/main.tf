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
  region  = "us-east-1"
}

resource "aws_lambda_function" "form_lambda" {
  function_name = "SendGridForm"

  s3_bucket = "kocoblo-lambda"
  s3_key    = "form.zip"

  handler = "index.handler"
  runtime = "nodejs10.x"

  role = aws_iam_role.lambda_role.arn

  source_code_hash = data.archive_file.zip.output_base64sha256

  environment {
    variables = {
      SENDGRID_API_KEY = var.SENDGRID_API_KEY
      SENDGRID_AUTHORIZED_EMAIL = var.SENDGRID_AUTHORIZED_EMAIL
    }
  }
}

resource "aws_iam_role" "lambda_role" {
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

data "archive_file" "zip" {
  type = "zip"
  source_dir = "${path.module}/api/form"
  output_path = "${path.module}/lambda/form.zip"
}
