"use client";

import { useEffect, useMemo, useState, type FormEvent } from "react";
import {
  createProject,
  deleteProject,
  getProjects,
  updateProject,
  type Project,
  type ProjectStatus,
} from "../_actions/projects";
import {
  createSkill,
  deleteSkill,
  getSkills,
  updateSkill,
  type Skill,
} from "../_actions/skills";
import { Button } from "../_components/ui/button";
import { Input } from "../_components/ui/input";
import { Label } from "../_components/ui/label";
import { Textarea } from "../_components/ui/textarea";

type SkillRow = {
  id: number;
  name: string;
  category: string;
  level: number;
};

type SkillFormState = {
  name: string;
  category: string;
  level: string;
};

const emptySkillForm: SkillFormState = {
  name: "",
  category: "",
  level: "3",
};

type ProjectFormState = {
  name: string;
  slug: string;
  category: string;
  description: string;
  status: ProjectStatus;
  images: string;
  technologies: string;
  github: string;
  project: string;
};

const emptyProjectForm: ProjectFormState = {
  name: "",
  slug: "",
  category: "",
  description: "",
  status: "Completed",
  images: "",
  technologies: "",
  github: "",
  project: "",
};

function toTextareaValue(items: string[]) {
  return items.join("\n");
}

function parseList(value: string) {
  return value
    .split(/\n|,/)
    .map((item) => item.trim())
    .filter(Boolean);
}

function getStoredApiKey() {
  if (typeof window === "undefined") {
    return "";
  }

  return localStorage.getItem("manager_key") || "";
}

