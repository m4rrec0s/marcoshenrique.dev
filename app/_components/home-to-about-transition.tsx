"use client";

import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";

export default function HomeToAboutTransition() {
  return (
    <section
      aria-label="Transição entre a introdução e a seção sobre mim"
      className="relative isolate flex min-h-[10svh] w-full overflow-hidden px-4 py-16 sm:px-8 lg:px-12"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/70 to-black" />
      <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-background to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-background to-transparent" />

      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        animate={{ opacity: [0.55, 0.8, 0.55] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="absolute left-[-8rem] top-20 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute right-[-6rem] bottom-24 h-80 w-80 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/5 blur-3xl" />
      </motion.div>

      {/*<div className="relative z-10 mx-auto flex w-full max-w-7xl flex-1 items-center justify-center text-center">
        <div className="flex max-w-2xl flex-col items-center gap-6">
          <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-1 text-[11px] font-semibold uppercase tracking-[0.4em] text-gray-300 backdrop-blur-sm">
            Continuação
          </span>

          <div className="h-px w-24 bg-gradient-to-r from-transparent via-white/20 to-transparent" />

          <p className="max-w-xl text-sm leading-7 text-gray-400 sm:text-base">
            Uma pausa visual para tirar o corte seco e preparar a navegação para
            a próxima parte da página.
          </p>
        </div>
      </div>*/}
    </section>
  );
}
