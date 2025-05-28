"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface TypingTextProps {
  text: string;
  className?: string;
  typingSpeed?: number;
  delay?: number;
}

export default function TypingText({
  text,
  className = "",
  typingSpeed = 50,
  delay = 0,
}: TypingTextProps) {
  const [displayedText, setDisplayedText] = useState("");
  const [cursorVisible, setCursorVisible] = useState(true);
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    // Delay before starting typing animation
    const delayTimeout = setTimeout(() => {
      setIsTyping(true);
      let currentIndex = 0;

      // Start typing animation
      const typingInterval = setInterval(() => {
        if (currentIndex <= text.length) {
          setDisplayedText(text.substring(0, currentIndex));
          currentIndex++;
        } else {
          clearInterval(typingInterval);
          setIsTyping(false);
        }
      }, typingSpeed);

      return () => clearInterval(typingInterval);
    }, delay);

    return () => clearTimeout(delayTimeout);
  }, [text, typingSpeed, delay]);

  // Blinking cursor effect
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setCursorVisible((prev) => !prev);
    }, 500);

    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <motion.span
      className={`inline-block ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      {displayedText}
      {(isTyping || cursorVisible) && (
        <span className="inline-block w-0.5 h-[1em] bg-[#038C7F] ml-0.5 align-middle animate-pulse" />
      )}
    </motion.span>
  );
}
