'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from './ui/button';
import Image from 'next/image';

export function NavBar() {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'experience', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }

      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navHeight = 96; // Account for navbar height
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - navHeight,
        behavior: 'smooth'
      });
    }
  };

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      {/* Main Navbar */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-background/80 backdrop-blur-md shadow-md' : ''
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="h-16 flex items-center justify-between">
            {/* Home button as a clickable image */}
            <div className="flex items-center">
              <Image
                src="initials.png"
                alt="Home"
                width={40}
                height={40}
                className="cursor-pointer"
                onClick={() => scrollToSection('home')}
              />
            </div>

            {/* Hamburger menu for mobile */}
            <div className="block md:hidden">
              <button
                className="text-2xl focus:outline-none"
                onClick={handleMenuToggle}
                aria-label="Toggle menu"
              >
                ☰
              </button>
            </div>

            {/* Desktop navigation */}
            <div className="hidden md:flex items-center gap-4">
              {['About', 'Experience', 'Projects', 'Contact'].map((item) => (
                <Button
                  key={item}
                  variant={activeSection === item.toLowerCase() ? 'default' : 'ghost'}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-sm"
                >
                  {item}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-40 bg-black/50 backdrop-blur-lg flex items-center justify-center"
        >
          <div className="flex flex-col items-center gap-6">
            {['About', 'Experience', 'Projects', 'Contact'].map((item) => (
              <div
                key={item}
                
                onClick={() => {
                  scrollToSection(item.toLowerCase());
                  setMenuOpen(false);
                }}
                className="text-lg text-white"
              >
                {item}
              </div>
            ))}
            <button
              className="text-sm text-white mt-4 underline"
              onClick={handleMenuToggle}
              aria-label="Close menu"
            >
              Close
            </button>
          </div>
        </motion.div>
      )}
    </>
  );
}
