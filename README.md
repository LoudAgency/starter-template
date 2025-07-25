# Modern Starter Template

Un template moderno e completo per progetti Next.js con le ultime tecnologie.

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
   # oppure
   yarn install
   # oppure
   pnpm install
   ```

3. **Avvia il server di sviluppo**
   ```bash
   npm run dev
   # oppure
   yarn dev
   # oppure
   pnpm dev
   ```

4. **Apri il browser**
   Vai su [http://localhost:3000](http://localhost:3000)

## Struttura del Progetto

```
├── src/
│   ├── app/                 # App Router (Next.js 15)
│   │   ├── docs/           # Documentazione web
│   │   ├── globals.css     # Tailwind CSS + variabili CSS
│   │   ├── layout.tsx      # Layout principale
│   │   └── page.tsx        # Homepage
│   ├── components/         # Componenti riutilizzabili
│   │   ├── ui/            # shadcn/ui components
│   │   ├── layout/        # Header, Footer, Navigation
│   │   ├── sections/      # Hero, Features, CTA, etc.
│   │   └── custom/        # Componenti custom del progetto
│   ├── lib/               # Utilities e configurazioni
│   │   ├── content/       # Gestione contenuti senza CMS
│   │   ├── site-config.ts # Configurazione sito
│   │   └── utils.ts       # Utility functions
│   ├── hooks/             # Custom React hooks
│   └── types/             # TypeScript definitions
├── content/               # File markdown per contenuti lunghi
│   └── pages/            # Privacy, Terms, etc.
└── docs/                 # Documentazione markdown
```

## Comandi Disponibili

```bash
# Sviluppo con Turbopack
npm run dev

# Build per produzione
npm run build

# Avvia server produzione
npm run start

# Linting
npm run lint
```

## Features Principali

### 🎨 Design System Completo
- Componenti shadcn/ui preconfigurati
- Sistema di theming con dark/light mode
- Variabili CSS personalizzabili
- Componenti wrapper customizzabili

### 🏗️ Architettura Modulare
- Struttura di cartelle scalabile
- Componenti riutilizzabili
- Gestione contenuti centralizzata senza CMS
- Custom hooks per logica condivisa
- Type definitions centralizzate

### 🚀 Performance Ottimizzate
- Next.js 15 con Turbopack
- React 19 con nuove features
- Tailwind CSS 4 zero-config
- Bundle ottimizzato

### 📱 Responsive Design
- Mobile-first approach
- Componenti responsive
- Layout flessibili
- Supporto touch

## Customizzazione

### Gestione Contenuti
Il template include un sistema completo per gestire contenuti senza CMS:

```bash
src/lib/content/
├── site-config.ts    # Configurazione generale
├── homepage.ts       # Contenuti homepage
├── navigation.ts     # Menu e navigazione
├── services.ts       # Pagina servizi
├── about.ts          # Chi siamo
├── contact.ts        # Contatti
└── locales.ts        # Supporto multilingua
```

**Esempio utilizzo:**
```typescript
import { homepageContent } from '@/lib/content/homepage'

export default function Hero() {
  const { hero } = homepageContent
  return <h1>{hero.title}</h1>
}
```

### Theming
Il sistema di theming è gestito tramite CSS variables in `globals.css`:

```css
:root {
  --background: 0 0% 100%;
  --foreground: 240 10% 3.9%;
  /* ... altre variabili */
}

.dark {
  --background: 240 10% 3.9%;
  --foreground: 0 0% 98%;
  /* ... variabili dark mode */
}
```

### Componenti Custom
Tutti i componenti custom sono in `src/components/custom/` e wrappano i componenti shadcn/ui per aggiungere funzionalità specifiche del progetto.

### File Markdown
Per contenuti lunghi (Privacy, Terms, etc.), usa file markdown in `content/pages/`:

```typescript
import { getMarkdownContent } from '@/lib/markdown'

export default async function PrivacyPage() {
  const content = getMarkdownContent('privacy')
  return <div dangerouslySetInnerHTML={{ __html: content.content }} />
}
```

## Deployment

### Vercel (Raccomandato)
```bash
npm run build
# Deploy automatico con git push
```

### Altri Provider
```bash
npm run build
npm run start
```

## Prossimi Passi

1. 🔧 **Personalizza la configurazione**: Modifica `src/lib/site-config.ts` con i tuoi dati
2. 📝 **Aggiorna i contenuti**: Edita i file in `src/lib/content/` per personalizzare i testi
3. 🎨 **Personalizza il design**: Modifica le variabili CSS in `src/app/globals.css`
4. 📖 **Leggi la documentazione**: Vai su [/docs](/docs) per guide complete

### Documentazione Online
- 🛠️ [Development Guide](/docs/development) - Come sviluppare con il template
- 🧩 [Components](/docs/components) - Documentazione componenti disponibili  
- 🎭 [Theming](/docs/theming) - Sistema di theming e gestione contenuti

## Contributi

I contributi sono benvenuti! Apri una issue o una pull request.

## Licenza

MIT License - vedi [LICENSE](./LICENSE) per dettagli.
