variable "cloudflare_api_token" {
  description = "Cloudflare API token (needs Account:Cloudflare Pages:Edit and Zone:DNS:Edit)"
  type        = string
  sensitive   = true
}

variable "cloudflare_account_id" {
  description = "Cloudflare account ID"
  type        = string
}

variable "cloudflare_zone_id" {
  description = "Zone ID for capoeira.md"
  type        = string
}

variable "pages_project_name" {
  description = "Cloudflare Pages project name"
  type        = string
  default     = "alemar-capoeira-chisinau"
}

variable "apex_hostname" {
  description = "Apex custom domain bound to the Pages project"
  type        = string
  default     = "capoeira.md"
}

variable "www_hostname" {
  description = "www custom domain bound to the Pages project"
  type        = string
  default     = "www.capoeira.md"
}
