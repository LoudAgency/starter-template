# Documentazione Componenti

Guida completa ai componenti disponibili nel template.

## Componenti Custom

### CustomButton

Un wrapper del componente Button di shadcn/ui con funzionalità aggiuntive.

```typescript
import { CustomButton } from "@/components/custom"

// Uso base
<CustomButton>Click me</CustomButton>

// Con loading state
<CustomButton loading>Loading...</CustomButton>

// Con icone
<CustomButton leftIcon={<Icon />}>
  Salva
</CustomButton>

<CustomButton rightIcon={<ArrowRight />}>
  Continua
</CustomButton>

// Varianti
<CustomButton variant="outline">Outline</CustomButton>
<CustomButton variant="ghost">Ghost</CustomButton>
<CustomButton variant="destructive">Delete</CustomButton>
```

#### Props
- `loading?: boolean` - Mostra spinner di caricamento
- `leftIcon?: React.ReactNode` - Icona a sinistra del testo
- `rightIcon?: React.ReactNode` - Icona a destra del testo
- Tutte le props del `Button` base

### CustomCard

Un wrapper del componente Card con layout predefinito.

```typescript
import { CustomCard } from "@/components/custom"

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
</CustomCard>

// Senza hover effect
<CustomCard hover={false}>
  Contenuto statico
</CustomCard>
```

#### Props
- `title?: string` - Titolo della card
- `description?: string` - Descrizione sotto il titolo
- `footer?: React.ReactNode` - Contenuto del footer
- `hover?: boolean` - Abilita effetto hover (default: true)

### ThemeToggle

Componente per cambiare il tema dell'applicazione.

```typescript
import { ThemeToggle } from "@/components/custom"

// Uso nel header o toolbar
<ThemeToggle />
```

## Componenti Layout

### Header

Header principale dell'applicazione con navigazione responsive.

```typescript
import { Header } from "@/components/layout"

<Header
  logo={<Logo />}
  navItems={[
    { title: "Home", href: "/" },
    { title: "About", href: "/about" },
  ]}
  actions={<ThemeToggle />}
/>
```

#### Props
- `logo?: React.ReactNode` - Logo dell'applicazione
- `navItems?: NavItem[]` - Menu di navigazione
- `actions?: React.ReactNode` - Azioni nell'header (es. theme toggle)
- `className?: string` - Classi CSS aggiuntive

### Footer

Footer dell'applicazione con link e informazioni.

```typescript
import { Footer } from "@/components/layout"

<Footer
  logo={<Logo />}
  description="Descrizione del sito"
  navItems={navItems}
  socialLinks={[
    { title: "GitHub", href: "https://github.com", external: true },
    { title: "Twitter", href: "https://twitter.com", external: true },
  ]}
  copyright="© 2024 Il Tuo Sito"
/>
```

#### Props
- `logo?: React.ReactNode` - Logo nel footer
- `description?: string` - Descrizione del sito
- `navItems?: NavItem[]` - Link di navigazione
- `socialLinks?: NavItem[]` - Link social
- `copyright?: string` - Testo copyright

## Componenti Sezioni

### Hero

Sezione hero per la homepage e landing pages.

```typescript
import { Hero } from "@/components/sections"

<Hero
  title="Benvenuto"
  subtitle="Il Miglior Template"
  description="Descrizione coinvolgente del tuo prodotto"
  primaryAction={{
    label: "Inizia Ora",
    href: "/get-started"
  }}
  secondaryAction={{
    label: "Scopri di Più",
    onClick: () => scrollToSection('features')
  }}
  backgroundImage="/hero-bg.jpg"
/>
```

#### Props
- `title: string` - Titolo principale
- `subtitle?: string` - Sottotitolo sopra il titolo
- `description?: string` - Descrizione sotto il titolo
- `primaryAction?: Action` - Azione primaria (CTA)
- `secondaryAction?: Action` - Azione secondaria
- `backgroundImage?: string` - Immagine di sfondo

### Features

Sezione per mostrare le caratteristiche del prodotto.

```typescript
import { Features } from "@/components/sections"
import { Zap, Shield, Rocket } from "lucide-react"

const features = [
  {
    title: "Veloce",
    description: "Performance ottimizzate",
    icon: Zap,
  },
  {
    title: "Sicuro", 
    description: "Massima sicurezza",
    icon: Shield,
  },
  {
    title: "Scalabile",
    description: "Cresce con te",
    icon: Rocket,
  },
]

<Features
  title="Perché Sceglierci"
  description="Le caratteristiche che ci distinguono"
  features={features}
  columns={3}
/>
```

