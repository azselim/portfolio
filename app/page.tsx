'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Github, Linkedin, ChevronDown, Download, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Timeline } from '@/components/Timeline';
import { ProjectCard } from '@/components/ProjectCard';
import { NavBar } from '@/components/NavBar';
import { GlitchText } from '@/components/GlitchText';
import  TextMorph  from '@/components/TextMorph';
import { useState } from 'react';

export default function Home() { 
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleContact = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', { email, message });
  };

  return (
    <main className="bg-background">
      <NavBar />

      {/* Hero Section */}
      <section id="home" className="min-h-screen pt-24 flex items-center justify-center relative">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 text-center md:text-left z-20"
          >
            
            <h1 className="text-5xl md:text-6xl font-bold mb-4 leading-tight z-20">
              Hello, I'm <br />
              <span className="block mt-2">
                <TextMorph morphTime={1} cooldownTime={3} /> 
              </span>
            </h1>
            <p className="text-base md:text-lg text-muted-foreground mb-6">
              Full Stack Developer & Software Engineering Student
            </p>
            <div className="flex gap-4 justify-center md:justify-start">
              <a href="https://github.com/azselim" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="icon">
                  <Github className="h-5 w-5" />
                </Button>
              </a>
              <a href="https://linkedin.com/in/adamzselim" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="icon">
                  <Linkedin className="h-5 w-5" />
                </Button>
              </a>
              <a href="https://se-webring.xyz" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="icon">
                  <Image src="/webring.png" alt="Webring logo" width="5" height="5" className="h-3 w-5" />
                </Button>
              </a>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 0.5, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 relative z-10" // Lower z-index
          >
            <div className="relative w-72 h-72 md:w-96 md:h-96">
              <Image
                src="adam1.png"
                alt="Adam Selim"
                fill
                className="object-contain shadow-2xl"
                priority
              />
            </div>
          </motion.div>


        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-background to-transparent z-0"></div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 z-10"
          >
            <div className="relative w-60 h-60 md:w-72 md:h-72">
              <Image
                src="adam2.png"
                alt="Adam Selim"
                fill
                className="rounded-full object-cover shadow-2xl"
                priority
              />
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 text-lg text-black"
          >
            <h2 className="text-4xl font-bold mb-6 text-center md:text-left">About Me</h2>
            <p className="mb-6">
              I'm a passionate full-stack developer and a first year Software Engineering student at the University of Waterloo. Having worked an AI co-op and built multiple AI projects, I particularly enjoy the field of ML and back-end work.
            </p>
            <p>
              When I'm not coding, you can find me learning a new language, playing piano & guitar, or reading about global culture & history. I have a particular interest in cultures and languages around the world, currently speaking various levels of Arabic, French, Japanese (and a bit of Mandarin). I also enjoy enjoy public speaking and politics, having taken part in Model UN throughout high school.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-4xl font-bold">Experience</h2>
            <Button variant="outline">
              <Download className="mr-2 h-4 w-4"/>
              <a  href="/resume.pdf">Download Resume</a>
            </Button>
          </div>
          <Timeline />
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ProjectCard
              title="EasyASL"
              description="An revolutionary AI-powered sign language translation and certification webapp tool."
              image="easyasl.png"
              href="/projects/easyasl"
            />
            <ProjectCard
              title="FlashNotes"
              description="A flashcard webapp that uses AI and OCR to generate flashcards from written notes."
              image="https://d112y698adiu2z.cloudfront.net/photos/production/software_photos/002/694/867/datas/gallery.jpg"
              href="/projects/flashnotes"
            />
            <ProjectCard
              title="MGTE Webring"
              description="A portfolio webring for Management Eng students at Waterloo, inspired by SE Webring."
              image="https://m.media-amazon.com/images/I/61yM93L5qQS.jpg"
              href="/projects/mgte-webring"
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-40">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">Get in Touch</h2>
          <form onSubmit={handleContact} className="max-w-md mx-auto space-y-6">
            <div>
              <Input
                type="email"
                placeholder="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div>
              <Textarea
                placeholder="Your message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                className="min-h-[150px]"
              />
            </div>
            <Button type="submit" className="w-full">
              <Send className="mr-2 h-4 w-4" />
              Send Message
            </Button>
          </form>
        </div>
      </section>

      {/* Footer Section */}
      <section id="projects" className="py-5 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="h-16 flex items-center justify-between">
            <div>© 2025 Adam Selim. All Rights Reserved.</div>
            <h2 className="text-4 font-bold text-center">Made with 💙 using Next.js</h2>
          </div>
        </div>
      </section>
    </main>
  );
}
