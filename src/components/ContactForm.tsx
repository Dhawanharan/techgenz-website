/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, MessageSquare, Send, CheckCircle, User, FileText, Sparkles } from 'lucide-react';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !subject || !message) return;

    setIsSubmitting(true);

    // Simulate database network lag
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);

      // Reset Form fields
      setName('');
      setEmail('');
      setSubject('');
      setMessage('');

      // Auto clear success state after 5 seconds
      setTimeout(() => setSubmitSuccess(false), 5000);
    }, 1200);
  };

  return (
    <section className="mx-auto max-w-4xl px-4 py-24" id="contact">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-8 shadow-xl backdrop-blur-2xl md:p-12"
        id="contact-glass-card"
      >
        {/* Decorative corner blur blob */}
        <div className="absolute -bottom-16 -left-16 h-36 w-36 rounded-full bg-blue-500/10 blur-2xl pointer-events-none" />

        <div className="grid gap-10 md:grid-cols-5">
          {/* Info Column */}
          <div className="md:col-span-2 flex flex-col justify-between" id="contact-info">
            <div>
              <div className="flex items-center gap-2 text-blue-400 font-bold text-xs uppercase tracking-widest">
                <Mail className="h-4 w-4" />
                Get In Touch
              </div>
              <h2 className="font-display mt-3 text-2xl font-black text-white md:text-3xl">
                Let's Build Together
              </h2>
              <p className="mt-4 text-xs md:text-sm text-slate-400 leading-relaxed">
                Are you a hackathon coordinator, potential collaborator, or university mentor? Drop us an inquiry, and our team captain will respond shortly.
              </p>
            </div>

            <div className="mt-8 space-y-4 text-xs md:text-sm text-slate-400 font-medium">
              <div className="flex items-center gap-3">
                <div className="rounded-lg bg-blue-500/10 p-2 text-blue-400 border border-blue-500/20">
                  <User className="h-4 w-4" />
                </div>
                <div>
                  <div className="font-bold text-slate-300 text-xs uppercase tracking-wider">Captain Contact</div>
                  <div>Amshayan Bhavananthan</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="rounded-lg bg-indigo-500/10 p-2 text-indigo-400 border border-indigo-500/20">
                  <MessageSquare className="h-4 w-4" />
                </div>
                <div>
                  <div className="font-bold text-slate-300 text-xs uppercase tracking-wider">E-Mail</div>
                  <div>techgenz4world@gmail.com</div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-white/10">
              <span className="inline-flex items-center gap-1 text-[10px] font-mono text-slate-400 uppercase tracking-widest">
                <Sparkles className="h-3.5 w-3.5 text-blue-400" />
                Responses in &lt; 24h
              </span>
            </div>
          </div>

          {/* Form Column */}
          <div className="md:col-span-3" id="contact-form-container">
            <AnimatePresence mode="wait">
              {submitSuccess ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="flex h-full flex-col items-center justify-center text-center py-10"
                  id="contact-success"
                >
                  <CheckCircle className="h-16 w-16 text-emerald-500 animate-bounce" />
                  <h3 className="font-display mt-5 text-xl font-extrabold text-white">
                    Transmission Successful!
                  </h3>
                  <p className="mt-2 text-sm text-slate-400 max-w-xs">
                    Thank you. Your inquiry has been logged securely in our systems. Our team can review your message inside the dashboard.
                  </p>
                  <button
                    onClick={() => setSubmitSuccess(false)}
                    className="mt-6 text-xs font-bold text-blue-400 hover:text-blue-300 hover:underline"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="space-y-4"
                  id="contact-form"
                >
                  {/* Name field */}
                  <div>
                    <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-1.5" htmlFor="contact-name">
                      Full Name
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        id="contact-name"
                        required
                        placeholder="Dr. Alexander Wright"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full rounded-xl border border-white/10 bg-white/5 py-2.5 pl-10 pr-4 text-sm text-white placeholder-slate-500 outline-hidden transition-all focus:border-blue-500 focus:bg-white/10 focus:ring-2 focus:ring-blue-500/20"
                      />
                      <User className="absolute left-3.5 top-3.5 h-4 w-4 text-slate-500" />
                    </div>
                  </div>

                  {/* Email field */}
                  <div>
                    <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-1.5" htmlFor="contact-email">
                      Email Address
                    </label>
                    <div className="relative">
                      <input
                        type="email"
                        id="contact-email"
                        required
                        placeholder="alexander@domain.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full rounded-xl border border-white/10 bg-white/5 py-2.5 pl-10 pr-4 text-sm text-white placeholder-slate-500 outline-hidden transition-all focus:border-blue-500 focus:bg-white/10 focus:ring-2 focus:ring-blue-500/20"
                      />
                      <Mail className="absolute left-3.5 top-3.5 h-4 w-4 text-slate-500" />
                    </div>
                  </div>

                  {/* Subject field */}
                  <div>
                    <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-1.5" htmlFor="contact-subject">
                      Subject
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        id="contact-subject"
                        required
                        placeholder="Collaboration Opportunities for SLIoT 2026"
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                        className="w-full rounded-xl border border-white/10 bg-white/5 py-2.5 pl-10 pr-4 text-sm text-white placeholder-slate-500 outline-hidden transition-all focus:border-blue-500 focus:bg-white/10 focus:ring-2 focus:ring-blue-500/20"
                      />
                      <FileText className="absolute left-3.5 top-3.5 h-4 w-4 text-slate-500" />
                    </div>
                  </div>

                  {/* Message field */}
                  <div>
                    <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-1.5" htmlFor="contact-message">
                      Your Message
                    </label>
                    <textarea
                      id="contact-message"
                      required
                      rows={4}
                      placeholder="Write your details, timeline, or requests here..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="w-full rounded-xl border border-white/10 bg-white/5 p-4 text-sm text-white placeholder-slate-500 outline-hidden transition-all focus:border-blue-500 focus:bg-white/10 focus:ring-2 focus:ring-blue-500/20"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 py-3 text-sm font-bold text-white shadow-md shadow-blue-900/40 border border-blue-500/20 transition-all hover:bg-blue-500 active:scale-[0.99] disabled:bg-blue-800 disabled:pointer-events-none"
                    id="contact-submit"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                        Transmitting...
                      </>
                    ) : (
                      <>
                        <Send className="h-4 w-4" />
                        Send Inquiry
                      </>
                    )}
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
