export default function DocsIndexPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            📚 Documentazione
          </h1>
          <p className="text-xl text-muted-foreground">
            Tutto quello che ti serve per iniziare con il Modern Starter Template
          </p>
        </div>

        {/* Navigation Cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {/* Components Documentation */}
          <a 
            href="/docs/components"
            className="group p-6 bg-card rounded-lg border hover:border-primary/50 transition-all duration-200 hover:shadow-lg"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-blue-500/10 rounded-lg flex items-center justify-center">
                <span className="text-2xl">🧩</span>
              </div>
              <h2 className="text-xl font-semibold group-hover:text-primary transition-colors">
                Componenti
              </h2>
            </div>
            <p className="text-muted-foreground text-sm">
              Documentazione completa dei componenti disponibili, con esempi pratici e esercizi per principianti.
            </p>
            <div className="mt-4 text-xs text-primary">
              Perfetto per iniziare →
            </div>
          </a>

          {/* Custom Components Tutorial */}
          <a 
            href="/docs/custom-components"
            className="group p-6 bg-card rounded-lg border hover:border-primary/50 transition-all duration-200 hover:shadow-lg"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-green-500/10 rounded-lg flex items-center justify-center">
                <span className="text-2xl">🎓</span>
              </div>
              <h2 className="text-xl font-semibold group-hover:text-primary transition-colors">
                Tutorial Componenti Custom
              </h2>
            </div>
            <p className="text-muted-foreground text-sm">
              Impara a creare i tuoi componenti personalizzati con tutorial passo-passo e tanti esempi.
            </p>
            <div className="mt-4 text-xs text-primary">
              Tutorial completo →
            </div>
          </a>

          {/* Development Guide */}
          <a 
            href="/docs/development"
            className="group p-6 bg-card rounded-lg border hover:border-primary/50 transition-all duration-200 hover:shadow-lg"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-purple-500/10 rounded-lg flex items-center justify-center">
                <span className="text-2xl">🛠️</span>
              </div>
              <h2 className="text-xl font-semibold group-hover:text-primary transition-colors">
                Guida Sviluppo
              </h2>
            </div>
            <p className="text-muted-foreground text-sm">
              Come sviluppare con il template: setup, comandi, struttura del progetto e best practices.
            </p>
            <div className="mt-4 text-xs text-primary">
              Guida tecnica →
            </div>
          </a>

          {/* Theming Guide */}
          <a 
            href="/docs/theming"
            className="group p-6 bg-card rounded-lg border hover:border-primary/50 transition-all duration-200 hover:shadow-lg"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-orange-500/10 rounded-lg flex items-center justify-center">
                <span className="text-2xl">🎨</span>
              </div>
              <h2 className="text-xl font-semibold group-hover:text-primary transition-colors">
                Theming & Stili
              </h2>
            </div>
            <p className="text-muted-foreground text-sm">
              Personalizza colori, font e stili del template. Gestione contenuti e sistema di theming.
            </p>
            <div className="mt-4 text-xs text-primary">
              Personalizza →
            </div>
          </a>
        </div>

        {/* Quick Links */}
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-lg p-6 border border-blue-200 dark:border-blue-800/50">
          <h3 className="text-lg font-semibold text-blue-900 dark:text-blue-100 mb-4">
            🚀 Link Rapidi
          </h3>
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <h4 className="font-medium text-blue-800 dark:text-blue-200 mb-2">Per Principianti</h4>
              <ul className="space-y-1 text-sm">
                <li>
                  <a href="/docs/components#primi-esercizi" className="text-blue-600 dark:text-blue-300 hover:underline">
                    → Primi Esercizi Pratici
                  </a>
                </li>
                <li>
                  <a href="/docs/custom-components" className="text-blue-600 dark:text-blue-300 hover:underline">
                    → Tutorial Step-by-Step
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-blue-800 dark:text-blue-200 mb-2">Riferimenti</h4>
              <ul className="space-y-1 text-sm">
                <li>
                  <a href="/docs/components" className="text-blue-600 dark:text-blue-300 hover:underline">
                    → Lista Completa Componenti
                  </a>
                </li>
                <li>
                  <a href="/template" className="text-blue-600 dark:text-blue-300 hover:underline">
                    → Vedi il Template
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Getting Started */}
        <div className="mt-12 text-center">
          <h3 className="text-2xl font-semibold mb-4">💡 Non sai da dove iniziare?</h3>
          <p className="text-muted-foreground mb-6">
            Se sei nuovo a React o ai componenti custom, inizia con la guida ai componenti!
          </p>
          <a 
            href="/docs/components"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors"
          >
            <span>🧩</span>
            Inizia con i Componenti
          </a>
        </div>
      </div>
    </div>
  )
}