export default function ManagerPage() {
  const [apiKey, setApiKey] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [tab, setTab] = useState<"projects" | "skills">("projects");
  const [projects, setProjects] = useState<Project[]>([]);
  const [skills, setSkills] = useState<SkillRow[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [projectMessage, setProjectMessage] = useState("");
  const [skillMessage, setSkillMessage] = useState("");
  const [savingSkill, setSavingSkill] = useState(false);
  const [savingProject, setSavingProject] = useState(false);
  const [projectForm, setProjectForm] =
    useState<ProjectFormState>(emptyProjectForm);
  const [editingProjectId, setEditingProjectId] = useState<number | null>(null);
  const [skillForm, setSkillForm] = useState<SkillFormState>(emptySkillForm);
  const [editingSkillId, setEditingSkillId] = useState<number | null>(null);

  const storedKey = useMemo(() => getStoredApiKey(), [isAuthenticated]);

  useEffect(() => {
    const storedAuth = localStorage.getItem("manager_auth") === "true";

    if (storedAuth) {
      setIsAuthenticated(true);
      loadData();
    }
  }, []);

  async function handleLogin() {
    if (!apiKey.trim()) {
      setError("Por favor insira a chave de API");
      return;
    }

    localStorage.setItem("manager_auth", "true");
    localStorage.setItem("manager_key", apiKey);
    setIsAuthenticated(true);
    setError("");
    loadData();
  }

  async function loadData() {
    try {
      setLoading(true);
      const [projectsRes, skillsRes] = await Promise.all([
        getProjects(),
        getSkills(),
      ]);

      if (projectsRes.success && projectsRes.data) {
        setProjects(projectsRes.data);
      }

      if (skillsRes.success && skillsRes.data) {
        setSkills(skillsRes.data as SkillRow[]);
      }
    } catch (err) {
      console.error("Error loading data:", err);
      setError("Falha ao carregar os dados");
    } finally {
      setLoading(false);
    }
  }

  function handleLogout() {
    localStorage.removeItem("manager_auth");
    localStorage.removeItem("manager_key");
    setIsAuthenticated(false);
    setApiKey("");
    setProjects([]);
    setSkills([]);
    setProjectForm(emptyProjectForm);
    setEditingProjectId(null);
    setProjectMessage("");
    setSkillMessage("");
    setSkillForm(emptySkillForm);
    setEditingSkillId(null);
  }

  function resetProjectForm() {
    setProjectForm(emptyProjectForm);
    setEditingProjectId(null);
    setProjectMessage("");
  }

  function handleEditProject(project: Project) {
    setTab("projects");
    setEditingProjectId(project.id);
    setProjectForm({
      name: project.name,
      slug: project.slug,
      category: project.category,
      description: project.description,
      status: project.status,
      images: toTextareaValue(project.images),
      technologies: toTextareaValue(project.technologies),
      github: project.github || "",
      project: project.project || "",
    });
    setProjectMessage("Editando projeto selecionado");
  }

  async function handleProjectSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const payload = {
      name: projectForm.name.trim(),
      slug: projectForm.slug.trim(),
      category: projectForm.category.trim(),
      description: projectForm.description.trim(),
      status: projectForm.status,
      images: parseList(projectForm.images),
      technologies: parseList(projectForm.technologies),
      github: projectForm.github.trim(),
      project: projectForm.project.trim(),
    };

    if (
      !payload.name ||
      !payload.slug ||
      !payload.category ||
      !payload.description
    ) {
      setProjectMessage("Preencha nome, slug, categoria e descrição.");
      return;
    }

    if (!payload.images.length) {
      setProjectMessage("Adicione ao menos uma imagem.");
      return;
    }

    if (!payload.technologies.length) {
      setProjectMessage("Adicione ao menos uma tecnologia.");
      return;
    }

    try {
      setSavingProject(true);
      setProjectMessage("");

      const response = editingProjectId
        ? await updateProject(
            editingProjectId,
            {
              ...payload,
              github: payload.github || undefined,
              project: payload.project || undefined,
            },
            storedKey,
          )
        : await createProject(
            {
              ...payload,
              github: payload.github || undefined,
              project: payload.project || undefined,
            },
            storedKey,
          );

      if (!response.success) {
        setProjectMessage(
          response.error || "Não foi possível salvar o projeto",
        );
        return;
      }

      await loadData();
      resetProjectForm();
      setProjectMessage(
        editingProjectId
          ? "Projeto atualizado com sucesso."
          : "Projeto criado com sucesso.",
      );
    } finally {
      setSavingProject(false);
    }
  }

  async function handleDeleteProject(id: number) {
    if (
      !storedKey ||
      !confirm("Tem certeza que deseja remover este projeto?")
    ) {
      return;
    }

    const response = await deleteProject(id, storedKey);

    if (!response.success) {
      setProjectMessage(response.error || "Não foi possível excluir o projeto");
      return;
    }

    await loadData();
    if (editingProjectId === id) {
      resetProjectForm();
    }
    setProjectMessage("Projeto removido com sucesso.");
  }

  async function handleDeleteSkill(id: number) {
    if (!storedKey || !confirm("Tem certeza que deseja remover esta skill?")) {
      return;
    }

    const response = await deleteSkill(id, storedKey);

    if (!response.success) {
      setSkillMessage(response.error || "Não foi possível excluir a skill");
      return;
    }

    await loadData();
    setSkillMessage("Skill removida com sucesso.");
  }

  function resetSkillForm() {
    setSkillForm(emptySkillForm);
    setEditingSkillId(null);
    setSkillMessage("");
  }

  function handleEditSkill(skill: Skill) {
    setTab("skills");
    setEditingSkillId(skill.id);
    setSkillForm({
      name: skill.name,
      category: skill.category,
      level: String(skill.level),
    });
    setSkillMessage("Editando skill selecionada");
  }

  async function handleSkillSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const payload = {
      name: skillForm.name.trim(),
      category: skillForm.category.trim(),
      level: Number(skillForm.level),
    };

    if (!payload.name || !payload.category || Number.isNaN(payload.level)) {
      setSkillMessage("Preencha nome, categoria e nível.");
      return;
    }

    if (payload.level < 1 || payload.level > 5) {
      setSkillMessage("O nível deve estar entre 1 e 5.");
      return;
    }

    try {
      setSavingSkill(true);
      setSkillMessage("");

      const response = editingSkillId
        ? await updateSkill(editingSkillId, payload, storedKey)
        : await createSkill(payload, storedKey);

      if (!response.success) {
        setSkillMessage(response.error || "Não foi possível salvar a skill");
        return;
      }

      await loadData();
      resetSkillForm();
      setSkillMessage(
        editingSkillId
          ? "Skill atualizada com sucesso."
          : "Skill criada com sucesso.",
      );
    } finally {
      setSavingSkill(false);
    }
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-neutral-950 p-4 flex items-center justify-center">
        <div className="w-full max-w-md rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl shadow-black/30 backdrop-blur-xl">
          <h1 className="text-2xl font-bold text-white mb-2">Manager</h1>
          <p className="text-sm text-gray-400 mb-6">
            Acesse o painel para gerenciar projetos e skills.
          </p>
          <Label htmlFor="apiKey" className="text-white/80">
            API Key
          </Label>
          <Input
            id="apiKey"
            type="password"
            placeholder="Digite a chave"
            value={apiKey}
            onChange={(e) => {
              setApiKey(e.target.value);
              setError("");
            }}
            className="mt-2"
            onKeyDown={(e) => e.key === "Enter" && handleLogin()}
          />
          {error && <p className="mt-4 text-sm text-red-400">{error}</p>}
          <Button onClick={handleLogin} className="mt-6 w-full">
            Entrar
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      <div className="mx-auto w-full max-w-7xl px-4 py-6 sm:px-8">
        <div className="flex flex-col gap-4 rounded-3xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-2xl font-bold">Manager</h1>
            <p className="text-sm text-gray-400">
              Configuração de projetos e skills.
            </p>
          </div>
          <Button variant="destructive" onClick={handleLogout}>
            Logout
          </Button>
        </div>

        <div className="mt-6 flex gap-2 rounded-2xl border border-white/10 bg-white/5 p-2 backdrop-blur-xl">
          <Button
            type="button"
            variant={tab === "projects" ? "default" : "ghost"}
            onClick={() => setTab("projects")}
            className="flex-1"
          >
            Projetos
          </Button>
          <Button
            type="button"
            variant={tab === "skills" ? "default" : "ghost"}
            onClick={() => setTab("skills")}
            className="flex-1"
          >
            Skills
          </Button>
        </div>

        <div className="py-6">
          {loading && <p className="text-sm text-gray-400">Carregando...</p>}

          {tab === "projects" && (
            <div className="grid gap-6 xl:grid-cols-[0.95fr_1.05fr]">
              <section className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h2 className="text-xl font-semibold">
                      {editingProjectId ? "Editar projeto" : "Novo projeto"}
                    </h2>
                    <p className="mt-1 text-sm text-gray-400">
                      Preencha os campos de acordo com a estrutura do banco.
                    </p>
                  </div>
                  {editingProjectId && (
                    <Button
                      type="button"
                      variant="ghost"
                      onClick={resetProjectForm}
                    >
                      Cancelar
                    </Button>
                  )}
                </div>

                <form className="mt-6 space-y-5" onSubmit={handleProjectSubmit}>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="name">Nome</Label>
                      <Input
                        id="name"
                        value={projectForm.name}
                        onChange={(event) =>
                          setProjectForm((current) => ({
                            ...current,
                            name: event.target.value,
                          }))
                        }
                        placeholder="Nome do projeto"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="slug">Slug</Label>
                      <Input
                        id="slug"
                        value={projectForm.slug}
                        onChange={(event) =>
                          setProjectForm((current) => ({
                            ...current,
                            slug: event.target.value,
                          }))
                        }
                        placeholder="slug-do-projeto"
                      />
                    </div>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="category">Categoria</Label>
                      <Input
                        id="category"
                        value={projectForm.category}
                        onChange={(event) =>
                          setProjectForm((current) => ({
                            ...current,
                            category: event.target.value,
                          }))
                        }
                        placeholder="E-commerce, SaaS, Landing Page..."
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="status">Status</Label>
                      <select
                        id="status"
                        value={projectForm.status}
                        onChange={(event) =>
                          setProjectForm((current) => ({
                            ...current,
                            status: event.target.value as ProjectStatus,
                          }))
                        }
                        className="flex h-10 w-full rounded-md border border-white/20 bg-background px-3 py-2 text-sm text-white"
                      >
                        <option value="Completed">Completed</option>
                        <option value="In Progress">In Progress</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="description">Descrição</Label>
                    <Textarea
                      id="description"
                      rows={5}
                      value={projectForm.description}
                      onChange={(event) =>
                        setProjectForm((current) => ({
                          ...current,
                          description: event.target.value,
                        }))
                      }
                      placeholder="Explique o projeto em poucas linhas"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="images">Imagens</Label>
                    <Textarea
                      id="images"
                      rows={5}
                      value={projectForm.images}
                      onChange={(event) =>
                        setProjectForm((current) => ({
                          ...current,
                          images: event.target.value,
                        }))
                      }
                      placeholder="Uma URL por linha ou separadas por vírgula"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="technologies">Tecnologias</Label>
                    <Textarea
                      id="technologies"
                      rows={5}
                      value={projectForm.technologies}
                      onChange={(event) =>
                        setProjectForm((current) => ({
                          ...current,
                          technologies: event.target.value,
                        }))
                      }
                      placeholder="Next.js\nTypeScript\nTailwind"
                    />
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="github">GitHub</Label>
                      <Input
                        id="github"
                        value={projectForm.github}
                        onChange={(event) =>
                          setProjectForm((current) => ({
                            ...current,
                            github: event.target.value,
                          }))
                        }
                        placeholder="https://github.com/..."
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="project">Live Demo</Label>
                      <Input
                        id="project"
                        value={projectForm.project}
                        onChange={(event) =>
                          setProjectForm((current) => ({
                            ...current,
                            project: event.target.value,
                          }))
                        }
                        placeholder="https://seu-projeto.com"
                      />
                    </div>
                  </div>

                  {projectMessage && (
                    <p className="text-sm text-gray-300">{projectMessage}</p>
                  )}

                  <div className="flex flex-wrap gap-3">
                    <Button type="submit" disabled={savingProject}>
                      {savingProject
                        ? "Salvando..."
                        : editingProjectId
                          ? "Atualizar projeto"
                          : "Criar projeto"}
                    </Button>
                    {editingProjectId && (
                      <Button
                        type="button"
                        variant="ghost"
                        onClick={resetProjectForm}
                      >
                        Limpar
                      </Button>
                    )}
                  </div>
                </form>
              </section>

              <section className="space-y-4">
                <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
                  <h2 className="text-xl font-semibold">
                    Projetos cadastrados
                  </h2>
                  <p className="mt-1 text-sm text-gray-400">
                    Clique em editar para ajustar imagens, tecnologias e links.
                  </p>
                </div>

                <div className="grid gap-4">
                  {projects.map((project) => (
                    <article
                      key={project.id}
                      className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl"
                    >
                      <div className="flex flex-wrap items-start justify-between gap-4">
                        <div>
                          <p className="text-xs uppercase tracking-[0.3em] text-gray-400">
                            {project.category}
                          </p>
                          <h3 className="mt-2 text-lg font-semibold">
                            {project.name}
                          </h3>
                          <p className="mt-1 text-sm text-gray-400">
                            /{project.slug}
                          </p>
                        </div>
                        <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-gray-300">
                          {project.status}
                        </span>
                      </div>

                      <p className="mt-4 line-clamp-3 text-sm leading-7 text-gray-300">
                        {project.description}
                      </p>

                      <div className="mt-4 flex flex-wrap gap-2 text-xs text-gray-400">
                        <span>{project.images.length} imagens</span>
                        <span>{project.technologies.length} tecnologias</span>
                      </div>

                      <div className="mt-5 flex flex-wrap gap-3">
                        <Button
                          type="button"
                          onClick={() => handleEditProject(project)}
                        >
                          Editar
                        </Button>
                        <Button
                          type="button"
                          variant="destructive"
                          onClick={() => handleDeleteProject(project.id)}
                        >
                          Deletar
                        </Button>
                      </div>
                    </article>
                  ))}
                </div>
              </section>
            </div>
          )}

          {tab === "skills" && (
            <div className="grid gap-6 xl:grid-cols-[0.95fr_1.05fr]">
              <section className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h2 className="text-xl font-semibold">
                      {editingSkillId ? "Editar skill" : "Nova skill"}
                    </h2>
                    <p className="mt-1 text-sm text-gray-400">
                      Cadastre níveis e categorias que aparecerão na página de
                      skills.
                    </p>
                  </div>
                  {editingSkillId && (
                    <Button
                      type="button"
                      variant="ghost"
                      onClick={resetSkillForm}
                    >
                      Cancelar
                    </Button>
                  )}
                </div>

                <form className="mt-6 space-y-5" onSubmit={handleSkillSubmit}>
                  <div className="space-y-2">
                    <Label htmlFor="skill-name">Nome</Label>
                    <Input
                      id="skill-name"
                      value={skillForm.name}
                      onChange={(event) =>
                        setSkillForm((current) => ({
                          ...current,
                          name: event.target.value,
                        }))
                      }
                      placeholder="React, PostgreSQL, Docker..."
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="skill-category">Categoria</Label>
                    <Input
                      id="skill-category"
                      value={skillForm.category}
                      onChange={(event) =>
                        setSkillForm((current) => ({
                          ...current,
                          category: event.target.value,
                        }))
                      }
                      placeholder="Frontend, Backend, Database..."
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="skill-level">Nível</Label>
                    <Input
                      id="skill-level"
                      type="number"
                      min={1}
                      max={5}
                      value={skillForm.level}
                      onChange={(event) =>
                        setSkillForm((current) => ({
                          ...current,
                          level: event.target.value,
                        }))
                      }
                    />
                  </div>

                  {skillMessage && (
                    <p className="text-sm text-gray-300">{skillMessage}</p>
                  )}

                  <div className="flex flex-wrap gap-3">
                    <Button type="submit" disabled={savingSkill}>
                      {savingSkill
                        ? "Salvando..."
                        : editingSkillId
                          ? "Atualizar skill"
                          : "Criar skill"}
                    </Button>
                    {editingSkillId && (
                      <Button
                        type="button"
                        variant="ghost"
                        onClick={resetSkillForm}
                      >
                        Limpar
                      </Button>
                    )}
                  </div>
                </form>
              </section>

              <section className="space-y-4">
                <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
                  <h2 className="text-xl font-semibold">Skills cadastradas</h2>
                  <p className="mt-1 text-sm text-gray-400">
                    Edite ou remova as skills que aparecem na página pública.
                  </p>
                </div>

                <div className="grid gap-4">
                  {skills.map((skill) => (
                    <article
                      key={skill.id}
                      className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl"
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <h3 className="text-lg font-semibold">
                            {skill.name}
                          </h3>
                          <p className="mt-1 text-sm text-gray-400">
                            {skill.category}
                          </p>
                          <p className="mt-1 text-sm text-gray-400">
                            Nível: {skill.level}/5
                          </p>
                        </div>
                        <div className="flex gap-2">
                          <Button
                            type="button"
                            onClick={() => handleEditSkill(skill)}
                          >
                            Editar
                          </Button>
                          <Button
                            type="button"
                            variant="destructive"
                            onClick={() => handleDeleteSkill(skill.id)}
                          >
                            Deletar
                          </Button>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </section>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
