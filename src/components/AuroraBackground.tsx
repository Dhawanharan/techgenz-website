/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';

export default function AuroraBackground() {
  return (
    <div className="fixed inset-0 -z-50 overflow-hidden bg-[#020617]">
      {/* Light Mesh Gradient backgrounds omitted to preserve pure deep background */}
      
      {/* Pulsing Blur Blobs tailored to design instructions */}
      <motion.div
        animate={{
          x: [0, 50, -30, 0],
          y: [0, -40, 60, 0],
          scale: [1, 1.15, 0.9, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute -top-[10%] -left-[10%] h-[500px] w-[500px] rounded-full bg-blue-600/20 blur-[120px]"
        id="aurora-blob-1"
      />

      <motion.div
        animate={{
          x: [0, -30, 40, 0],
          y: [0, 50, -40, 0],
          scale: [1, 0.95, 1.1, 1],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute -bottom-[10%] -right-[10%] h-[600px] w-[600px] rounded-full bg-cyan-500/20 blur-[100px]"
        id="aurora-blob-2"
      />

      <motion.div
        animate={{
          x: [0, 40, -50, 0],
          y: [0, 60, 30, 0],
          scale: [1, 1.1, 0.85, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-[20%] right-[10%] h-[400px] w-[400px] rounded-full bg-indigo-600/10 blur-[80px]"
        id="aurora-blob-3"
      />

      {/* Tech grid texture for sub-visual depth optimized for dark background */}
      <div 
        className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-85"
        id="grid-overlay"
      />
    </div>
  );
}
