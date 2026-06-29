/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Trophy, Calendar, Sparkles, AlertCircle } from 'lucide-react';
import { Competition, CompetitionStatus } from '../types';

interface TrophyWallProps {
  competitions: Competition[];
}

export default function TrophyWall({ competitions }: TrophyWallProps) {

  const getStatusStyle = (status: CompetitionStatus) => {
    switch (status) {
      case 'Finalist':
        return 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20 ring-1 ring-emerald-500/10';
      case 'Semi-Finalist':
        return 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20 ring-1 ring-cyan-500/10';
      case 'Participant':
        return 'bg-white/5 text-slate-300 border-white/10 ring-1 ring-white/5';
      case 'Registered / Upcoming':
        return 'bg-violet-500/10 text-violet-400 border-violet-500/20 ring-1 ring-violet-500/10';
      default:
        return 'bg-blue-500/10 text-blue-400 border-blue-500/20';
    }
  };

  const getBentoSpan = (index: number) => {
    // Make first and fourth elements span wider columns for an asymmetric layout
    const idx = index % 4;
    if (idx === 0) return 'md:col-span-2 lg:col-span-8';
    if (idx === 1) return 'md:col-span-1 lg:col-span-4';
    if (idx === 2) return 'md:col-span-1 lg:col-span-4';
    return 'md:col-span-2 lg:col-span-8';
  };

  return (
    <section className="mx-auto max-w-7xl px-4 py-24" id="trophy-wall">
      {/* Header */}
      <div className="mb-16 text-center">
        <div className="inline-flex items-center gap-1.5 rounded-full border border-blue-500/20 bg-blue-500/10 px-3 py-1 text-xs font-bold text-blue-400 uppercase tracking-widest">
          <Trophy className="h-3 w-3" />
          The Trophy Wall
        </div>
        <h2 className="font-display mt-3 text-3xl font-black text-white md:text-5xl">
          Competition Milestones
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-slate-400">
          Our ongoing journey participating in regional and national hackathons, building custom IoT systems, and solving real-world problems.
        </p>
      </div>

      {/* Bento Grid */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-12" id="trophy-bento-grid">
        {competitions.map((comp, idx) => {
          const colSpan = getBentoSpan(idx);
          const isLargeCard = colSpan.includes('md:col-span-2') || colSpan.includes('lg:col-span-8');

          return (
            <motion.div
              key={comp.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -6, boxShadow: '0 20px 25px -5px rgba(59, 130, 246, 0.05)' }}
              className={`group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-2xl transition-all duration-300 ${colSpan} flex flex-col justify-between`}
              id={`trophy-card-${comp.id}`}
            >
              {/* Electric blue ambient neon glow */}
              <div className="absolute -right-20 -bottom-20 h-40 w-40 rounded-full bg-blue-500/5 opacity-0 blur-3xl transition-opacity duration-300 group-hover:opacity-100" />

              <div className="relative">
                {/* Hero Image / Design Asset inside card if large */}
                {comp.imageUrl && (
                  <div className={`overflow-hidden rounded-2xl border border-white/10 mb-5 relative ${isLargeCard ? 'h-48 md:h-64' : 'h-40'
                    }`}>
                    <img
                      src={comp.imageUrl}
                      alt={comp.name}
                      referrerPolicy="no-referrer"
                      className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#020617]/80 via-transparent to-transparent" />

                    {/* Floating Date Badge */}
                    <span className="absolute bottom-3 left-3 inline-flex items-center gap-1 rounded-lg bg-[#020617]/80 px-2.5 py-1 text-[11px] font-bold text-white border border-white/10 backdrop-blur-md">
                      <Calendar className="h-3 w-3 text-blue-400" />
                      {comp.date}
                    </span>
                  </div>
                )}

                {/* Status Badges & Title */}
                <div className="flex flex-wrap items-center gap-2 mb-3">
                  <span className={`inline-flex items-center gap-1 rounded-full border px-3 py-1 text-xs font-bold tracking-wide uppercase shadow-xs ${getStatusStyle(comp.status)}`}>
                    <Sparkles className="h-3 w-3 shrink-0" />
                    {comp.status}
                  </span>

                  {!comp.imageUrl && (
                    <span className="inline-flex items-center gap-1 text-[11px] font-bold text-slate-400">
                      <Calendar className="h-3 w-3" />
                      {comp.date}
                    </span>
                  )}
                </div>

                <h3 className="font-display text-xl font-extrabold text-white leading-tight group-hover:text-blue-400 transition-colors">
                  {comp.name}
                </h3>

                <p className="mt-3 text-sm text-slate-400 leading-relaxed">
                  {comp.description}
                </p>
              </div>

              {/* Technical Stack Pills */}
              <div className="mt-6 pt-5 border-t border-white/10 relative">
                <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest block mb-2">
                  System Architecture
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {comp.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md border border-white/5 bg-white/5 px-2 py-0.5 text-[10px] font-mono font-bold text-slate-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
