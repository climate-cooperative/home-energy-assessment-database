data "aws_route53_zone" "zwell_io_hosted_zone" {
  name = "zwell.io"
}

resource "aws_route53_record" "zwell_calculator_app_record" {
  zone_id = data.aws_route53_zone.zwell_io_hosted_zone.id
  name = "api.zwell.io"
  type = "A"
  alias {
    name = aws_apigatewayv2_domain_name.zwell-api-domain.domain_name_configuration[0].target_domain_name
    zone_id = aws_apigatewayv2_domain_name.zwell-api-domain.domain_name_configuration[0].hosted_zone_id
    evaluate_target_health = false
  }
}