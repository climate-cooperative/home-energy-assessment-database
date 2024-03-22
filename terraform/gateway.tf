data "aws_acm_certificate" "acm_cert" {
  domain = var.acm_domain_name
  statuses = [ "ISSUED" ]
  types = [ "IMPORTED" ]
}

resource "aws_apigatewayv2_domain_name" "zwell-api-domain" {
  domain_name = "api2.zwellhome.com"

  domain_name_configuration {
    certificate_arn = data.aws_acm_certificate.acm_cert.arn
    endpoint_type = "REGIONAL"
    security_policy = "TLS_1_2"
  }
}

resource "aws_apigatewayv2_api" "zwell-api-gateway" {
  name = "zwell-api-gateway"
  protocol_type = "HTTP"
  target = aws_lambda_function.test_lambda.arn
}

resource "aws_apigatewayv2_stage" "zwell-api-stage" {
  api_id = aws_apigatewayv2_api.zwell-api-gateway.id
  name = "devtest-zwell-api"
}

resource "aws_apigatewayv2_api_mapping" "zwell-api-mapping" {
  api_id = aws_apigatewayv2_api.zwell-api-gateway.id
  domain_name =  aws_apigatewayv2_domain_name.zwell-api-domain.id
  stage = aws_apigatewayv2_stage.zwell-api-stage.id
}
