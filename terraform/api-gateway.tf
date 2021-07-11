
resource "aws_api_gateway_rest_api" "kocoblo" {
  name = "kocoblo-api-gateway"
  description = "Container for all of the other API Gateway objects"
}

resource "aws_api_gateway_resource" "form" {
    rest_api_id = aws_api_gateway_rest_api.kocoblo.id
    parent_id = aws_api_gateway_rest_api.kocoblo.root_resource_id
    path_part = "form"
}

resource "aws_api_gateway_method" "form" {
    rest_api_id = aws_api_gateway_rest_api.kocoblo.id
    resource_id = aws_api_gateway_resource.form.id
    http_method = "POST"
    authorization = "NONE"
}

resource "aws_api_gateway_integration" "form" {
    rest_api_id = aws_api_gateway_rest_api.kocoblo.id
    resource_id = aws_api_gateway_resource.form.id
    http_method = aws_api_gateway_method.form.http_method
    integration_http_method = "POST"
    type = "AWS"
    uri = aws_lambda_function.form.invoke_arn
}

resource "aws_api_gateway_method_response" "form" {
    rest_api_id = aws_api_gateway_rest_api.kocoblo.id
    resource_id = aws_api_gateway_resource.form.id
    http_method = aws_api_gateway_method.form.http_method
    status_code = "200"

    response_parameters = {
        "method.response.header.Access-Control-Allow-Headers" = true,
        "method.response.header.Access-Control-Allow-Methods" = true,
        "method.response.header.Access-Control-Allow-Origin" = true
    }

      response_models = {
    "application/json" = "Empty"
  }
}

resource "aws_api_gateway_integration_response" "form" {
    rest_api_id = aws_api_gateway_rest_api.kocoblo.id
    resource_id = aws_api_gateway_resource.form.id
    http_method = aws_api_gateway_method.form.http_method
    status_code = aws_api_gateway_method_response.form.status_code

    response_parameters = {
        "method.response.header.Access-Control-Allow-Headers" = "'Content-Type'",
        "method.response.header.Access-Control-Allow-Methods" = "'GET, POST'",
        "method.response.header.Access-Control-Allow-Origin" = "'*'"
    }
}

resource "aws_api_gateway_deployment" "kocoblo" {
    depends_on = [aws_api_gateway_integration.form]
    rest_api_id = aws_api_gateway_rest_api.kocoblo.id
    stage_name = "prod"
}
resource "aws_lambda_permission" "lambda_permission" {
    statement_id = "AllowLambdaInvocation"
    action = "lambda:InvokeFunction"
    function_name = aws_lambda_function.form.function_name
    principal = "apigateway.amazonaws.com"
    source_arn = "${aws_api_gateway_rest_api.kocoblo.execution_arn}/*/POST/form"
}