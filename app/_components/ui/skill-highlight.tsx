"use client";

import React from "react";
import { motion } from "framer-motion";

interface SkillHighlightProps {
  children: React.ReactNode;
}

export default function SkillHighlight({ children }: SkillHighlightProps) {
  return (
    <div className="relative">
      <motion.div
        className="absolute -inset-1 rounded-lg bg-gradient-to-r from-purple-500/20 to-blue-500/20 blur-lg opacity-75"
        animate={{
          scale: [1, 1.02, 1],
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
      <div className="relative bg-black/60 backdrop-blur-md p-6 rounded-lg border border-white/10">
        {children}
      </div>
    </div>
  );
}
