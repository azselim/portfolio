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
    id: 'ecommerce',
    title: 'E-Commerce Platform',
    description: 'A full-featured online store built with Next.js and Stripe, featuring a modern design and seamless checkout experience.',
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c',
    technologies: ['Next.js', 'TypeScript', 'Stripe', 'Tailwind CSS', 'Prisma'],
    features: [
      'Responsive product catalog with filtering and search',
      'Secure payment processing with Stripe',
      'User authentication and account management',
      'Order tracking and history',
      'Admin dashboard for inventory management'
    ],
    devpostUrl: 'https://ecommerce-demo.com',
    githubUrl: 'https://github.com/username/ecommerce'
  },
  {
    id: 'taskmanager',
    title: 'Task Management App',
    description: 'Real-time collaborative task management system built with Next.js and Socket.io.',
    image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0',
    technologies: ['Next.js', 'Socket.io', 'MongoDB', 'TypeScript', 'Tailwind CSS'],
    features: [
      'Real-time updates and collaboration',
      'Drag-and-drop task organization',
      'Team management and permissions',
      'Task comments and attachments',
      'Progress tracking and reporting'
    ],
    liveUrl: 'https://taskmanager-demo.com',
    githubUrl: 'https://github.com/username/taskmanager'
  },
  {
    id: 'aigenerator',
    title: 'AI Image Generator',
    description: 'Web application that generates unique images using AI models, built with Next.js and OpenAI API.',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31',
    technologies: ['Next.js', 'OpenAI API', 'TypeScript', 'Tailwind CSS', 'Redis'],
    features: [
      'Text-to-image generation',
      'Style transfer and image manipulation',
      'Gallery of generated images',
      'Image download and sharing',
      'Custom style presets'
    ],
    liveUrl: 'https://aigenerator-demo.com',
    githubUrl: 'https://github.com/username/aigenerator'
  }
];

export function getAllProjectIds(): string[] {
  return projects.map(project => project.id);
}

export function getProjectData(projectId: string): ProjectType | undefined {
  return projects.find(project => project.id === projectId);
}