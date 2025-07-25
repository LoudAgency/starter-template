# Guida allo Sviluppo

Questa guida ti aiuterà a iniziare a sviluppare con il nostro starter template.

## Setup Iniziale

### 1. Personalizzazione Base

Prima di iniziare, personalizza questi file essenziali:

#### `lib/site-config.ts`
```typescript
export const siteConfig: SiteConfig = {
  name: "Il Tuo Progetto",
  description: "Descrizione del tuo progetto",
  url: "https://tuodominio.com",
  ogImage: "https://tuodominio.com/og.jpg",
  links: {
    twitter: "https://twitter.com/tuoaccount",
    github: "https://github.com/tuoaccount/repository",
    linkedin: "https://linkedin.com/in/tuoprofilo",
  },
}
```

#### `src/app/layout.tsx`
Aggiorna i metadati SEO:
```typescript
export const metadata: Metadata = {
  title: siteConfig.name,
  description: siteConfig.description,
  // ... altri metadati
}
```

### 2. Struttura dei Componenti

Il template segue una struttura modulare:

```
components/
├── ui/           # Componenti shadcn/ui base
├── custom/       # Wrapper personalizzati
├── layout/       # Header, Footer, Navigation
└── sections/     # Sezioni della homepage
```

#### Componenti UI Base
I componenti in `components/ui/` sono generati da shadcn/ui e non dovrebbero essere modificati direttamente.

#### Componenti Custom
Usa i componenti in `components/custom/` per estendere quelli base:

```typescript
// components/custom/custom-button.tsx
import { Button } from "@/components/ui/button"

interface CustomButtonProps extends ButtonProps {
  loading?: boolean
  leftIcon?: React.ReactNode
}

export function CustomButton({ loading, leftIcon, ...props }) {
  return (
    <Button {...props}>
      {loading ? <Spinner /> : leftIcon}
      {props.children}
    </Button>
  )
}
```

### 3. Aggiungere Nuovi Componenti shadcn/ui

```bash
# Aggiungi nuovi componenti
npx shadcn@latest add tooltip
npx shadcn@latest add dropdown-menu
npx shadcn@latest add form

# Lista componenti disponibili
npx shadcn@latest add --help
```

### 4. Sistema di Theming

#### Variabili CSS
Le variabili di tema sono definite in `src/app/globals.css`:

```css
:root {
  --primary: 240 9% 17%;
  --secondary: 240 4.8% 95.9%;
  /* ... */
}

.dark {
  --primary: 0 0% 98%;
  --secondary: 240 3.7% 15.9%;
  /* ... */
}
```

#### Hook useTheme
```typescript
import { useTheme } from "@/hooks/use-theme"

function MyComponent() {
  const { theme, toggleTheme, setTheme } = useTheme()
  
  return (
    <button onClick={toggleTheme}>
      Tema corrente: {theme}
    </button>
  )
}
```

### 5. Patterns di Sviluppo

#### Creazione di una Nuova Pagina
```typescript
// src/app/about/page.tsx
import { Hero, Features } from "@/components/sections"

export default function AboutPage() {
  return (
    <>
      <Hero
        title="Chi Siamo"
        description="La nostra storia..."
      />
      <Features features={aboutFeatures} />
    </>
  )
}
```

#### Creazione di una Nuova Sezione
```typescript
// components/sections/pricing.tsx
import { CustomCard, CustomButton } from "@/components/custom"

interface PricingProps {
  plans: PricingPlan[]
}

export function Pricing({ plans }: PricingProps) {
  return (
    <section className="py-24">
      <div className="container">
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <CustomCard key={plan.id} title={plan.name}>
              <div className="text-3xl font-bold">{plan.price}</div>
              <CustomButton className="w-full mt-4">
                Scegli Piano
              </CustomButton>
            </CustomCard>
          ))}
        </div>
      </div>
    </section>
  )  
}
```

### 6. Best Practices

#### TypeScript
- Usa sempre i tipi definiti in `types/index.ts`
- Crea nuovi tipi per componenti complessi
- Usa `interface` per le props dei componenti

#### Styling
- Usa le classi Tailwind predefinite
- Per stili custom, aggiungi classi in `globals.css`
- Mantieni la consistenza con il design system

#### Performance
- Usa `"use client"` solo quando necessario
- Ottimizza le immagini con `next/image`
- Lazy loading per componenti pesanti

#### Accessibilità
- I componenti shadcn/ui sono già accessibili
- Aggiungi `aria-label` per elementi interattivi
- Testa con screen reader

### 7. Testing del Progetto

```bash
# Verifica build
npm run build

# Controlla linting
npm run lint

# Test locale produzione
npm run start
```

### 8. Troubleshooting

#### Problemi con shadcn/ui e React 19
Se hai problemi con peer dependencies:
```bash
npm install --legacy-peer-deps
```

#### Errori di Tailwind CSS 4
Assicurati che `postcss.config.mjs` sia configurato correttamente:
```javascript
const config = {
  plugins: ["@tailwindcss/postcss"],
}
export default config
```

#### Problemi di Hydration
Usa `suppressHydrationWarning` nell'elemento `<html>` per componenti che cambiano tra server e client (come il theme toggle).

## Prossimi Passi

1. Leggi la [documentazione dei componenti](./COMPONENTS.md)
2. Scopri il [sistema di theming](./THEMING.md)
3. Esplora gli esempi pratici

Hai domande? Apri una issue nel repository!