resource "aws_ecr_repository" "curriculum_react_banking_interface_ecr" {
  name = "curriculum-react-banking-interface"
}

resource "aws_cloudwatch_log_group" "curriculum_react_banking_cloudwatch" {
  name = "curriculum-react-banking-api"
}

resource "aws_ecs_cluster" "curriculum_react_banking_interface" {
  name = "curriculum-react-banking-interface-cluster"
  capacity_providers = [
  "FARGATE"]
  setting {
    name  = "containerInsights"
    value = "enabled"
  }
  configuration {
    execute_command_configuration {
      logging = "OVERRIDE"
      log_configuration {
        cloud_watch_log_group_name = aws_cloudwatch_log_group.curriculum_react_banking_cloudwatch.name
        s3_bucket_name             = "curriclum-react-banking-interface-terrafrom-backend"
        s3_key_prefix              = "ecs-logs"
      }
    }
  }

  tags = {
    Name    = "curriculum-react-banking-interface-cluster"
    Project = "curriculum-react-banking-interface"
    Billing = "curriculum-react-banking-interface"
  }
}

resource "aws_ecs_task_definition" "curriculum_react_banking_interface_task" {
  family                = "curriculum-react-banking-interface"
  container_definitions = <<TASK_DEFINITION
  [
  {
    "portMappings": [
      {
        "hostPort": 3000,
        "protocol": "tcp",
        "containerPort": 3000
      }
    ],
    "cpu": 512,
    "environment": [
      {
        "name": "AUTHOR",
        "value": "jlucas"
      }
    ],
    "memory": 1024,
    "image": "${aws_ecr_repository.curriculum_react_banking_interface_ecr.repository_url}",
    "essential": true,
    "name": "curriculum-react-banking-interface-api"
  }
]
TASK_DEFINITION

  network_mode = "awsvpc"
  requires_compatibilities = [
  "FARGATE"]
  memory             = "1024"
  cpu                = "512"
  execution_role_arn = var.ecs_role.arn
  task_role_arn      = var.ecs_role.arn

  tags = {
    Name    = "curriculum-react-banking-interface-task"
    Project = "curriculum-react-banking-interface"
    Billing = "curriculum-react-banking-interface"
  }
}

resource "aws_ecs_service" "curriculum_react_banking_interface_service" {
  name             = "curriculum-react-banking-interface-runner"
  cluster          = aws_ecs_cluster.curriculum_react_banking_interface.id
  task_definition  = aws_ecs_task_definition.curriculum_react_banking_interface_task.arn
  desired_count    = 1
  launch_type      = "FARGATE"
  platform_version = "1.4.0"

  lifecycle {
    ignore_changes = [
    desired_count]
  }

  network_configuration {
    subnets = [
      var.ecs_subnet_a.id,
      var.ecs_subnet_b.id,
    var.ecs_subnet_c.id]
    security_groups = [
    var.ecs_sg.id]
    assign_public_ip = true
  }

  load_balancer {
    target_group_arn = var.ecs_target_group.arn
    container_name   = "curriculum-react-banking-interface-api"
    container_port   = 3000
  }
}
