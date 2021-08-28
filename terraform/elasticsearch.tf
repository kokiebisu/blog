resource "aws_elasticsearch_domain" "domain" {
  domain_name           = "airbnb"
  elasticsearch_version = "7.10"

  cluster_config {
    instance_type = "t3.small.elasticsearch"
  }
}

