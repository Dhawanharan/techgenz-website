/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Menu, X, Lock, Sparkles, Trophy, Camera, Users, Mail, Info, Cpu, ArrowUp
} from 'lucide-react';

import AuroraBackground from './components/AuroraBackground';
import Hero from './components/Hero';
import About from './components/About';
import TrophyWall from './components/TrophyWall';
import MediaAlbum from './components/MediaAlbum';
import Squad from './components/Squad';
import ContactForm from './components/ContactForm';

import { 
  INITIAL_COMPETITIONS, 
  INITIAL_SQUAD
} from './data';

export default function App() {
  // Navigation State
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Back to top scroll listener
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle section jumping
  const navigateToSection = (sectionId: string) => {
    setMobileMenuOpen(false);
    
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
  };



  return (
    <div className="relative min-h-screen text-slate-200 font-sans bg-[#020617] overflow-x-hidden selection:bg-blue-500/30 selection:text-white">
      {/* Soft Aurora Mesh Background Layer */}
      <AuroraBackground />

      {/* Primary Floating Navigation Bar */}
      <nav className="sticky top-0 z-40 border-b border-white/10 bg-white/[0.02] shadow-[0_4px_30px_rgba(0,0,0,0.15)] backdrop-blur-xl">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <div 
              onClick={() => navigateToSection('hero')} 
              className="flex cursor-pointer items-center gap-2 group"
              id="navbar-logo"
            >
              <img 
                src="/assets/logo.png" 
                alt="TechGenZ Logo" 
                className="h-10 w-auto object-contain transition-transform group-hover:scale-105" 
              />
              <span className="font-display text-lg font-black tracking-tight text-white">
                Tech<span className="text-blue-400 group-hover:text-blue-300 transition-colors">GenZ</span>
              </span>
            </div>

            {/* Desktop Nav Items */}
            <div className="hidden md:flex items-center gap-1.5" id="desktop-nav-links">
              {[
                { id: 'about', label: 'About', icon: <Info className="h-3.5 w-3.5" /> },
                { id: 'trophy-wall', label: 'Milestones', icon: <Trophy className="h-3.5 w-3.5" /> },
                { id: 'media-album', label: 'Media', icon: <Camera className="h-3.5 w-3.5" /> },
                { id: 'squad', label: 'The Squad', icon: <Users className="h-3.5 w-3.5" /> },
                { id: 'contact', label: 'Contact', icon: <Mail className="h-3.5 w-3.5" /> },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => navigateToSection(item.id)}
                  className="flex items-center gap-1 rounded-full px-3.5 py-1.5 text-xs font-bold text-slate-300 hover:bg-white/5 hover:text-blue-400 transition-all"
                >
                  {item.icon}
                  {item.label}
                </button>
              ))}
            </div>

            {/* Hamburger trigger */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="rounded-xl p-2 text-slate-300 hover:bg-white/5"
                aria-label="Toggle Mobile Menu"
              >
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Flyout Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="border-t border-white/10 bg-[#020617]/95 backdrop-blur-xl md:hidden overflow-hidden"
              id="mobile-menu"
            >
              <div className="space-y-1.5 px-4 py-5">
                {[
                  { id: 'about', label: 'About Us', icon: <Info className="h-4 w-4 text-blue-400" /> },
                  { id: 'trophy-wall', label: 'Milestones', icon: <Trophy className="h-4 w-4 text-blue-400" /> },
                  { id: 'media-album', label: 'Media Album', icon: <Camera className="h-4 w-4 text-blue-400" /> },
                  { id: 'squad', label: 'The Squad', icon: <Users className="h-4 w-4 text-blue-400" /> },
                  { id: 'contact', label: 'Drop Inquiry', icon: <Mail className="h-4 w-4 text-blue-400" /> },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => navigateToSection(item.id)}
                    className="flex w-full items-center gap-3 rounded-xl p-3 text-left text-xs font-bold text-slate-300 hover:bg-white/5 hover:text-white"
                  >
                    {item.icon}
                    {item.label}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Main View Orchestrator */}
      <main className="relative">
        <AnimatePresence mode="wait">
          <motion.div
            key="showcase"
            initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
            >
              {/* Showcase Sections */}
              <Hero onNavigate={navigateToSection} />
              <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent max-w-5xl mx-auto" />
              <About />
              <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent max-w-5xl mx-auto" />
              <TrophyWall competitions={INITIAL_COMPETITIONS} />
              <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent max-w-5xl mx-auto" />
              <MediaAlbum />
              <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent max-w-5xl mx-auto" />
              <Squad members={INITIAL_SQUAD} />
              <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent max-w-5xl mx-auto" />
              <ContactForm />

              {/* Public Footer */}
              <footer className="border-t border-white/5 bg-white/[0.02] py-12 text-xs backdrop-blur-xl">
                <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
                  <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
                    {/* Foot Logo */}
                    <div className="flex items-center gap-2">
                      <img 
                        src="/assets/logo.png" 
                        alt="TechGenZ Logo" 
                        className="h-8 w-auto object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all" 
                      />
                      <span className="font-display font-black tracking-tight text-white">
                        TechGenZ
                      </span>
                    </div>

                    {/* Quick Footer Navigation */}
                    <div className="flex flex-wrap justify-center gap-4 text-slate-400 font-semibold">
                      <button onClick={() => navigateToSection('about')} className="hover:text-blue-400 transition-colors">About</button>
                      <button onClick={() => navigateToSection('trophy-wall')} className="hover:text-blue-400 transition-colors">Trophy Wall</button>
                      <button onClick={() => navigateToSection('media-album')} className="hover:text-blue-400 transition-colors">Media Album</button>
                      <button onClick={() => navigateToSection('squad')} className="hover:text-blue-400 transition-colors">The Squad</button>
                    </div>

                    {/* Credit Line */}
                    <p className="text-slate-500 font-medium">
                      &copy; {new Date().getFullYear()} TechGenZ. All rights reserved.
                    </p>
                  </div>
                </div>
              </footer>
            </motion.div>
        </AnimatePresence>
      </main>

      {/* Back to Top Trigger Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="fixed bottom-6 right-6 z-40 rounded-full bg-blue-600 p-3 text-white shadow-lg shadow-blue-500/20 hover:bg-blue-700 hover:shadow-blue-500/30 active:scale-95 transition-all"
            id="scroll-to-top"
            aria-label="Scroll to top"
          >
            <ArrowUp className="h-5 w-5" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
