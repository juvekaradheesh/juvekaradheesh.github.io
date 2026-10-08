export interface Experience {
  company: string;
  time: string;
  title: string;
  location?: string;
  description?: string;
  logo?: string;
  category?: 'Industry' | 'Research';
}

export interface Education {
  school: string;
  time: string;
  degree: string;
  location?: string;
  description?: string;
  logo?: string;
}

export interface Publication {
  title: string;
  authors: string;
  journal: string;
  time: string;
  link?: string;
  paperLink?: string;
  codeLink?: string;
  abstract?: string;
  abstractSource?: string;
  notes?: string;
  image?: string;
}

export function isExperience(element: Experience | Education): element is Experience {
  return 'title' in element && 'company' in element;
}
