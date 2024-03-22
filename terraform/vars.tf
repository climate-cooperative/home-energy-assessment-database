variable "image_tag" {
  description = "Tag of the image built"
  type = string
  default = "null:latest"
}

variable "acm_domain_name" {
  description = "domain name of acm cert"
  type = string
}