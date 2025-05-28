"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import TypingText from "./ui/typing-text";

export default function HomeEntry() {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 gap-8 p-2 sm:p-8 max-sm:py-[100px] relative">
      {/* Highlight background effect for content */}
      <motion.div
        className="absolute -inset-4 rounded-xl bg-gradient-to-r from-[#038C7F]/10 to-transparent -z-10 opacity-0 sm:opacity-100"
        animate={{
          opacity: [0, 0.3, 0.2],
          scale: [0.9, 1, 0.98],
        }}
        transition={{ duration: 4, repeat: Infinity, repeatType: "reverse" }}
      />

      <motion.div
        className="flex flex-col justify-center items-start"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h1 className="text-4xl sm:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
            Marcos Araújo
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h2 className="text-lg sm:text-xl mt-2">
            <TypingText
              text="Desenvolvedor Full Stack"
              typingSpeed={80}
              delay={800}
              className="text-[#038C7F]"
            />
          </h2>
        </motion.div>

        <motion.p
          className="mt-6 text-gray-300 max-w-sm leading-relaxed backdrop-blur-sm bg-black/10 p-4 rounded-lg border border-white/5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          Marcos Henrique Araújo é um desenvolvedor full stack com experiência
          em tecnologias como Next.js, React, TypeScript, Node e várias outras
          stacks. Ele é apaixonado por criar soluções inovadoras e eficientes,
          sempre buscando aprender e se aprimorar.
        </motion.p>

        <motion.div
          className="mt-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <Link
            href="/contact"
            className="px-5 py-2.5 relative rounded-lg group overflow-hidden font-medium bg-[#038C7F]/80 text-white inline-block"
          >
            <span className="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-300 ease-out transform translate-y-0 bg-white group-hover:h-full opacity-10"></span>
            <span className="relative flex items-center gap-2">
              Vamos conversar
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="transition-transform group-hover:translate-x-1"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </span>
          </Link>
        </motion.div>
      </motion.div>

      <motion.div
        className="flex justify-center items-center relative"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        {/* Decorative circles */}
        <motion.div
          className="absolute -z-10 w-64 h-64 bg-[#038C7F]/10 rounded-full blur-md"
          animate={{
            scale: [1, 1.05, 1],
          }}
          transition={{ duration: 4, repeat: Infinity, repeatType: "reverse" }}
        />

        <motion.div
          className="absolute -z-10 w-80 h-80 border border-[#038C7F]/20 rounded-full"
          animate={{
            rotate: 360,
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />

        <motion.div
          className="absolute -z-10 w-72 h-72 border border-[#038C7F]/30 rounded-full"
          animate={{
            rotate: -360,
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        />

        {/* Profile image with glow effect */}
        <motion.div
          className="relative"
          whileHover={{ scale: 1.03 }}
          transition={{ duration: 0.3 }}
        >
          <div className="absolute inset-0 bg-[#038C7F]/20 blur-xl rounded-full -z-10" />
          <Image
            src="/desenho_rique.png"
            alt="Profile Picture"
            width={400}
            height={400}
            className="relative z-10"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
