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

variable "AWS_ACCESS_KEY" {
    type = string
    sensitive = true
}

variable "AWS_SECRET_KEY" {
    type = string
    sensitive = true
}

variable "AWS_REGION" {
    type = string
    default = "us-east-1"
}

variable "sendgrid_authentications" {
    type = list(object({host=string, value=string}))
    default = [
        {
            host = "em8401.kocoblo.com",
            value = "u17513714.wl215.sendgrid.net"
        },
        {
            host = "s1._domainkey.kocoblo.com",
            value = "s1.domainkey.u17513714.wl215.sendgrid.net"
        },
        {
            host = "s2._domainkey.kocoblo.com",
            value = "s2.domainkey.u17513714.wl215.sendgrid.net"
        }
    ]
}