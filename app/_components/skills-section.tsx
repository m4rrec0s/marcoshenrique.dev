"use client";

import Title from "./title";
import TechnologiesList from "./technologies-list";

const names = [
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
    <section id="skills" className="py-20 w-full">
      <div className="w-full flex justify-center">
        <Title
          span="Lista de tecnologias"
          title="Habilidades"
          paragraph="Aqui estão algumas das tecnologias que tenho experiência e que utilizo em meus projetos."
        />
      </div>

      <div className="mx-auto mt-14 max-w-4xl space-y-8 px-5">
        <TechnologiesList names={names} />
      </div>
    </section>
  );
}
