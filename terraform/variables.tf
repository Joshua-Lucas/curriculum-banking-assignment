variable "region" {
  default     = "us-east-2"
  type        = string
  description = "The region you want to deploy the infrastructure in"
}

variable "hosted_zone_name" {
  type        = string
  description = "The id of the hosted zone of the Route 53 domain you want to use"
}

variable "record_name" {
  type = string
}