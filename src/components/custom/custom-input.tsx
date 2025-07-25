// ============================================
// COMPONENTE INPUT PERSONALIZZATO - VERSIONE SEMPLICE! 📝
// ============================================
// 
// Questo è un input "potenziato" che ha alcune funzioni extra rispetto 
// all'input normale di shadcn. È perfetto per chi sta imparando!
//
// COSA SA FARE:
// ✅ Mostrare un'etichetta (label) sopra l'input
// ✅ Mostrare messaggi di errore in rosso
// ✅ Mostrare quando sta funzionando tutto bene (verde)
// ✅ Mostrare uno spinner quando sta caricando
// ✅ Aggiungere icone a sinistra e destra
// ============================================

// 1. IMPORTIAMO QUELLO CHE CI SERVE
import { Input } from "@/components/ui/input"      // L'input di shadcn
import { Label } from "@/components/ui/label"      // L'etichetta di shadcn
import { cn } from "@/lib/utils"                   // Funzione per unire le classi CSS

// 2. DEFINIAMO IL NOSTRO COMPONENTE
export function CustomInput({
  // Proprietà che possiamo usare:
  label,        // Il testo da mostrare sopra l'input (opzionale)
  error,        // Messaggio di errore da mostrare (opzionale)
  success,      // Se true, mostra che va tutto bene (opzionale)
  loading,      // Se true, mostra lo spinner di caricamento (opzionale)
  leftIcon,     // Icona da mettere a sinistra (opzionale)
  rightIcon,    // Icona da mettere a destra (opzionale)
  className,    // Classi CSS extra (opzionale)
  ...props      // Tutte le altre proprietà dell'input normale
}: {
  label?: string
  error?: string
  success?: boolean
  loading?: boolean
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
  className?: string
  [key: string]: any
}) {
  
  // 3. INIZIAMO A COSTRUIRE IL NOSTRO COMPONENTE
  return (
    // Contenitore principale - ha uno spazio di 8px tra gli elementi
    <div className="space-y-2">
      
      {/* ========== ETICHETTA (LABEL) ========== */}
      {/* Mostriamo l'etichetta solo se è stata passata */}
      {label && (
        <Label className={cn(
          // Stile base dell'etichetta
          "text-sm font-medium",
          // Se c'è un errore, la facciamo rossa
          error && "text-red-600",
          // Se va tutto bene, la facciamo verde
          success && !error && "text-green-600"
        )}>
          {label}
        </Label>
      )}
      
      {/* ========== CONTENITORE DELL'INPUT ========== */}
      {/* Usiamo "relative" per posizionare le icone sopra l'input */}
      <div className="relative">
        
        {/* ========== ICONA A SINISTRA ========== */}
        {/* Mostriamo l'icona sinistra solo se è stata passata */}
        {leftIcon && (
          <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">
            {leftIcon}
          </div>
        )}
        
        {/* ========== L'INPUT VERO E PROPRIO ========== */}
        <Input
          className={cn(
            // Stili base
            "transition-all duration-200",
            
            // Se c'è un'icona a sinistra, aggiungiamo spazio interno a sinistra
            leftIcon && "pl-10",
            
            // Se c'è un'icona a destra O uno spinner, aggiungiamo spazio a destra
            (rightIcon || loading || error || success) && "pr-10",
            
            // Se c'è un errore, facciamo il bordo rosso
            error && "border-red-500 focus:border-red-500 focus:ring-red-500",
            
            // Se va tutto bene, facciamo il bordo verde
            success && !error && "border-green-500 focus:border-green-500 focus:ring-green-500",
            
            // Se sta caricando, rendiamo tutto più trasparente
            loading && "opacity-50",
            
            // Aggiungiamo eventuali classi extra
            className
          )}
          
          // Se sta caricando, disabilitiamo l'input
          disabled={loading}
          
          // Passiamo tutte le altre proprietà all'input
          {...props}
        />
        
        {/* ========== ICONE A DESTRA ========== */}
        {/* Contenitore per le icone a destra - possono essercene più di una */}
        <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-1">
          
          {/* SPINNER DI CARICAMENTO */}
          {/* Lo mostriamo solo quando loading è true */}
          {loading && (
            <div className="w-4 h-4 animate-spin rounded-full border-2 border-current border-t-transparent text-gray-500" />
          )}
          
          {/* ICONA DI ERRORE */}
          {/* La mostriamo solo se c'è un errore E non stiamo caricando */}
          {!loading && error && (
            <span className="text-red-500 text-lg">❌</span>
          )}
          
          {/* ICONA DI SUCCESSO */}
          {/* La mostriamo solo se va tutto bene E non c'è errore E non stiamo caricando */}
          {!loading && success && !error && (
            <span className="text-green-500 text-lg">✅</span>
          )}
          
          {/* ICONA PERSONALIZZATA A DESTRA */}
          {/* La mostriamo solo se è stata passata E non stiamo caricando E non ci sono errori/successi */}
          {!loading && rightIcon && !error && !success && (
            <div className="text-gray-500">{rightIcon}</div>
          )}
        </div>
      </div>
      
      {/* ========== MESSAGGIO DI ERRORE ========== */}
      {/* Lo mostriamo solo se c'è un messaggio di errore */}
      {error && (
        <p className="text-xs text-red-600">
          {error}
        </p>
      )}
    </div>
  )
}

// ============================================
// ESEMPI DI COME USARLO:
// ============================================
//
// Input semplice con etichetta:
// <CustomInput label="Il tuo nome" placeholder="Scrivi qui..." />
//
// Input con icona a sinistra:
// <CustomInput 
//   label="Email" 
//   leftIcon="📧" 
//   placeholder="email@esempio.com" 
// />
//
// Input con errore:
// <CustomInput 
//   label="Password" 
//   error="La password deve essere lunga almeno 8 caratteri" 
// />
//
// Input che va tutto bene:
// <CustomInput 
//   label="Username" 
//   success={true} 
//   value="nomeutente123" 
// />
//
// Input che sta caricando:
// <CustomInput 
//   label="Verifica email..." 
//   loading={true} 
// />
//
// Input completo con tutto:
// <CustomInput 
//   label="Cerca utente"
//   leftIcon="🔍"
//   rightIcon="⭐"
//   placeholder="Digita per cercare..."
//   loading={false}
//   success={true}
// />
//
// ============================================