
export enum SectionType {
  ABOUT = 'about',
  EXPERIENCE = 'experience',
  PROJECTS = 'projects',
  SKILLS = 'skills',
  CONTACT = 'contact'
}

export type Language = 'en' | 'it';

export interface LocalizedString {
  en: string;
  it: string;
}

export interface ExperienceItem {
  id: string;
  role: LocalizedString;
  company: string;
  period: LocalizedString;
  location: LocalizedString;
  description: LocalizedString;
  tags: string[];
}

export interface EducationItem {
  id: string;
  school: string;
  degree: LocalizedString;
  period: LocalizedString;
  location: LocalizedString;
  details: LocalizedString[];
}

export interface ProjectItem {
  id: string;
  title: LocalizedString;
  role: LocalizedString;
  period: LocalizedString;
  description: LocalizedString;
  impact: LocalizedString;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  timestamp: number;
}
