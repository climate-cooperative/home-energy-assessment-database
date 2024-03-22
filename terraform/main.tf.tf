resource "aws_lambda_function" "test_lambda" {
  function_name = "zwell-test-lambda"
  role = aws_iam_role.iam_for_lambda.arn
  image_uri = "${aws_ecr_repository.lambda_image_repo.repository_url}:${var.image_tag}"
  package_type = "Image"
  architectures = ["arm64"]

  image_config {
    command = [ "test.handler" ]
  }
}

data "aws_iam_policy_document" "assume_role" {
  statement {
    effect = "Allow"

    principals {
      type        = "Service"
      identifiers = ["lambda.amazonaws.com"]
    }

    actions = ["sts:AssumeRole"]
  }
}

resource "aws_iam_role" "iam_for_lambda" {
  name               = "iam_for_lambda"
  assume_role_policy = data.aws_iam_policy_document.assume_role.json
}

resource "aws_lambda_permission" "zwell-api-gw-permission" {
  statement_id  = "AllowExecutionFromAPIGateway"
  action        = "lambda:InvokeFunction"
  function_name = aws_lambda_function.test_lambda.function_name

  principal     = "apigateway.amazonaws.com"

  source_arn = "${aws_apigatewayv2_api.zwell-api-gateway.execution_arn}/*/*"
}