data "aws_acm_certificate" "acm_cert" {
  domain = "*.zwellhome.com"
  statuses = [ "ISSUED" ]
  types = [ "IMPORTED" ]
}

# API_GATEWAY
resource "aws_apigatewayv2_api" "zwell-api-gateway" {
  name = "zwell-api-gateway"
  protocol_type = "HTTP"
}

resource "aws_apigatewayv2_stage" "zwell-api-stage" {
  api_id = aws_apigatewayv2_api.zwell-api-gateway.id
  name = "devtest-zwell-api"

  auto_deploy = true
}

resource "aws_apigatewayv2_integration" "zwell-api-integration" {
  api_id = aws_apigatewayv2_api.zwell-api-gateway.id

  integration_uri = aws_lambda_function.test_lambda.invoke_arn
  integration_type = "AWS_PROXY"
  integration_method = "POST"
}

resource "aws_apigatewayv2_route" "zwell-api-route-GET" {
  api_id = aws_apigatewayv2_api.zwell-api-gateway.id

  route_key = "GET /hello"
  target = "integrations/${aws_apigatewayv2_integration.zwell-api-integration.id}"
}

# API_GATEWAY_DOMAIN
resource "aws_apigatewayv2_domain_name" "zwell-api-domain" {
  domain_name = "api2.zwellhome.com"

  domain_name_configuration {
    certificate_arn = data.aws_acm_certificate.acm_cert.arn
    endpoint_type = "REGIONAL"
    security_policy = "TLS_1_2"
  }
}

resource "aws_apigatewayv2_api_mapping" "zwell-api-mapping" {
  api_id = aws_apigatewayv2_api.zwell-api-gateway.id
  domain_name =  aws_apigatewayv2_domain_name.zwell-api-domain.id
  stage = aws_apigatewayv2_stage.zwell-api-stage.id
}
