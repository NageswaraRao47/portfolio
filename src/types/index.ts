export interface TechnologyItem {
  name: string;
  category: 'ai' | 'programming' | 'development' | 'frameworks';
  description?: string;
  badge?: string;
  icon?: string;
}

export interface WorkshopItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  bullets: string[];
  icon: string;
  tag: string;
  accent: 'purple' | 'blue' | 'cyan';
}

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  description: string;
  architectureHighlights: string[];
  techStack: string[];
  githubUrl?: string;
  hasInteractiveDemo?: boolean;
}

export interface TeachingPillar {
  number: string;
  title: string;
  description: string;
  icon: string;
  example: string;
}

export interface GalleryImage {
  id: string;
  title: string;
  collegeCategory: string;
  description: string;
  placeholderText: string;
  aspect: string;
  gradient: string;
  icon: string;
  customImageUrl?: string;
}

