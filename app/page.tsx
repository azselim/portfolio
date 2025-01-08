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
import {Helmet} from "react-helmet";

export default function Home() { 
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleContact = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', { email, message });
  };

  return (
    <main className="bg-background">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Adam Selim | Portfolio</title>
        <link rel="icon" href="/favicon.ico" sizes="48x48" />
        <link rel="icon" href="/favicon.svg" sizes="any" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png"/>
        <link rel="manifest" href="/site.webmanifest" />
      </Helmet>
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
                src="comp.jpg"
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
                src="comp.jpg"
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
              I'm a passionate full-stack developer with a keen eye for design and a love for creating 
              beautiful, functional web applications. With years of experience in modern web technologies,
              I bring ideas to life through clean code and intuitive user experiences.
            </p>
            <p>
              When I'm not coding, you can find me exploring new technologies, contributing to open-source
              projects, or sharing my knowledge through technical writing and mentoring.
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
              <Download className="mr-2 h-4 w-4" />
              Download Resume
            </Button>
          </div>
          <Timeline />
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ProjectCard
              title="E-Commerce Platform"
              description="A full-featured online store built with Next.js and Stripe"
              image="https://images.unsplash.com/photo-1557821552-17105176677c"
              href="/projects/ecommerce"
            />
            <ProjectCard
              title="Task Management App"
              description="Real-time collaborative task management system"
              image="https://images.unsplash.com/photo-1557804506-669a67965ba0"
              href="/projects/taskmanager"
            />
            <ProjectCard
              title="AI Image Generator"
              description="Web app that generates images using AI models"
              image="https://images.unsplash.com/photo-1558494949-ef010cbdcc31"
              href="/projects/aigenerator"
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
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
            <div>© 2024 Adam Selim. All Rights Reserved.</div>
            <h2 className="text-4 font-bold text-center">Made with ❤️ using Next.js</h2>
          </div>
        </div>
      </section>
    </main>
  );
}
