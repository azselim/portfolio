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
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Google TTS', 'OpenAI API'],
    features: [
      'Responsive product catalog with filtering and search',
      'Secure payment processing with Stripe',
      'User authentication and account management',
      'Order tracking and history',
      'Admin dashboard for inventory management'
    ],
    devpostUrl: 'https://devpost.com/software/easyasl',
    githubUrl: 'https://github.com/azselim/EasyASL'
  },
  {
    id: 'flashnotes',
    title: 'FlashNotes',
    description: 'A flashcard webapp that uses AI and OCR to generate flashcards from written notes.',
    image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'framer-motion', 'OpenAI API'],
    features: [
      'Real-time updates and collaboration',
      'Drag-and-drop task organization',
      'Team management and permissions',
      'Task comments and attachments',
      'Progress tracking and reporting'
    ],
    devpostUrl: 'https://devpost.com/software/flashnotes-i0cymh',
    githubUrl: 'https://github.com/Leg3ndary/flashnotes'
  },
  {
    id: 'mgte-webring',
    title: 'MGTE Webring',
    description: 'A portfolio webring for Management Eng students at Waterloo, inspired by SE Webring.',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31',
    technologies: ['Vite', 'TypeScript', 'Tailwind CSS'],
    features: [
      'Text-to-image generation',
      'Style transfer and image manipulation',
      'Gallery of generated images',
      'Image download and sharing',
      'Custom style presets'
    ],
    liveUrl: 'https://mgte-webring.xyz',
    githubUrl: 'https://github.com/alex-wang101/mgte-webring'
  }
];

export function getAllProjectIds(): string[] {
  return projects.map(project => project.id);
}

export function getProjectData(projectId: string): ProjectType | undefined {
  return projects.find(project => project.id === projectId);
}