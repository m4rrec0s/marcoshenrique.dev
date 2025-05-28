"use client";

import React from "react";
import GradientBackground from "./gradient-background";
import GridPattern from "./grid-pattern";
import FloatingParticles from "./floating-particles";
import NoiseTexture from "./noise-texture";
import { motion } from "framer-motion";

export default function AnimatedBackground() {
  return (
    <>
      <div className="fixed inset-0 -z-10 bg-[#020817]" />
      <GradientBackground />
      <GridPattern />
      <FloatingParticles />
      <NoiseTexture />

      {/* Glow spots */}
      <motion.div
        className="fixed top-20 -left-20 w-72 h-72 bg-[#038C7F]/20 rounded-full blur-[100px] -z-10"
        animate={{
          opacity: [0.2, 0.4, 0.2],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />

      <motion.div
        className="fixed bottom-10 right-20 w-80 h-80 bg-indigo-500/10 rounded-full blur-[100px] -z-10"
        animate={{
          opacity: [0.15, 0.3, 0.15],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
    </>
  );
}
