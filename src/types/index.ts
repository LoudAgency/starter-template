export interface BaseComponent {
  className?: string
  children?: React.ReactNode
}

export interface NavItem {
  title: string
  href: string
  external?: boolean
}

export interface SiteConfig {
  name: string
  description: string
  url: string
  ogImage: string
  links: {
    twitter?: string
    github?: string
    linkedin?: string
  }
}

export interface FeatureItem {
  title: string
  description: string
  icon?: React.ComponentType<{ className?: string }>
}

export interface TestimonialItem {
  quote: string
  author: string
  role: string
  company?: string
  avatar?: string
}