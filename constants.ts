import { EducationItem, ExperienceItem, ProjectItem } from './types';

export const MARCO_DATA = {
  name: "Marco Su",
  title: "Supply Chain Planner & Data Analyst",
  location: "Rome, Italy / Guangzhou, China",
  contacts: {
    phone: "+39 3516577168",
    email: "marco.su@edu.unifi.it",
    secondaryEmail: "2422864901@qq.com",
    instagram: "https://www.instagram.com/sumarcoooo",
    linkedin: "https://www.linkedin.com/", // Placeholder
    formspreeId: "mdkjwwwq" // Your Formspree Endpoint ID
  },
  summary: "I bridge the gap between logistics management and digital innovation. With a strong foundation in supply chain dynamics and a passion for data analysis (Python) and design (Figma/Photoshop), I create efficient, visually clear solutions for complex operational problems.",
  skills: [
    "Supply Chain Management",
    "Logistics Modeling",
    "Data Analysis",
    "Python",
    "Microsoft Office",
    "Photoshop",
    "Figma",
    "Photography",
    "Languages: Chinese (Native), English (Fluent), Italian (Beginner)"
  ]
};

export const EDUCATION: EducationItem[] = [
  {
    id: "edu1",
    school: "Guilin University of Technology",
    degree: "Bachelor of Business, Logistics Management",
    period: "Sep 2020 - Jun 2024",
    location: "Guilin, China",
    details: [
      "GPA: 3.4/5 (Top 10%)",
      "Honors: Second-class Scholarship (2021), Third-class Scholarship (2022), Third Prize in College Mathematics.",
      "Key Coursework: Advanced Math (96), Supply Chain Mgmt (95), Logistics System Modeling (95)."
    ]
  }
];

export const EXPERIENCE: ExperienceItem[] = [
  {
    id: "exp1",
    role: "Supply Chain Planner",
    company: "Galax Sea Company",
    period: "Dec 2023 - Jun 2024",
    location: "Guangzhou",
    description: "Focused on project planning and cross-departmental collaboration. Analyzed data for accurate progress scheduling, prepared detailed task plans, and monitored progress to solve issues promptly.",
    tags: ["Project Planning", "Data Analysis", "Coordination"]
  }
];

export const PROJECTS: ProjectItem[] = [
  {
    id: "proj1",
    title: "Rural-community Fresh Food Direct Supply System",
    role: "Team Leader",
    period: "Mar 2021 - Jul 2021",
    description: "Innovated a logistics model adopting cold chain co-distribution to reduce costs. Built an integrated online/offline platform for personalized orders.",
    impact: "Successfully created an efficient direct supply system promoting win-win development between rural areas and communities."
  }
];

export const SYSTEM_INSTRUCTION = `
You are the AI Digital Twin of Marco Su. You are embedded in his personal portfolio website.
Your goal is to answer questions about Marco's background, skills, and experience in a first-person perspective ("I").
Be professional, enthusiastic, and concise.

Here is Marco's context:
Name: Marco Su
Current Location: Rome, Italy
Contact: 
- Email: marco.su@edu.unifi.it (Primary)
- Phone: +39 3516577168
- Instagram: @sumarcoooo

Education:
- Guilin University of Technology (2020-2024), Logistics Management. Top 10% of major.
- Strong math and modeling skills (scored 95+ in relevant courses).

Experience:
- Supply Chain Planner at Galax Sea Company (Guangzhou). Focused on project planning, data analysis, and coordination.

Projects:
- Led a "Rural-community fresh food direct supply system". Innovated logistics models with cold chain co-distribution.

Skills:
- IT: Python, Microsoft Office, Data Analysis.
- Design: Photoshop (Coursera Certified), Figma.
- Languages: Chinese (Native), English (Fluent), Italian (Beginner).
- Interests: Photography (TikTok content creator), Basketball, Cycling.

Tone:
- Professional yet approachable.
- Highlight the blend of "Logistics/Logic" and "Design/Creativity".
- If asked about hiring, suggest contacting via email (marco.su@edu.unifi.it).
- If asked about something not in the resume, politely state you don't have that info but are open to learning.
`;