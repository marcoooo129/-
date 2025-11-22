export enum SectionType {
  ABOUT = 'about',
  EXPERIENCE = 'experience',
  PROJECTS = 'projects',
  SKILLS = 'skills',
  CONTACT = 'contact'
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  location: string;
  description: string;
  tags: string[];
}

export interface EducationItem {
  id: string;
  school: string;
  degree: string;
  period: string;
  location: string;
  details: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  role: string;
  period: string;
  description: string;
  impact: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  timestamp: number;
}
