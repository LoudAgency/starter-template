export default function ComponentsDocsPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="mb-8 pb-8 border-b border-border">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
              <span className="text-xl">🧩</span>
            </div>
            <div>
              <h1 className="text-3xl font-bold text-foreground">Components Documentation</h1>
              <p className="text-muted-foreground">Guida completa ai componenti disponibili nel template</p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="space-y-8">
          
          {/* Componenti Custom */}
          <section className="bg-card rounded-lg p-6 border">
            <h2 className="text-2xl font-bold text-card-foreground mb-6">🎯 Componenti Custom</h2>
            
            <div className="space-y-8">
              {/* CustomButton */}
              <div className="border-l-4 border-primary pl-6">
                <h3 className="text-xl font-semibold text-card-foreground mb-3">CustomButton</h3>
                <p className="text-muted-foreground mb-4">Un wrapper del componente Button di shadcn/ui con funzionalità aggiuntive.</p>
                
                <div className="bg-muted rounded-lg p-4 border mb-4">
                  <h4 className="text-sm font-medium text-muted-foreground mb-2">📝 Esempio di utilizzo</h4>
                  <pre className="bg-slate-900 text-emerald-400 p-4 rounded text-sm overflow-x-auto">
                    <code>{`import { CustomButton } from "@/components/custom"

// Uso base
<CustomButton>Click me</CustomButton>

// Con loading state  
<CustomButton loading>Loading...</CustomButton>

// Con icone
<CustomButton leftIcon={<Icon />}>Salva</CustomButton>
<CustomButton rightIcon={<ArrowRight />}>Continua</CustomButton>

// Varianti
<CustomButton variant="outline">Outline</CustomButton>
<CustomButton variant="ghost">Ghost</CustomButton>`}</code>
                  </pre>
                </div>

                <div className="bg-primary/5 rounded-lg p-4 border border-primary/20">
                  <h4 className="font-semibold text-primary mb-2">⚙️ Props</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li><code className="bg-muted px-1 rounded">loading?: boolean</code> - Mostra spinner di caricamento</li>
                    <li><code className="bg-muted px-1 rounded">leftIcon?: React.ReactNode</code> - Icona a sinistra</li>
                    <li><code className="bg-muted px-1 rounded">rightIcon?: React.ReactNode</code> - Icona a destra</li>
                  </ul>
                </div>
              </div>

              {/* CustomCard */}
              <div className="border-l-4 border-emerald-500 pl-6">
                <h3 className="text-xl font-semibold text-card-foreground mb-3">CustomCard</h3>
                <p className="text-muted-foreground mb-4">Un wrapper del componente Card con layout predefinito.</p>
                
                <div className="bg-muted rounded-lg p-4 border mb-4">
                  <pre className="bg-slate-900 text-emerald-400 p-4 rounded text-sm overflow-x-auto">
                    <code>{`import { CustomCard } from "@/components/custom"

// Uso base
<CustomCard 
  title="Titolo Card"
  description="Descrizione della card"
>
  Contenuto della card
</CustomCard>

// Con footer
<CustomCard 
  title="Titolo"
  footer={<CustomButton>Azione</CustomButton>}
>
  Contenuto
</CustomCard>`}</code>
                  </pre>
                </div>

                <div className="bg-emerald-100 dark:bg-emerald-900/20 rounded-lg p-4 border border-emerald-200 dark:border-emerald-800">
                  <h4 className="font-semibold text-emerald-700 dark:text-emerald-300 mb-2">⚙️ Props</h4>
                  <ul className="text-sm text-emerald-600 dark:text-emerald-200 space-y-1">
                    <li><code className="bg-emerald-50 dark:bg-emerald-800 px-1 rounded">title?: string</code> - Titolo della card</li>
                    <li><code className="bg-emerald-50 dark:bg-emerald-800 px-1 rounded">description?: string</code> - Descrizione</li>
                    <li><code className="bg-emerald-50 dark:bg-emerald-800 px-1 rounded">footer?: React.ReactNode</code> - Contenuto footer</li>
                    <li><code className="bg-emerald-50 dark:bg-emerald-800 px-1 rounded">hover?: boolean</code> - Effetto hover (default: true)</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* TypeScript Types */}
          <section className="bg-card rounded-lg p-6 border">
            <h2 className="text-2xl font-bold text-card-foreground mb-6">📋 Tipi TypeScript</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-amber-100 dark:bg-amber-900/20 rounded-lg p-4 border border-amber-200 dark:border-amber-800">
                <h3 className="font-semibold text-amber-700 dark:text-amber-300 mb-2">NavItem</h3>
                <pre className="bg-slate-900 text-amber-400 p-3 rounded text-sm">
                  <code>{`interface NavItem {
  title: string
  href: string  
  external?: boolean
}`}</code>
                </pre>
              </div>

              <div className="bg-violet-100 dark:bg-violet-900/20 rounded-lg p-4 border border-violet-200 dark:border-violet-800">
                <h3 className="font-semibold text-violet-700 dark:text-violet-300 mb-2">FeatureItem</h3>
                <pre className="bg-slate-900 text-violet-400 p-3 rounded text-sm">
                  <code>{`interface FeatureItem {
  title: string
  description: string
  icon?: React.ComponentType
}`}</code>
                </pre>
              </div>
            </div>
          </section>

          {/* Gestione Contenuti */}
          <section className="bg-card rounded-lg p-6 border">
            <h2 className="text-2xl font-bold text-card-foreground mb-6">📄 Gestione Contenuti Componenti</h2>
            
            <div className="space-y-6">
              <div className="border-l-4 border-primary pl-6">
                <h3 className="text-xl font-semibold text-card-foreground mb-3">Contenuti Centralizzati</h3>
                <p className="text-muted-foreground mb-4">I componenti utilizzano contenuti centralizzati da <code className="bg-muted px-2 py-1 rounded">src/lib/content/</code>:</p>
                
                <div className="bg-muted rounded-lg p-4 border">
                  <pre className="bg-slate-900 text-sky-400 p-4 rounded text-sm overflow-x-auto">
                    <code>{`// Homepage usa homepageContent
import { homepageContent } from '@/lib/content/homepage'

export default function FeatureGrid() {
  const { features } = homepageContent
  
  return (
    <div className="grid gap-6">
      {features.map((feature, index) => (
        <div key={index}>
          <div className="text-2xl">{feature.icon}</div>
          <h3>{feature.title}</h3>
          <p>{feature.description}</p>
        </div>
      ))}
    </div>
  )
}`}</code>
                  </pre>
                </div>
              </div>

              <div className="border-l-4 border-emerald-500 pl-6">
                <h3 className="text-xl font-semibold text-card-foreground mb-3">Creazione Nuove Pagine</h3>
                <p className="text-muted-foreground mb-4">Per creare una nuova pagina con contenuti:</p>
                
                <div className="bg-muted rounded-lg p-4 border">
                  <pre className="bg-slate-900 text-emerald-400 p-4 rounded text-sm overflow-x-auto">
                    <code>{`// 1. Crea src/lib/content/nuova-pagina.ts
export const nuovaPaginaContent = {
  title: "Titolo Pagina",
  sections: [
    {
      title: "Sezione 1",
      content: "Contenuto sezione"
    }
  ]
}

// 2. Esporta in src/lib/content/index.ts
export { nuovaPaginaContent } from './nuova-pagina'

// 3. Usa nel componente
import { nuovaPaginaContent } from '@/lib/content/nuova-pagina'`}</code>
                  </pre>
                </div>
              </div>

              <div className="border-l-4 border-amber-500 pl-6">
                <h3 className="text-xl font-semibold text-card-foreground mb-3">Supporto Multilingua</h3>
                <p className="text-muted-foreground mb-4">Utilizza i contenuti tradotti:</p>
                
                <div className="bg-muted rounded-lg p-4 border">
                  <pre className="bg-slate-900 text-amber-400 p-4 rounded text-sm overflow-x-auto">
                    <code>{`import { useLocalizedContent } from '@/lib/content/locales'

export default function Button({ locale = 'it' }) {
  const content = useLocalizedContent(locale)
  
  return (
    <button>
      {content.common.getStarted}
    </button>
  )
}`}</code>
                  </pre>
                </div>
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
                <h3 className="font-semibold text-primary mb-2">Gestione Contenuti</h3>
                <p className="text-muted-foreground text-sm">
                  Tutti i contenuti sono centralizzati nella cartella 
                  <code className="bg-muted px-1 py-0.5 rounded text-xs mx-1">src/lib/content/</code>. 
                  Modifica questi file per aggiornare i testi senza toccare i componenti.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}