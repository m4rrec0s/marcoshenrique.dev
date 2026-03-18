"use server";

import { seedProjects } from "@/app/_lib/seed";

const VALID_API_KEY = process.env.NEXT_PUBLIC_API_KEY;

export type ProjectStatus = "Completed" | "In Progress";

export interface Project {
  id: number;
  name: string;
  slug: string;
  category: string;
  description: string;
  images: string[];
  status: ProjectStatus;
  technologies: string[];
  github: string | null;
  project: string | null;
  created_at?: string;
  updated_at?: string;
}

export interface ProjectInput {
  name: string;
  slug: string;
  category: string;
  description: string;
  images: string[];
  status: ProjectStatus;
  technologies: string[];
  github?: string;
  project?: string;
}

function validateApiKey(key?: string): boolean {
  if (!VALID_API_KEY) {
    console.error("API_KEY not configured in environment");
    return false;
  }
  return key === VALID_API_KEY;
}

function cloneProject(project: Project): Project {
  return {
    ...project,
    images: [...project.images],
    technologies: [...project.technologies],
  };
}

function mapSeedProject(
  project: (typeof seedProjects)[number],
  index: number,
): Project {
  return {
    id: index + 1,
    name: project.name,
    slug: project.slug,
    category: project.category,
    description: project.description,
    images: project.images,
    status: project.status === "Completed" ? "Completed" : "In Progress",
    technologies: project.technologies,
    github: project.github || null,
    project: project.project || null,
  };
}

let projectsStore: Project[] = seedProjects.map(mapSeedProject);
let nextProjectId = projectsStore.length + 1;

function getProjectStoreIndex(id: number) {
  return projectsStore.findIndex((project) => project.id === id);
}

export async function getProjects(apiKey?: string) {
  try {
    return {
      success: true,
      data: [...projectsStore]
        .sort((left, right) => right.id - left.id)
        .map(cloneProject),
    };
  } catch (error) {
    console.error("Error fetching projects:", error);
    return { success: false, error: "Failed to fetch projects" };
  }
}

export async function getProjectBySlug(slug: string) {
  try {
    const project = projectsStore.find((item) => item.slug === slug);

    if (!project) {
      return { success: false, error: "Project not found" };
    }

    return {
      success: true,
      data: cloneProject(project),
    };
  } catch (error) {
    console.error("Error fetching project:", error);
    return { success: false, error: "Failed to fetch project" };
  }
}

export async function createProject(data: ProjectInput, apiKey?: string) {
  if (!validateApiKey(apiKey)) {
    return { success: false, error: "Unauthorized" };
  }

  try {
    const existingProject = projectsStore.find(
      (item) => item.slug === data.slug,
    );

    if (existingProject) {
      return {
        success: false,
        error: "A project with this slug already exists",
      };
    }

    const now = new Date().toISOString();
    projectsStore = [
      {
        id: nextProjectId++,
        name: data.name,
        slug: data.slug,
        category: data.category,
        description: data.description,
        images: [...data.images],
        status: data.status,
        technologies: [...data.technologies],
        github: data.github || null,
        project: data.project || null,
        created_at: now,
        updated_at: now,
      },
      ...projectsStore,
    ];

    return {
      success: true,
      data: { id: nextProjectId - 1 },
    };
  } catch (error: any) {
    console.error("Error creating project:", error);
    return {
      success: false,
      error: error.message || "Failed to create project",
    };
  }
}

export async function updateProject(
  id: number,
  data: Partial<ProjectInput>,
  apiKey?: string,
) {
  if (!validateApiKey(apiKey)) {
    return { success: false, error: "Unauthorized" };
  }

  try {
    const projectIndex = getProjectStoreIndex(id);

    if (projectIndex === -1) {
      return { success: false, error: "Project not found" };
    }

    const currentProject = projectsStore[projectIndex];
    projectsStore[projectIndex] = {
      ...currentProject,
      name: data.name ?? currentProject.name,
      slug: data.slug ?? currentProject.slug,
      category: data.category ?? currentProject.category,
      description: data.description ?? currentProject.description,
      images: data.images ? [...data.images] : currentProject.images,
      status: data.status ?? currentProject.status,
      technologies: data.technologies
        ? [...data.technologies]
        : currentProject.technologies,
      github:
        data.github !== undefined ? data.github || null : currentProject.github,
      project:
        data.project !== undefined
          ? data.project || null
          : currentProject.project,
      updated_at: new Date().toISOString(),
    };

    return { success: true };
  } catch (error: any) {
    console.error("Error updating project:", error);
    return {
      success: false,
      error: error.message || "Failed to update project",
    };
  }
}

export async function deleteProject(id: number, apiKey?: string) {
  if (!validateApiKey(apiKey)) {
    return { success: false, error: "Unauthorized" };
  }

  try {
    const projectIndex = getProjectStoreIndex(id);

    if (projectIndex === -1) {
      return { success: false, error: "Project not found" };
    }

    projectsStore = projectsStore.filter((project) => project.id !== id);

    return { success: true };
  } catch (error: any) {
    console.error("Error deleting project:", error);
    return {
      success: false,
      error: error.message || "Failed to delete project",
    };
  }
}
