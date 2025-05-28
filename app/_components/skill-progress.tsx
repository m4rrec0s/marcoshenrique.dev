"use client";

import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface SkillProgressProps {
  name: string;
  percentage: number;
  delay?: number;
}

const SkillProgress = ({ name, percentage, delay = 0 }: SkillProgressProps) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={controls}
      variants={{
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.5, delay },
        },
      }}
      className="mb-6"
    >
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-medium text-white">{name}</span>
        <span className="text-xs font-medium text-gray-400">{percentage}%</span>
      </div>
      <div className="w-full bg-white/10 rounded-full h-2.5 overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={controls}
          variants={{
            visible: {
              width: `${percentage}%`,
              transition: {
                duration: 1,
                delay: delay + 0.3,
                ease: "easeInOut",
              },
            },
          }}
          className="h-full rounded-full bg-gradient-to-r from-blue-500 to-purple-500"
        ></motion.div>
      </div>
    </motion.div>
  );
};

export default SkillProgress;
