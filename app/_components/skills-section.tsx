"use client";

import Title from "./title";
import TechnologiesList from "./technologies-list";
import { motion } from "framer-motion";

const technologiesCategories = {
  "Frameworks Frontend": ["React", "Next.js", "Vue", "Nuxt", "Angular"],
  "Mobile & Desenvolvimento Cross-Platform": ["React Native", "Expo"],
  "Linguagens de Programação": [
    "TypeScript",
    "JavaScript",
    "Python",
    "Java",
    "PHP",
  ],
  "Backend & Frameworks": ["Django", "Spring Boot", "Laravel", "Express"],
  "Banco de Dados & ORM": ["Prisma", "PostgreSQL", "MySQL"],
  "DevOps & Ferramentas": ["Docker", "Git", "GitHub", "REST API"],
  "UI/UX & Estilização": [
    "Tailwind",
    "SASS",
    "CSS",
    "HTML",
    "Bootstrap",
    "Framer Motion",
    "Styled Components",
    "Material UI",
  ],
  Testes: ["Jest", "Testing Library"],
};

const allTechnologies = [
  "Next.js",
  "React",
  "React Native",
  "Expo",
  "TypeScript",
  "JavaScript",
  "Python",
  "Django",
  "Nuxt",
  "Vue",
  "Angular",
  "Java",
  "Spring Boot",
  "PHP",
  "Laravel",
  "Prisma",
  "PostgreSQL",
  "MySQL",
  "Docker",
  "HTML",
  "CSS",
  "SASS",
  "Tailwind",
  "Bootstrap",
  "Framer Motion",
  "Styled Components",
  "Material UI",
  "Git",
  "GitHub",
  "REST API",
  "Jest",
  "Testing Library",
];

export default function SkillsSection() {
  return (
    <section id="skills" className="py-20 w-full relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 via-purple-500/5 to-transparent -z-10 opacity-40 w-full"></div>

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

      <div className="container mx-auto">
        <TechnologiesList
          names={allTechnologies}
          categories={technologiesCategories}
        />
      </div>
    </section>
  );
}
