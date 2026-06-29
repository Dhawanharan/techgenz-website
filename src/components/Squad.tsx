/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Users, Github, Linkedin, Monitor, ExternalLink } from 'lucide-react';
import { TeamMember } from '../types';

interface SquadProps {
  members: TeamMember[];
}

export default function Squad({ members }: SquadProps) {
  return (
    <section className="mx-auto max-w-7xl px-4 py-24" id="squad">
      {/* Title */}
      <div className="mb-16 text-center">
        <div className="inline-flex items-center gap-1.5 rounded-full border border-blue-500/20 bg-blue-500/10 px-3 py-1 text-xs font-bold text-blue-400 uppercase tracking-widest">
          <Users className="h-3.5 w-3.5" />
          The Squad
        </div>
        <h2 className="font-display mt-3 text-3xl font-black text-white md:text-5xl">
          Meet the TechGenZ Team
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-slate-400">
          A student-led, multidisciplinary team uniting hardware enthusiasts, software developers, and problem solvers.
        </p>
      </div>

      {/* Members Grid */}
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3" id="squad-grid">
        {members.map((member, idx) => (
          <motion.div
            key={member.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            whileHover={{ y: -8 }}
            className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-5 shadow-sm backdrop-blur-xl transition-all duration-300 hover:bg-white/[0.07] hover:shadow-xl"
            id={`squad-member-${member.id}`}
          >
            {/* Visual Header / Avatar Backdrop Glow */}
            <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-br from-blue-500/10 via-indigo-500/5 to-transparent rounded-t-3xl -z-10" />

            {/* Profile Avatar Container */}
            <div className="relative mx-auto h-28 w-28 overflow-hidden rounded-full border-4 border-white/10 bg-white/5 shadow-md transition-transform duration-300 group-hover:scale-105">
              <img
                src={member.avatar}
                alt={member.name}
                referrerPolicy="no-referrer"
                className="h-full w-full object-cover"
              />
            </div>

            {/* Profile Meta */}
            <div className="mt-5 text-center">
              <h3 className="font-display text-lg font-extrabold text-white group-hover:text-blue-400 transition-colors">
                {member.name}
              </h3>
              <p className="mt-1 text-xs font-bold tracking-wide text-blue-400 uppercase">
                {member.role}
              </p>
              <p className="mt-1.5 text-[10px] font-medium text-slate-400 font-mono bg-white/5 border border-white/5 inline-block px-2 py-0.5 rounded-md">
                {member.currentStatus}
              </p>
            </div>

            {/* Member Skill Tags */}
            <div className="mt-4 flex flex-wrap justify-center gap-1">
              {member.skills.slice(0, 4).map((skill) => (
                <span
                  key={skill}
                  className="rounded-full bg-white/5 px-2 py-0.5 text-[9px] font-mono text-slate-400 font-bold border border-white/5"
                >
                  {skill}
                </span>
              ))}
              {member.skills.length > 4 && (
                <span className="rounded-full bg-white/5 px-1.5 py-0.5 text-[9px] font-mono text-slate-500 font-bold">
                  +{member.skills.length - 4}
                </span>
              )}
            </div>

            {/* Profile Social Portfolios Links */}
            <div className="mt-6 flex justify-center gap-3 border-t border-white/10 pt-4">
              <a
                href={member.github}
                target="_blank"
                rel="noreferrer"
                className="rounded-xl bg-white/5 p-2 text-slate-400 border border-white/5 hover:bg-white/10 hover:text-white transition-colors"
                title="GitHub Portfolio"
              >
                <Github className="h-4.5 w-4.5" />
              </a>
              <a
                href={member.linkedin}
                target="_blank"
                rel="noreferrer"
                className="rounded-xl bg-white/5 p-2 text-slate-400 border border-white/5 hover:bg-white/10 hover:text-white transition-colors"
                title="LinkedIn Profile"
              >
                <Linkedin className="h-4.5 w-4.5" />
              </a>
              {member.behance && (
                <a
                  href={member.behance}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-xl bg-white/5 p-2 text-slate-400 border border-white/5 hover:bg-white/10 hover:text-white transition-colors"
                  title="Behance Portfolio"
                >
                  <Monitor className="h-4.5 w-4.5" />
                </a>
              )}
            </div>

            {/* Overlay link icon */}
            <div className="absolute top-4 right-4 text-slate-500 opacity-0 group-hover:opacity-100 transition-opacity">
              <ExternalLink className="h-4 w-4" />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
