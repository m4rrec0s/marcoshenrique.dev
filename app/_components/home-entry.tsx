"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import TypingText from "./ui/typing-text";
import { ChevronDown } from "lucide-react";

export default function HomeEntry() {
  return (
    <section
      id="home"
      className="relative isolate flex min-h-screen w-full overflow-hidden scroll-mt-24"
    >
      <div className="absolute sm:left-5 sm:top-5 z-10 bottom-5 right-5">
        <Image
          src="/logo_marcos.svg"
          alt=""
          priority
          width={60}
          height={60}
          quality={100}
          className="object-contain object-right-top"
        />
      </div>
      <div className="absolute inset-0 pointer-events-none">
        <Image
          src="/banner.svg"
          alt=""
          aria-hidden
          fill
          priority
          sizes="100vw"
          quality={100}
          className="object-cover object-[88%_center] sm:object-[80%_center] lg:object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-transparent dark:via-background/75" />
      </div>

      <div className="relative z-10 flex w-full max-w-7xl mx-auto items-center px-4 py-16 sm:px-8 lg:px-12">
        <div className="flex w-full max-w-2xl flex-col items-start text-left">
          <h1 className="text-4xl sm:text-5xl font-bold text-neutral-900 dark:text-white">
            Marcos Araújo
          </h1>

          <div className="mt-2">
            <h2 className="text-lg sm:text-xl">
              <TypingText
                text="Desenvolvedor Full Stack"
                typingSpeed={80}
                delay={800}
                className="text-neutral-700 dark:text-neutral-300"
              />
            </h2>
          </div>

          <p className="mt-6 max-w-sm leading-relaxed text-neutral-700 dark:text-neutral-300">
            Marcos Henrique Araújo é um desenvolvedor full stack com experiência
            em tecnologias como Next.js, React, TypeScript, Node e várias outras
            stacks. Ele é apaixonado por tecnologia, inovação e a satisfação do
            usuário, sempre buscando aprender e se aprimorar.
          </p>

          <div className="mt-8 space-x-2">
            <Link
              href="https://docs.google.com/document/d/1jgOX7m6fNqQdnEX_oa3ZQ2Roki2sdK_9/edit?usp=drive_link&ouid=101988238188647654288&rtpof=true&sd=true"
              className="text-xs inline-block rounded-lg border px-5 py-2.5 font-medium text-white transition hover:opacity-80 dark:border-white dark:text-white"
            >
              Ver meu currículo →
            </Link>
            <Link
              href="/contact"
              className="text-xs inline-block rounded-lg bg-black px-5 py-2.5 font-medium text-white transition hover:opacity-80 dark:bg-white dark:text-black"
            >
              Vamos conversar →
            </Link>
          </div>
        </div>
      </div>

      <motion.a
        href="#about"
        className="absolute bottom-8 left-1/2 z-20 inline-flex -translate-x-1/2 items-center gap-2 rounded-full border border-white/10 bg-white/10 px-5 py-3 text-sm font-medium text-white shadow-lg shadow-black/30 backdrop-blur-xl transition-colors hover:bg-white/20"
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
      >
        <ChevronDown size={16} />
        Veja mais
      </motion.a>
    </section>
  );
}
