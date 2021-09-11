resource "aws_elasticsearch_domain" "domain" {
  domain_name           = "blog"
  elasticsearch_version = "7.10"

  cluster_config {
    instance_type = "t3.small.search"
  }

  ebs_options {
    ebs_enabled = true
    volume_size = "10"
  }
}

