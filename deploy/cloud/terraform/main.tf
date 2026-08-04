terraform {
  required_version = ">= 1.5.0"
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.0"
    }
  }
}

provider "aws" {
  region = var.aws_region
}

variable "aws_region" {
  default = "us-east-1"
}

# Amazon EKS Cluster for Fluently AI Microservices
resource "aws_eks_cluster" "fluently_cluster" {
  name     = "fluently-ai-cluster"
  role_arn = aws_iam_role.eks_role.arn

  vpc_config {
    subnet_ids = var.subnet_ids
  }
}

# AWS RDS PostgreSQL with pgvector extension
resource "aws_db_instance" "fluently_postgres" {
  allocated_storage    = 50
  max_allocated_storage = 500
  engine               = "postgres"
  engine_version       = "16.1"
  instance_class       = "db.r6g.xlarge"
  db_name              = "fluently_db"
  username             = "fluently_admin"
  password             = var.db_password
  skip_final_snapshot  = true
}

variable "db_password" {
  type      = string
  sensitive = true
}

variable "subnet_ids" {
  type    = list(string)
  default = []
}

resource "aws_iam_role" "eks_role" {
  name = "fluently-eks-cluster-role"
  assume_role_policy = jsonencode({
    Version = "2012-10-17"
    Statement = [{
      Action = "sts:AssumeRole"
      Effect = "Allow"
      Principal = {
        Service = "eks.amazonaws.com"
      }
    }]
  })
}
