resource "aws_ecr_repository" "repository" {
  name                 = "form"
  image_tag_mutability = "MUTABLE"

  image_scanning_configuration {
    scan_on_push = true
  }
}

data "aws_ecr_image" "form_image" {
    repository_name = aws_ecr_repository.repository.name
    tag = "latest"
}