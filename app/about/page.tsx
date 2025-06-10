"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const AboutPage = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      id="about"
      className="grid grid-cols-1 sm:grid-cols-2 sm:items-center justify-center min-h-screen p-4 py-20 sm:py-0"
    >
      <motion.div
        className="w-full max-w-md px-3"
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, delay: 0.1 }}
      >
        <h1 className="text-4xl font-bold">Um pouco sobre mim</h1>
        <p className="mt-4 font-medium font-mono text-gray-700 dark:text-gray-300">
          Olá! Meu nome é Marcos e sou desenvolvedor a cerca de 2 anos. Tenho
          experiência em diversas tecnologias e adoro aprender coisas novas,
          sempre esperando a melhor experiência do usuário.
        </p>
        <p className="mt-4 font-medium font-mono text-gray-700 dark:text-gray-300">
          Estou cursando Análise e Desenvolvimento de Sistemas a mais de 1 ano,
          onde pude aprender fundamentos de programação, estruturas de dados,
          algoritmos e muito mais. Durante esse tempo, tive a oportunidade de
          trabalhar em projetos acadêmicos e pessoais, o que me ajudou a
          aprimorar minhas habilidades e ganhar experiência prática.
        </p>
        <p className="mt-4 font-medium font-mono text-gray-700 dark:text-gray-300">
          Meu foco principal no momento é desenvolvimento web full stack com
          <span className="text-green-600 hover:font-bold hover:text-green-400 transition-colors">
            {" "}
            Next.js
          </span>{" "}
          e{" "}
          <span className="text-green-600 hover:font-bold hover:text-green-400 transition-colors">
            Node.js
          </span>{" "}
          utilizando Typescript para tipage. Mas também tenho interesse em
          outras áreas, como inteligência artificial e desenvolvimento de
          aplicativos móveis.
        </p>
        <p></p>
      </motion.div>
      <motion.div
        className="flex items-center justify-center mt-8 sm:mt-0"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        <Image
          src="https://6c8fb3gvzm.ufs.sh/f/dac21f19-0421-440b-b20a-5550364fd045-hvsas7.png"
          alt="Marcos"
          width={300}
          height={300}
          className="rounded-full shadow-lg"
          priority
        />
      </motion.div>
    </motion.section>
  );
};

export default AboutPage;
