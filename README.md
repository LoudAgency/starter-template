# Modern Starter Template 🚀

Un template moderno e **friendly per principianti** per progetti Next.js con le ultime tecnologie e documentazione step-by-step.

## ✨ Perfetto per Chi Sta Imparando

Questo template è stato pensato specificamente per **sviluppatori principianti** che vogliono:
- 📚 **Imparare React/Next.js** con esempi pratici
- 🧩 **Creare componenti custom** con tutorial guidati  
- 💡 **Capire il codice** grazie a commenti dettagliati
- 🎯 **Fare subito pratica** con esercizi immediati

## Stack Tecnologico

- **[Next.js 15](https://nextjs.org/)** - Framework React con App Router
- **[React 19](https://react.dev/)** - Libreria UI con le ultime features  
- **[TypeScript](https://www.typescriptlang.org/)** - Type safety
- **[Tailwind CSS 4](https://tailwindcss.com/)** - Utility-first CSS framework
- **[shadcn/ui](https://ui.shadcn.com/)** - Componenti UI moderni e accessibili
- **[Lucide Icons](https://lucide.dev/)** - Icone SVG moderne

## Quick Start

### Prerequisiti

- Node.js 18+ 
- npm, yarn, pnpm o bun

### Installazione

1. **Clona il repository**
   ```bash
   git clone <your-repo-url>
   cd starter-template
   ```

2. **Installa le dipendenze**
   ```bash
   npm install
   ```

3. **Avvia il server di sviluppo**
   ```bash
   npm run dev
   ```

4. **Apri il browser**
   Vai su [http://localhost:3000](http://localhost:3000)

## 🗂️ Struttura del Progetto

```
├── src/
│   ├── app/                    # App Router (Next.js 15) 
│   │   ├── page.tsx           # 🏠 Homepage Hello World
│   │   ├── template/          # 📄 Template showcase
│   │   ├── docs/              # 📚 Documentazione completa
│   │   │   ├── page.tsx       # Hub documentazione  
│   │   │   ├── components/    # Lista e tutorial componenti
│   │   │   └── custom-components/ # Tutorial step-by-step
│   │   ├── globals.css        # Tailwind CSS + variabili
│   │   └── layout.tsx         # Layout principale
│   ├── components/            # Componenti riutilizzabili
│   │   ├── ui/               # 🎨 shadcn/ui components (non toccare!)
│   │   ├── custom/           # 🛠️ I TUOI componenti personalizzati
│   │   │   ├── simple-button.tsx    # Bottone per principianti
│   │   │   ├── custom-input.tsx     # Input con tanti commenti
│   │   │   └── custom-card.tsx      # Card personalizzata
│   │   ├── layout/           # Header, Footer, Navigation
│   │   └── sections/         # Hero, Features, CTA, etc.
│   ├── lib/                  # Utilities e configurazioni
│   │   ├── content/          # 📝 Gestione contenuti senza CMS
│   │   └── utils.ts          # Utility functions
│   └── types/                # TypeScript definitions
├── content/                  # File markdown per contenuti lunghi
└── docs/                    # Documentazione markdown (se necessaria)
```

## 🎯 Navigazione del Template

### 🏠 Homepage (`/`)
**Hello World semplice** - Prima impressione pulita e accogliente

### 📄 Template (`/template`) 
**Showcase completo** - Vedi tutte le funzionalità del template

### 📚 Documentazione (`/docs`)
**Hub centrale** per imparare tutto:

- **[Componenti](/docs/components)** - Lista componenti + primi esercizi
- **[Tutorial Custom](/docs/custom-components)** - Guida step-by-step per creare componenti
- **[Development](/docs/development)** - Come sviluppare con il template  
- **[Theming](/docs/theming)** - Personalizzare colori e stili

## 🚀 Per Principianti: Inizia Qui!

### 1. **Primi Passi** 
```bash
# Dopo aver installato il template
npm run dev
# Vai su http://localhost:3000 e clicca "Vai alla Documentazione"
```

### 2. **Il Tuo Primo Componente**
Vai su `/docs/components` e segui gli esercizi:
- Crea il tuo primo bottone colorato
- Aggiungi emoji e effetti hover
- Impara step-by-step

### 3. **Tutorial Completo**
Vai su `/docs/custom-components` per:
- Tutorial dettagliato con spiegazioni
- Codice con tantissimi commenti
- Esempi che puoi copiare subito

## 🧩 Componenti per Principianti

### SimpleButton
```typescript
// Il tuo primo bottone personalizzato!
<SimpleButton leftIcon="💾">Salva</SimpleButton>
<SimpleButton loading={true}>Caricamento...</SimpleButton>
```

### CustomInput  
```typescript
// Input con etichetta, errori e icone
<CustomInput 
  label="Email"
  leftIcon="📧"
  error="Campo obbligatorio"
/>
```

**Tutti i componenti hanno:**
- ✅ Codice super commentato per capire ogni riga
- ✅ Esempi pratici nel codice stesso  
- ✅ Funzionalità gradualmente più complesse
- ✅ Perfetti per imparare e modificare

## Comandi Disponibili

```bash
# Sviluppo con Turbopack (velocissimo!)
npm run dev

# Build per produzione
npm run build

# Avvia server produzione
npm run start

# Linting del codice
npm run lint
```

## 🎨 Features Principali

### 🎓 Perfetto per Imparare
- **Documentazione per principianti** con linguaggio semplice
- **Esercizi pratici immediati** da fare subito  
- **Codice commentato** riga per riga
- **Tutorial step-by-step** per creare componenti
- **Esempi con emoji** (più facili delle icone complesse!)

### 🏗️ Architettura Professionale  
- **Struttura scalabile** per crescere con te
- **Separazione chiara** tra componenti base e custom
- **Gestione contenuti** centralizzata e semplice
- **TypeScript** per imparare i tipi gradualmente

### 🚀 Performance Moderne
- **Next.js 15** con Turbopack (build velocissimi)
- **React 19** con le ultime funzionalità
- **Tailwind CSS 4** zero-config
- **shadcn/ui** componenti di qualità professionale

### 📱 Design Responsive
- **Mobile-first** - funziona su tutti i dispositivi
- **Dark/Light mode** incluso
- **Componenti accessibili** seguono le best practices

## 🛠️ Come Personalizzare

### 1. **Contenuti**
Modifica i file in `src/lib/content/` per cambiare testi e menu:

```typescript
// src/lib/content/homepage.ts
export const homepageContent = {
  hero: {
    title: "Il Mio Sito Fantastico!", // Cambia questo!
    subtitle: "La mia descrizione..." // E questo!
  }
}
```

### 2. **Colori e Stili**  
Modifica `src/app/globals.css` per cambiare i colori:

```css
:root {
  --primary: 240 100% 50%; /* Cambia il colore principale */
  --background: 0 0% 100%; /* Cambia lo sfondo */
}
```

### 3. **Componenti Custom**
Crea nuovi componenti in `src/components/custom/`:

```typescript
// Il tuo nuovo componente!
export function MioComponente() {
  return <div>Ciao mondo!</div>
}
```

## 📖 Percorso di Apprendimento Consigliato

1. **🏠 Esplora la Homepage** - Vedi com'è fatto un Hello World pulito
2. **📄 Vai su /template** - Scopri tutte le funzionalità
3. **📚 Leggi /docs** - Panoramica della documentazione  
4. **🧩 Inizia con /docs/components** - Fai i primi esercizi
5. **🎓 Approfondisci con /docs/custom-components** - Tutorial completo
6. **🛠️ Crea i tuoi componenti** - Metti in pratica quello che hai imparato!

## 🚀 Deployment

### Vercel (Raccomandato)
```bash
npm run build
# Deploy automatico con git push su Vercel
```

### Altri Provider  
```bash
npm run build
npm run start
```

## 🤝 Contributi

I contributi sono benvenuti! Specialmente:
- 📚 Miglioramenti alla documentazione per principianti
- 🧩 Nuovi componenti di esempio commentati
- 🐛 Correzioni e semplificazioni del codice
- 💡 Nuovi esercizi pratici

## 📄 Licenza

MIT License - vedi [LICENSE](./LICENSE) per dettagli.

---

## 💡 Hai Domande?

- 📖 **Leggi la documentazione**: [/docs](/docs)  
- 🧩 **Inizia con gli esercizi**: [/docs/components](/docs/components)
- 🎓 **Segui il tutorial**: [/docs/custom-components](/docs/custom-components)

**Happy coding! 🎉**