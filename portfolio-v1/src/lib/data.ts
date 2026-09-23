// Technical skills, grouped exactly as on the CV. `icon` is a file in
// public/skills/ when we have a logo for it.
type Skill = { name: string; icon?: string };

const skillGroups: { label: string; skills: Skill[] }[] = [
  {
    label: "Languages",
    skills: [
      { name: "TypeScript", icon: "typescript.svg" },
      { name: "JavaScript", icon: "javascript.svg" },
      { name: "Python", icon: "python.svg" },
      { name: "SQL", icon: "sql.svg" },
    ],
  },
  {
    label: "Frontend",
    skills: [
      { name: "React", icon: "react.svg" },
      { name: "Next.js", icon: "nextjs.svg" },
      { name: "React Native", icon: "expo.svg" },
      { name: "Redux Toolkit", icon: "reduxtoolkit.svg" },
      { name: "Tailwind CSS", icon: "tailwindcss.svg" },
    ],
  },
  {
    label: "Backend",
    skills: [
      { name: "Node.js", icon: "nodejs.svg" },
      { name: "Express", icon: "expressjs.svg" },
      { name: "NestJS", icon: "nestjs.svg" },
      { name: "FastAPI", icon: "fastapi.svg" },
      { name: "REST" },
      { name: "GraphQL" },
      { name: "WebSockets" },
      { name: "RBAC" },
    ],
  },
  {
    label: "Data",
    skills: [
      { name: "PostgreSQL", icon: "postgressql.svg" },
      { name: "MySQL" },
      { name: "Prisma", icon: "prisma.svg" },
      { name: "Redis", icon: "redis.svg" },
      { name: "MongoDB" },
      { name: "Supabase" },
    ],
  },
  {
    label: "Cloud & DevOps",
    skills: [
      { name: "AWS" },
      { name: "Docker", icon: "docker.svg" },
      { name: "GitHub Actions", icon: "github-actions.svg" },
      { name: "Hetzner" },
      { name: "Cloudflare" },
      { name: "DigitalOcean" },
      { name: "PM2" },
      { name: "Caddy" },
      { name: "Coolify", icon: "coolify.svg" },
    ],
  },
  {
    label: "AI & Integrations",
    skills: [
      { name: "RAG" },
      { name: "LLM APIs" },
      { name: "OAuth2/PKCE" },
      { name: "Stripe", icon: "stripe.svg" },
      { name: "Paddle" },
      { name: "Sentry" },
      { name: "BigQuery", icon: "googlecloud.svg" },
    ],
  },
];

export { skillGroups };
