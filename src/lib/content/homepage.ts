// Contenuti della homepage
export const homepageContent = {
  // Sezione Hero
  hero: {
    title: "🚀 Starter Template",
    subtitle: "Un template moderno e completo con Next.js 15, React 19, shadcn/ui e Tailwind CSS 4",
    description: "Inizia il tuo progetto con le tecnologie più moderne e una base solida già configurata.",
    primaryCta: {
      text: "Inizia Subito",
      href: "/docs/development"
    },
    secondaryCta: {
      text: "GitHub",
      href: "https://github.com/your-repo"
    }
  },
  
  // Features Grid
  features: [
    {
      icon: "⚡",
      title: "Next.js 15",
      description: "Latest version con React 19 e Turbopack per sviluppo veloce"
    },
    {
      icon: "🎨",
      title: "shadcn/ui",
      description: "Componenti accessibili e personalizzabili built con Radix UI"
    },
    {
      icon: "🌈",
      title: "Tailwind 4",
      description: "Zero configuration con CSS moderno e performance ottimizzate"
    },
    {
      icon: "🔧",
      title: "TypeScript",
      description: "Type safety completo con definizioni custom e pattern moderni"
    }
  ],
  
  // Quick Start Section
  quickStart: {
    title: "⚡ Quick Start",
    steps: [
      {
        command: "npm install",
        description: "Installa dipendenze"
      },
      {
        command: "npm run dev",
        description: "Avvia server di sviluppo"
      },
      {
        command: "http://localhost:3000",
        description: "Apri nel browser"
      }
    ]
  },
  
  // Documentation Cards
  documentation: {
    title: "📚 Documentazione",
    cards: [
      {
        icon: "🛠️",
        title: "Development Guide",
        description: "Come iniziare a sviluppare con il template",
        href: "/docs/development"
      },
      {
        icon: "🧩",
        title: "Components",
        description: "Documentazione di tutti i componenti disponibili",
        href: "/docs/components"
      },
      {
        icon: "🎭",
        title: "Theming",
        description: "Sistema di theming e personalizzazione CSS",
        href: "/docs/theming"
      }
    ]
  },
  
  // Status Section
  status: {
    badge: "Template Ready for Development",
    description: "Tutti i componenti sono configurati e pronti per essere personalizzati"
  }
}