"use server";

import { seedSkills } from "@/app/_lib/seed";

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

function cloneSkill(skill: Skill): Skill {
  return {
    ...skill,
  };
}

let skillsStore: Skill[] = seedSkills.map((skill, index) => ({
  id: index + 1,
  name: skill.name,
  category: skill.category,
  level: skill.level,
}));
let nextSkillId = skillsStore.length + 1;

function getSkillStoreIndex(id: number) {
  return skillsStore.findIndex((skill) => skill.id === id);
}

export async function getSkills() {
  try {
    return {
      success: true,
      data: [...skillsStore]
        .sort((left, right) => {
          const categoryOrder = left.category.localeCompare(
            right.category,
            "pt-BR",
          );
          if (categoryOrder !== 0) {
            return categoryOrder;
          }

          return left.name.localeCompare(right.name, "pt-BR");
        })
        .map(cloneSkill),
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
    const now = new Date().toISOString();
    skillsStore = [
      {
        id: nextSkillId++,
        name: data.name,
        category: data.category,
        level: data.level,
        created_at: now,
        updated_at: now,
      },
      ...skillsStore,
    ];

    return {
      success: true,
      data: { id: nextSkillId - 1 },
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
    const skillIndex = getSkillStoreIndex(id);

    if (skillIndex === -1) {
      return { success: false, error: "Skill not found" };
    }

    const currentSkill = skillsStore[skillIndex];
    skillsStore[skillIndex] = {
      ...currentSkill,
      name: data.name ?? currentSkill.name,
      category: data.category ?? currentSkill.category,
      level: data.level ?? currentSkill.level,
      updated_at: new Date().toISOString(),
    };

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
    const skillIndex = getSkillStoreIndex(id);

    if (skillIndex === -1) {
      return { success: false, error: "Skill not found" };
    }

    skillsStore = skillsStore.filter((skill) => skill.id !== id);

    return { success: true };
  } catch (error: any) {
    console.error("Error deleting skill:", error);
    return { success: false, error: error.message || "Failed to delete skill" };
  }
}
