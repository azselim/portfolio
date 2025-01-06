'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  href: string;
}

export function ProjectCard({ title, description, image, href }: ProjectCardProps) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="group relative bg-card rounded-lg overflow-hidden shadow-lg"
    >
      <Link href={href} className="block">
        <div className="relative h-48">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-black/40 transition-opacity duration-300 group-hover:opacity-0" />
        </div>
        <div className="p-6">
          <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
            {title}
          </h3>
          <p className="text-muted-foreground mb-4">{description}</p>
          <div className="flex items-center text-primary">
            <span className="mr-2">View Project</span>
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-2" />
          </div>
        </div>
      </Link>
    </motion.div>
  );
}