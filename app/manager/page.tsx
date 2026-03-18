'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { getProjects, createProject, updateProject, deleteProject } from '@/app/_actions/projects';
import { getSkills, createSkill, updateSkill, deleteSkill } from '@/app/_actions/skills';

export default function ManagerPage() {
  const router = useRouter();
  const [apiKey, setApiKey] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [tab, setTab] = useState<'projects' | 'skills'>('projects');
  const [projects, setProjects] = useState<any[]>([]);
  const [skills, setSkills] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const storedAuth = localStorage.getItem('manager_auth') === 'true';
    if (storedAuth) {
      setIsAuthenticated(true);
      loadData();
    }
  }, []);

  async function handleLogin() {
    if (!apiKey.trim()) {
      setError('Por favor insira a chave de API');
      return;
    }
    localStorage.setItem('manager_auth', 'true');
    localStorage.setItem('manager_key', apiKey);
    setIsAuthenticated(true);
    loadData();
  }

  async function loadData() {
    try {
      setLoading(true);
      const projectsRes = await getProjects();
      const skillsRes = await getSkills();

      if (projectsRes.success && projectsRes.data) {
        setProjects(projectsRes.data);
      }
      if (skillsRes.success && skillsRes.data) {
        setSkills(skillsRes.data);
      }
    } catch (err) {
      console.error('Error loading data:', err);
    } finally {
      setLoading(false);
    }
  }

  function handleLogout() {
    localStorage.removeItem('manager_auth');
    localStorage.removeItem('manager_key');
    setIsAuthenticated(false);
    setApiKey('');
    setProjects([]);
    setSkills([]);
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gray-50 p-4 flex items-center justify-center">
        <div className="w-full max-w-md">
          <div className="bg-white rounded-lg shadow p-6">
            <h1 className="text-2xl font-bold mb-6">Manager</h1>
            <input
              type="password"
              placeholder="API Key"
              value={apiKey}
              onChange={(e) => {
                setApiKey(e.target.value);
                setError('');
              }}
              className="w-full px-4 py-2 border border-gray-300 rounded mb-4"
              onKeyDown={(e) => e.key === 'Enter' && handleLogin()}
            />
            {error && <p className="text-red-600 text-sm mb-4">{error}</p>}
            <button
              onClick={handleLogin}
              className="w-full bg-black text-white px-4 py-2 rounded hover:bg-gray-800"
            >
              Login
            </button>
          </div>
        </div>
      </div>
    );
  }

  const storedKey = typeof window !== 'undefined' ? localStorage.getItem('manager_key') : '';

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="bg-white border-b border-gray-200 p-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Manager</h1>
          <button
            onClick={handleLogout}
            className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
          >
            Logout
          </button>
        </div>

        {/* Tabs */}
        <div className="bg-white border-b border-gray-200">
          <div className="flex">
            <button
              onClick={() => setTab('projects')}
              className={`px-6 py-3 font-medium border-b-2 ${
                tab === 'projects'
                  ? 'border-black text-black'
                  : 'border-transparent text-gray-500 hover:text-black'
              }`}
            >
              Projetos
            </button>
            <button
              onClick={() => setTab('skills')}
              className={`px-6 py-3 font-medium border-b-2 ${
                tab === 'skills'
                  ? 'border-black text-black'
                  : 'border-transparent text-gray-500 hover:text-black'
              }`}
            >
              Skills
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          {loading && <p className="text-gray-500">Carregando...</p>}

          {tab === 'projects' && (
            <div>
              <h2 className="text-xl font-bold mb-4">Gerenciar Projetos</h2>
              <div className="grid gap-4">
                {projects.map((project) => (
                  <div key={project.id} className="bg-white p-4 rounded border border-gray-200">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h3 className="font-bold">{project.name}</h3>
                        <p className="text-sm text-gray-600">{project.category}</p>
                      </div>
                      <div className="flex gap-2">
                        <button
                          onClick={() => {
                            /* Edit logic */
                          }}
                          className="px-3 py-1 bg-blue-600 text-white rounded text-sm hover:bg-blue-700"
                        >
                          Editar
                        </button>
                        <button
                          onClick={async () => {
                            if (storedKey && confirm('Tem certeza?')) {
                              await deleteProject(project.id, storedKey);
                              loadData();
                            }
                          }}
                          className="px-3 py-1 bg-red-600 text-white rounded text-sm hover:bg-red-700"
                        >
                          Deletar
                        </button>
                      </div>
                    </div>
                    <p className="text-sm text-gray-600">{project.description}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {tab === 'skills' && (
            <div>
              <h2 className="text-xl font-bold mb-4">Gerenciar Skills</h2>
              <div className="grid gap-4">
                {skills.map((skill) => (
                  <div key={skill.id} className="bg-white p-4 rounded border border-gray-200">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-bold">{skill.name}</h3>
                        <p className="text-sm text-gray-600">{skill.category}</p>
                        <p className="text-sm text-gray-600">Nível: {skill.level}/5</p>
                      </div>
                      <div className="flex gap-2">
                        <button
                          onClick={() => {
                            /* Edit logic */
                          }}
                          className="px-3 py-1 bg-blue-600 text-white rounded text-sm hover:bg-blue-700"
                        >
                          Editar
                        </button>
                        <button
                          onClick={async () => {
                            if (storedKey && confirm('Tem certeza?')) {
                              await deleteSkill(skill.id, storedKey);
                              loadData();
                            }
                          }}
                          className="px-3 py-1 bg-red-600 text-white rounded text-sm hover:bg-red-700"
                        >
                          Deletar
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
