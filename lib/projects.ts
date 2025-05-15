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
      'Real-time translation of kinetic ASL signs into spoken English using AI',
      'Certification system for ASL proficiency',
      'User-friendly web interface for both learners and fluent signers',
      'Utilizes vision models and frame segmentation for gesture recognition',
      'Audio output using Google TTS',
      '(Planned) Progress tracking and learning modules',
      '(Planned) Custom built computer vision model for gesture recognition'
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
      'AI-powered flashcard generation from handwritten notes using OCR',
      'Upload images or take photos of notes to create flashcards',
      'Edit, organize, and review generated flashcards',
      'Clean, responsive web interface',
    ],
    devpostUrl: 'https://devpost.com/software/flashnotes-i0cymh',
    githubUrl: 'https://github.com/Leg3ndary/flashnotes'
  },
  {
    id: 'dealy-digest',
    title: 'DealyDigest',
    description: 'A smart credit card recommendation platform that analyzes your transactions and credit card usage to recommend optimal deals, helping you maximize rewards and savings. Features real-time, location-based recommendations, Google Maps integration, and personalized card advice. [Recieved an offer to fly to NYC and work on the project with $50k funding full time!]',
    image: '/dealy_digest.png',
    technologies: [
      'Next.js',
      'TypeScript',
      'Tailwind CSS',
      'Google Maps API',
      'MongoDB',
      'Auth0',
      'Knot SDK',
      'OpenAI (Gemini)'
    ],
    features: [
      'Smart, personalized credit card recommendations based on merchant location, category, and your card portfolio',
      'Real-time reward rate calculations',
      'Interactive map interface for merchant selection',
      'Support for multiple merchant categories (hotels, restaurants, groceries, gas, etc.)',
      'Detailed explanations for each recommendation',
      'Secure authentication and financial data processing',
      'Dynamic recommendation system that adapts to your spending habits',
      'Planned: advanced filtering, directed search, and expanded credit optimization'
    ],
    devpostUrl: 'https://devpost.com/software/dealydigest',
    githubUrl: 'https://github.com/pravinl23/DealyDigests',
  },
  {
    id: 'no-hooting-around',
    title: 'No Hooting Around',
    description: 'An AI-powered intelligent distraction blocking Chrome extension that helps you focus on your work.',
    image: '/no_hooting.png',
    technologies: ['HTML/CSS', 'JavaScript', 'Python', 'OpenAI API', 'Flask'],
    features: [
      'Chrome extension to block distracting websites using AI',
      'Intelligent detection of unproductive browsing patterns',
      'Customizable blocklists and focus sessions',
      'Real-time notifications and productivity stats',
      'Backend powered by Flask and OpenAI API',
      'Hosted on Google Cloud Platform'
    ],
    devpostUrl: 'https://devpost.com/software/stop-hootin-around',
    githubUrl: 'https://github.com/RohanT766/No-Hooting-Around',
    liveUrl: 'https://chromewebstore.google.com/detail/no-hooting-around/gjingkfmclafigonajjeibkcbgfenehn?authuser=0&hl=en-GB'
  }
];

export function getAllProjectIds(): string[] {
  return projects.map(project => project.id);
}

export function getProjectData(projectId: string): ProjectType | undefined {
  return projects.find(project => project.id === projectId);
}