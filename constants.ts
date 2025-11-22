
import { EducationItem, ExperienceItem, ProjectItem, LocalizedString } from './types';

export const MARCO_DATA = {
  name: "Marco Su",
  title: {
    en: "Digital Communicator & Supply Chain Strategist",
    it: "Comunicatore Digitale & Stratega Supply Chain"
  },
  location: {
    en: "Florence, Italy",
    it: "Firenze, Italia"
  },
  contacts: {
    phone: "+39 3516577168",
    email: "marco.su@edu.unifi.it",
    secondaryEmail: "2422864901@qq.com",
    instagram: "https://www.instagram.com/sumarcoooo",
    formspreeId: "mdkjwwwq"
  },
  summary: {
    en: "Currently pursuing a Master's in Communications at the University of Florence. I combine my background in logic-driven supply chain management with creative digital strategies. I am exploring how data, visual design, and narrative converge to create impactful digital experiences.",
    it: "Attualmente frequento la Laurea Magistrale in Scienze della Comunicazione all'Università di Firenze. Unisco il mio background logico nella gestione della supply chain con strategie digitali creative. Esploro come dati, visual design e narrazione convergano per creare esperienze digitali d'impatto."
  }
};

export const UI_TEXT = {
  nav: {
    work: { en: "Work", it: "Lavori" },
    journey: { en: "My Journey", it: "Percorso" },
    arsenal: { en: "Arsenal", it: "Competenze" },
    contact: { en: "Contact", it: "Contatti" }
  },
  hero: {
    status: { en: "Master's Student", it: "Studente Magistrale" },
    introPrefix: { en: "I am", it: "Sono" },
    introMid: { en: "Currently based in Florence, studying Communications at", it: "Attualmente a Firenze, studio Comunicazione all'" },
    introSuffix: { en: "Bridging the gap between operational data and visual storytelling.", it: "Colmo il divario tra dati operativi e visual storytelling." },
    btnMessage: { en: "Say Hello", it: "Di' Ciao" },
    btnInsta: { en: "My Instagram", it: "Instagram" }
  },
  statusCard: {
    label: { en: "Current Status", it: "Stato Attuale" },
    basedIn: { en: "Based in", it: "Vivo a" },
    city: { en: "Florence", it: "Firenze" },
    degree: { en: "Master's in Communications", it: "Magistrale in Comunicazione" },
    university: { en: "University of Florence (UniFi)", it: "Università di Firenze (UniFi)" },
    stats: {
      comm: { en: "Communications", it: "Comunicazione" },
      learning: { en: "Learning...", it: "In Corso..." },
      data: { en: "Data Analysis", it: "Analisi Dati" },
      design: { en: "Design", it: "Design" }
    }
  },
  projects: {
    label: { en: "Selected Works", it: "Lavori Selezionati" },
    title: { en: "Case Studies", it: "Casi Studio" },
    subtitle: { en: "Strategic initiatives focusing on cost reduction, logistics optimization, and digital integration.", it: "Iniziative strategiche focalizzate su riduzione costi, ottimizzazione logistica e integrazione digitale." },
    role: { en: "Role", it: "Ruolo" },
    challenge: { en: "Challenge", it: "Sfida" },
    impact: { en: "Impact", it: "Impatto" },
    btnInquire: { en: "Inquire about Project", it: "Richiedi Info Progetto" },
    tag: { en: "Optimization Project", it: "Progetto Ottimizzazione" }
  },
  timeline: {
    label: { en: "Career Path", it: "Percorso" },
    title1: { en: "Experience &", it: "Esperienza &" },
    title2: { en: "Education.", it: "Istruzione." }
  },
  skills: {
    label: { en: "Capabilities", it: "Capacità" },
    title: { en: "The Arsenal", it: "L'Arsenale" },
    catSupply: { en: "Supply Chain & Operations", it: "Supply Chain & Operazioni" },
    catDev: { en: "Development", it: "Sviluppo" },
    catDesign: { en: "Design & Creative", it: "Design & Creatività" },
    catLang: { en: "Languages & Global", it: "Lingue & Globale" },
    catInterest: { en: "Interests", it: "Interessi" }
  },
  contact: {
    title: { en: "Leave a Message", it: "Lascia un Messaggio" },
    subtitle: { en: "Direct to my Inbox", it: "Diretto alla mia Inbox" },
    successTitle: { en: "Message Sent!", it: "Messaggio Inviato!" },
    successMsg: { en: "Thanks for reaching out. I'll get back to you at my earliest convenience.", it: "Grazie per avermi contattato. Ti risponderò al più presto." },
    btnClose: { en: "Close", it: "Chiudi" },
    labelName: { en: "Your Name", it: "Il tuo Nome" },
    labelSubject: { en: "Subject", it: "Oggetto" },
    labelMessage: { en: "Message", it: "Messaggio" },
    btnSend: { en: "Send Message", it: "Invia Messaggio" },
    btnSending: { en: "Sending...", it: "Invio..." }
  },
  footer: {
    rights: { en: "All Rights Reserved.", it: "Tutti i Diritti Riservati." }
  }
};

