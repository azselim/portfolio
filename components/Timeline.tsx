'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

const experiencesTab1 = [
  {
    title: 'Senior Full Stack Developer',
    company: 'Tech Innovators Inc.',
    period: '2021 - Present',
    description: 'Led development of multiple high-impact web applications using Next.js and Node.js',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab',
  },
  {
    title: 'Frontend Developer',
    company: 'Digital Solutions Ltd',
    period: '2019 - 2021',
    description: 'Developed responsive web applications and improved UI/UX for various clients',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c',
  },
];

const experiencesTab2 = [
  {
    title: 'Junior Developer',
    company: 'StartUp Hub',
    period: '2017 - 2019',
    description: 'Worked on various web development projects using React and Express',
    image: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174',
  },
  {
    title: 'Intern',
    company: 'Tech Mentorship',
    period: '2016 - 2017',
    description: 'Assisted in building prototypes and learned foundational web development skills',
    image: 'https://images.unsplash.com/photo-1522202222040-182dd7c3fd8d',
  },
];

export function Timeline() {
  const [activeTab, setActiveTab] = useState('Tab1');
  const [direction, setDirection] = useState(1);

  const handleTabChange = (newTab: 'Tab1' | 'Tab2') => {
    setDirection(newTab === 'Tab1' ? -1 : 1);
    setActiveTab(newTab);
  };

  interface Experience {
    title: string;
    company: string;
    period: string;
    description: string;
    image: string;
  }

  interface Variants {
    [key: string]: (direction: number) => { x: number; opacity: number } | { x: number; opacity: number };
  }

  const variants: Variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -100 : 100,
      opacity: 0,
    }),
  };

  const renderExperiences = (experiences: Experience[]) =>
    experiences.map((experience: Experience, index: number) => (
      <motion.div
        key={index}
        className="relative mb-12"
        initial="enter"
        animate="center"
        exit="exit"
        variants={variants}
        custom={direction}
        transition={{ duration: 0.5 }}
      >
        <div className="bg-card p-6 rounded-lg shadow-lg flex flex-col md:flex-row">
          {/* Left Section */}
          <div className="w-full md:w-1/2">
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
          </div>
          {/* Right Section */}
          <div className="w-full md:w-1/2 md:pl-6">
            <p className="text-muted-foreground">{experience.description}</p>
          </div>
        </div>
      </motion.div>
    ));

  return (
    <div className="bg-muted p-6 rounded-lg shadow-md">
      {/* Tabs */}
      <div className="flex mb-6 border-b border-border">
        <button
          onClick={() => handleTabChange('Tab1')}
          className={`flex-1 text-center px-6 py-2 font-medium ${
            activeTab === 'Tab1'
              ? 'bg-black text-white'
              : 'bg-muted text-muted-foreground'
          }`}
        >
          Employment
        </button>
        <button
          onClick={() => handleTabChange('Tab2')}
          className={`flex-1 text-center px-6 py-2 font-medium ${
            activeTab === 'Tab2'
              ? 'bg-black text-white'
              : 'bg-muted text-muted-foreground'
          }`}
        >
          Ventures
        </button>
      </div>

      {/* Timeline */}
      <div className="relative">
        <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-border" />
        <AnimatePresence custom={direction} mode="wait">
          <motion.div
            key={activeTab}
            initial="enter"
            animate="center"
            exit="exit"
            variants={variants}
            custom={direction}
            transition={{ duration: 0.5 }}
          >
            {activeTab === 'Tab1'
              ? renderExperiences(experiencesTab1)
              : renderExperiences(experiencesTab2)}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
