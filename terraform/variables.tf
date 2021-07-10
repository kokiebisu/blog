variable "SENDGRID_API_KEY" {
    type = string
    default = "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"
    sensitive = true
}

variable "SENDGRID_AUTHORIZED_EMAIL" {
    type = string
    description = "Email address the form should send to"
    sensitive = true
}