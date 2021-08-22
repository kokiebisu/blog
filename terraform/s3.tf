resource "aws_s3_bucket" "plain" {
    bucket = var.site_domain
    acl = "public-read"

    force_destroy = true

    website {
        index_document = "index.html"
        error_document = "index.html"
    }
}


resource "aws_s3_bucket_policy" "public_read" {
  bucket = aws_s3_bucket.plain.id
  policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Sid = "PublicReadGetObject"
        Effect = "Allow"
        Principal = "*"
        Action = "s3:GetObject"
        Resource = [
          aws_s3_bucket.plain.arn,
          "${aws_s3_bucket.plain.arn}/*"
        ]
      }
    ]
  })
}