// Server-side utilities per la gestione dei contenuti markdown
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

// Legge un file markdown dalla cartella content
export function getMarkdownContent(slug: string, folder: string = 'pages') {
  try {
    const filePath = path.join(process.cwd(), 'content', folder, `${slug}.md`)
    const fileContent = fs.readFileSync(filePath, 'utf8')
    const { data, content } = matter(fileContent)
    
    return {
      frontmatter: data,
      content,
      slug
    }
  } catch (error) {
    console.error(`Error reading markdown file: ${slug}`, error)
    return null
  }
}

// Ottiene tutti i file markdown da una cartella
export function getAllMarkdownFiles(folder: string = 'pages') {
  try {
    const contentDir = path.join(process.cwd(), 'content', folder)
    const files = fs.readdirSync(contentDir)
    
    return files
      .filter(file => file.endsWith('.md'))
      .map(file => {
        const slug = file.replace(/\.md$/, '')
        return getMarkdownContent(slug, folder)
      })
      .filter(Boolean)
  } catch (error) {
    console.error(`Error reading markdown files from ${folder}:`, error)
    return []
  }
}

// Converte markdown in HTML (richiede una libreria come remark)
export function markdownToHtml(markdown: string): string {
  // Semplice conversione per esempi basic
  // In produzione usare librerie como remark, rehype, etc.
  return markdown
    .replace(/^# (.*$)/gim, '<h1>$1</h1>')
    .replace(/^## (.*$)/gim, '<h2>$1</h2>')
    .replace(/^### (.*$)/gim, '<h3>$1</h3>')
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.*?)\*/g, '<em>$1</em>')
    .replace(/\n/g, '<br>')
}

// Genera meta tags per SEO
export function generateMetaTags(content: any, defaultMeta: any = {}) {
  return {
    title: content.title || defaultMeta.title || 'Starter Template',
    description: content.description || defaultMeta.description || 'A modern Next.js starter template',
    keywords: content.keywords || defaultMeta.keywords || [],
    author: content.author || defaultMeta.author || 'Your Name',
    openGraph: {
      title: content.title || defaultMeta.title,
      description: content.description || defaultMeta.description,
      image: content.image || defaultMeta.image || '/images/og-image.jpg',
      url: content.url || defaultMeta.url
    }
  }
}

// Estrae il primo paragrafo come excerpt
export function extractExcerpt(content: string, maxLength: number = 160): string {
  const plainText = content
    .replace(/<[^>]*>/g, '') // Rimuove HTML tags
    .replace(/\n/g, ' ')     // Sostituisce newlines con spazi
    .trim()
  
  if (plainText.length <= maxLength) {
    return plainText
  }
  
  return plainText.substring(0, maxLength).replace(/\s+\S*$/, '') + '...'
}

// Valida la struttura del contenuto
export function validateContent(content: any, requiredFields: string[] = []): boolean {
  if (!content || typeof content !== 'object') {
    return false
  }
  
  return requiredFields.every(field => {
    const value = content[field]
    return value !== undefined && value !== null && value !== ''
  })
}

// Filtra contenuti per categoria/tag
export function filterContentByCategory(contents: any[], category: string): any[] {
  return contents.filter(content => 
    content.frontmatter?.categories?.includes(category) ||
    content.frontmatter?.category === category
  )
}

// Ordina contenuti per data
export function sortContentByDate(contents: any[], order: 'asc' | 'desc' = 'desc'): any[] {
  return [...contents].sort((a, b) => {
    const dateA = new Date(a.frontmatter?.date || 0)
    const dateB = new Date(b.frontmatter?.date || 0)
    
    return order === 'desc' 
      ? dateB.getTime() - dateA.getTime()
      : dateA.getTime() - dateB.getTime()
  })
}