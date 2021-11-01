terraform {
  backend "s3" {
    bucket = "curriclum-react-banking-interface-terrafrom-backend"
    region = "us-east-2"
    key    = "terraform.tfstate"
  }
}
