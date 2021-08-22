variable "SENDGRID_API_KEY" {
    type = string
    sensitive = true
}

variable "SENDGRID_AUTHORIZED_EMAIL" {
    type = string
    description = "Email address the form should send to"
    sensitive = true
}

variable "site_domain" {
    type = string
    default = "kocoblo.com"
}