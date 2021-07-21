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

resource "aws_s3_bucket" "bucket" {
  bucket = "kocoblo-lambda"
}

resource "aws_s3_bucket_object" "lambda_code" {
  key        = "form.zip"
  bucket     = aws_s3_bucket.bucket.id
	source     = data.archive_file.zip.output_path
	etag       = data.archive_file.zip.output_base64sha256
}

resource "aws_lambda_function" "form_lambda" {
  function_name = "SendGridForm"
  filename = data.archive_file.zip.output_path
  source_code_hash = data.archive_file.zip.output_base64sha256

  handler = "index.handler"
  runtime = "nodejs10.x"

  role = aws_iam_role.lambda_role.arn

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
  source_dir = "../api/form"
  output_path = "../lambda/form.zip"
}