#### Props
- `title?: string` - Titolo della sezione
- `description?: string` - Descrizione della sezione
- `features: FeatureItem[]` - Array delle caratteristiche
- `columns?: 1 | 2 | 3 | 4` - Numero di colonne (default: 3)

### Testimonials

Sezione per mostrare testimonianze e recensioni.

```typescript
import { Testimonials } from "@/components/sections"

const testimonials = [
  {
    quote: "Fantastico prodotto, lo consiglio!",
    author: "Mario Rossi",
    role: "CEO",
    company: "Azienda SpA",
    avatar: "/avatar1.jpg"
  },
  // ...
]

<Testimonials
  title="Cosa Dicono i Clienti"
  description="Testimonianze dei nostri utenti"
  testimonials={testimonials}
  columns={2}
/>
```

#### Props
- `title?: string` - Titolo della sezione
- `description?: string` - Descrizione della sezione  
- `testimonials: TestimonialItem[]` - Array delle testimonianze
- `columns?: 1 | 2 | 3` - Numero di colonne (default: 2)

### CTA (Call To Action)

Sezione di call-to-action per conversioni.

```typescript
import { CTA } from "@/components/sections"

<CTA
  title="Pronto a Iniziare?"
  description="Unisciti a migliaia di utenti soddisfatti"
  variant="gradient"
  primaryAction={{
    label: "Inizia Gratis",
    href: "/signup"
  }}
  secondaryAction={{
    label: "Contattaci",
    href: "/contact"
  }}
/>
```

#### Props
- `title: string` - Titolo della CTA
- `description?: string` - Descrizione della CTA
- `variant?: "default" | "gradient"` - Stile della sezione
- `primaryAction?: Action` - Azione primaria
- `secondaryAction?: Action` - Azione secondaria

## Hooks Personalizzati

### useTheme

Hook per gestire il tema dell'applicazione.

```typescript
import { useTheme } from "@/hooks/use-theme"

function MyComponent() {
  const { theme, toggleTheme, setTheme, mounted } = useTheme()

  if (!mounted) return null // Evita hydration mismatch

  return (
    <div>
      <p>Tema corrente: {theme}</p>
      <button onClick={toggleTheme}>Cambia Tema</button>
      <button onClick={() => setTheme('dark')}>Tema Scuro</button>
      <button onClick={() => setTheme('light')}>Tema Chiaro</button>
      <button onClick={() => setTheme('system')}>Tema Sistema</button>
    </div>
  )
}
```

#### API
- `theme: "light" | "dark" | "system"` - Tema corrente
- `toggleTheme: () => void` - Alterna tra light, dark, system
- `setTheme: (theme) => void` - Imposta tema specifico
- `mounted: boolean` - Indica se il componente è stato montato (utile per SSR)

## Tipi TypeScript

### NavItem
```typescript
interface NavItem {
  title: string
  href: string
  external?: boolean
}
```

### FeatureItem
```typescript
interface FeatureItem {
  title: string
  description: string
  icon?: React.ComponentType<{ className?: string }>
}
```

### TestimonialItem
```typescript
interface TestimonialItem {
  quote: string
  author: string
  role: string
  company?: string
  avatar?: string
}
```

### SiteConfig
```typescript
interface SiteConfig {
  name: string
  description: string
  url: string
  ogImage: string
  links: {
    twitter?: string
    github?: string
    linkedin?: string
  }
}
```

## Esempi Pratici

### Pagina About Completa
```typescript
import { Hero, Features, CTA } from "@/components/sections"
import { Users, Target, Award } from "lucide-react"

const aboutFeatures = [
  {
    title: "Il Nostro Team",
    description: "Professionisti esperti nel settore",
    icon: Users,
  },
  {
    title: "La Nostra Missione",
    description: "Rendere la tecnologia accessibile a tutti",
    icon: Target,
  },
  {
    title: "I Nostri Valori",
    description: "Qualità, innovazione e customer care",
    icon: Award,
  },
]

export default function AboutPage() {
  return (
    <>
      <Hero
        title="Chi Siamo"
        description="Una storia di passione e innovazione nel mondo della tecnologia"
      />
      
      <Features
        title="Quello in Cui Crediamo"
        features={aboutFeatures}
      />
      
      <CTA
        title="Vuoi Saperne di Più?"
        description="Contattaci per scoprire come possiamo aiutarti"
        primaryAction={{ label: "Contattaci", href: "/contact" }}
      />
    </>
  )
}
```

Questa documentazione copre tutti i componenti principali. Per aggiungere nuovi componenti, segui i pattern esistenti e aggiorna questa documentazione!