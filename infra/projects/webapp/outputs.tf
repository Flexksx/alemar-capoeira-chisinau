output "pages_project_name" {
  value = cloudflare_pages_project.webapp.name
}

output "pages_dev_subdomain" {
  value = cloudflare_pages_project.webapp.subdomain
}
