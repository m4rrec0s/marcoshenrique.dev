"use client";

import Image from "next/image";
import Link from "next/link";
import TypingText from "./ui/typing-text";

export default function HomeEntry() {
  return (
    <section className="relative isolate flex min-h-[calc(100vh-8rem)] w-full overflow-hidden">
      <div className="absolute left-5 top-5 z-10">
        <Image
          src="/logo_marcos.svg"
          alt=""
          priority
          width={60}
          height={60}
          quality={100}
          className="object-contain object-center"
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
          className="object-cover object-center"
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
    </section>
  );
}
