'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

const experiencesTab1 = [
  {
    title: 'AI Strategist / Developer (Co-op)', 
    company: 'iSTORM New Media / Kingston, ON (Remote)',
    period: 'Sep 2023 - Jan 2024',
    description: '• Engineered AI-driven copywriting prompt templates and scripts using JasperAI and GPT-4, reducing manual content creation effort and increasing blog output by 40% for client marketing campaigns\n• Developed system prompts tailored to brand identity, enabling clients to generate high-converting marketing voices\n• Earned 3 Google certifications covering ads search, performance measurement and online analytics',
    image: 'exp/istorm2.png',
  },
  {
    title: 'Robot Software Developer',
    company: 'FRC 1360 Orbit Robotics / Oakville, ON',
    period: 'Sep 2023 - Jun 2024',
    description: '• Improved 2023 robot’s scoring mechanism accuracy by 50% by developing a multi-stage PID tuning system\n• Automated alignment with scoring goals using Limelight 3 computer vision to recognize key field locations\n• Programmed the robot’s core functionality using Java with WPILib, ensuring robust and efficient performance',
    image: 'exp/robot1.png',
  },
  {
    title: 'Co-President & Co-Founder',
    company: 'EurekaHACKS / Oakville, ON',
    period: 'Dec 2022 - Jun 2024',
    description: '• Co-founded Halton’s largest annual hackathon with over 200 participants\n• Raised funding, recruited staff and judges, planned events and executed day-of-event logistics\n• Automated registration process by building Zapier flows and authentication bot using Discord.py and Google Sheets API via Python\n• Developed and maintained sponsorship portal using HTML/CSS and Javascrip',
    image: 'exp/eureka1.jpeg',
  },
  {
    title: 'Programming & Electrical Lead',
    company: 'Waterloo EV Challenge School Team / Oakville, ON',
    period: 'Sep 2022 - Jun 2024',
    description: '• Directed team of 5 software developers to program our EV build’s Raspberry Pi controller using Python\n• Structured team’s plans, goals and timelines for development over the 6 month challenge periods\n• Conducted code reviews to debug issues and optimize performance of throttle control, motor feedback loops, and other functionalities\n• Designed and wired the electrical system, integrating motor controllers and sensors',
    image: 'exp/car1.jpg',
  },
  {
    title: 'Vice President of Information Technology',
    company: 'Generating Joy / Toronto, ON (Remote)',
    period: 'Nov 2020 - Jan 2024',
    description: '• Founded student-led organization that provides entertainment and companionship to residents of long term care homes \n• Designed and built professional website \n• Assigned tasks and managed staff \n• Hired and trained volunteers \n• Shaped service infrastructure',
    image: 'exp/genjoy1.png',
  },
];

const experiencesTab2 = [
  {
    title: 'EngSoc SE \'29 Class Representative',
    company: 'University of Waterloo / Waterloo, ON',
    period: 'Oct 2024 - Jan 2025',
    description: '• Participated in bi-weekly EngSoc meetings to discuss student concerns and initiatives\n• Represented my class in the Engineering Society and the Faculty of Engineering\n• Vote on behalf of my class on EngSoc decisions\n• Communicated with my class to gather feedback and concerns',
    image: 'exp/engsoc1.png',
  },
  {
    title: 'Pharmacy Assistant',
    company: 'Shoppers Drug Mart / Oakville, ON',
    period: 'Oct 2022 - Sep 2023',
    description: 'Extensively trained in using Healthwatch pharmacy systems\n• Filled and dispensed customer prescription medications\n• Interpreted and entered prescription papers\n• Communicated with other pharmacies to process patient transfers.',
    image: 'exp/pharm1.png',
  },
  {
    title: 'Delegate & Chair',
    company: 'Model United Nations',
    period: 'Oct 2020 - Jun 2024',
    description: '• Accepted into and particpated in one of Canada\'s most rigorous MUN programs @APHS \n• Practiced in mock debates twice weekly \n• Attended 4 conferences including SOMA & King\'sMUN and won a public speaking award at one \n• Mentored younger members while in senior year \n• Our delegation won the most awards at every conference we attended \n• Chaired an international committee at TMUN 2024',
    image: 'exp/mun1.png',
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
    [key: string]: ((direction?: number) => { x: number; opacity: number }) | { x: number; opacity: number };
    enter: (direction?: number) => { x: number; opacity: number };
    center: { x: number; opacity: number };
    exit: (direction?: number) => { x: number; opacity: number };
  }

  const variants: Variants = {
    enter: (direction: number = 1) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number = 1) => ({
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
            <p
              className="text-muted-foreground"
              dangerouslySetInnerHTML={{ __html: experience.description.replace(/\n/g, '<br />') }}
            />
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
          Technical
        </button>
        <button
          onClick={() => handleTabChange('Tab2')}
          className={`flex-1 text-center px-6 py-2 font-medium ${
            activeTab === 'Tab2'
              ? 'bg-black text-white'
              : 'bg-muted text-muted-foreground'
          }`}
        >
          More
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
