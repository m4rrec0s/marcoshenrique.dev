"use client";

import { motion } from "framer-motion";
import Title from "./title";

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
    <section id="skills" className="relative w-full overflow-hidden py-20">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white/5 via-white/5 to-transparent opacity-40" />

      <motion.div
        className="absolute left-10 top-10 -z-10 h-20 w-20 rounded-full border border-[#737373]/20"
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
        className="absolute right-10 top-1/2 -z-10 h-20 w-3 bg-gradient-to-b from-[#737373]/10 to-transparent"
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
        className="mb-10 flex w-full justify-center"
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

      <motion.div
        className="mx-auto w-full max-w-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        <div className="[mask-image:_linear-gradient(to_right,transparent_0,_black_96px,_black_calc(100%-96px),transparent_100%)]">
          <div
            className="flex w-max flex-nowrap items-center will-change-transform"
            style={{ animation: "skills-marquee 60s linear infinite" }}
          >
            <div className="flex shrink-0 flex-nowrap items-center gap-4 px-4 py-2">
              {allTechnologies.map((technology) => (
                <div
                  key={`first-${technology}`}
                  className="rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-medium tracking-wide text-white/80 backdrop-blur-sm transition-colors duration-300 hover:border-white/30 hover:bg-white/10 hover:text-white"
                >
                  {technology}
                </div>
              ))}
            </div>
            <div
              className="flex shrink-0 flex-nowrap items-center gap-4 px-4 py-2"
              aria-hidden="true"
            >
              {allTechnologies.map((technology) => (
                <div
                  key={`second-${technology}`}
                  className="rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-medium tracking-wide text-white/80 backdrop-blur-sm transition-colors duration-300 hover:border-white/30 hover:bg-white/10 hover:text-white"
                >
                  {technology}
                </div>
              ))}
            </div>
          </div>
        </div>
        <style>{`
          @keyframes skills-marquee {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
        `}</style>
      </motion.div>
    </section>
  );
}
