data "aws_route53_zone" "public" {
  name         = var.site_domain
  private_zone = false
}

resource "aws_route53_record" "default" {
  allow_overwrite = true
  name            = tolist(aws_acm_certificate.myapp.domain_validation_options)[0].resource_record_name
  records         = [ tolist(aws_acm_certificate.myapp.domain_validation_options)[0].resource_record_value ]
  ttl             = 60
  type            = tolist(aws_acm_certificate.myapp.domain_validation_options)[0].resource_record_type
  zone_id         = data.aws_route53_zone.public.zone_id
}

resource "aws_route53_record" "plain" {
  zone_id = data.aws_route53_zone.public.zone_id
  name = "${var.site_domain}"
  type = "A"

  alias {
    name = aws_cloudfront_distribution.plain.domain_name
    zone_id = aws_cloudfront_distribution.plain.hosted_zone_id
    evaluate_target_health = true
  }
}

# resource "aws_route53_record" "api" {
#   zone_id = data.aws_route53_zone.this.id
#   name    = "api.${var.site_domain}"
#   type    = "A"

#   alias {
#     name                   = aws_apigatewayv2_domain_name.this.domain_name_configuration[0].target_domain_name
#     zone_id                = aws_apigatewayv2_domain_name.this.domain_name_configuration[0].hosted_zone_id
#     evaluate_target_health = false
#   }
# }