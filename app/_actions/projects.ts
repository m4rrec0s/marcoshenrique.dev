'use server';

import { getDatabase, initializeDatabase } from '@/app/_lib/db';
import { seedDatabase } from '@/app/_lib/seed';

const VALID_API_KEY = process.env.NEXT_PUBLIC_API_KEY;

function validateApiKey(key?: string): boolean {
  if (!VALID_API_KEY) {
    console.error('API_KEY not configured in environment');
    return false;
  }
  return key === VALID_API_KEY;
}

export async function getProjects(apiKey?: string) {
  try {
    initializeDatabase();
    seedDatabase();

    const db = getDatabase();
    const projects = db.prepare('SELECT * FROM projects ORDER BY created_at DESC').all();

    return {
      success: true,
      data: projects.map((p: any) => ({
        ...p,
        images: JSON.parse(p.images),
        technologies: JSON.parse(p.technologies),
      })),
    };
  } catch (error) {
    console.error('Error fetching projects:', error);
    return { success: false, error: 'Failed to fetch projects' };
  }
}

export async function getProjectBySlug(slug: string) {
  try {
    initializeDatabase();
    seedDatabase();

    const db = getDatabase();
    const project = db.prepare('SELECT * FROM projects WHERE slug = ?').get(slug);

    if (!project) {
      return { success: false, error: 'Project not found' };
    }

    return {
      success: true,
      data: {
        ...project,
        images: JSON.parse((project as any).images),
        technologies: JSON.parse((project as any).technologies),
      },
    };
  } catch (error) {
    console.error('Error fetching project:', error);
    return { success: false, error: 'Failed to fetch project' };
  }
}

export async function createProject(
  data: {
    name: string;
    slug: string;
    category: string;
    description: string;
    images: string[];
    status: string;
    technologies: string[];
    github?: string;
    project?: string;
  },
  apiKey?: string
) {
  if (!validateApiKey(apiKey)) {
    return { success: false, error: 'Unauthorized' };
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
      data.project || null
    );

    return {
      success: true,
      data: { id: result.lastInsertRowid },
    };
  } catch (error: any) {
    console.error('Error creating project:', error);
    return { success: false, error: error.message || 'Failed to create project' };
  }
}

export async function updateProject(
  id: number,
  data: {
    name?: string;
    slug?: string;
    category?: string;
    description?: string;
    images?: string[];
    status?: string;
    technologies?: string[];
    github?: string;
    project?: string;
  },
  apiKey?: string
) {
  if (!validateApiKey(apiKey)) {
    return { success: false, error: 'Unauthorized' };
  }

  try {
    initializeDatabase();
    const db = getDatabase();

    const updates: string[] = [];
    const values: any[] = [];

    if (data.name !== undefined) {
      updates.push('name = ?');
      values.push(data.name);
    }
    if (data.slug !== undefined) {
      updates.push('slug = ?');
      values.push(data.slug);
    }
    if (data.category !== undefined) {
      updates.push('category = ?');
      values.push(data.category);
    }
    if (data.description !== undefined) {
      updates.push('description = ?');
      values.push(data.description);
    }
    if (data.images !== undefined) {
      updates.push('images = ?');
      values.push(JSON.stringify(data.images));
    }
    if (data.status !== undefined) {
      updates.push('status = ?');
      values.push(data.status);
    }
    if (data.technologies !== undefined) {
      updates.push('technologies = ?');
      values.push(JSON.stringify(data.technologies));
    }
    if (data.github !== undefined) {
      updates.push('github = ?');
      values.push(data.github || null);
    }
    if (data.project !== undefined) {
      updates.push('project = ?');
      values.push(data.project || null);
    }

    updates.push('updated_at = CURRENT_TIMESTAMP');
    values.push(id);

    const query = `UPDATE projects SET ${updates.join(', ')} WHERE id = ?`;
    const stmt = db.prepare(query);
    stmt.run(...values);

    return { success: true };
  } catch (error: any) {
    console.error('Error updating project:', error);
    return { success: false, error: error.message || 'Failed to update project' };
  }
}

export async function deleteProject(id: number, apiKey?: string) {
  if (!validateApiKey(apiKey)) {
    return { success: false, error: 'Unauthorized' };
  }

  try {
    initializeDatabase();
    const db = getDatabase();

    db.prepare('DELETE FROM projects WHERE id = ?').run(id);

    return { success: true };
  } catch (error: any) {
    console.error('Error deleting project:', error);
    return { success: false, error: error.message || 'Failed to delete project' };
  }
}
