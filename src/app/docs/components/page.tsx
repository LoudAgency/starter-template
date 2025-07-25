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

              {/* CustomInput - VERSIONE SEMPLICE */}
              <div className="border-l-4 border-cyan-500 pl-6">
                <h3 className="text-xl font-semibold text-card-foreground mb-3">CustomInput (Versione Principianti)</h3>
                <p className="text-muted-foreground mb-4">Input semplificato con etichetta, errori, successo e icone. Perfetto per imparare!</p>
                
                <div className="bg-muted rounded-lg p-4 border mb-4">
                  <pre className="bg-slate-900 text-cyan-400 p-4 rounded text-sm overflow-x-auto">
                    <code>{`import { CustomInput } from "@/components/custom"

// Input semplice con etichetta
<CustomInput 
  label="Il tuo nome"
  placeholder="Scrivi qui..."
/>

// Con icona a sinistra (usa emoji!)
<CustomInput 
  label="Email"
  leftIcon="📧"
  placeholder="email@esempio.com"
/>

// Con messaggio di errore
<CustomInput 
  label="Password"
  error="La password deve essere lunga almeno 8 caratteri"
/>

// Quando va tutto bene
<CustomInput 
  label="Username"
  success={true}
  value="nomeutente123"
/>

// Quando sta caricando
<CustomInput 
  label="Verifica email..."
  loading={true}
/>

// Con icone sia a sinistra che a destra
<CustomInput 
  label="Cerca"
  leftIcon="🔍"
  rightIcon="⭐"
  placeholder="Digita per cercare..."
/>`}</code>
                  </pre>
                </div>

                <div className="bg-cyan-100 dark:bg-cyan-900/20 rounded-lg p-4 border border-cyan-200 dark:border-cyan-800">
                  <h4 className="font-semibold text-cyan-700 dark:text-cyan-300 mb-2">⚙️ Cosa puoi usare:</h4>
                  <ul className="text-sm text-cyan-600 dark:text-cyan-200 space-y-1">
                    <li><code className="bg-cyan-50 dark:bg-cyan-800 px-1 rounded">label</code> - Testo sopra l'input</li>
                    <li><code className="bg-cyan-50 dark:bg-cyan-800 px-1 rounded">error</code> - Messaggio errore (si vede in rosso)</li>
                    <li><code className="bg-cyan-50 dark:bg-cyan-800 px-1 rounded">success</code> - Se è tutto ok (true/false)</li>
                    <li><code className="bg-cyan-50 dark:bg-cyan-800 px-1 rounded">loading</code> - Se sta caricando (true/false)</li>
                    <li><code className="bg-cyan-50 dark:bg-cyan-800 px-1 rounded">leftIcon</code> - Icona a sinistra (usa emoji!)</li>
                    <li><code className="bg-cyan-50 dark:bg-cyan-800 px-1 rounded">rightIcon</code> - Icona a destra (usa emoji!)</li>
                  </ul>
                </div>
              </div>

              {/* SimpleButton - NUOVO */}
              <div className="border-l-4 border-orange-500 pl-6">
                <h3 className="text-xl font-semibold text-card-foreground mb-3">SimpleButton (Per Iniziare)</h3>
                <p className="text-muted-foreground mb-4">Il tuo primo bottone personalizzato! Super semplice da capire e modificare.</p>
                
                <div className="bg-muted rounded-lg p-4 border mb-4">
                  <pre className="bg-slate-900 text-orange-400 p-4 rounded text-sm overflow-x-auto">
                    <code>{`import { SimpleButton } from "@/components/custom"

// Bottone normale (si ingrandisce al hover!)
<SimpleButton>Clicca qui</SimpleButton>

// Con icona a sinistra
<SimpleButton leftIcon="💾">Salva</SimpleButton>

// Con icona a destra  
<SimpleButton rightIcon="➡️">Continua</SimpleButton>

// Con entrambe le icone
<SimpleButton leftIcon="📧" rightIcon="📤">
  Invia Email
</SimpleButton>

// In modalità caricamento
<SimpleButton loading={true}>Salva Dati</SimpleButton>

// Con azione onClick
<SimpleButton onClick={() => alert('Funziona!')}>
  Prova
</SimpleButton>`}</code>
                  </pre>
                </div>

                <div className="bg-orange-100 dark:bg-orange-900/20 rounded-lg p-4 border border-orange-200 dark:border-orange-800">
                  <h4 className="font-semibold text-orange-700 dark:text-orange-300 mb-2">⚡ Cosa fa di speciale:</h4>
                  <ul className="text-sm text-orange-600 dark:text-orange-200 space-y-1">
                    <li>• Si ingrandisce del 5% quando ci passi il mouse sopra (hover:scale-105)</li>
                    <li>• Quando <code>loading=true</code> mostra "Caricamento..." e uno spinner</li>
                    <li>• Puoi aggiungere icone a sinistra e destra (prova con emoji!)</li>
                    <li>• Codice super semplice da copiare e modificare</li>
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

          {/* Come Creare Componenti Custom - VERSIONE SEMPLICE */}
          <section className="bg-card rounded-lg p-6 border">
            <h2 className="text-2xl font-bold text-card-foreground mb-6">🛠️ Come Creare Componenti Custom (Guida per Principianti)</h2>
            
            <div className="space-y-8">
              {/* Cos'è un Componente Custom */}
              <div className="border-l-4 border-blue-500 pl-6">
                <h3 className="text-xl font-semibold text-card-foreground mb-3">🤔 Cos'è un Componente Custom?</h3>
                <p className="text-muted-foreground mb-4">
                  Un componente custom è come una "scatola personalizzata" che contiene un componente shadcn normale, 
                  ma con funzionalità extra che servono al tuo progetto.
                </p>
                
                <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4 border border-blue-200 dark:border-blue-800 mb-4">
                  <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-2">💡 Esempio Semplice</h4>
                  <p className="text-sm text-blue-600 dark:text-blue-200">
                    Immagina di avere un bottone normale, ma vuoi che mostri uno spinner quando sta caricando. 
                    Invece di riscrivere tutto il bottone, lo "avvolgi" in un componente custom che aggiunge solo questa funzione!
                  </p>
                </div>
              </div>

              {/* Primo Esempio Super Semplice */}
              <div className="border-l-4 border-green-500 pl-6">
                <h3 className="text-xl font-semibold text-card-foreground mb-3">🚀 Il Tuo Primo Componente Custom</h3>
                <p className="text-muted-foreground mb-4">
                  Creiamo insieme un bottone che può mostrare "Caricamento..." quando è occupato:
                </p>
                
                <div className="bg-muted rounded-lg p-4 border mb-4">
                  <h4 className="text-sm font-medium text-muted-foreground mb-2">📝 Passo 1: Crea il file</h4>
                  <p className="text-sm text-muted-foreground mb-2">
                    Crea un nuovo file: <code className="bg-slate-200 dark:bg-slate-700 px-2 py-1 rounded">src/components/custom/my-button.tsx</code>
                  </p>
                  <pre className="bg-slate-900 text-green-400 p-4 rounded text-sm overflow-x-auto">
                    <code>{`// Importiamo quello che ci serve
import { Button } from "@/components/ui/button"

// Creiamo il nostro componente personalizzato
export function MyButton({ loading, children, ...props }) {
  return (
    <Button {...props}>
      {loading ? "Caricamento..." : children}
    </Button>
  )
}`}</code>
                  </pre>
                </div>

                <div className="bg-muted rounded-lg p-4 border mb-4">
                  <h4 className="text-sm font-medium text-muted-foreground mb-2">📝 Passo 2: Come usarlo</h4>
                  <pre className="bg-slate-900 text-green-400 p-4 rounded text-sm overflow-x-auto">
                    <code>{`// Importa il tuo componente
import { MyButton } from "@/components/custom/my-button"

// Usalo nella tua pagina
function MiaParola() {
  return (
    <div>
      {/* Bottone normale */}
      <MyButton>Clicca qui</MyButton>
      
      {/* Bottone che sta caricando */}
      <MyButton loading={true}>Salva</MyButton>
    </div>
  )
}`}</code>
                  </pre>
                </div>

                <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-4 border border-green-200 dark:border-green-800">
                  <h4 className="font-semibold text-green-700 dark:text-green-300 mb-2">✨ Cosa abbiamo fatto?</h4>
                  <ul className="text-sm text-green-600 dark:text-green-200 space-y-1">
                    <li>• Abbiamo preso il Button di shadcn</li>
                    <li>• Gli abbiamo aggiunto una nuova proprietà: <code>loading</code></li>
                    <li>• Quando <code>loading=true</code>, mostra "Caricamento..."</li>
                    <li>• Quando <code>loading=false</code>, mostra il testo normale</li>
                  </ul>
                </div>
              </div>

              {/* Regole Semplici */}
              <div className="border-l-4 border-yellow-500 pl-6">
                <h3 className="text-xl font-semibold text-card-foreground mb-3">📚 3 Regole Semplici</h3>
                
                <div className="space-y-4">
                  <div className="bg-yellow-50 dark:bg-yellow-900/20 rounded-lg p-4 border border-yellow-200 dark:border-yellow-800">
                    <h4 className="font-semibold text-yellow-700 dark:text-yellow-300 mb-2">🎯 Regola 1: Non toccare i file in "ui/"</h4>
                    <p className="text-sm text-yellow-600 dark:text-yellow-200">
                      I componenti in <code>src/components/ui/</code> sono quelli di shadcn. Non li modificare mai! 
                      Crea sempre i tuoi componenti nella cartella <code>custom/</code>.
                    </p>
                  </div>
                  
                  <div className="bg-yellow-50 dark:bg-yellow-900/20 rounded-lg p-4 border border-yellow-200 dark:border-yellow-800">
                    <h4 className="font-semibold text-yellow-700 dark:text-yellow-300 mb-2">🎯 Regola 2: Usa sempre "...props"</h4>
                    <p className="text-sm text-yellow-600 dark:text-yellow-200">
                      Scrivi sempre <code>{`{ ...props }`}</code> per passare tutte le proprietà del componente originale. 
                      Così il tuo componente funziona come quello di shadcn, ma con le tue aggiunte!
                    </p>
                  </div>
                  
                  <div className="bg-yellow-50 dark:bg-yellow-900/20 rounded-lg p-4 border border-yellow-200 dark:border-yellow-800">
                    <h4 className="font-semibold text-yellow-700 dark:text-yellow-300 mb-2">🎯 Regola 3: Un passo alla volta</h4>
                    <p className="text-sm text-yellow-600 dark:text-yellow-200">
                      Inizia con un componente semplice. Aggiungi una funzione alla volta. 
                      Prima fai funzionare il base, poi aggiungi le cose fighe!
                    </p>
                  </div>
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

          {/* Esercizi Pratici per Principianti */}
          <section className="bg-card rounded-lg p-6 border">
            <h2 className="text-2xl font-bold text-card-foreground mb-6">💪 Primi Esercizi (Fai Subito!)</h2>
            
            <div className="space-y-8">
              {/* Esercizio 1 */}
              <div className="border-l-4 border-green-500 pl-6">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold">1</div>
                  <h3 className="text-xl font-semibold text-card-foreground">Crea il Tuo Primo Bottone</h3>
                </div>
                
                <p className="text-muted-foreground mb-4">
                  Inizia creando un file <code className="bg-muted px-2 py-1 rounded">my-first-button.tsx</code> nella cartella custom:
                </p>
                
                <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-4 border border-green-200 dark:border-green-800 mb-4">
                  <h4 className="font-semibold text-green-700 dark:text-green-300 mb-2">📝 Copia questo codice:</h4>
                  <pre className="bg-slate-900 text-green-400 p-4 rounded text-sm overflow-x-auto">
                    <code>{`import { Button } from "@/components/ui/button"

export function MyFirstButton({ children, ...props }) {
  return (
    <Button 
      className="bg-purple-500 hover:bg-purple-600 text-white"
      {...props}
    >
      {children}
    </Button>
  )
}`}</code>
                  </pre>
                </div>
                
                <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-4 border border-green-200 dark:border-green-800">
                  <h4 className="font-semibold text-green-700 dark:text-green-300 mb-2">🎯 Cosa devi fare:</h4>
                  <ol className="text-sm text-green-600 dark:text-green-200 space-y-1 list-decimal list-inside">
                    <li>Crea il file nella cartella <code>src/components/custom/</code></li>
                    <li>Aggiungi <code>export {`{ MyFirstButton }`} from "./my-first-button"</code> al file index.ts</li>
                    <li>Prova a usarlo in una pagina: <code>{`<MyFirstButton>Il mio bottone!</MyFirstButton>`}</code></li>
                    <li>Cambia il colore da purple a blue nel codice</li>
                  </ol>
                </div>
              </div>

              {/* Esercizio 2 */}
              <div className="border-l-4 border-blue-500 pl-6">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold">2</div>
                  <h3 className="text-xl font-semibold text-card-foreground">Aggiungi un Emoji!</h3>
                </div>
                
                <p className="text-muted-foreground mb-4">
                  Ora modifica il tuo bottone per mostrare sempre un emoji prima del testo:
                </p>
                
                <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4 border border-blue-200 dark:border-blue-800">
                  <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-2">💡 Suggerimento:</h4>
                  <pre className="bg-slate-900 text-blue-400 p-4 rounded text-sm overflow-x-auto">
                    <code>{`// Modifica il tuo componente così:
export function MyFirstButton({ children, ...props }) {
  return (
    <Button {...props}>
      🎉 {children}
    </Button>
  )
}`}</code>
                  </pre>
                  <p className="text-sm text-blue-600 dark:text-blue-200 mt-2">
                    Prova a cambiare 🎉 con altri emoji come 🚀, ⭐, 💖, 🔥!
                  </p>
                </div>
              </div>

              {/* Esercizio 3 */}
              <div className="border-l-4 border-purple-500 pl-6">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center text-sm font-bold">3</div>
                  <h3 className="text-xl font-semibold text-card-foreground">Bottone che Cambia Colore</h3>
                </div>
                
                <p className="text-muted-foreground mb-4">
                  Crea un bottone che può essere rosso o verde a seconda di una proprietà:
                </p>
                
                <div className="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-4 border border-purple-200 dark:border-purple-800">
                  <h4 className="font-semibold text-purple-700 dark:text-purple-300 mb-2">🎨 Crea ColorButton:</h4>
                  <pre className="bg-slate-900 text-purple-400 p-4 rounded text-sm overflow-x-auto">
                    <code>{`export function ColorButton({ color, children, ...props }) {
  // Se color è "red", usa rosso. Se è "green", usa verde
  const colorClass = color === "red" 
    ? "bg-red-500 hover:bg-red-600" 
    : "bg-green-500 hover:bg-green-600"
  
  return (
    <Button 
      className={colorClass + " text-white"}
      {...props}
    >
      {children}
    </Button>
  )
}

// Usalo così:
// <ColorButton color="red">Elimina</ColorButton>
// <ColorButton color="green">Salva</ColorButton>`}</code>
                  </pre>
                </div>
              </div>
            </div>
          </section>

          {/* Link alla Guida Avanzata */}
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-lg p-6 border border-blue-200 dark:border-blue-800/50">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold text-blue-900 dark:text-blue-100 mb-2">
                  🎓 Guida Tutorial Completa
                </h3>
                <p className="text-blue-700 dark:text-blue-200 text-sm">
                  Tutorial passo-passo con spiegazioni dettagliate e tanti esempi pratici da copiare.
                </p>
              </div>
              <a 
                href="/starter-template/docs/custom-components/" 
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium text-sm transition-colors"
              >
                Inizia Tutorial →
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}