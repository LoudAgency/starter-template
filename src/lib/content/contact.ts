// Contenuti della pagina contatti
export const contactContent = {
  // Header della pagina
  header: {
    title: "Contattaci",
    subtitle: "Siamo qui per aiutarti a realizzare il tuo progetto",
    description: "Raccontaci la tua idea e ti forniremo una consulenza gratuita per trovare la soluzione migliore."
  },
  
  // Informazioni di contatto
  contactInfo: {
    title: "Informazioni di Contatto",
    items: [
      {
        icon: "📧",
        label: "Email",
        value: "hello@yourcompany.com",
        href: "mailto:hello@yourcompany.com",
        description: "Per richieste generali e preventivi"
      },
      {
        icon: "📱",
        label: "Telefono",
        value: "+39 123 456 7890",
        href: "tel:+391234567890",
        description: "Chiamaci per una consulenza immediata"
      },
      {
        icon: "📍",
        label: "Indirizzo",
        value: "Via Example 123, 20100 Milano, IT",
        href: "https://maps.google.com/?q=Via+Example+123,+Milano",
        description: "Il nostro ufficio principale"
      },
      {
        icon: "💬",
        label: "WhatsApp",
        value: "+39 123 456 7890",
        href: "https://wa.me/391234567890",
        description: "Scrivici su WhatsApp"
      }
    ]
  },
  
  // Orari di lavoro
  workingHours: {
    title: "Orari di Lavoro",
    schedule: [
      { day: "Lunedì - Venerdì", hours: "9:00 - 18:00" },
      { day: "Sabato", hours: "9:00 - 13:00" },
      { day: "Domenica", hours: "Chiuso" }
    ],
    note: "Per urgenze fuori orario, contattaci tramite email."
  },
  
  // Form di contatto
  contactForm: {
    title: "Invia un Messaggio",
    subtitle: "Compila il form e ti risponderemo entro 24 ore",
    fields: {
      name: {
        label: "Nome Completo",
        placeholder: "Il tuo nome e cognome",
        required: true
      },
      email: {
        label: "Email",
        placeholder: "la-tua-email@esempio.com",
        required: true
      },
      company: {
        label: "Azienda",
        placeholder: "Nome della tua azienda (opzionale)",
        required: false
      },
      phone: {
        label: "Telefono",
        placeholder: "+39 123 456 7890 (opzionale)",
        required: false
      },
      subject: {
        label: "Oggetto",
        placeholder: "Oggetto del messaggio",
        required: true
      },
      message: {
        label: "Messaggio",
        placeholder: "Descrivi il tuo progetto o la tua richiesta...",
        required: true
      }
    },
    submitButton: "Invia Messaggio",
    successMessage: "Grazie per il tuo messaggio! Ti risponderemo entro 24 ore.",
    errorMessage: "Si è verificato un errore. Riprova o contattaci direttamente."
  },
  
  // Tipi di progetti
  projectTypes: {
    title: "Tipo di Progetto",
    subtitle: "Seleziona l'area che ti interessa maggiormente",
    types: [
      {
        id: "website",
        title: "Sito Web",
        description: "Siti web aziendali, portfolio, landing page",
        icon: "🌐"
      },
      {
        id: "webapp",
        title: "Web App",
        description: "Applicazioni web complesse e piattaforme",
        icon: "💻"
      },
      {
        id: "ecommerce",
        title: "E-commerce",
        description: "Negozi online e soluzioni di vendita",
        icon: "🛒"
      },
      {
        id: "design",
        title: "Design UI/UX",
        description: "Progettazione interfacce e user experience",
        icon: "🎨"
      },
      {
        id: "consulting",
        title: "Consulenza",
        description: "Audit tecnico e consulenza strategica",
        icon: "💡"
      },
      {
        id: "other",
        title: "Altro",
        description: "Progetti custom e soluzioni specifiche",
        icon: "🔧"
      }
    ]
  },
  
  // FAQ
  faq: {
    title: "Domande Frequenti",
    items: [
      {
        question: "Quanto tempo ci vuole per sviluppare un sito web?",
        answer: "I tempi variano in base alla complessità del progetto. Un sito web semplice richiede 2-4 settimane, mentre progetti più complessi possono richiedere 2-3 mesi."
      },
      {
        question: "Fornite supporto post-lancio?",
        answer: "Sì, offriamo pacchetti di manutenzione e supporto continuo per tutti i progetti. Include aggiornamenti, backup e assistenza tecnica."
      },
      {
        question: "Lavorate con clienti internazionali?",
        answer: "Assolutamente sì! Lavoriamo con clienti in tutto il mondo e possiamo comunicare in italiano e inglese."
      },
      {
        question: "Quanto costa un progetto?",
        answer: "I costi dipendono dalle specifiche del progetto. Offriamo sempre un preventivo gratuito e dettagliato dopo aver analizzato le vostre esigenze."
      }
    ]
  },
  
  // Call to action
  cta: {
    title: "Pronto a Iniziare?",
    subtitle: "Contattaci oggi per una consulenza gratuita",
    buttons: {
      primary: {
        text: "Richiedi Preventivo",
        href: "#contact-form"
      },
      secondary: {
        text: "Prenota una Call",
        href: "https://calendly.com/yourcompany"
      }
    }
  }
}