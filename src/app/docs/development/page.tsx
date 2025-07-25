export default function DevelopmentPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="mb-8 pb-8 border-b border-border">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
              <span className="text-xl">🛠️</span>
            </div>
            <div>
              <h1 className="text-3xl font-bold text-foreground">Development Guide</h1>
              <p className="text-muted-foreground">Guida completa per sviluppare con il template</p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="space-y-8">
          
          {/* Setup Iniziale */}
          <section className="bg-card rounded-lg p-6 border">
            <h2 className="text-2xl font-bold text-card-foreground mb-4">🚀 Setup Iniziale</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-card-foreground mb-2">1. Configurazione del Sito</h3>
                <p className="text-muted-foreground mb-4">Personalizza la configurazione generale in <code className="bg-muted px-2 py-1 rounded">src/lib/site-config.ts</code>:</p>
                
                <div className="bg-muted rounded-lg p-4 border">
                  <pre className="bg-slate-900 text-emerald-400 p-4 rounded text-sm overflow-x-auto">
                    <code>{`export const siteConfig = {
  name: "Il Tuo Progetto",
  description: "Descrizione del tuo progetto", 
  url: "https://tuodominio.com",
  
  meta: {
    keywords: ["Next.js", "React", "Tailwind CSS"],
    author: "Il Tuo Nome",
    language: "it-IT",
  },
  
  social: {
    github: "https://github.com/tuoaccount",
    twitter: "https://twitter.com/tuoaccount",
    email: "hello@tuodominio.com",
  }
}`}</code>
                  </pre>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-card-foreground mb-2">2. Gestione Contenuti</h3>
                <p className="text-muted-foreground mb-4">I contenuti sono centralizzati nella cartella <code className="bg-muted px-2 py-1 rounded">src/lib/content/</code>:</p>
                
                <div className="bg-muted rounded-lg p-4 border">
                  <pre className="bg-slate-900 text-sky-400 p-4 rounded text-sm overflow-x-auto">
                    <code>{`src/lib/content/
├── index.ts        # Export centrale
├── homepage.ts     # Contenuti homepage
├── navigation.ts   # Menu e navigazione
├── services.ts     # Pagina servizi
├── about.ts        # Chi siamo
├── contact.ts      # Contatti
└── locales.ts      # Supporto multilingua`}</code>
                  </pre>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-card-foreground mb-2">3. Struttura Componenti</h3>
                <p className="text-muted-foreground mb-4">Il template segue una struttura modulare:</p>
                
                <div className="bg-muted rounded-lg p-4 border">
                  <pre className="bg-slate-900 text-violet-400 p-4 rounded text-sm overflow-x-auto">
                    <code>{`src/components/
├── ui/           # Componenti shadcn/ui base
├── custom/       # Wrapper personalizzati  
├── layout/       # Header, Footer, Navigation
└── sections/     # Sezioni della homepage`}</code>
                  </pre>
                </div>
              </div>
            </div>
          </section>

          {/* Comandi */}
          <section className="bg-card rounded-lg p-6 border">
            <h2 className="text-2xl font-bold text-card-foreground mb-4">⚡ Comandi Utili</h2>
            
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-card-foreground mb-2">Aggiungere Componenti shadcn/ui</h3>
                <div className="bg-muted rounded-lg p-4 border">
                  <pre className="bg-slate-900 text-amber-400 p-4 rounded text-sm overflow-x-auto">
                    <code>{`# Aggiungi nuovi componenti
npx shadcn@latest add tooltip
npx shadcn@latest add dropdown-menu  
npx shadcn@latest add form`}</code>
                  </pre>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-card-foreground mb-2">Testing del Progetto</h3>
                <div className="bg-muted rounded-lg p-4 border">
                  <pre className="bg-slate-900 text-emerald-400 p-4 rounded text-sm overflow-x-auto">
                    <code>{`# Verifica build
npm run build

# Controlla linting
npm run lint

# Test locale produzione
npm run start`}</code>
                  </pre>
                </div>
              </div>
            </div>
          </section>

          {/* Gestione Contenuti */}
          <section className="bg-card rounded-lg p-6 border">
            <h2 className="text-2xl font-bold text-card-foreground mb-4">📝 Gestione Contenuti</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-card-foreground mb-2">Modifica Contenuti Homepage</h3>
                <p className="text-muted-foreground mb-4">Edita <code className="bg-muted px-2 py-1 rounded">src/lib/content/homepage.ts</code>:</p>
                
                <div className="bg-muted rounded-lg p-4 border">
                  <pre className="bg-slate-900 text-amber-400 p-4 rounded text-sm overflow-x-auto">
                    <code>{`export const homepageContent = {
  hero: {
    title: "Il Tuo Titolo",
    subtitle: "La tua descrizione",
    primaryCta: {
      text: "Bottone Principale",
      href: "/link-principale"
    }
  },
  features: [
    {
      icon: "🚀",
      title: "Feature 1",
      description: "Descrizione feature"
    }
  ]
}`}</code>
                  </pre>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-card-foreground mb-2">Utilizzo nei Componenti</h3>
                <p className="text-muted-foreground mb-4">Importa e usa i contenuti nei tuoi componenti:</p>
                
                <div className="bg-muted rounded-lg p-4 border">
                  <pre className="bg-slate-900 text-emerald-400 p-4 rounded text-sm overflow-x-auto">
                    <code>{`import { homepageContent } from '@/lib/content/homepage'

export default function Hero() {
  const { hero } = homepageContent
  
  return (
    <section>
      <h1>{hero.title}</h1>
      <p>{hero.subtitle}</p>
    </section>
  )
}`}</code>
                  </pre>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-card-foreground mb-2">File Markdown</h3>
                <p className="text-muted-foreground mb-4">Per contenuti lunghi usa file markdown in <code className="bg-muted px-2 py-1 rounded">content/pages/</code>:</p>
                
                <div className="bg-muted rounded-lg p-4 border">
                  <pre className="bg-slate-900 text-sky-400 p-4 rounded text-sm overflow-x-auto">
                    <code>{`import { getMarkdownContent } from '@/lib/markdown'

// In una Server Component
export default async function PrivacyPage() {
  const content = getMarkdownContent('privacy')
  
  return (
    <div dangerouslySetInnerHTML={{ __html: content.content }} />
  )
}`}</code>
                  </pre>
                </div>
              </div>
            </div>
          </section>

          {/* Best Practices */}
          <section className="bg-card rounded-lg p-6 border">
            <h2 className="text-2xl font-bold text-card-foreground mb-4">✅ Best Practices</h2>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-primary/10 p-4 rounded-lg border border-primary/20">
                <h3 className="font-semibold text-primary mb-2">🔷 TypeScript</h3>
                <p className="text-sm text-muted-foreground">Usa sempre i tipi definiti in types/index.ts</p>
              </div>
              
              <div className="bg-emerald-100 dark:bg-emerald-900/20 p-4 rounded-lg border border-emerald-200 dark:border-emerald-800">
                <h3 className="font-semibold text-emerald-700 dark:text-emerald-300 mb-2">📝 Contenuti</h3>
                <p className="text-sm text-emerald-600 dark:text-emerald-200">Centralizza tutti i testi nei file content/</p>
              </div>
              
              <div className="bg-violet-100 dark:bg-violet-900/20 p-4 rounded-lg border border-violet-200 dark:border-violet-800">
                <h3 className="font-semibold text-violet-700 dark:text-violet-300 mb-2">⚡ Performance</h3>
                <p className="text-sm text-violet-600 dark:text-violet-200">Usa &quot;use client&quot; solo quando necessario</p>
              </div>
              
              <div className="bg-amber-100 dark:bg-amber-900/20 p-4 rounded-lg border border-amber-200 dark:border-amber-800">
                <h3 className="font-semibold text-amber-700 dark:text-amber-300 mb-2">♿ Accessibilità</h3>
                <p className="text-sm text-amber-600 dark:text-amber-200">I componenti shadcn/ui sono già accessibili</p>
              </div>
            </div>
          </section>

          {/* Info Box */}
          <div className="bg-primary/5 rounded-lg p-6 border border-primary/20">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-primary-foreground text-sm">💡</span>
              </div>
              <div>
                <h3 className="font-semibold text-primary mb-2">Suggerimento</h3>
                <p className="text-muted-foreground text-sm">
                  Per una guida completa, consulta i file di documentazione nella cartella 
                  <code className="bg-muted px-1 py-0.5 rounded text-xs mx-1">/docs</code> 
                  del progetto.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}