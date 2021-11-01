data "aws_route53_zone" "selected" {
  name = var.hosted_zone_name
}

resource "aws_route53_record" "curriculum_react_banking_interface" {
  zone_id = data.aws_route53_zone.selected.zone_id
  name    = var.record_name
  type    = "A"

  alias {
    name                   = var.elb.dns_name
    zone_id                = var.elb.zone_id
    evaluate_target_health = true
  }
}