export const EDUCATION: EducationItem[] = [
  {
    id: "edu_master",
    school: "University of Florence (UniFi)",
    degree: { en: "Master's in Communications & Media Strategies", it: "Laurea Magistrale in Strategie della Comunicazione Pubblica e Politica" },
    period: { en: "2025 - Present", it: "2025 - Presente" },
    location: { en: "Florence, Italy", it: "Firenze, Italia" },
    details: [
      { en: "Focusing on digital communication strategies, media theory, and cross-cultural narratives.", it: "Focus su strategie di comunicazione digitale, teoria dei media e narrazioni interculturali." },
      { en: "Living and studying in the heart of the Renaissance.", it: "Vivo e studio nel cuore del Rinascimento." }
    ]
  },
  {
    id: "edu1",
    school: "Guilin University of Technology",
    degree: { en: "Bachelor of Business, Logistics Management", it: "Laurea Triennale in Gestione Logistica" },
    period: { en: "Sep 2020 - Jun 2024", it: "Set 2020 - Giu 2024" },
    location: { en: "Guilin, China", it: "Guilin, Cina" },
    details: [
      { en: "GPA: 3.4/5 (Top 10%)", it: "GPA: 3.4/5 (Top 10%)" },
      { en: "Honors: Second-class Scholarship (2021), Third-class Scholarship (2022), Third Prize in College Mathematics.", it: "Premi: Borsa di studio di seconda classe (2021), Borsa di studio di terza classe (2022), Terzo premio in Matematica universitaria." },
      { en: "Key Coursework: Advanced Math (96), Supply Chain Mgmt (95), Logistics System Modeling (95).", it: "Corsi Chiave: Matematica Avanzata (96), Supply Chain Mgmt (95), Modellazione Sistemi Logistici (95)." }
    ]
  }
];

export const EXPERIENCE: ExperienceItem[] = [
  {
    id: "exp1",
    role: { en: "Supply Chain Planner", it: "Pianificatore Supply Chain" },
    company: "Galax Sea Company",
    period: { en: "Dec 2023 - Jun 2024", it: "Dic 2023 - Giu 2024" },
    location: { en: "Guangzhou", it: "Guangzhou" },
    description: {
      en: "Focused on project planning and cross-departmental collaboration. Analyzed data for accurate progress scheduling, prepared detailed task plans, and monitored progress to solve issues promptly.",
      it: "Focalizzato sulla pianificazione progetti e collaborazione inter-dipartimentale. Analizzato dati per programmazione accurata, preparato piani dettagliati e monitorato i progressi per risolvere prontamente i problemi."
    },
    tags: ["Project Planning", "Data Analysis", "Coordination"]
  }
];

export const PROJECTS: ProjectItem[] = [
  {
    id: "proj1",
    title: { en: "Rural-community Fresh Food System", it: "Sistema Fornitura Alimenti Rurali" },
    role: { en: "Team Leader", it: "Team Leader" },
    period: { en: "Mar 2021 - Jul 2021", it: "Mar 2021 - Lug 2021" },
    description: {
      en: "Innovated a logistics model adopting cold chain co-distribution to reduce costs. Built an integrated online/offline platform for personalized orders.",
      it: "Innovato un modello logistico adottando la co-distribuzione della catena del freddo per ridurre i costi. Costruita una piattaforma integrata online/offline per ordini personalizzati."
    },
    impact: {
      en: "Successfully created an efficient direct supply system promoting win-win development between rural areas and communities.",
      it: "Creato con successo un efficiente sistema di fornitura diretta promuovendo uno sviluppo vantaggioso tra aree rurali e comunità."
    }
  }
];

export const SYSTEM_INSTRUCTION = `
You are the AI Digital Twin of Marco Su.
Context:
Name: Marco Su
Location: Florence, Italy (Firenze)
Role: Master's Student in Communications at UniFi.
Background: Logistics Management, Data Analysis.
`;