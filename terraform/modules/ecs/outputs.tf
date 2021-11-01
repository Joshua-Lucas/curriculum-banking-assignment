output "ecs_cluster" {
  value = aws_ecs_cluster.curriculum_react_banking_interface
}

output "ecs_service" {
  value = aws_ecs_service.curriculum_react_banking_interface_service
}
