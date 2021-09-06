
resource "aws_lambda_function" "form_lambda" {
  function_name = "SendGridForm"
  package_type = "Image"
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

resource "aws_lambda_permission" "form_permission" {
  statement_id = "ALLOW_API_GATEWAY_FORM"
  action = "lambda:InvokeFunction"
  function_name = aws_lambda_function.form_lambda.arn
  principal = "apigateway.amazonaws.com"
  source_arn = "${aws_apigatewayv2_api.form.execution_arn}/*/*"
}