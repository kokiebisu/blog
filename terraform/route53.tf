data "aws_route53_zone" "public" {
  name         = var.site_domain
  private_zone = false
}

resource "aws_route53_record" "validation" {
  depends_on = [aws_acm_certificate.certificate]
  for_each = {
    for option in aws_acm_certificate.certificate.domain_validation_options : option.domain_name => {
      name   = option.resource_record_name
      record = option.resource_record_value
      type   = option.resource_record_type
    }
  }

  allow_overwrite = true
  name            = each.value.name
  records         = [each.value.record]
  ttl             = 60
  type            = each.value.type
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

resource "aws_route53_record" "www" {
  zone_id = data.aws_route53_zone.public.zone_id
  name = "www.${var.site_domain}"
  type = "A"

  alias {
    name = aws_cloudfront_distribution.plain.domain_name
    zone_id = aws_cloudfront_distribution.plain.hosted_zone_id
    evaluate_target_health = true
  }
}

resource "aws_route53_record" "api" {
  zone_id = data.aws_route53_zone.public.id
  name    = "api.${var.site_domain}"
  type    = "A"

  alias {
    name                   = aws_apigatewayv2_domain_name.this.domain_name_configuration[0].target_domain_name
    zone_id                = aws_apigatewayv2_domain_name.this.domain_name_configuration[0].hosted_zone_id
    evaluate_target_health = false
  }
}

resource "aws_route53_record" "sendgrid_auth_1" {
  zone_id = data.aws_route53_zone.public.id
  name = element(var.sendgrid_authentications, 0).KEY
  type = "CNAME"
  ttl="5"

  records = [element(var.sendgrid_authentications, 0).VALUE]
}

resource "aws_route53_record" "sendgrid_auth_2" {
  zone_id = data.aws_route53_zone.public.id
  name = "s1._domainkey.kocoblo.com"
  type = "CNAME"
  ttl="5"

  records = ["s1.domainkey.u17513714.wl215.sendgrid.net"]
}

resource "aws_route53_record" "sendgrid_auth_3" {
  zone_id = data.aws_route53_zone.public.id
  name = "s2._domainkey.kocoblo.com"
  type = "CNAME"
  ttl="5"

  records = ["s2.domainkey.u17513714.wl215.sendgrid.net"]
}