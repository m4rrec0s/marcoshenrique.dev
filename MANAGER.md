# Manager API - Documentação

## Configuração

### 1. Variáveis de Ambiente

Crie um arquivo `.env.local` na raiz do projeto:

```bash
NEXT_PUBLIC_API_KEY=your-secret-api-key-here
```

⚠️ **IMPORTANTE**: Altere a chave padrão em produção!

### 2. Database

O banco de dados SQLite é inicializado automaticamente na primeira execução:
- Localização: `./.db/portfolio.db`
- Tabelas criadas automaticamente com schema
- Dados seedados com projetos do `projects.json`

## Uso

### Página Manager

Acesse: `http://localhost:3000/manager`

1. **Login**: Insira a `API_KEY` configurada
2. **Gerenciar Projetos**: CRUD completo
3. **Gerenciar Skills**: CRUD completo

### Server Actions (API)

Todas as ações requerem autenticação via `API_KEY`:

#### Projetos

```typescript
import { 
  getProjects, 
  createProject, 
  updateProject, 
  deleteProject 
} from '@/app/_actions/projects';

// Listar
const res = await getProjects();

// Criar
await createProject({
  name: "Nome",
  slug: "nome-slug",
  category: "Categoria",
  description: "Descrição",
  images: ["url1", "url2"],
  status: "Completed",
  technologies: ["Tech1", "Tech2"],
  github: "https://...",
  project: "https://..."
}, API_KEY);

// Atualizar
await updateProject(id, { name: "Novo nome" }, API_KEY);

// Deletar
await deleteProject(id, API_KEY);
```

#### Skills

```typescript
import { 
  getSkills, 
  createSkill, 
  updateSkill, 
  deleteSkill 
} from '@/app/_actions/skills';

// Listar
const res = await getSkills();

// Criar
await createSkill({
  name: "Skill name",
  category: "Frontend",
  level: 5
}, API_KEY);

// Atualizar
await updateSkill(id, { level: 4 }, API_KEY);

// Deletar
await deleteSkill(id, API_KEY);
```

## Estrutura

```
app/
├── _actions/
│   ├── projects.ts      # Server actions para projetos
│   └── skills.ts        # Server actions para skills
├── _lib/
│   ├── db.ts            # Inicialização do SQLite
│   └── seed.ts          # Seed do banco com dados
├── manager/
│   └── page.tsx         # Página de gerenciamento
└── _data/
    └── projects.json    # Dados originais (seed)
```

## Segurança

- ✅ API_KEY validada em TODAS as server actions
- ✅ Autenticação por cookie (página manager)
- ✅ Sem exposição de dados sensíveis no frontend
- ⚠️ Use HTTPS em produção
- ⚠️ Configure uma API_KEY forte em `.env.local`

## Design

- ✅ Remover: Matrix rain, aurora, meteors, canvas effects
- ✅ Manter: Gradiente simples, responsividade
- ✅ Interface: Limpa, sem animações complexas
