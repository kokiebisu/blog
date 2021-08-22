
resource "aws_lambda_function" "form_lambda" {
  count = data.aws_ecr_image.form_image.id ? 1 : 0
  function_name = "SendGridForm"
  handler = "index.handler"
  runtime = "nodejs14.x"
  image_uri = "${aws_ecr_repository.repository.repository_url}@${data.aws_ecr_image.form_image.id}"

  role = aws_iam_role.lambda_role.arn

  depends_on = [data.aws_ecr_image.form_image]

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