
resource "aws_api_gateway_rest_api" "api_gateway" {
  name = "kocoblo-api-gateway"
  description = "Container for all of the other API Gateway objects"
}

resource "aws_api_gateway_resource" "api_gateway_resource" {
    rest_api_id = aws_api_gateway_rest_api.api_gateway.id
    parent_id = aws_api_gateway_rest_api.api_gateway.root_resource_id
    path_part = "form"
}

resource "aws_api_gateway_method" "api_gateway_method" {
    rest_api_id = aws_api_gateway_rest_api.api_gateway.id
    resource_id = aws_api_gateway_resource.api_gateway_resource.id
    http_method = "ANY"
    authorization = "NONE"
}

resource "aws_api_gateway_integration" "api_gateway_integration" {
    rest_api_id = aws_api_gateway_rest_api.api_gateway.id
    resource_id = aws_api_gateway_resource.api_gateway_resource.id
    http_method = aws_api_gateway_method.api_gateway_method.http_method
    integration_http_method = "ANY"
    type = "AWS_PROXY"
    uri = aws_lambda_function.form_lambda.invoke_arn
}

resource "aws_api_gateway_method_response" "response" {
    rest_api_id = aws_api_gateway_rest_api.api_gateway.id
    resource_id = aws_api_gateway_resource.api_gateway_resource.id
    http_method = aws_api_gateway_method.api_gateway_method.http_method
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

resource "aws_api_gateway_integration_response" "integration_response" {
    rest_api_id = aws_api_gateway_rest_api.api_gateway.id
    resource_id = aws_api_gateway_resource.api_gateway_resource.id
    http_method = aws_api_gateway_method.api_gateway_method.http_method
    status_code = aws_api_gateway_method_response.response.status_code

    response_parameters = {
        "method.response.header.Access-Control-Allow-Headers" = "'Content-Type'",
        "method.response.header.Access-Control-Allow-Methods" = "'GET, POST'",
        "method.response.header.Access-Control-Allow-Origin" = "'*'"
    }
}

resource "aws_api_gateway_deployment" "api_gateway_deployment" {
    depends_on = [aws_api_gateway_integration.api_gateway_integration]
    rest_api_id = aws_api_gateway_rest_api.api_gateway.id
    stage_name = "prod"
}
resource "aws_lambda_permission" "lambda_permission" {
    statement_id = "AllowLambdaInvocation"
    action = "lambda:InvokeFunction"
    function_name = aws_lambda_function.form_lambda.function_name
    principal = "apigateway.amazonaws.com"
    source_arn = "${aws_api_gateway_rest_api.api_gateway.execution_arn}/*/POST/form"
}