'use client';

import Image from 'next/image';
import Link from 'next/link';
import TypingText from './ui/typing-text';

export default function HomeEntry() {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 gap-8 p-4 sm:p-8 max-sm:py-20 w-full max-w-6xl mx-auto">
      <div className="flex flex-col justify-center items-start">
        <div>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white">
            Marcos Araújo
          </h1>
        </div>

        <div className="mt-2">
          <h2 className="text-lg sm:text-xl">
            <TypingText
              text="Desenvolvedor Full Stack"
              typingSpeed={80}
              delay={800}
              className="text-gray-700 dark:text-gray-300"
            />
          </h2>
        </div>

        <p className="mt-6 text-gray-700 dark:text-gray-300 max-w-sm leading-relaxed">
          Marcos Henrique Araújo é um desenvolvedor full stack com experiência
          em tecnologias como Next.js, React, TypeScript, Node e várias outras
          stacks. Ele é apaixonado por tecnologia, inovação e a satisfação do
          usuário, sempre buscando aprender e se aprimorar.
        </p>

        <div className="mt-8">
          <Link
            href="/contact"
            className="px-5 py-2.5 rounded-lg font-medium bg-black dark:bg-white text-white dark:text-black hover:opacity-80 inline-block transition"
          >
            Vamos conversar →
          </Link>
        </div>
      </div>

      <div className="flex justify-center items-center">
        <Image
          src="/desenho_rique.png"
          alt="Profile Picture"
          width={400}
          height={400}
          className="rounded-lg shadow-lg"
        />
      </div>
    </section>
  );
}
