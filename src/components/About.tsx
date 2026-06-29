/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { ShieldCheck, Zap, Sparkles, Binary } from 'lucide-react';

export default function About() {
  const cards = [
    {
      icon: <Binary className="h-6 w-6 text-blue-400" />,
      title: "Hardware + Software Integration",
      desc: "Bridging the gap between IoT, AI, and embedded systems with intuitive web interfaces."
    },
    {
      icon: <ShieldCheck className="h-6 w-6 text-indigo-400" />,
      title: "Real-World Problem Solving",
      desc: "Building practical solutions through multidisciplinary collaboration and field testing them in real environments."
    },
    {
      icon: <Zap className="h-6 w-6 text-cyan-400" />,
      title: "Rapid Prototyping",
      desc: "Iterating quickly with TinyML and embedded systems within tight competition windows to deliver functional prototypes."
    }
  ];

  return (
    <section className="mx-auto max-w-7xl px-4 py-24" id="about">
      {/* Decorative Title Grid */}
      <div className="mb-16 text-center">
        <span className="text-xs font-bold tracking-widest text-blue-400 uppercase">Our Core Identity</span>
        <h2 className="font-display mt-2 text-3xl font-black text-white md:text-5xl">
          Student-Led Innovation in IoT & Software
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-slate-400">
          Formed at the Trincomalee Campus, TechGenZ unites passionate students from the Departments of Computer Science and Physical Science to compete in regional and national technology arenas.
        </p>
      </div>

      {/* Main Glass Card Split Layout */}
      <div className="grid gap-8 lg:grid-cols-12" id="about-bento">
        {/* Large Story Glass Card */}
        <motion.div
          whileHover={{ y: -4 }}
          transition={{ duration: 0.3 }}
          className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-8 shadow-xl backdrop-blur-2xl lg:col-span-7 flex flex-col justify-between"
          id="about-card-story"
        >
          {/* Neon Glow Corner */}
          <div className="absolute top-0 right-0 -mr-16 -mt-16 h-48 w-48 rounded-full bg-blue-500/10 blur-3xl pointer-events-none" />

          <div>
            <div className="flex items-center gap-2 text-blue-400 font-bold text-sm uppercase tracking-wider">
              <Sparkles className="h-4 w-4" />
              Who We Are
            </div>
            <h3 className="font-display mt-4 text-2xl font-extrabold text-white md:text-3xl">
              Engineering Intelligent Solutions Through Hardware & Software
            </h3>
            <p className="mt-6 text-slate-400 leading-relaxed text-sm md:text-base">
              TechGenZ is a student innovation team from the Faculty of Applied Science, Trincomalee Campus. Bringing together expertise in Computer Science and Physical Science, we design impactful solutions that combine intelligent software with precision hardware.

              From embedded systems and IoT devices to AI-powered applications and modern web platforms, our multidisciplinary approach enables us to transform innovative ideas into real-world solutions. Every project is designed, developed, and tested by our team, reflecting our passion for engineering, creativity, and continuous learning.
            </p>
          </div>
        </motion.div>

        {/* Vertical Stack of Quick Features */}
        <div className="grid gap-6 lg:col-span-5" id="about-card-features">
          {cards.map((card, i) => (
            <motion.div
              key={i}
              whileHover={{ x: 6 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              className="group relative flex gap-5 rounded-2xl border border-white/10 bg-white/[0.03] p-6 shadow-md backdrop-blur-xl transition-all hover:bg-white/[0.07]"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/5 shadow-sm border border-white/10 group-hover:scale-105 transition-transform">
                {card.icon}
              </div>
              <div>
                <h4 className="font-display text-base font-bold text-white">
                  {card.title}
                </h4>
                <p className="mt-2 text-xs md:text-sm text-slate-400 leading-relaxed">
                  {card.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
