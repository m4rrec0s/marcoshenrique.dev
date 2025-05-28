"use client";

import { motion } from "framer-motion";
import Title from "./title";
import TechnologiesList from "./technologies-list";

const technologiesCategories = {
  Frontend: ["React", "Next.js", "Vue", "Angular"],
  Mobile: ["React Native", "Expo"],
  Linguagens: ["TypeScript", "JavaScript", "Python", "Java", "PHP"],
  Backend: ["Node.js", "Django", "Spring Boot", "Laravel", "Express"],
  "Banco de Dados": ["PostgreSQL", "MySQL", "MongoDB"],
  DevOps: ["Docker", "Git", "GitHub"],
  "UI/UX": ["Tailwind", "CSS", "HTML", "Framer Motion"],
};

const allTechnologies = [
  "Next.js",
  "React",
  "React Native",
  "Expo",
  "TypeScript",
  "JavaScript",
  "Python",
  "Node.js",
  "Django",
  "Vue",
  "Angular",
  "Java",
  "Spring Boot",
  "PHP",
  "Laravel",
  "PostgreSQL",
  "MySQL",
  "MongoDB",
  "Docker",
  "HTML",
  "CSS",
  "Tailwind",
  "Framer Motion",
  "Git",
  "GitHub",
  "Express",
];

export default function SkillsSection() {
  return (
    <section id="skills" className="py-20 w-full relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 via-purple-500/5 to-transparent -z-10 opacity-40"></div>

      <motion.div
        className="absolute top-10 left-10 w-20 h-20 border border-[#038C7F]/20 rounded-full -z-5"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.2, 0.4, 0.2],
          rotate: [0, 90, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />

      <motion.div
        className="absolute top-1/2 right-10 w-3 h-20 bg-gradient-to-b from-[#038C7F]/10 to-transparent -z-5"
        animate={{
          height: [80, 120, 80],
          opacity: [0.2, 0.5, 0.2],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />

      <motion.div
        className="w-full flex justify-center mb-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <Title
          span="Lista de tecnologias"
          title="Habilidades"
          paragraph="Aqui estão algumas das tecnologias que tenho experiência e que utilizo em meus projetos."
        />
      </motion.div>

      <div className="container mx-auto px-4">
        <motion.div
          className="bg-black/20 backdrop-blur-sm rounded-xl p-6 border border-white/10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <TechnologiesList
            names={allTechnologies}
            categories={technologiesCategories}
          />
        </motion.div>
      </div>
    </section>
  );
}
