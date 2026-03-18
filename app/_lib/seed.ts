import { getDatabase } from './db';
import projectsData from '../_data/projects.json';

export function seedDatabase() {
  const db = getDatabase();

  // Check if data already exists
  const projectCount = db
    .prepare('SELECT COUNT(*) as count FROM projects')
    .get() as { count: number };

  if (projectCount.count > 0) {
    console.log('Database already seeded. Skipping...');
    return;
  }

  console.log('Seeding database with projects...');

  const insertProject = db.prepare(`
    INSERT INTO projects (name, slug, category, description, images, status, technologies, github, project)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
  `);

  for (const project of projectsData) {
    insertProject.run(
      project.name,
      project.slug,
      project.category,
      project.description,
      JSON.stringify(project.images),
      project.status,
      JSON.stringify(project.technologies),
      project.github || null,
      project.project || null
    );
  }

  console.log(`✓ Seeded ${projectsData.length} projects`);

  // Seed some default skills
  const skillsData = [
    { name: 'Next.js', category: 'Frontend', level: 5 },
    { name: 'React', category: 'Frontend', level: 5 },
    { name: 'TypeScript', category: 'Languages', level: 4 },
    { name: 'Tailwind CSS', category: 'Frontend', level: 5 },
    { name: 'Node.js', category: 'Backend', level: 4 },
    { name: 'Express', category: 'Backend', level: 4 },
    { name: 'PostgreSQL', category: 'Database', level: 4 },
    { name: 'Prisma', category: 'Database', level: 4 },
    { name: 'Git', category: 'Tools', level: 5 },
    { name: 'Docker', category: 'DevOps', level: 3 },
  ];

  const insertSkill = db.prepare(`
    INSERT INTO skills (name, category, level)
    VALUES (?, ?, ?)
  `);

  for (const skill of skillsData) {
    insertSkill.run(skill.name, skill.category, skill.level);
  }

  console.log(`✓ Seeded ${skillsData.length} skills`);
}
