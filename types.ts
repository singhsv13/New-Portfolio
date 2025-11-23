export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  span: 'small' | 'medium' | 'large' | 'tall';
  tech: string[];
  color: string;
  githubLink?: string;
  demoLink?: string;
}

export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  period: string;
  description: string[];
}

export interface SkillCategory {
  name: string;
  skills: string[];
}