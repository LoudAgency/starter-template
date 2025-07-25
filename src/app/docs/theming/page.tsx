export default function ThemingPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="mb-8 pb-8 border-b border-border">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
              <span className="text-xl">🎭</span>
            </div>
            <div>
              <h1 className="text-3xl font-bold text-foreground">Sistema di Theming</h1>
              <p className="text-muted-foreground">Guida completa per personalizzare l&apos;aspetto del progetto</p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="space-y-8">
          
          {/* Panoramica */}
          <section className="bg-card rounded-lg p-6 border">
            <h2 className="text-2xl font-bold text-card-foreground mb-4">🔍 Panoramica</h2>
            <p className="text-muted-foreground mb-4">Il template utilizza un sistema di theming moderno basato su:</p>
            
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-primary/10 p-4 rounded-lg border border-primary/20">
                <h3 className="font-semibold text-primary mb-2">Radix Colors</h3>
                <p className="text-sm text-muted-foreground">Palette colori professionale e accessibile</p>
              </div>
              
              <div className="bg-emerald-100 dark:bg-emerald-900/20 p-4 rounded-lg border border-emerald-200 dark:border-emerald-800">
                <h3 className="font-semibold text-emerald-700 dark:text-emerald-300 mb-2">Tailwind CSS 4</h3>
                <p className="text-sm text-emerald-600 dark:text-emerald-200">Per le utility classes</p>
              </div>
              
              <div className="bg-violet-100 dark:bg-violet-900/20 p-4 rounded-lg border border-violet-200 dark:border-violet-800">
                <h3 className="font-semibold text-violet-700 dark:text-violet-300 mb-2">shadcn/ui</h3>
                <p className="text-sm text-violet-600 dark:text-violet-200">Per i componenti base</p>
              </div>
            </div>
          </section>

          {/* CSS Variables */}
          <section className="bg-card rounded-lg p-6 border">
            <h2 className="text-2xl font-bold text-card-foreground mb-6">⚙️ CSS Variables (Radix UI)</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-card-foreground mb-3">Variabili Light Mode</h3>
                <p className="text-muted-foreground mb-4">Basate su Radix Slate e Violet in <code className="bg-muted px-2 py-1 rounded text-sm">src/app/globals.css</code>:</p>
                
                <div className="bg-muted rounded-lg p-4 border">
                  <pre className="bg-slate-900 text-emerald-400 p-4 rounded text-sm overflow-x-auto">
                    <code>{`:root {
  /* Radix Slate scale per neutrali */
  --background: 0 0% 100%;        /* slate-1 */
  --foreground: 212 13% 18%;      /* slate-12 */
  --card: 0 0% 100%;              /* slate-1 */
  --border: 214 13% 91%;          /* slate-6 */
  
  /* Radix Violet scale per primary */
  --primary: 262 83% 58%;         /* violet-9 */
  --primary-foreground: 0 0% 100%;
  
  /* Muted colors */
  --muted: 210 6% 93%;            /* slate-3 */
  --muted-foreground: 215 14% 34%; /* slate-11 */
}`}</code>
                  </pre>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-card-foreground mb-3">Dark Mode (Radix Dark Scale)</h3>
                <div className="bg-muted rounded-lg p-4 border">
                  <pre className="bg-slate-900 text-violet-400 p-4 rounded text-sm overflow-x-auto">
                    <code>{`html.dark {
  /* Radix Slate dark scale */
  --background: 200 7% 8%;        /* slate-dark-1 */
  --foreground: 210 6% 93%;       /* slate-dark-12 */
  --card: 200 7% 8%;              /* slate-dark-1 */
  --border: 200 6% 20%;           /* slate-dark-6 */
  
  /* Radix Violet dark per primary */
  --primary: 258 90% 66%;         /* violet-dark-9 */
  --primary-foreground: 200 7% 8%;
  
  /* Muted dark */
  --muted: 200 6% 10%;            /* slate-dark-3 */
  --muted-foreground: 215 16% 47%; /* slate-dark-11 */
}`}</code>
                  </pre>
                </div>
              </div>
            </div>
          </section>

          {/* Personalizzazione */}
          <section className="bg-card rounded-lg p-6 border">
            <h2 className="text-2xl font-bold text-card-foreground mb-6">🎨 Personalizzazione</h2>
            
            <div className="space-y-8">
              {/* Colori Base */}
              <div className="border-l-4 border-primary pl-6">
                <h3 className="text-xl font-semibold text-card-foreground mb-3">1. Cambiare i Colori Primari</h3>
                <p className="text-muted-foreground mb-4">Modifica le variabili CSS per personalizzare la palette Radix:</p>
                
                <div className="bg-muted rounded-lg p-4 border">
                  <pre className="bg-slate-900 text-sky-400 p-4 rounded text-sm overflow-x-auto">
                    <code>{`:root {
  /* Esempio: Tema Blu (Radix Blue) */
  --primary: 206 100% 50%;         /* blue-9 */
  --primary-foreground: 0 0% 100%;
  
  /* Esempio: Tema Verde (Radix Green) */
  --primary: 151 55% 41%;          /* green-9 */
  --primary-foreground: 0 0% 100%;
  
  /* Esempio: Tema Rosso (Radix Red) */
  --primary: 358 75% 59%;          /* red-9 */
  --primary-foreground: 0 0% 100%;
}`}</code>
                  </pre>
                </div>
              </div>

              {/* Componenti */}
              <div className="border-l-4 border-emerald-500 pl-6">
                <h3 className="text-xl font-semibold text-card-foreground mb-3">2. Utilizzo nei Componenti</h3>
                <p className="text-muted-foreground mb-4">Come usare le variabili nei componenti:</p>
                
                <div className="bg-muted rounded-lg p-4 border">
                  <pre className="bg-slate-900 text-emerald-400 p-4 rounded text-sm overflow-x-auto">
                    <code>{`// Usa le variabili CSS custom properties
<div className="bg-primary text-primary-foreground">
  Bottone primario
</div>

<div className="bg-card border text-card-foreground">
  Card con stile automatico
</div>

<div className="text-muted-foreground">
  Testo secondario
</div>`}</code>
                  </pre>
                </div>
              </div>

              {/* Font Personalizzati */}
              <div className="border-l-4 border-violet-500 pl-6">
                <h3 className="text-xl font-semibold text-card-foreground mb-3">3. Font Personalizzati</h3>
                <p className="text-muted-foreground mb-4">Configurazione font Google in layout.tsx:</p>
                
                <div className="bg-muted rounded-lg p-4 border">
                  <pre className="bg-slate-900 text-violet-400 p-4 rounded text-sm overflow-x-auto">
                    <code>{`// src/app/layout.tsx
import { Inter, Roboto_Mono } from "next/font/google"

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
})

// Applica nel body
<body className={\`\${inter.variable}\`}>`}</code>
                  </pre>
                </div>
              </div>

              {/* Contenuto Statico */}
              <div className="border-l-4 border-amber-500 pl-6">
                <h3 className="text-xl font-semibold text-card-foreground mb-3">4. Gestione Contenuti Statici</h3>
                <p className="text-muted-foreground mb-4">Come organizzare e gestire i testi del sito senza CMS:</p>
                
                <div className="space-y-4">
                  <div className="bg-amber-100 dark:bg-amber-900/20 rounded-lg p-4 border border-amber-200 dark:border-amber-800">
                    <h4 className="font-semibold text-amber-700 dark:text-amber-300 mb-2">📁 File di Configurazione</h4>
                    <p className="text-sm text-amber-600 dark:text-amber-200 mb-3">
                      Crea file centralizzati per gestire i contenuti del sito
                    </p>
                    
                    <div className="bg-muted rounded-lg p-3 border">
                      <pre className="bg-slate-900 text-amber-400 p-3 rounded text-sm overflow-x-auto">
                        <code>{`// src/lib/content/homepage.ts
export const homepageContent = {
  hero: {
    title: "🚀 Starter Template",
    subtitle: "Template moderno con Next.js 15",
    primaryCta: {
      text: "Inizia Subito",
      href: "/docs/development"
    }
  },
  features: [
    {
      icon: "⚡",
      title: "Next.js 15",
      description: "Latest version con React 19"
    }
  ]
}`}</code>
                      </pre>
                    </div>
                  </div>

                  <div className="bg-amber-100 dark:bg-amber-900/20 rounded-lg p-4 border border-amber-200 dark:border-amber-800">
                    <h4 className="font-semibold text-amber-700 dark:text-amber-300 mb-2">📝 Utilizzo nei Componenti</h4>
                    <div className="bg-muted rounded-lg p-3 border">
                      <pre className="bg-slate-900 text-amber-400 p-3 rounded text-sm overflow-x-auto">
                        <code>{`// src/app/page.tsx
import { homepageContent } from '@/lib/content/homepage'

export default function HomePage() {
  const { hero, features } = homepageContent
  
  return (
    <div>
      <h1 className="text-4xl font-bold">
        {hero.title}
      </h1>
      <p className="text-muted-foreground">
        {hero.subtitle}
      </p>
    </div>
  )
}`}</code>
                      </pre>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Palette Colori */}
          <section className="bg-card rounded-lg p-6 border">
            <h2 className="text-2xl font-bold text-card-foreground mb-6">🎨 Palette Colori Radix</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <h3 className="font-semibold text-card-foreground">Colori Disponibili</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-slate-500 rounded"></div>
                    <span>Slate (Neutri)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-violet-500 rounded"></div>
                    <span>Violet (Primary)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-blue-500 rounded"></div>
                    <span>Blue</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-emerald-500 rounded"></div>
                    <span>Emerald</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-amber-500 rounded"></div>
                    <span>Amber</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-red-500 rounded"></div>
                    <span>Red (Destructive)</span>
                  </div>
                </div>
              </div>
              
              <div className="space-y-3">
                <h3 className="font-semibold text-card-foreground">Scala di Grigi</h3>
                <div className="grid grid-cols-6 gap-1">
                  <div className="w-8 h-8 bg-slate-50 border rounded"></div>
                  <div className="w-8 h-8 bg-slate-100 border rounded"></div>
                  <div className="w-8 h-8 bg-slate-200 border rounded"></div>
                  <div className="w-8 h-8 bg-slate-300 border rounded"></div>
                  <div className="w-8 h-8 bg-slate-400 border rounded"></div>
                  <div className="w-8 h-8 bg-slate-500 border rounded"></div>
                  <div className="w-8 h-8 bg-slate-600 border rounded"></div>
                  <div className="w-8 h-8 bg-slate-700 border rounded"></div>
                  <div className="w-8 h-8 bg-slate-800 border rounded"></div>
                  <div className="w-8 h-8 bg-slate-900 border rounded"></div>
                  <div className="w-8 h-8 bg-slate-950 border rounded"></div>
                </div>
              </div>
            </div>
          </section>

          {/* Suggerimenti */}
          <div className="bg-primary/5 rounded-lg p-6 border border-primary/20">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-primary-foreground text-sm">💡</span>
              </div>
              <div>
                <h3 className="font-semibold text-primary mb-2">Suggerimenti</h3>
                <ul className="text-muted-foreground text-sm space-y-1">
                  <li>• Usa sempre le variabili CSS invece di colori hardcoded</li>
                  <li>• Testa il contrasto in modalità light e dark</li>
                  <li>• I colori Radix garantiscono accessibilità automatica</li>
                  <li>• Mantieni coerenza usando la stessa scala di colori</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}