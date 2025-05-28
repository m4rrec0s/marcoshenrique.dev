"use client";

import React from "react";
import { motion } from "framer-motion";
import TechnologiesList from "../technologies-list";

interface SkillHighlightProps {
  tech: string;
  expertise: number;
}

export default function SkillHighlight({
  tech,
  expertise,
}: SkillHighlightProps) {
  return (
    <motion.div
      className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-full max-w-md"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.3 }}
    >
      <div className="relative">
        {/* Animated gradient background */}
        <motion.div
          className="absolute -inset-1 rounded-lg bg-gradient-to-r from-[#038C7F]/30 to-indigo-500/30 blur-lg opacity-75"
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

        {/* Tech highlight card */}
        <div className="relative bg-black/80 backdrop-blur-md p-6 rounded-lg border border-white/10">
          <div className="flex flex-col items-center gap-4">
            {/* Tech icon */}
            <div className="text-[#038C7F] text-5xl">
              <TechnologiesList icon={tech} />
            </div>

            {/* Tech name */}
            <h3 className="text-xl font-semibold">{tech}</h3>

            {/* Progress bar */}
            <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden mt-2">
              <motion.div
                className="h-full bg-gradient-to-r from-[#038C7F] to-[#A9D9D0]"
                initial={{ width: 0 }}
                animate={{ width: `${expertise}%` }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              />
            </div>

            {/* Expertise level */}
            <div className="flex justify-between w-full text-sm text-white/60">
              <span>Experiência</span>
              <span className="font-medium text-white">{expertise}%</span>
            </div>

            {/* Decorative elements */}
            <div className="absolute top-2 right-2">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5 5H12M12 5H19M12 5V12M12 12V19M12 12H19M12 12H5"
                  stroke="#038C7F"
                  strokeWidth="0.5"
                  strokeLinecap="round"
                />
              </svg>
            </div>

            <div className="absolute bottom-2 left-2">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="12"
                  cy="12"
                  r="8"
                  stroke="#038C7F"
                  strokeWidth="0.5"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
