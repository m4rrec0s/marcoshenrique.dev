"use server";

import { getDatabase, initializeDatabase } from "@/app/_lib/db";
import { seedDatabase, seedProjects } from "@/app/_lib/seed";

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

function parseJsonArray(value: string | null | undefined): string[] {
  if (!value) {
    return [];
  }

  try {
    const parsed = JSON.parse(value);
    return Array.isArray(parsed) ? parsed.filter(Boolean) : [];
  } catch {
    return [];
  }
}

function mapProjectRow(row: any): Project {
  return {
    id: Number(row.id),
    name: row.name,
    slug: row.slug,
    category: row.category,
    description: row.description,
    images: parseJsonArray(row.images),
    status: row.status === "Completed" ? "Completed" : "In Progress",
    technologies: parseJsonArray(row.technologies),
    github: row.github || null,
    project: row.project || null,
    created_at: row.created_at,
    updated_at: row.updated_at,
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

export async function getProjects(apiKey?: string) {
  try {
    initializeDatabase();
    seedDatabase();

    const db = getDatabase();
    const projects = db
      .prepare("SELECT * FROM projects ORDER BY created_at DESC")
      .all();

    if (projects.length === 0) {
      return {
        success: true,
        data: seedProjects.map(mapSeedProject),
      };
    }

    return {
      success: true,
      data: projects.map(mapProjectRow),
    };
  } catch (error) {
    console.error("Error fetching projects:", error);
    return { success: false, error: "Failed to fetch projects" };
  }
}

export async function getProjectBySlug(slug: string) {
  try {
    initializeDatabase();
    seedDatabase();

    const db = getDatabase();
    const project = db
      .prepare("SELECT * FROM projects WHERE slug = ?")
      .get(slug);

    if (!project) {
      const fallbackProject = seedProjects.find((item) => item.slug === slug);

      if (fallbackProject) {
        return {
          success: true,
          data: mapSeedProject(
            fallbackProject,
            seedProjects.indexOf(fallbackProject),
          ),
        };
      }

      return { success: false, error: "Project not found" };
    }

    return {
      success: true,
      data: mapProjectRow(project),
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
    initializeDatabase();
    const db = getDatabase();

    const stmt = db.prepare(`
      INSERT INTO projects (name, slug, category, description, images, status, technologies, github, project)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
    `);

    const result = stmt.run(
      data.name,
      data.slug,
      data.category,
      data.description,
      JSON.stringify(data.images),
      data.status,
      JSON.stringify(data.technologies),
      data.github || null,
      data.project || null,
    );

    return {
      success: true,
      data: { id: result.lastInsertRowid },
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
    initializeDatabase();
    const db = getDatabase();

    const updates: string[] = [];
    const values: any[] = [];

    if (data.name !== undefined) {
      updates.push("name = ?");
      values.push(data.name);
    }
    if (data.slug !== undefined) {
      updates.push("slug = ?");
      values.push(data.slug);
    }
    if (data.category !== undefined) {
      updates.push("category = ?");
      values.push(data.category);
    }
    if (data.description !== undefined) {
      updates.push("description = ?");
      values.push(data.description);
    }
    if (data.images !== undefined) {
      updates.push("images = ?");
      values.push(JSON.stringify(data.images));
    }
    if (data.status !== undefined) {
      updates.push("status = ?");
      values.push(data.status);
    }
    if (data.technologies !== undefined) {
      updates.push("technologies = ?");
      values.push(JSON.stringify(data.technologies));
    }
    if (data.github !== undefined) {
      updates.push("github = ?");
      values.push(data.github || null);
    }
    if (data.project !== undefined) {
      updates.push("project = ?");
      values.push(data.project || null);
    }

    updates.push("updated_at = CURRENT_TIMESTAMP");
    values.push(id);

    const query = `UPDATE projects SET ${updates.join(", ")} WHERE id = ?`;
    const stmt = db.prepare(query);
    stmt.run(...values);

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
    initializeDatabase();
    const db = getDatabase();

    db.prepare("DELETE FROM projects WHERE id = ?").run(id);

    return { success: true };
  } catch (error: any) {
    console.error("Error deleting project:", error);
    return {
      success: false,
      error: error.message || "Failed to delete project",
    };
  }
}
