// ============================================
// IL TUO PRIMO BOTTONE PERSONALIZZATO! 🎉
// ============================================
// 
// Questo è un esempio super semplice per iniziare.
// Copia questo codice e gioca con esso!
//
// COSA FA:
// ✅ È un bottone normale di shadcn
// ✅ Ma si ingrandisce quando ci passi il mouse sopra
// ✅ Può mostrare "Caricamento..." quando sta lavorando
// ✅ Può avere icone a sinistra e destra
// ============================================

// 1. Importiamo il bottone di shadcn
import { Button } from "@/components/ui/button"

// 2. Creiamo il nostro bottone personalizzato
export function SimpleButton({ 
  children,     // Il testo del bottone
  loading,      // Se true, mostra "Caricamento..."
  leftIcon,     // Icona a sinistra (opzionale)
  rightIcon,    // Icona a destra (opzionale)
  ...props      // Tutte le altre proprietà del bottone
}: {
  children?: React.ReactNode
  loading?: boolean
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
  [key: string]: any
}) {
  return (
    <Button 
      // Aggiungiamo effetti di hover e transizioni fluide
      className="hover:scale-105 transition-transform flex items-center gap-2"
      
      // Se sta caricando, disabilitiamo il bottone
      disabled={loading}
      
      // Passiamo tutte le altre proprietà
      {...props}
    >
      {/* Icona a sinistra (solo se non stiamo caricando) */}
      {!loading && leftIcon && <span>{leftIcon}</span>}
      
      {/* Spinner quando sta caricando */}
      {loading && <span className="animate-spin">⭕</span>}
      
      {/* Il testo del bottone */}
      {loading ? "Caricamento..." : children}
      
      {/* Icona a destra (solo se non stiamo caricando) */}
      {!loading && rightIcon && <span>{rightIcon}</span>}
    </Button>
  )
}

// ============================================
// ESEMPI DI COME USARLO:
// ============================================
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
// Con entrambe le icone:
// <SimpleButton leftIcon="📧" rightIcon="📤">Invia Email</SimpleButton>
//
// In modalità loading:
// <SimpleButton loading={true}>Salva Dati</SimpleButton>
//
// Con onClick:
// <SimpleButton onClick={() => alert('Cliccato!')}>Prova</SimpleButton>
//
// ============================================