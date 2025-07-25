# Sistema di Theming

Guida completa per personalizzare l'aspetto del tuo progetto.

## Panoramica

Il template utilizza un sistema di theming moderno basato su:
- **CSS Variables** per i colori
- **Tailwind CSS 4** per le utility classes
- **shadcn/ui** per i componenti base
- **Hook personalizzato** per la gestione del tema

## Struttura del Sistema

### CSS Variables

Le variabili sono definite in `src/app/globals.css`:

```css
:root {
  /* Colori di base */
  --background: 0 0% 100%;
  --foreground: 240 10% 3.9%;
  
  /* Componenti */
  --card: 0 0% 100%;
  --card-foreground: 240 10% 3.9%;
  --popover: 0 0% 100%;
  --popover-foreground: 240 10% 3.9%;
  
  /* Azioni */
  --primary: 240 9% 17%;
  --primary-foreground: 0 0% 98%;
  --secondary: 240 4.8% 95.9%;
  --secondary-foreground: 240 5.9% 10%;
  
  /* Stati */
  --muted: 240 4.8% 95.9%;
  --muted-foreground: 240 3.8% 46.1%;
  --accent: 240 4.8% 95.9%;
  --accent-foreground: 240 5.9% 10%;
  --destructive: 0 84.2% 60.2%;
  --destructive-foreground: 0 0% 98%;
  
  /* Bordi e input */
  --border: 240 5.9% 90%;
  --input: 240 5.9% 90%;
  --ring: 240 10% 3.9%;
  
  /* Geometria */
  --radius: 0.625rem;
}
```

### Dark Mode

```css
.dark {
  --background: 240 10% 3.9%;
  --foreground: 0 0% 98%;
  --card: 240 10% 3.9%;
  --card-foreground: 0 0% 98%;
  --primary: 0 0% 98%;
  --primary-foreground: 240 5.9% 10%;
  /* ... altre variabili dark */
}
```

## Personalizzazione

### 1. Cambiare i Colori Base

Per personalizzare la palette colori, modifica le variabili in `src/app/globals.css`:

```css
:root {
  /* Brand Colors - Esempio: Tema Blu */
  --primary: 221 83% 53%;          /* #2563eb */
  --primary-foreground: 0 0% 98%;  /* #fafafa */
  
  /* Esempio: Tema Verde */
  --primary: 142 76% 36%;          /* #16a34a */
  --primary-foreground: 0 0% 98%;
  
  /* Esempio: Tema Rosso */
  --primary: 0 84% 60%;            /* #ef4444 */
  --primary-foreground: 0 0% 98%;
}
```

### 2. Creare Varianti di Colore

Aggiungi nuove variabili per colori custom:

```css
:root {
  /* Colori Brand Custom */
  --brand-blue: 221 83% 53%;
  --brand-green: 142 76% 36%;
  --brand-orange: 25 95% 53%;
  
  /* Gradients */
  --gradient-start: var(--brand-blue);
  --gradient-end: var(--brand-green);
}

.dark {
  /* Versioni dark dei colori custom */
  --brand-blue: 221 70% 60%;
  --brand-green: 142 60% 45%;
  --brand-orange: 25 80% 60%;
}
```

Usa in Tailwind:

```typescript
<div className="bg-[hsl(var(--brand-blue))] text-white">
  Contenuto con colore custom
</div>

<div className="bg-gradient-to-r from-[hsl(var(--gradient-start))] to-[hsl(var(--gradient-end))]">
  Gradiente personalizzato
</div>
```

### 3. Personalizzare i Componenti

#### Varianti di Button Personalizzate

```css
/* Aggiungi in globals.css */
.btn-brand {
  @apply bg-[hsl(var(--brand-blue))] text-white hover:bg-[hsl(var(--brand-blue))]/90;
}

.btn-gradient {
  @apply bg-gradient-to-r from-[hsl(var(--gradient-start))] to-[hsl(var(--gradient-end))] text-white;
}
```

Usa nei componenti:

```typescript
<CustomButton className="btn-brand">
  Brand Button
</CustomButton>

<CustomButton className="btn-gradient">
  Gradient Button
</CustomButton>
```

#### Estendere CustomButton

```typescript
// components/custom/brand-button.tsx
import { CustomButton, CustomButtonProps } from "./custom-button"
import { cn } from "@/lib/utils"

interface BrandButtonProps extends CustomButtonProps {
  variant?: "blue" | "green" | "orange" | "gradient"
}

export function BrandButton({ variant = "blue", className, ...props }: BrandButtonProps) {
  const variantStyles = {
    blue: "bg-[hsl(var(--brand-blue))] text-white hover:bg-[hsl(var(--brand-blue))]/90",
    green: "bg-[hsl(var(--brand-green))] text-white hover:bg-[hsl(var(--brand-green))]/90",
    orange: "bg-[hsl(var(--brand-orange))] text-white hover:bg-[hsl(var(--brand-orange))]/90",
    gradient: "bg-gradient-to-r from-[hsl(var(--gradient-start))] to-[hsl(var(--gradient-end))] text-white"
  }
  
  return (
    <CustomButton 
      className={cn(variantStyles[variant], className)}
      {...props} 
    />
  )
}
```

### 4. Tipografia Personalizzata

#### Font Personalizzati

```typescript
// src/app/layout.tsx
import { Inter, Roboto_Mono } from "next/font/google"

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
})

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono", 
  subsets: ["latin"],
})

// Applica nel body
<body className={`${inter.variable} ${robotoMono.variable}`}>
```

```css
/* globals.css */
@theme inline {
  --font-sans: var(--font-inter);
  --font-mono: var(--font-roboto-mono);
}
```

