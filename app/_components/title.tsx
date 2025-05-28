"use client";

import { motion } from "framer-motion";
import TitleDecor from "./ui/title-decor";
import React, { useEffect, useState } from "react";
import TypingText from "./ui/typing-text";

interface TitleProps {
  title: string | React.ReactNode;
  span: string;
  paragraph?: string;
  id?: string;
  align?: "left" | "center" | "right";
  typeEffect?: boolean;
  glowEffect?: boolean;
}

const Title = ({
  title,
  span,
  paragraph,
  id,
  align = "center",
  typeEffect = false,
  glowEffect = true,
}: TitleProps) => {
  const textAlign = {
    left: "text-left items-start",
    center: "text-center items-center",
    right: "text-right items-end",
  };

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <motion.div
      id={id}
      className={`w-full flex flex-col ${textAlign[align]} max-w-[700px] px-5 relative`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      {/* Glow orb decorations */}
      {glowEffect && (
        <>
          <motion.div
            className="absolute -left-4 -top-4 w-16 h-16 rounded-full bg-gradient-to-r from-[#038C7F]/20 to-[#A9D9D0]/20 blur-xl z-0"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          />

          <motion.div
            className="absolute -right-12 top-1/2 w-24 h-24 rounded-full bg-indigo-500/10 blur-xl z-0"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.5 }}
          />

          <motion.div
            className="absolute left-1/3 bottom-0 w-20 h-20 rounded-full bg-[#038C7F]/10 blur-lg z-0"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          />
        </>
      )}

      {/* Tech decorative elements */}
      <motion.div
        className="absolute -left-8 top-0 w-4 h-4 border border-[#038C7F]/30 z-0"
        initial={{ opacity: 0, rotate: 45 }}
        animate={{ opacity: 0.6, rotate: 45 }}
        transition={{ duration: 1, delay: 0.2 }}
      />

      <motion.div
        className="absolute -right-4 top-1/2 w-2 h-10 border-r border-indigo-500/30 z-0"
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: 0.6, height: 40 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      />

      {/* Subtitle with glow */}
      <motion.h3
        className="bg-gradient-to-r from-[#038C7F] to-[#A9D9D0] bg-clip-text font-semibold uppercase tracking-widest text-transparent relative z-10"
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        {span}
      </motion.h3>

      {/* Animated separator line */}
      <motion.div
        className="relative"
        initial={{ width: 0 }}
        animate={{ width: align === "center" ? "80px" : "40px" }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <div
          className={`h-0.5 bg-gradient-to-r from-[#038C7F] to-transparent my-3 ${
            align === "center" ? "mx-auto" : align === "right" ? "ml-auto" : ""
          }`}
        ></div>
      </motion.div>

      {/* Main title with decorative elements */}
      <TitleDecor className={align === "center" ? "mx-auto" : ""}>
        {typeEffect && typeof title === "string" ? (
          <h2 className="text-3xl md:text-4xl font-bold relative z-10">
            {mounted && <TypingText text={title} delay={50} />}
          </h2>
        ) : (
          <motion.h2
            className="text-3xl md:text-4xl font-bold relative z-10"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {title}
          </motion.h2>
        )}
      </TitleDecor>

      {/* Paragraph with fade-in effect */}
      {paragraph && (
        <motion.p
          className={`mt-4 text-white/60 max-w-[90%] ${
            align === "center" ? "mx-auto" : align === "right" ? "ml-auto" : ""
          }`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          {paragraph}
        </motion.p>
      )}

      {/* Floating decorative elements */}
      <motion.div
        className="absolute -right-8 bottom-0 w-2 h-2 rounded-full bg-[#038C7F]"
        animate={{
          y: [0, -15, 0],
          opacity: [0.3, 0.8, 0.3],
          boxShadow: [
            "0 0 0px rgba(3, 140, 127, 0.3)",
            "0 0 10px rgba(3, 140, 127, 0.8)",
            "0 0 0px rgba(3, 140, 127, 0.3)",
          ],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />

      <motion.div
        className="absolute left-1/4 -bottom-4 w-1 h-1 rounded-full bg-indigo-500"
        animate={{
          y: [0, -10, 0],
          opacity: [0.2, 0.6, 0.2],
          boxShadow: [
            "0 0 0px rgba(79, 70, 229, 0.3)",
            "0 0 8px rgba(79, 70, 229, 0.8)",
            "0 0 0px rgba(79, 70, 229, 0.3)",
          ],
        }}
        transition={{
          duration: 3,
          delay: 1,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />

      {/* Circuit-like decorative lines */}
      <motion.div
        className="absolute -left-12 bottom-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ duration: 1, delay: 0.7 }}
      >
        <svg
          width="60"
          height="60"
          viewBox="0 0 60 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10 30H30M30 30V10M30 30L50 50"
            stroke="#038C7F"
            strokeWidth="0.5"
            strokeLinecap="round"
          />
          <circle cx="30" cy="30" r="2" fill="#038C7F" fillOpacity="0.5" />
          <circle cx="10" cy="30" r="1" fill="#038C7F" fillOpacity="0.3" />
          <circle cx="50" cy="50" r="1" fill="#038C7F" fillOpacity="0.3" />
        </svg>
      </motion.div>
    </motion.div>
  );
};

export default Title;
