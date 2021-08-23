resource "aws_apigatewayv2_api" "form" {
  name          = "kocoblo"
  protocol_type = "HTTP"
}

resource "aws_apigatewayv2_stage" "stage" {
  api_id      = aws_apigatewayv2_api.form.id
  name        = "$default"
  auto_deploy = true
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
