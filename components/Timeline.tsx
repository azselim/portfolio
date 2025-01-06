'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const experiences = [
  {
    title: 'Senior Full Stack Developer',
    company: 'Tech Innovators Inc.',
    period: '2021 - Present',
    description: 'Led development of multiple high-impact web applications using Next.js and Node.js',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab'
  },
  {
    title: 'Frontend Developer',
    company: 'Digital Solutions Ltd',
    period: '2019 - 2021',
    description: 'Developed responsive web applications and improved UI/UX for various clients',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c'
  },
  {
    title: 'Junior Developer',
    company: 'StartUp Hub',
    period: '2017 - 2019',
    description: 'Worked on various web development projects using React and Express',
    image: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174'
  }
];

export function Timeline() {
  return (
    <div className="relative">
      <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-border" />
      {experiences.map((experience, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
          className={`relative mb-12 w-1/2 ${
            index % 2 === 0 
              ? 'mr-auto pr-12' 
              : 'ml-auto pl-12'
          }`}
        >
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background" />
          <div className="bg-card p-6 rounded-lg shadow-lg">
            <div className="relative w-full h-48 mb-4 rounded-md overflow-hidden">
              <Image
                src={experience.image}
                alt={experience.company}
                fill
                className="object-cover"
              />
            </div>
            <h3 className="text-xl font-bold mb-2">{experience.title}</h3>
            <p className="text-muted-foreground mb-2">{experience.company}</p>
            <p className="text-sm text-muted-foreground mb-4">{experience.period}</p>
            <p className="text-muted-foreground">{experience.description}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}