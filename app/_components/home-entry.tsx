"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function HomeEntry() {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 gap-8 p-2 sm:p-8">
      <motion.div
        className="flex flex-col justify-center items-start"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold">Marcos Araújo</h1>
        <h2 className="text-lg">Desenvolvedor Full Stack</h2>
        <p className="mt-4 text-gray-700 max-w-sm">
          Marcos Henrique Araújo é um desenvolvedor full stack com experiência
          em tecnologias como Next.js, React, TypeScript, Node e várias outras
          stacks. Ele é apaixonado por criar soluções inovadoras e eficientes,
          sempre buscando aprender e se aprimorar.
        </p>

        <div className="mt-6">
          <Link
            href="/contact"
            className="px-3 py-2 border border-primary text-primary font-semibold rounded-full hover:bg-primary hover:text-white transition-colors"
          >
            Vamos conversar
          </Link>
        </div>
      </motion.div>
      <motion.div
        className="flex justify-center items-center"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Image
          src="/desenho_rique.png"
          alt="Profile Picture"
          width={400}
          height={400}
        />
      </motion.div>
    </section>
  );
}
