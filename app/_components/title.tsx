"use client";

import { motion } from "framer-motion";
import TitleDecor from "./ui/title-decor";
import React from "react";

interface TitleProps {
  title: string | React.ReactNode;
  span: string;
  paragraph?: string;
  id?: string;
  align?: "left" | "center" | "right";
}

const Title = ({
  title,
  span,
  paragraph,
  id,
  align = "center",
}: TitleProps) => {
  const textAlign = {
    left: "text-left items-start",
    center: "text-center items-center",
    right: "text-right items-end",
  };

  return (
    <motion.div
      id={id}
      className={`w-full flex flex-col ${textAlign[align]} max-w-[700px] px-5 relative`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <motion.div
        className="absolute -left-4 -top-4 w-16 h-16 rounded-full bg-gradient-to-r from-[#038C7F]/20 to-[#A9D9D0]/20 blur-xl z-0"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
      />

      <motion.h3
        className="bg-gradient-to-r from-[#038C7F] to-[#A9D9D0] bg-clip-text font-semibold uppercase tracking-widest text-transparent relative z-10"
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        {span}
      </motion.h3>

      <motion.div
        className="relative"
        initial={{ width: 0 }}
        animate={{ width: "40px" }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <div
          className={`h-0.5 bg-gradient-to-r from-[#038C7F] to-transparent my-3 ${
            align === "center" ? "mx-auto" : align === "right" ? "ml-auto" : ""
          }`}
        ></div>
      </motion.div>

      <TitleDecor className={align === "center" ? "mx-auto" : ""}>
        <motion.h2
          className="text-3xl md:text-4xl font-bold relative z-10"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {title}
        </motion.h2>
      </TitleDecor>

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

      <motion.div
        className="absolute -right-8 bottom-0 w-2 h-2 rounded-full bg-[#038C7F]/30"
        animate={{
          y: [0, -15, 0],
          opacity: [0.3, 0.8, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
      <motion.div
        className="absolute -left-12 top-1/2 w-1 h-1 rounded-full bg-[#A9D9D0]/30"
        animate={{
          y: [0, 10, 0],
          opacity: [0.2, 0.5, 0.2],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
    </motion.div>
  );
};

export default Title;
