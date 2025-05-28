"use client";

import React from "react";
import { motion } from "framer-motion";

interface TitleDecorProps {
  children: React.ReactNode;
  className?: string;
}

export default function TitleDecor({
  children,
  className = "",
}: TitleDecorProps) {
  return (
    <div className={`relative inline-block ${className}`}>
      {/* Decorative elements */}
      <motion.span
        className="absolute -top-2 -left-3 w-1.5 h-1.5 rounded-full bg-[#038C7F]"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.2 }}
      />
      <motion.span
        className="absolute -bottom-2 -right-3 w-1.5 h-1.5 rounded-full bg-[#A9D9D0]"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.4 }}
      />
      <motion.span
        className="absolute top-1/2 -translate-y-1/2 -left-6 w-4 h-px bg-gradient-to-r from-[#038C7F] to-transparent"
        initial={{ width: 0, opacity: 0 }}
        animate={{ width: "16px", opacity: 0.7 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      />
      <motion.span
        className="absolute top-1/2 -translate-y-1/2 -right-6 w-4 h-px bg-gradient-to-l from-[#A9D9D0] to-transparent"
        initial={{ width: 0, opacity: 0 }}
        animate={{ width: "16px", opacity: 0.7 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      />

      {children}
    </div>
  );
}
