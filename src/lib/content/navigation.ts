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
      label: "Servizi",
      href: "/servizi",
      description: "I nostri servizi"
    },
    {
      label: "Chi Siamo",
      href: "/chi-siamo",
      description: "La nostra storia"
    },
    {
      label: "Contatti",
      href: "/contatti",
      description: "Mettiti in contatto"
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
    support: {
      title: "Supporto",
      links: [
        { label: "FAQ", href: "/faq" },
        { label: "Documentazione", href: "/docs" },
        { label: "Contatti", href: "/contatti" },
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