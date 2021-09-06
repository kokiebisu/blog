resource "aws_apigatewayv2_api" "form" {
  name          = "kocoblo"
  protocol_type = "HTTP"
}

resource "aws_apigatewayv2_stage" "stage" {
  api_id      = aws_apigatewayv2_api.form.id
  name        = "$default"
  auto_deploy = true

  access_log_settings {
    destination_arn = aws_cloudwatch_log_group.form.arn
    format = <<CONFIG
    { 
      "requestId":"$context.requestId", 
      "ip": "$context.identity.sourceIp", 
      "caller":"$context.identity.caller", 
      "user":"$context.identity.user", 
      "requestTime":"$context.requestTime", 
      "httpMethod":"$context.httpMethod", 
      "resourcePath":"$context.resourcePath", 
      "status":"$context.status", 
      "protocol":"$context.protocol", 
      "responseLength":"$context.responseLength" 
}
    CONFIG
  }
}

resource "aws_apigatewayv2_domain_name" "this" {
  domain_name = "api.${var.site_domain}"

  domain_name_configuration {
    certificate_arn = aws_acm_certificate.certificate.arn
    endpoint_type   = "REGIONAL"
    security_policy = "TLS_1_2"
  }

  depends_on = [aws_acm_certificate_validation.validation]
}

resource "aws_apigatewayv2_api_mapping" "this" {
  api_id      = aws_apigatewayv2_api.form.id
  domain_name = aws_apigatewayv2_domain_name.this.id
  stage       = aws_apigatewayv2_stage.stage.id
}

resource "aws_apigatewayv2_route" "form" {
  api_id = aws_apigatewayv2_api.form.id
  route_key = "ANY /form"

  target = "integrations/${aws_apigatewayv2_integration.form.id}"
}

resource "aws_apigatewayv2_integration" "form" {
  api_id = aws_apigatewayv2_api.form.id
  integration_type = "AWS_PROXY"
  integration_uri = aws_lambda_function.form_lambda.invoke_arn
}
