terraform {
  required_version = ">= 1.6"
  required_providers {
    cloudflare = {
      source  = "cloudflare/cloudflare"
      version = "~> 5.0"
    }
  }

  backend "s3" {
    region                      = "auto"
    skip_credentials_validation = true
    skip_metadata_api_check     = true
    skip_region_validation      = true
    skip_requesting_account_id  = true
    skip_s3_checksum            = true
    use_path_style              = true
  }
}

provider "cloudflare" {
  api_token = var.cloudflare_api_token
}

resource "cloudflare_pages_project" "webapp" {
  account_id        = var.cloudflare_account_id
  name              = var.pages_project_name
  production_branch = "main"
}

resource "cloudflare_pages_domain" "apex" {
  account_id   = var.cloudflare_account_id
  project_name = cloudflare_pages_project.webapp.name
  name         = var.apex_hostname
}

resource "cloudflare_pages_domain" "www" {
  account_id   = var.cloudflare_account_id
  project_name = cloudflare_pages_project.webapp.name
  name         = var.www_hostname
}

resource "cloudflare_dns_record" "apex" {
  zone_id = var.cloudflare_zone_id
  name    = "@"
  type    = "CNAME"
  content = "${var.pages_project_name}.pages.dev"
  proxied = true
  ttl     = 1
}

resource "cloudflare_dns_record" "www" {
  zone_id = var.cloudflare_zone_id
  name    = "www"
  type    = "CNAME"
  content = "${var.pages_project_name}.pages.dev"
  proxied = true
  ttl     = 1
}
