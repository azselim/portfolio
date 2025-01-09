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
    image: 'https://private-user-images.githubusercontent.com/86445739/375520726-40161a3b-c036-4ccd-b800-51105b7d8c92.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MzY0MTE3NjUsIm5iZiI6MTczNjQxMTQ2NSwicGF0aCI6Ii84NjQ0NTczOS8zNzU1MjA3MjYtNDAxNjFhM2ItYzAzNi00Y2NkLWI4MDAtNTExMDViN2Q4YzkyLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNTAxMDklMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjUwMTA5VDA4MzEwNVomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTU0MGY3MDQ3Mjc0OWY5YjQyM2FjMmYxMTk2YTZkYWVlMWE4NDk0MGJmYmU4NmY3OTg4YjBkZTE3MjUyN2M1NmUmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.J9fd-_VGJIY2A9XOV9fyCFvvuuNgjim8NX9yvXVwzaU',
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
    image: 'https://d112y698adiu2z.cloudfront.net/photos/production/software_photos/002/694/867/datas/gallery.jpg',
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
  }
];

export function getAllProjectIds(): string[] {
  return projects.map(project => project.id);
}

export function getProjectData(projectId: string): ProjectType | undefined {
  return projects.find(project => project.id === projectId);
}