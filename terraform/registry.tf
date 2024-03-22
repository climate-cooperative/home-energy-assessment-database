resource "aws_ecr_repository" "lambda_image_repo" {
  name = "zwell-lambda-image-registry"
}