// Contenuti multilingua
import { Locale } from './index'

// Contenuti comuni tradotti
export const localizedContent = {
  it: {
    // Comuni
    common: {
      loading: "Caricamento...",
      error: "Errore",
      success: "Successo",
      readMore: "Leggi di più",
      viewAll: "Vedi tutto",
      contactUs: "Contattaci",
      getStarted: "Inizia ora",
      learnMore: "Scopri di più",
      backToHome: "Torna alla home",
      comingSoon: "Prossimamente"
    },
    
    // Navigazione
    navigation: {
      home: "Home",
      services: "Servizi",
      about: "Chi Siamo",
      contact: "Contatti",
      blog: "Blog",
      portfolio: "Portfolio"
    },
    
    // Form
    form: {
      name: "Nome",
      email: "Email",
      message: "Messaggio",
      subject: "Oggetto",
      phone: "Telefono",
      company: "Azienda",
      send: "Invia",
      required: "Campo obbligatorio",
      invalidEmail: "Email non valida",
      success: "Messaggio inviato con successo!",
      error: "Errore nell'invio del messaggio"
    },
    
    // Date e tempo
    date: {
      months: [
        "Gennaio", "Febbraio", "Marzo", "Aprile", "Maggio", "Giugno",
        "Luglio", "Agosto", "Settembre", "Ottobre", "Novembre", "Dicembre"
      ],
      days: [
        "Domenica", "Lunedì", "Martedì", "Mercoledì", 
        "Giovedì", "Venerdì", "Sabato"
      ]
    }
  },
  
  en: {
    // Common
    common: {
      loading: "Loading...",
      error: "Error",
      success: "Success",
      readMore: "Read more",
      viewAll: "View all",
      contactUs: "Contact us",
      getStarted: "Get started",
      learnMore: "Learn more",
      backToHome: "Back to home",
      comingSoon: "Coming soon"
    },
    
    // Navigation
    navigation: {
      home: "Home",
      services: "Services",
      about: "About",
      contact: "Contact",
      blog: "Blog",
      portfolio: "Portfolio"
    },
    
    // Form
    form: {
      name: "Name",
      email: "Email",
      message: "Message",
      subject: "Subject",
      phone: "Phone",
      company: "Company",
      send: "Send",
      required: "Required field",
      invalidEmail: "Invalid email",
      success: "Message sent successfully!",
      error: "Error sending message"
    },
    
    // Date and time
    date: {
      months: [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
      ],
      days: [
        "Sunday", "Monday", "Tuesday", "Wednesday", 
        "Thursday", "Friday", "Saturday"
      ]
    }
  }
}

// Hook per accedere ai contenuti localizzati
export function useLocalizedContent(locale: Locale = 'it') {
  return localizedContent[locale] || localizedContent.it
}

// Utility per formattare date
export function formatDate(date: Date, locale: Locale = 'it'): string {
  const content = localizedContent[locale] || localizedContent.it
  const day = content.date.days[date.getDay()]
  const month = content.date.months[date.getMonth()]
  const dayNum = date.getDate()
  const year = date.getFullYear()
  
  if (locale === 'it') {
    return `${day}, ${dayNum} ${month} ${year}`
  } else {
    return `${day}, ${month} ${dayNum}, ${year}`
  }
}