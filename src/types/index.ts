export interface Achievement {
  title: string
  description: string
  metric: string
}

export interface Experience {
  id: string
  company: string
  role: string
  period: string
  duration: string
  location: string
  type: string
  impact: string
  color: string
  achievements: Achievement[]
  technologies: string[]
}

export interface Skill {
  name: string
  level: number
  tag: string
}

export interface SkillCategory {
  id: string
  title: string
  icon: string
  color: string
  skills: Skill[]
}

export interface Certification {
  id: string
  title: string
  issuer: string
  platform: string
  date: string
  type: string
  category: string
  color: string
  icon: string
  credlyUrl?: string
}

export interface Education {
  id: string
  degree: string
  field: string
  institution: string
  university: string
  period: string
  grade: string
  icon: string
  color: string
  highlights: string[]
}

export type Theme = 'dark' | 'light'
