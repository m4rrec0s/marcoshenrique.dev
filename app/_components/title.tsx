"use client";

import { motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
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

  const titleRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(titleRef, { amount: 0.6, once: false });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const lampState = isInView ? "lamp-on" : "lamp-off";
  const railState = isInView ? "rail-on" : "rail-off";

  return (
    <motion.div
      ref={titleRef}
      id={id}
      className={`relative flex w-full max-w-[700px] flex-col px-5 ${textAlign[align]}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      {glowEffect && (
        <>
          <motion.div
            className="absolute -left-2 -top-2 z-0 h-14 w-14 rounded-full bg-white/15 blur-2xl"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          />

          <motion.div
            className="absolute left-1/3 bottom-0 z-0 h-20 w-20 rounded-full bg-white/10 blur-2xl"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          />
        </>
      )}

      <div className="relative z-10 flex flex-col gap-3">
        <div
          className={`flex items-center gap-3 ${align === "right" ? "justify-end" : align === "center" ? "justify-center" : "justify-start"}`}
        >
          <span className={`title-lamp ${lampState}`} aria-hidden="true" />
          <motion.h3
            className="bg-gradient-to-r from-white via-white/90 to-white/60 bg-clip-text text-xs font-semibold uppercase tracking-[0.42em] text-transparent"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            {span}
          </motion.h3>
        </div>

        <motion.div
          className={`relative h-px overflow-hidden bg-white/10 ${align === "center" ? "mx-auto" : align === "right" ? "ml-auto" : ""}`}
          initial={{ width: 0, opacity: 0 }}
          animate={{ width: align === "center" ? "96px" : "56px", opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className={`title-rail ${railState}`} aria-hidden="true" />
        </motion.div>

        {typeEffect && typeof title === "string" ? (
          <h2 className="relative z-10 text-3xl font-semibold tracking-tight text-white md:text-4xl">
            {mounted && <TypingText text={title} delay={50} />}
          </h2>
        ) : (
          <motion.h2
            className="relative z-10 text-3xl font-semibold tracking-tight text-white md:text-4xl"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {title}
          </motion.h2>
        )}

        {paragraph && (
          <motion.p
            className={`mt-4 max-w-[90%] text-white/60 ${
              align === "center"
                ? "mx-auto"
                : align === "right"
                  ? "ml-auto"
                  : ""
            }`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            {paragraph}
          </motion.p>
        )}
      </div>

      <style>{`
        .title-lamp,
        .title-rail {
          display: inline-block;
          background: linear-gradient(90deg, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0.55));
        }

        .title-lamp {
          width: 10px;
          height: 10px;
          border-radius: 9999px;
          box-shadow: 0 0 0 rgba(255, 255, 255, 0);
        }

        .title-rail {
          position: absolute;
          inset: 0;
          height: 100%;
          width: 100%;
          transform-origin: left center;
        }

        .lamp-on {
          animation: lamp-on 1.15s ease-in-out forwards;
        }

        .lamp-off {
          animation: lamp-off 0.85s ease-in-out forwards;
        }

        .rail-on {
          animation: rail-on 1.15s ease-in-out forwards;
        }

        .rail-off {
          animation: rail-off 0.85s ease-in-out forwards;
        }

        @keyframes lamp-on {
          0% {
            opacity: 0;
            transform: scale(0.75);
            box-shadow: 0 0 0 rgba(255, 255, 255, 0);
          }
          18% {
            opacity: 0.95;
            transform: scale(1.15);
            box-shadow: 0 0 10px rgba(255, 255, 255, 0.45);
          }
          33% {
            opacity: 0.25;
            transform: scale(0.9);
            box-shadow: 0 0 0 rgba(255, 255, 255, 0);
          }
          48% {
            opacity: 1;
            transform: scale(1.05);
            box-shadow: 0 0 16px rgba(255, 255, 255, 0.6);
          }
          66% {
            opacity: 0.72;
            transform: scale(0.98);
            box-shadow: 0 0 8px rgba(255, 255, 255, 0.35);
          }
          100% {
            opacity: 1;
            transform: scale(1);
            box-shadow: 0 0 16px rgba(255, 255, 255, 0.55);
          }
        }

        @keyframes lamp-off {
          0% {
            opacity: 1;
            transform: scale(1);
            box-shadow: 0 0 16px rgba(255, 255, 255, 0.55);
          }
          24% {
            opacity: 0.55;
            transform: scale(0.98);
            box-shadow: 0 0 8px rgba(255, 255, 255, 0.3);
          }
          48% {
            opacity: 0.9;
            transform: scale(1.06);
            box-shadow: 0 0 12px rgba(255, 255, 255, 0.45);
          }
          72% {
            opacity: 0.2;
            transform: scale(0.82);
            box-shadow: 0 0 0 rgba(255, 255, 255, 0);
          }
          100% {
            opacity: 0;
            transform: scale(0.72);
            box-shadow: 0 0 0 rgba(255, 255, 255, 0);
          }
        }

        @keyframes rail-on {
          0% {
            opacity: 0;
            transform: scaleX(0.2);
          }
          18% {
            opacity: 0.9;
            transform: scaleX(1.02);
          }
          33% {
            opacity: 0.25;
            transform: scaleX(0.92);
          }
          48% {
            opacity: 1;
            transform: scaleX(1.03);
          }
          100% {
            opacity: 1;
            transform: scaleX(1);
          }
        }

        @keyframes rail-off {
          0% {
            opacity: 1;
            transform: scaleX(1);
          }
          24% {
            opacity: 0.5;
            transform: scaleX(0.95);
          }
          48% {
            opacity: 0.85;
            transform: scaleX(1.01);
          }
          72% {
            opacity: 0.15;
            transform: scaleX(0.6);
          }
          100% {
            opacity: 0;
            transform: scaleX(0.2);
          }
        }
      `}</style>
    </motion.div>
  );
};

export default Title;
