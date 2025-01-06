'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const titles = [
  'Adam Selim',
  'a Developer',
  'a Problem Solver',
  'an Innovator',
  'a Tech Enthusiast'
];

export function GlitchText() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isGlitching, setIsGlitching] = useState(false);
  const [displayText, setDisplayText] = useState(titles[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsGlitching(true);

      // Simulate glitch effect with random characters
      const glitchInterval = setInterval(() => {
        setDisplayText(generateGlitchText(titles[currentIndex]));
      }, 50);

      // After the glitch period, show the next title
      setTimeout(() => {
        clearInterval(glitchInterval);
        setCurrentIndex((prev) => (prev + 1) % titles.length);
        setDisplayText(titles[(currentIndex + 1) % titles.length]);
        setIsGlitching(false);
      }, 500); // Glitch duration
    }, 3000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  const generateGlitchText = (originalText) => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%&*!';
    return originalText
      .split('')
      .map((char) => (Math.random() > 0.5 ? chars[Math.floor(Math.random() * chars.length)] : char))
      .join('');
  };

  return (
    <div className="relative w-full h-[1.1em] z-50">
      <motion.span
        key={displayText}
        initial={{ opacity: 0, scale: 1.2 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        transition={{ duration: isGlitching ? 0.1 : 0.3 }}
        className="absolute inset-x-0 top-0 mx-auto font-bold text-4xl md:text-6xl leading-tight text-primary whitespace-nowrap text-center"
        style={{
          textShadow: isGlitching
            ? '2px 2px 4px rgba(255, 0, 0, 0.7), -2px -2px 4px rgba(0, 255, 0, 0.7)'
            : 'none',
        }}
      >
        {displayText}
      </motion.span>
    </div>
  );
}
