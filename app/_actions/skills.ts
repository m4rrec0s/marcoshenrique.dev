"use server";

import { getDatabase, initializeDatabase } from "@/app/_lib/db";
import { seedDatabase } from "@/app/_lib/seed";

const VALID_API_KEY = process.env.NEXT_PUBLIC_API_KEY;

export interface Skill {
  id: number;
  name: string;
  category: string;
  level: number;
  created_at?: string;
  updated_at?: string;
}

export interface SkillInput {
  name: string;
  category: string;
  level: number;
}

function validateApiKey(key?: string): boolean {
  if (!VALID_API_KEY) {
    console.error("API_KEY not configured in environment");
    return false;
  }
  return key === VALID_API_KEY;
}

function mapSkillRow(row: any): Skill {
  return {
    id: Number(row.id),
    name: row.name,
    category: row.category,
    level: Number(row.level ?? 3),
    created_at: row.created_at,
    updated_at: row.updated_at,
  };
}

export async function getSkills() {
  try {
    initializeDatabase();
    seedDatabase();

    const db = getDatabase();
    const skills = db
      .prepare("SELECT * FROM skills ORDER BY category, name")
      .all();

    return {
      success: true,
      data: skills.map(mapSkillRow),
    };
  } catch (error) {
    console.error("Error fetching skills:", error);
    return { success: false, error: "Failed to fetch skills" };
  }
}

export async function createSkill(data: SkillInput, apiKey?: string) {
  if (!validateApiKey(apiKey)) {
    return { success: false, error: "Unauthorized" };
  }

  try {
    initializeDatabase();
    const db = getDatabase();

    const stmt = db.prepare(`
      INSERT INTO skills (name, category, level)
      VALUES (?, ?, ?)
    `);

    const result = stmt.run(data.name, data.category, data.level);

    return {
      success: true,
      data: { id: result.lastInsertRowid },
    };
  } catch (error: any) {
    console.error("Error creating skill:", error);
    return { success: false, error: error.message || "Failed to create skill" };
  }
}

export async function updateSkill(
  id: number,
  data: Partial<SkillInput>,
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
    if (data.category !== undefined) {
      updates.push("category = ?");
      values.push(data.category);
    }
    if (data.level !== undefined) {
      updates.push("level = ?");
      values.push(data.level);
    }

    if (updates.length === 0) {
      return { success: true };
    }

    updates.push("updated_at = CURRENT_TIMESTAMP");
    values.push(id);

    const query = `UPDATE skills SET ${updates.join(", ")} WHERE id = ?`;
    const stmt = db.prepare(query);
    stmt.run(...values);

    return { success: true };
  } catch (error: any) {
    console.error("Error updating skill:", error);
    return { success: false, error: error.message || "Failed to update skill" };
  }
}

export async function deleteSkill(id: number, apiKey?: string) {
  if (!validateApiKey(apiKey)) {
    return { success: false, error: "Unauthorized" };
  }

  try {
    initializeDatabase();
    const db = getDatabase();

    db.prepare("DELETE FROM skills WHERE id = ?").run(id);

    return { success: true };
  } catch (error: any) {
    console.error("Error deleting skill:", error);
    return { success: false, error: error.message || "Failed to delete skill" };
  }
}
