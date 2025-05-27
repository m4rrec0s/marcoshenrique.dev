"use client";

import ProjectItem, { ProjectItemProps } from "./project-item";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Title from "./title";

const projectsData: ProjectItemProps[] = [
  {
    props: {
      name: "LNA-Doceria",
      category: "E-commerce",
      description:
        "Aplicação Full-Stack para uma doceria, desenvolvida utilizando o framework Next.js no frontend e Node.js com express no backend.",
      images: [
        "https://6c8fb3gvzm.ufs.sh/f/BhegMacQdV7xD42E3j1TkldOxniDSwmXAE8QRLK6UrY3q9vs",
        "https://6c8fb3gvzm.ufs.sh/f/BhegMacQdV7xwNNppNTXqNQY4tdwEMGiag531nCcKDWfZ7Jh",
        "https://6c8fb3gvzm.ufs.sh/f/BhegMacQdV7xTmREvcYbZCfILMgcJAnwiSRQdT5oF8r0UvPz",
        "https://6c8fb3gvzm.ufs.sh/f/BhegMacQdV7xCXiaTfPJRODo7leHmSWQaEyNPFiwbk4ns5rp",
      ],
      status: "Completed",
      technologies: [
        "Next.js",
        "Tailwind",
        "NodeJs",
        "TypeScript",
        "Axios",
        "Express",
        "Prisma",
        "PostgreeSQL",
      ],
      github: "",
      project: "https://lna-doceria.netlify.app/",
    },
  },
  {
    props: {
      name: "A²DN FITNESS",
      category: "Presentation website",
      description:
        "O projeto é um site de apresentação para uma academia, desenvolvido utilizando o framework Next.js.",
      images: [
        "https://6c8fb3gvzm.ufs.sh/f/BhegMacQdV7x6hcEvopN8fuSIwAyMtVlakG9WErLCDYi21Un",
        "https://6c8fb3gvzm.ufs.sh/f/BhegMacQdV7xDSTQB81TkldOxniDSwmXAE8QRLK6UrY3q9vs",
        "https://6c8fb3gvzm.ufs.sh/f/BhegMacQdV7xQhXGhndtpv3VXyNPswOukqdW8jrzxclI5fMZ",
        "https://6c8fb3gvzm.ufs.sh/f/BhegMacQdV7xiVYcOshbZ9JDS8lYxUgBhVpq0kmQRiLMtX3a",
      ],
      status: "Completed",
      technologies: ["Next.js", "React", "Tailwind", "TypeScript"],
      github: "https://github.com/m4rrec0s/aadn-fitness",
      project: "https://aadn-fitness.vercel.app/",
    },
  },
  {
    props: {
      name: "MH food",
      category: "Food Delivery Application",
      description:
        "O projeto é uma aplicação web para um serviço de entrega de comida, desenvolvida utilizando o framework Next.js.",
      images: [
        "https://utfs.io/f/93d839e0-1605-4683-b726-f8ac3c2c2c4f-z8uvbx.png",
        "https://utfs.io/f/961f4e66-a786-46db-a04f-9b02985dfb98-zb7k90.png",
        "https://utfs.io/f/16fab9bd-c6dc-4900-ae5b-cdb592dffe39-yu5xut.png",
        "https://utfs.io/f/87c866da-d460-4cba-ae42-c50fc9307179-yd4bgm.png",
      ],
      status: "Completed",
      technologies: [
        "Next.js",
        "React",
        "Tailwind",
        "TypeScript",
        "JavaScript",
        "Prisma",
        "PostgreeSQL",
        "Docker",
      ],
      github: "https://github.com/m4rrec0s/mh-food",
      project: "https://mh-food.vercel.app/",
    },
  },
  {
    props: {
      name: "TrackEquip",
      category: "Equipment Tracking Application",
      description:
        "O projeto é uma aplicação web para rastreamento de equipamentos. Inclui busca de equipamentos, visualização de detalhes e status dos equipamentos.",
      images: [
        "https://utfs.io/f/BhegMacQdV7xNcxa3uiz7tOwskcNBrnaZFPo8AL0fDgSvGpx",
        "https://utfs.io/f/BhegMacQdV7xKZRQVwI6lV3f4Om0EpTCUB1gb5GdviQNrWuI",
        "https://utfs.io/f/BhegMacQdV7xBtt7dgcQdV7xfrowZajygGJIS9ilU238kNcH",
        "https://utfs.io/f/BhegMacQdV7xXprFsF67MsQUymfzwLBAFi46cetaKRITGxho",
      ],
      status: "Completed",
      technologies: [
        "Next.js",
        "React",
        "Tailwind",
        "TypeScript",
        "JavaScript",
      ],
      github: "https://github.com/m4rrec0s/TrackEquip",
      project: "https://track-equip.vercel.app/",
    },
  },
  {
    props: {
      name: "TaskList",
      category: "Training web application",
      description:
        "O projeto é uma aplicação web desenvolvida com Next.js, que é um gerenciador de exercícios e treinos. Inclui recursos para autenticação de usuários, busca de exercícios, visualização de detalhes de exercícios e treinos, e integração com o banco de dados Prisma.",
      images: [
        "https://utfs.io/f/25330adf-d6f9-42b6-bac8-eaae4d1215f7-1ri2lq.png",
        "https://utfs.io/f/d44082a6-67d0-45c0-8952-77cd6922a5cd-1ri2lr.png",
        "https://utfs.io/f/e69b67b2-fbd6-487a-a57a-9f0f414e8fbf-1ri2ls.png",
        "https://utfs.io/f/8ff323e1-58f4-4fe3-808a-1d61e637b82f-1ri2lt.png",
      ],
      status: "In Progress",
      technologies: [
        "Next.js",
        "React",
        "Tailwind",
        "TypeScript",
        "JavaScript",
        "Prisma",
        "PostgreeSQL",
      ],
      github: "https://github.com/m4rrec0s/tasklist-app",
      project: "https://tasklist-app-eight.vercel.app/",
    },
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20 w-full">
      <div className="w-full flex justify-center mb-20">
        <Title
          span="Resultados do mundo real"
          title="Projetos em destaque"
          paragraph="Aqui estão alguns dos projetos que realizei ao longo do meu aprendizado, evoluindo a cada novo desafio."
        />
      </div>
      <div className="w-full h-full flex justify-center items-center flex-col px-5">
        <Carousel
          plugins={[
            Autoplay({
              delay: 5000,
            }),
          ]}
          className="w-full max-w-xs sm:max-w-lg md:max-w-2xl lg:max-w-4xl xl:max-w-6xl"
        >
          <CarouselContent>
            {projectsData.map((project, index) => (
              <CarouselItem key={index}>
                <ProjectItem props={project.props} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>
      </div>
    </section>
  );
}
