/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Camera, ChevronLeft, ChevronRight, Play } from 'lucide-react';
import { CompetitionGallery } from '../types';
import { INITIAL_SLIDESHOWS } from '../data';

const Slideshow: React.FC<{ gallery: CompetitionGallery }> = ({ gallery }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Auto-play on hover
  useEffect(() => {
    let timer: ReturnType<typeof setInterval>;
    if (isHovered && gallery.images.length > 1) {
      timer = setInterval(() => {
        setCurrentIndex((prev) => (prev === gallery.images.length - 1 ? 0 : prev + 1));
      }, 2500); // Change image every 2.5s on hover
    }
    return () => clearInterval(timer);
  }, [isHovered, gallery.images.length]);

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === 0 ? gallery.images.length - 1 : prev - 1));
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === gallery.images.length - 1 ? 0 : prev + 1));
  };

  if (!gallery.images || gallery.images.length === 0) {
    return (
      <div className="flex aspect-video items-center justify-center rounded-2xl bg-white/5 border border-white/10">
        <span className="text-sm font-bold text-slate-500">No images available</span>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-4">
      {/* Slideshow Container */}
      <div
        className="relative aspect-video w-full overflow-hidden rounded-3xl border border-white/10 bg-[#020617] shadow-xl group"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <AnimatePresence initial={false}>
          <motion.img
            key={currentIndex}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
            src={`${gallery.folderPath}${gallery.images[currentIndex]}`}
            alt={`${gallery.competitionName} - Photo ${currentIndex + 1}`}
            className="absolute inset-0 h-full w-full object-cover"
            onError={(e) => {
              // Fallback to placeholder if the local asset is missing
              (e.target as HTMLImageElement).src = `https://placehold.co/800x450/1e293b/cbd5e1?text=${encodeURIComponent(gallery.competitionName)}\nImage+${currentIndex + 1}+Missing`;
            }}
          />
        </AnimatePresence>

        {/* Navigation Arrows (Visible on hover) */}
        {gallery.images.length > 1 && (
          <>
            <button
              onClick={handlePrev}
              className="absolute left-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-[#020617]/50 p-2 text-white opacity-0 backdrop-blur-md transition-all hover:bg-white/20 group-hover:opacity-100 hover:scale-110"
              aria-label="Previous image"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={handleNext}
              className="absolute right-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-[#020617]/50 p-2 text-white opacity-0 backdrop-blur-md transition-all hover:bg-white/20 group-hover:opacity-100 hover:scale-110"
              aria-label="Next image"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </>
        )}

        {/* Dots Indicator */}
        {gallery.images.length > 1 && (
          <div className="absolute bottom-4 left-1/2 z-10 flex -translate-x-1/2 items-center gap-1.5">
            {gallery.images.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-1.5 rounded-full transition-all duration-300 ${currentIndex === idx
                  ? 'w-6 bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.8)]'
                  : 'w-1.5 bg-white/40 hover:bg-white/80 hover:w-3'
                  }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        )}
      </div>

      {/* Info Section */}
      <div className="px-2">
        <h3 className="font-display text-xl font-black text-white">{gallery.competitionName}</h3>
        <p className="mt-1 text-sm text-slate-400 font-medium leading-relaxed">{gallery.description}</p>
      </div>
    </div>
  );
}

export default function MediaAlbum() {
  const slideshows = INITIAL_SLIDESHOWS;

  return (
    <section className="mx-auto max-w-7xl px-4 py-24" id="media-album">
      {/* Title */}
      <div className="mb-16 text-center">
        <div className="inline-flex items-center gap-1.5 rounded-full border border-blue-500/20 bg-blue-500/10 px-3 py-1 text-xs font-bold text-blue-400 uppercase tracking-widest">
          <Camera className="h-3.5 w-3.5" />
          Event Galleries
        </div>
        <h2 className="font-display mt-3 text-3xl font-black text-white md:text-5xl">
          Captured Breakthroughs
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-slate-400">
          Raw snippets of our journey: intense brainstorming sessions, lab wireframes, and triumphant stage awards.
        </p>
      </div>

      {/* Slideshows Grid */}
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
        {slideshows.map((gallery) => (
          <Slideshow key={gallery.id} gallery={gallery} />
        ))}
      </div>
    </section>
  );
}
