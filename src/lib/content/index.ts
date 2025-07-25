// Export centrale per tutti i contenuti del sito
export { siteConfig } from '../site-config'
export { homepageContent } from './homepage'
export { servicesContent } from './services'
export { aboutContent } from './about'
export { contactContent } from './contact'
export { navigationContent } from './navigation'

// Utility per contenuti multilingua
export type Locale = 'it' | 'en'

export function getContent<T>(content: Record<Locale, T>, locale: Locale = 'it'): T {
  return content[locale] || content.it
}