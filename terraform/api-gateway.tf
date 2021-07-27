
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

output "arn" {
    value = "${aws_api_gateway_deployment.api_gateway_deployment.execution_arn}"
}

resource "aws_api_gateway_deployment" "api_gateway_deployment" {
    rest_api_id = aws_api_gateway_rest_api.api_gateway.id

    triggers = {
    # NOTE: The configuration below will satisfy ordering considerations,
    #       but not pick up all future REST API changes. More advanced patterns
    #       are possible, such as using the filesha1() function against the
    #       Terraform configuration file(s) or removing the .id references to
    #       calculate a hash against whole resources. Be aware that using whole
    #       resources will show a difference after the initial implementation.
    #       It will stabilize to only change when resources change afterwards.
    redeployment = sha1(jsonencode([
      aws_api_gateway_resource.api_gateway_resource.id,
      aws_api_gateway_method.api_gateway_method.id,
      aws_api_gateway_integration.api_gateway_integration.id,
    ]))
  }
    lifecycle {
      create_before_destroy = true
    }
}

resource "aws_api_gateway_stage" "stage" {
  deployment_id = aws_api_gateway_deployment.api_gateway_deployment.id
  rest_api_id   = aws_api_gateway_rest_api.api_gateway.id
  stage_name    = "prod"

  access_log_settings {
      format = "{ stage : $context.stage, request_id : $context.requestId, api_id : $context.apiId, resource_path : $context.resourcePath, resource_id : $context.resourceId, http_method : $context.httpMethod, source_ip : $context.identity.sourceIp, user-agent : $context.identity.userAgent, message: $context.error.messageString }"
      destination_arn = aws_cloudwatch_log_group.log_group.arn
  }
}

resource "aws_lambda_permission" "lambda_permission" {
    statement_id = "AllowLambdaInvocation"
    action = "lambda:InvokeFunction"
    function_name = aws_lambda_function.form_lambda.function_name
    principal = "apigateway.amazonaws.com"
    source_arn = "${aws_api_gateway_deployment.api_gateway_deployment.execution_arn}/*/*/*"
}

resource "aws_cloudwatch_log_group" "log_group" {
  name              = "kocoblo/form"
  retention_in_days = 7
}

resource "aws_api_gateway_method_settings" "example" {
  rest_api_id = aws_api_gateway_rest_api.api_gateway.id
  stage_name  = aws_api_gateway_stage.stage.stage_name
  method_path = "*/*"

  settings {
    logging_level   = "INFO"
    metrics_enabled = true
    data_trace_enabled = true
  }
}

# arn:aws:execute-api:us-east-1:776733965771:eefmhudf53/*/*/form

