// Menu di navigazione del sito
export const navigationContent = {
  // Menu principale
  mainNav: [
    {
      label: "Home",
      href: "/",
      description: "Pagina principale"
    },
    {
      label: "Template",
      href: "/template",
      description: "Presenta il template"
    },
    {
      label: "Documentazione",
      href: "/docs",
      description: "Guide e tutorial"
    },
    {
      label: "Componenti",
      href: "/docs/components",
      description: "Lista componenti"
    },
  ],
  
  // Menu footer
  footerNav: {
    company: {
      title: "Azienda",
      links: [
        { label: "Chi Siamo", href: "/chi-siamo" },
        { label: "Team", href: "/team" },
        { label: "Carriere", href: "/carriere" },
      ]
    },
    services: {
      title: "Servizi",
      links: [
        { label: "Sviluppo Web", href: "/servizi/web-development" },
        { label: "Design UI/UX", href: "/servizi/design" },
        { label: "Consulenza", href: "/servizi/consulenza" },
      ]
    },
    docs: {
      title: "Documentazione",
      links: [
        { label: "Panoramica", href: "/docs" },
        { label: "Componenti", href: "/docs/components" },
        { label: "Tutorial Custom", href: "/docs/custom-components" },
        { label: "Sviluppo", href: "/docs/development" },
        { label: "Theming", href: "/docs/theming" },
      ]
    },
    legal: {
      title: "Legale",
      links: [
        { label: "Privacy Policy", href: "/privacy" },
        { label: "Termini di Servizio", href: "/termini" },
        { label: "Cookie Policy", href: "/cookie" },
      ]
    }
  },
  
  // Breadcrumb
  breadcrumbs: {
    home: "Home",
    separator: "/",
  }
}