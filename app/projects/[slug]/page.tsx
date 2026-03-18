import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ExternalLink, GithubIcon } from "lucide-react";
import { getProjectBySlug } from "../../_actions/projects";
import ProjectTechnologies from "../../_components/technologies";

interface ProjectDetailsPageProps {
  params: { slug: string };
}

export default async function ProjectDetailsPage({
  params,
}: ProjectDetailsPageProps) {
  const { slug } = params;
  const response = await getProjectBySlug(slug);

  if (!response.success || !response.data) {
    notFound();
  }

  const project = response.data;

  return (
    <main className="min-h-screen bg-neutral-950 px-4 py-10 text-white sm:px-8 lg:px-12">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-8">
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-sm text-gray-400 transition-colors hover:text-white"
        >
          <ArrowLeft size={16} />
          Voltar para projetos
        </Link>

        <section className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-4">
            <p className="text-xs uppercase tracking-[0.4em] text-gray-400">
              {project.category}
            </p>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              {project.name}
            </h1>
            <p className="max-w-3xl text-base leading-8 text-gray-300">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-3 pt-2">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-gray-200 transition-colors hover:bg-white/10"
                >
                  <GithubIcon size={16} />
                  GitHub
                </a>
              )}
              {project.project && (
                <a
                  href={project.project}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-medium text-black transition-colors hover:opacity-90"
                >
                  <ExternalLink size={16} />
                  Live Demo
                </a>
              )}
            </div>
          </div>

          <div className="overflow-hidden rounded-[28px] border border-white/10 bg-white/5 shadow-2xl shadow-black/30 backdrop-blur-xl">
            <Image
              src={project.images[0] || "/banner.svg"}
              alt={project.name}
              width={1200}
              height={800}
              priority
              className="h-full w-full object-cover"
            />
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
            <p className="text-xs uppercase tracking-[0.3em] text-gray-400">
              Status
            </p>
            <p className="mt-3 text-lg font-semibold">{project.status}</p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
            <p className="text-xs uppercase tracking-[0.3em] text-gray-400">
              Tecnologias
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              <ProjectTechnologies technologies={project.technologies} />
            </div>
          </div>
        </section>

        {project.images.length > 1 && (
          <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {project.images.slice(1).map((image, index) => (
              <div
                key={`${project.slug}-${index}`}
                className="overflow-hidden rounded-3xl border border-white/10 bg-white/5"
              >
                <Image
                  src={image}
                  alt={`${project.name} screenshot ${index + 2}`}
                  width={900}
                  height={700}
                  className="h-72 w-full object-cover"
                />
              </div>
            ))}
          </section>
        )}
      </div>
    </main>
  );
}
