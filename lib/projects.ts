export interface ProjectType {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  features: string[];
  liveUrl?: string;
  githubUrl?: string;
  devpostUrl?: string;
}

const projects: ProjectType[] = [
  {
    id: 'easyasl',
    title: 'EasyASL',
    description: 'An AI-powered sign language translation and certification webapp capable of translating kinetic ASL signs into spoken English - the first of its kind.',
    image: '/easyasl.png',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Google TTS', 'OpenAI API'],
    features: [
      'Under construction, check back soon!',
    ],
    devpostUrl: 'https://devpost.com/software/easyasl',
    githubUrl: 'https://github.com/azselim/EasyASL'
  },
  {
    id: 'flashnotes',
    title: 'FlashNotes',
    description: 'A flashcard webapp that uses AI and OCR to generate flashcards from written notes.',
    image: '/flashnotes.png',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'framer-motion', 'OpenAI API'],
    features: [
      'Under construction, check back soon!',
    ],
    devpostUrl: 'https://devpost.com/software/flashnotes-i0cymh',
    githubUrl: 'https://github.com/Leg3ndary/flashnotes'
  },
  {
    id: 'mgte-webring',
    title: 'MGTE Webring',
    description: 'A portfolio webring for Management Eng students at Waterloo, inspired by SE Webring.',
    image: 'https://m.media-amazon.com/images/I/61yM93L5qQS.jpg',
    technologies: ['Vite', 'TypeScript', 'Tailwind CSS'],
    features: [
      'Under construction, check back soon!',
    ],
    liveUrl: 'https://mgte-webring.xyz',
    githubUrl: 'https://github.com/alex-wang101/mgte-webring'
  },
  {
    id: 'no-hooting-around',
    title: 'No Hooting Around',
    description: 'An AI-powered intelligent distraction blocking Chrome extension that helps you focus on your work.',
    image: '/no_hooting.png',
    technologies: ['HTML/CSS', 'JavaScript', 'Python', 'OpenAI API', 'Flask'],
    features: [
      'Under construction, check back soon!',
    ],
    devpostUrl: 'https://devpost.com/software/stop-hootin-around',
    githubUrl: 'https://github.com/RohanT766/No-Hooting-Around'
  }
];

export function getAllProjectIds(): string[] {
  return projects.map(project => project.id);
}

export function getProjectData(projectId: string): ProjectType | undefined {
  return projects.find(project => project.id === projectId);
}