#### Scale Tipografiche Custom

```css
:root {
  /* Tipografia Custom */
  --text-xs: 0.75rem;     /* 12px */
  --text-sm: 0.875rem;    /* 14px */
  --text-base: 1rem;      /* 16px */
  --text-lg: 1.125rem;    /* 18px */
  --text-xl: 1.25rem;     /* 20px */
  --text-2xl: 1.5rem;     /* 24px */
  --text-3xl: 1.875rem;   /* 30px */
  --text-4xl: 2.25rem;    /* 36px */
  --text-5xl: 3rem;       /* 48px */
  --text-6xl: 3.75rem;    /* 60px */
}
```

### 5. Spacing e Layout

#### Spacing Custom

```css
:root {
  /* Spacing System */
  --space-xs: 0.25rem;    /* 4px */
  --space-sm: 0.5rem;     /* 8px */
  --space-md: 1rem;       /* 16px */
  --space-lg: 1.5rem;     /* 24px */
  --space-xl: 2rem;       /* 32px */
  --space-2xl: 3rem;      /* 48px */
  --space-3xl: 4rem;      /* 64px */
  
  /* Container Sizes */
  --container-sm: 640px;
  --container-md: 768px;
  --container-lg: 1024px;
  --container-xl: 1280px;
  --container-2xl: 1536px;
}
```

#### Border Radius Personalizzato

```css
:root {
  /* Border Radius */
  --radius-none: 0;
  --radius-sm: 0.125rem;   /* 2px */
  --radius-md: 0.375rem;   /* 6px */
  --radius-lg: 0.5rem;     /* 8px */
  --radius-xl: 0.75rem;    /* 12px */
  --radius-2xl: 1rem;      /* 16px */
  --radius-full: 9999px;
}
```

### 6. Temi Multipli

#### Creare Temi Aggiuntivi

```css
/* Tema Corporate */
.theme-corporate {
  --primary: 225 29% 25%;      /* Navy blu */
  --secondary: 210 11% 71%;    /* Grigio corporate */
  --accent: 197 100% 48%;      /* Azzurro */
}

/* Tema Creative */
.theme-creative {
  --primary: 330 81% 60%;      /* Rosa vibrante */
  --secondary: 289 100% 78%;   /* Viola chiaro */
  --accent: 50 100% 50%;       /* Giallo lime */
}

/* Tema Minimal */
.theme-minimal {
  --primary: 0 0% 9%;          /* Nero quasi */
  --secondary: 0 0% 96%;       /* Grigio chiarissimo */
  --accent: 0 0% 45%;          /* Grigio medio */
}
```

#### Hook per Temi Multipli

```typescript
// hooks/use-multi-theme.ts
"use client"

import { useEffect, useState } from "react"

type Theme = "light" | "dark" | "corporate" | "creative" | "minimal"

export function useMultiTheme() {
  const [theme, setTheme] = useState<Theme>("light")

  useEffect(() => {
    const root = document.documentElement
    root.className = theme
  }, [theme])

  return { theme, setTheme }
}
```

### 7. Animazioni e Transizioni

#### CSS Custom per Animazioni

```css
/* Animazioni Custom */
@keyframes slide-up {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fade-in {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes scale-in {
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

/* Utility Classes */
.animate-slide-up {
  animation: slide-up 0.5s ease-out;
}

.animate-fade-in {
  animation: fade-in 0.3s ease-out;
}

.animate-scale-in {
  animation: scale-in 0.2s ease-out;
}
```

### 8. Responsive Design

#### Breakpoints Custom

```css
/* Media Queries Custom */
@media (min-width: 480px) {
  /* Mobile Large */
}

@media (min-width: 768px) {
  /* Tablet */
}

@media (min-width: 1024px) {
  /* Desktop */
}

@media (min-width: 1280px) {
  /* Desktop Large */
}

@media (min-width: 1536px) {
  /* Desktop XL */
}
```

### 9. Best Practices

#### Nomenclatura Variabili
- Usa nomi semantici: `--primary`, `--secondary`
- Mantieni consistenza: `--color-primary`, `--color-secondary`
- Raggruppa per categoria: `--text-*`, `--space-*`, `--radius-*`

#### Organizzazione CSS
```css
/* 1. CSS Variables */
:root { /* ... */ }

/* 2. Dark Theme */
.dark { /* ... */ }

/* 3. Component Styles */
.custom-component { /* ... */ }

/* 4. Utility Classes */
.btn-brand { /* ... */ }

/* 5. Animations */
@keyframes { /* ... */ }
```

#### Testing dei Temi
- Testa tutti i componenti in light/dark mode
- Verifica contrasto e accessibilità
- Controlla su diversi dispositivi
- Valida con tools di accessibilità

## Esempi Pratici

### Tema E-commerce
```css
:root {
  --primary: 16 185% 29%;        /* Verde acquisto */
  --secondary: 43 89% 38%;       /* Arancio offerte */
  --accent: 220 91% 56%;         /* Blu link */
  --success: 142 76% 36%;        /* Verde successo */
  --warning: 38 92% 50%;         /* Giallo warning */
  --error: 0 84% 60%;           /* Rosso errore */
}
```

### Tema Portfolio
```css
:root {
  --primary: 0 0% 9%;           /* Nero elegante */
  --secondary: 210 17% 95%;     /* Grigio chiarissimo */
  --accent: 271 91% 65%;        /* Viola creativo */
  --gradient-start: 271 91% 65%;
  --gradient-end: 312 73% 57%;
}
```

Il sistema di theming è completamente personalizzabile. Sperimenta con diverse combinazioni per trovare l'aspetto perfetto per il tuo progetto!