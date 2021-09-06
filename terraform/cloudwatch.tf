resource "aws_cloudwatch_log_group" "api_gateway" {
    name = "/kocoblo/api-gateway"

}

resource "aws_cloudwatch_log_resource_policy" "policy" {
    policy_name = "cloudwatch_log_policy"
    policy_document = <<CONFIG
    {
        "Version": "2012-10-17",
        "Statement": [
            {
            "Effect": "Allow",
            "Principal": {
                "Service": "es.amazonaws.com"
            },
            "Action": [
                "logs:PutLogEvents",
                "logs:PutLogEventsBatch",
                "logs:CreateLogStream"
            ],
            "Resource": "arn:aws:logs:*"
            }
        ]
    }
    CONFIG
}