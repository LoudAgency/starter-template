// Contenuti della pagina servizi
export const servicesContent = {
  // Header della pagina
  header: {
    title: "I Nostri Servizi",
    subtitle: "Soluzioni digitali complete per il tuo business",
    description: "Offriamo servizi di sviluppo web, design e consulenza per trasformare le tue idee in realtà digitali."
  },
  
  // Lista servizi principali
  services: [
    {
      id: "web-development",
      title: "Sviluppo Web",
      shortDescription: "Applicazioni web moderne e performanti",
      fullDescription: "Realizziamo applicazioni web complete utilizzando le tecnologie più moderne come React, Next.js, e TypeScript. Ogni progetto è ottimizzato per performance, SEO e user experience.",
      features: [
        "Sviluppo con React e Next.js",
        "Ottimizzazione SEO",
        "Design responsive",
        "Performance ottimizzate",
        "Integrazione API"
      ],
      technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
      startingPrice: "€2.500",
      deliveryTime: "4-8 settimane"
    },
    {
      id: "ui-ux-design",
      title: "Design UI/UX",
      shortDescription: "Interfacce intuitive e user-friendly",
      fullDescription: "Progettiamo interfacce utente coinvolgenti e intuitive, basate su ricerche approfondite e best practices di usabilità.",
      features: [
        "Research e analisi utenti",
        "Wireframing e prototyping",
        "Design system completi",
        "Test di usabilità",
        "Design responsive"
      ],
      technologies: ["Figma", "Adobe Creative Suite", "Principle", "InVision"],
      startingPrice: "€1.500",
      deliveryTime: "2-4 settimane"
    },
    {
      id: "consulting",
      title: "Consulenza Tecnica",
      shortDescription: "Supporto strategico per i tuoi progetti",
      fullDescription: "Offriamo consulenza strategica per ottimizzare i tuoi processi di sviluppo, scegliere le tecnologie giuste e scalare i tuoi progetti.",
      features: [
        "Audit tecnico completo",
        "Strategia tecnologica",
        "Code review",
        "Ottimizzazione performance",
        "Formazione team"
      ],
      technologies: ["Varie secondo necessità"],
      startingPrice: "€150/ora",
      deliveryTime: "Flessibile"
    }
  ],
  
  // Processo di lavoro
  process: {
    title: "Il Nostro Processo",
    subtitle: "Come lavoriamo insieme",
    steps: [
      {
        number: "01",
        title: "Scoperta",
        description: "Analizziamo le tue esigenze e obiettivi per definire la strategia migliore."
      },
      {
        number: "02",
        title: "Progettazione",
        description: "Creiamo wireframe, mockup e prototipi per validare l'approccio."
      },
      {
        number: "03",
        title: "Sviluppo",
        description: "Realizziamo la soluzione seguendo le migliori pratiche di sviluppo."
      },
      {
        number: "04",
        title: "Test & Launch",
        description: "Testiamo accuratamente e lanciamo il progetto con supporto continuo."
      }
    ]
  },
  
  // Chiamata all'azione
  cta: {
    title: "Pronto a Iniziare?",
    subtitle: "Contattaci per discutere il tuo progetto",
    primaryButton: {
      text: "Richiedi Preventivo",
      href: "/contatti"
    },
    secondaryButton: {
      text: "Vedi Portfolio",
      href: "/portfolio"
    }
  }
}