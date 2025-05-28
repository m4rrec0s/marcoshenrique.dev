export interface Project {
  name: string;
  slug: string;
  category: string;
  description: string;
  status: "Completed" | "In Progress";
  images: string[];
  technologies: string[];
  github: string;
  project: string;
}

import projectsData from "./projects.json";

export function getProjects(): Project[] {
  return projectsData.map((project) => ({
    ...project,
    status: project.status === "Completed" ? "Completed" : "In Progress",
  }));
}

export function getProjectBySlug(slug: string): Project | undefined {
  const projects = getProjects();
  return projects.find((project) => project.slug === slug);
}
