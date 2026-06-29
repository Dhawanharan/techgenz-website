/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { ArrowRight, Cpu, Trophy, Users } from 'lucide-react';

interface HeroProps {
  onNavigate: (sectionId: string) => void;
}

export default function Hero({ onNavigate }: HeroProps) {
  return (
    <section className="relative flex min-h-[85vh] flex-col items-center justify-center px-4 py-20 text-center" id="hero">
      {/* Main Heading */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.1 }}
        className="font-display max-w-4xl text-5xl font-black tracking-tighter text-white sm:text-7xl md:text-8xl leading-none"
        id="hero-title"
      >
        We Are <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">TechGenZ</span>
      </motion.h1>

      {/* Tagline */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="mx-auto mt-6 max-w-2xl text-lg text-slate-400 md:text-xl leading-relaxed"
        id="hero-tagline"
      >
        We are a collective of Faculty of Applied Science students (combining the Departments of Computer Science and Physical Science) at Trincomalee Campus, engineering next-generation hardware and software solutions.
      </motion.p>

      {/* CTA Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center"
        id="hero-actions"
      >
        <button
          onClick={() => onNavigate('trophy-wall')}
          className="group flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-3.5 font-bold text-white shadow-lg shadow-blue-900/40 transition-all hover:-translate-y-0.5 hover:bg-blue-500"
          id="cta-our-work"
        >
          <Trophy className="h-4 w-4" />
          Our Work
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </button>

        <button
          onClick={() => onNavigate('squad')}
          className="flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-6 py-3.5 font-bold text-white backdrop-blur-xl transition-all hover:-translate-y-0.5 hover:bg-white/10"
          id="cta-squad"
        >
          <Users className="h-4 w-4 text-blue-400" />
          The Squad
        </button>
      </motion.div>

      {/* Quick Stats Bento-Preview / Hover Hint */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="mt-16 grid w-full max-w-4xl grid-cols-2 gap-4 sm:grid-cols-4"
        id="hero-stats"
      >
        {[
          { label: 'Competition Milestones', val: '4+' },
          { label: 'Prototypes', val: '6+' },
          { label: 'Lines of Code', val: '12K+' },
          { label: 'Members', val: '5+' },
        ].map((stat, i) => (
          <div
            key={i}
            className="flex flex-col items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur-xl transition-all hover:bg-white/[0.07]"
          >
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-2xl font-black text-transparent md:text-3xl">
              {stat.val}
            </span>
            <span className="mt-1 text-center text-[10px] font-bold text-slate-400 uppercase tracking-wider">
              {stat.label}
            </span>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
