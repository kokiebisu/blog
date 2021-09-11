resource "aws_elasticsearch_domain" "domain" {
  domain_name           = "blog"
  elasticsearch_version = "7.10"

  cluster_config {
    instance_type = "r4.large.elasticsearch"
  }
}

