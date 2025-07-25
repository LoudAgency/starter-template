export default function CustomComponentsPageBeginner() {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="mb-8 pb-8 border-b border-border">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-xl text-white">🎓</span>
            </div>
            <div>
              <h1 className="text-3xl font-bold text-foreground">Impara a Creare Componenti Custom</h1>
              <p className="text-muted-foreground">Tutorial passo-passo per principianti</p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="space-y-8">
          
          {/* Introduzione Semplicissima */}
          <section className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 rounded-lg p-6 border border-green-200 dark:border-green-800/50">
            <h2 className="text-2xl font-bold text-green-900 dark:text-green-100 mb-6">🌟 Perché Creare Componenti Custom?</h2>
            
            <div className="space-y-4">
              <p className="text-green-800 dark:text-green-200 text-lg">
                Immagina di dover usare 50 volte lo stesso bottone nel tuo sito, ma ogni volta devi scrivere tutto il codice da capo. 
                Che noia, vero? 🥱
              </p>
              
              <p className="text-green-800 dark:text-green-200">
                I componenti custom ti permettono di creare il tuo bottone personalizzato UNA VOLTA, e poi riusarlo ovunque! 
                È come avere una ricetta di cucina: scrivi gli ingredienti una volta, cucini 100 volte! 👨‍🍳
              </p>
              
              <div className="bg-white/70 dark:bg-green-950/30 rounded-lg p-4 border border-green-300/50 dark:border-green-700/50">
                <h3 className="font-semibold text-green-900 dark:text-green-100 mb-2">✨ Cosa Imparerai</h3>
                <ul className="text-sm text-green-700 dark:text-green-200 space-y-1">
                  <li>• Come "vestire" un componente shadcn con le tue personalizzazioni</li>
                  <li>• Come aggiungere funzioni nuove (tipo loading, icone, colori)</li>
                  <li>• Come riusare il tuo componente in tutto il progetto</li>
                  <li>• Esempi pratici che puoi copiare e incollare subito!</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Tutorial Step by Step */}
          <section className="bg-card rounded-lg p-6 border">
            <h2 className="text-2xl font-bold text-card-foreground mb-6">📚 Tutorial: Il Tuo Primo Componente Custom</h2>
            
            <div className="space-y-8">
              {/* Step 1 */}
              <div className="border-l-4 border-blue-500 pl-6">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold">1</div>
                  <h3 className="text-xl font-semibold text-card-foreground">Iniziamo con un Button Semplice</h3>
                </div>
                
                <p className="text-muted-foreground mb-4">
                  Prima di tutto, creiamo un file nuovo per il nostro componente personalizzato.
                </p>
                
                <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4 border border-blue-200 dark:border-blue-800 mb-4">
                  <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-2">📁 Dove creare il file?</h4>
                  <p className="text-sm text-blue-600 dark:text-blue-200 mb-2">
                    Crea un nuovo file qui: <code className="bg-blue-100 dark:bg-blue-800 px-2 py-1 rounded">src/components/custom/simple-button.tsx</code>
                  </p>
                </div>
                
                <div className="bg-muted rounded-lg p-4 border">
                  <h4 className="text-sm font-medium text-muted-foreground mb-2">💻 Il codice completo (con commenti)</h4>
                  <pre className="bg-slate-900 text-blue-400 p-4 rounded text-sm overflow-x-auto">
                    <code>{`// ============================================
// IL TUO PRIMO COMPONENTE CUSTOM! 🎉
// ============================================

// 1. Importiamo il componente Button di shadcn
import { Button } from "@/components/ui/button"

// 2. Definiamo il nostro componente personalizzato
export function SimpleButton({ children, ...props }) {
  // 3. Restituiamo il Button di shadcn, ma con le nostre personalizzazioni
  return (
    <Button 
      className="hover:scale-105 transition-transform" 
      {...props}
    >
      {children}
    </Button>
  )
}

// ============================================
// SPIEGAZIONE:
// - children = il testo che metti dentro il bottone
// - ...props = tutte le altre proprietà (onClick, className, ecc.)
// - className = aggiungiamo un effetto hover che ingrandisce il bottone
// - hover:scale-105 = quando passi il mouse sopra, si ingrandisce del 5%
// ============================================`}</code>
                  </pre>
                </div>
              </div>

              {/* Step 2 */}
              <div className="border-l-4 border-green-500 pl-6">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold">2</div>
                  <h3 className="text-xl font-semibold text-card-foreground">Aggiungiamo una Funzione Loading</h3>
                </div>
                
                <p className="text-muted-foreground mb-4">
                  Ora rendiamo il nostro bottone più intelligente: può mostrare "Caricamento..." quando è occupato!
                </p>
                
                <div className="bg-muted rounded-lg p-4 border">
                  <h4 className="text-sm font-medium text-muted-foreground mb-2">💻 Versione con Loading</h4>
                  <pre className="bg-slate-900 text-green-400 p-4 rounded text-sm overflow-x-auto">
                    <code>{`// ============================================
// BOTTONE CON LOADING! 🔄
// ============================================

import { Button } from "@/components/ui/button"

export function SimpleButton({ 
  children,     // Il testo del bottone
  loading,      // NOVITÀ: true/false per mostrare loading
  ...props      // Tutto il resto
}) {
  return (
    <Button 
      className="hover:scale-105 transition-transform"
      disabled={loading}  // Se sta caricando, disabilita il bottone
      {...props}
    >
      {/* Se loading è true, mostra "Caricamento...", altrimenti il testo normale */}
      {loading ? "Caricamento... ⏳" : children}
    </Button>
  )
}

// ============================================
// COME USARLO:
// <SimpleButton>Testo normale</SimpleButton>
// <SimpleButton loading={true}>Salva dati</SimpleButton>
// ============================================`}</code>
                  </pre>
                </div>

                <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-4 border border-green-200 dark:border-green-800 mt-4">
                  <h4 className="font-semibold text-green-700 dark:text-green-300 mb-2">🎯 Cosa abbiamo aggiunto?</h4>
                  <ul className="text-sm text-green-600 dark:text-green-200 space-y-1">
                    <li>• Una nuova proprietà <code>loading</code> che può essere true o false</li>
                    <li>• Quando <code>loading={true}</code>, il bottone si disabilita</li>
                    <li>• Il testo cambia automaticamente in "Caricamento... ⏳"</li>
                    <li>• Quando <code>loading={false}</code>, tutto torna normale</li>
                  </ul>
                </div>
              </div>

              {/* Step 3 */}
              <div className="border-l-4 border-purple-500 pl-6">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center text-sm font-bold">3</div>
                  <h3 className="text-xl font-semibold text-card-foreground">Aggiungiamo le Icone</h3>
                </div>
                
                <p className="text-muted-foreground mb-4">
                  Ora facciamo il nostro bottone ancora più figo: aggiungiamo le icone!
                </p>
                
                <div className="bg-muted rounded-lg p-4 border">
                  <h4 className="text-sm font-medium text-muted-foreground mb-2">💻 Versione Finale con Icone</h4>
                  <pre className="bg-slate-900 text-purple-400 p-4 rounded text-sm overflow-x-auto">
                    <code>{`// ============================================
// BOTTONE COMPLETO CON ICONE! ✨
// ============================================

import { Button } from "@/components/ui/button"

export function SimpleButton({ 
  children,     // Il testo del bottone
  loading,      // true/false per loading
  leftIcon,     // NOVITÀ: icona a sinistra
  rightIcon,    // NOVITÀ: icona a destra
  ...props
}) {
  return (
    <Button 
      className="hover:scale-105 transition-transform flex items-center gap-2"
      disabled={loading}
      {...props}
    >
      {/* Icona a sinistra (solo se non stiamo caricando) */}
      {!loading && leftIcon && <span>{leftIcon}</span>}
      
      {/* Loading spinner o icona a sinistra */}
      {loading && <span className="animate-spin">⭕</span>}
      
      {/* Il testo del bottone */}
      {loading ? "Caricamento..." : children}
      
      {/* Icona a destra (solo se non stiamo caricando) */}
      {!loading && rightIcon && <span>{rightIcon}</span>}
    </Button>
  )
}

// ============================================
// ESEMPI DI USO:
// 
// Bottone normale:
// <SimpleButton>Clicca qui</SimpleButton>
//
// Con icona a sinistra:
// <SimpleButton leftIcon="💾">Salva</SimpleButton>
//
// Con icona a destra:
// <SimpleButton rightIcon="➡️">Continua</SimpleButton>
//
// Entrambe le icone:
// <SimpleButton leftIcon="📧" rightIcon="📤">Invia Email</SimpleButton>
//
// In modalità loading:
// <SimpleButton loading={true} leftIcon="💾">Salva</SimpleButton>
// ============================================`}</code>
                  </pre>
                </div>
              </div>
            </div>
          </section>

          {/* Come Usare il Componente */}
          <section className="bg-card rounded-lg p-6 border">
            <h2 className="text-2xl font-bold text-card-foreground mb-6">🚀 Come Usare il Tuo Componente</h2>
            
            <div className="space-y-6">
              <div className="bg-muted rounded-lg p-4 border">
                <h3 className="text-lg font-semibold text-card-foreground mb-3">📝 Step 1: Esportalo</h3>
                <p className="text-muted-foreground mb-3">
                  Aggiungi il tuo componente al file <code className="bg-slate-200 dark:bg-slate-700 px-2 py-1 rounded">src/components/custom/index.ts</code>:
                </p>
                <pre className="bg-slate-900 text-cyan-400 p-4 rounded text-sm overflow-x-auto">
                  <code>{`// Aggiungi questa riga al file index.ts
export { SimpleButton } from "./simple-button"`}</code>
                </pre>
              </div>

              <div className="bg-muted rounded-lg p-4 border">
                <h3 className="text-lg font-semibold text-card-foreground mb-3">📝 Step 2: Usalo nelle tue pagine</h3>
                <pre className="bg-slate-900 text-cyan-400 p-4 rounded text-sm overflow-x-auto">
                  <code>{`// In qualsiasi pagina o componente
import { SimpleButton } from "@/components/custom"

function MiaPagina() {
  const [caricamento, setCaricamento] = useState(false)
  
  const handleClick = () => {
    setCaricamento(true)
    // Simula un'operazione che dura 2 secondi
    setTimeout(() => setCaricamento(false), 2000)
  }
  
  return (
    <div>
      <h1>La Mia Pagina</h1>
      
      {/* Bottoni semplici */}
      <SimpleButton>Bottone Normale</SimpleButton>
      
      {/* Con icone */}
      <SimpleButton leftIcon="👤">Profilo</SimpleButton>
      <SimpleButton rightIcon="🔒">Login</SimpleButton>
      
      {/* Con loading interattivo */}
      <SimpleButton 
        loading={caricamento}
        onClick={handleClick}
        leftIcon="💾"
      >
        Salva Dati
      </SimpleButton>
    </div>
  )
}`}</code>
                </pre>
              </div>
            </div>
          </section>

          {/* Esercizi Pratici */}
          <section className="bg-card rounded-lg p-6 border">
            <h2 className="text-2xl font-bold text-card-foreground mb-6">💪 Esercizi per Praticare</h2>
            
            <div className="space-y-6">
              <div className="border-l-4 border-orange-500 pl-6">
                <h3 className="text-xl font-semibold text-card-foreground mb-3">🎯 Esercizio 1: Bottone Colorato</h3>
                <p className="text-muted-foreground mb-3">
                  Crea un componente <code>ColorButton</code> che può essere rosso, verde o blu:
                </p>
                
                <div className="bg-orange-50 dark:bg-orange-900/20 rounded-lg p-4 border border-orange-200 dark:border-orange-800">
                  <h4 className="font-semibold text-orange-700 dark:text-orange-300 mb-2">💡 Suggerimento</h4>
                  <p className="text-sm text-orange-600 dark:text-orange-200">
                    Usa una proprietà <code>color</code> e cambia la className in base al valore!
                  </p>
                  <pre className="bg-slate-900 text-orange-400 p-3 rounded text-xs mt-2">
                    <code>{`// Esempio di uso:
<ColorButton color="red">Elimina</ColorButton>
<ColorButton color="green">Conferma</ColorButton>
<ColorButton color="blue">Info</ColorButton>`}</code>
                  </pre>
                </div>
              </div>

              <div className="border-l-4 border-pink-500 pl-6">
                <h3 className="text-xl font-semibold text-card-foreground mb-3">🎯 Esercizio 2: Card Personalizzata</h3>
                <p className="text-muted-foreground mb-3">
                  Prova a creare una <code>SimpleCard</code> che ha sempre un titolo grande e un contenuto:
                </p>
                
                <div className="bg-pink-50 dark:bg-pink-900/20 rounded-lg p-4 border border-pink-200 dark:border-pink-800">
                  <h4 className="font-semibold text-pink-700 dark:text-pink-300 mb-2">💡 Suggerimento</h4>
                  <p className="text-sm text-pink-600 dark:text-pink-200">
                    Usa il componente Card di shadcn e aggiungi proprietà <code>title</code> e <code>children</code>!
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Ricorda */}
          <div className="bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 rounded-lg p-6 border border-yellow-200 dark:border-yellow-800/50">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-white text-sm">💡</span>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-yellow-900 dark:text-yellow-100 mb-2">
                  🎓 Ricorda: Inizia Semplice!
                </h3>
                <ul className="text-yellow-700 dark:text-yellow-200 text-sm space-y-1">
                  <li>• Non serve fare tutto subito, inizia con un componente basilare</li>
                  <li>• Aggiungi una funzione alla volta e testa che funzioni</li>
                  <li>• Copia e incolla gli esempi, poi prova a modificarli</li>
                  <li>• Se non funziona, torna al codice più semplice che funzionava</li>
                  <li>• Divertiti! È così che si impara meglio 🎉</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}