// Technical skills, grouped exactly as on the CV.
//
// `icon` is a logo in public/skills/. Some logos are single-colour and vanish
// on one theme: `tone: "light"` marks a white logo (darkened on the light
// theme), `tone: "dark"` a dark one (lightened on the dark theme). `concept`
// is for skills with no brand logo; the section draws a line icon instead.
export type Skill = {
  name: string;
  icon?: string;
  tone?: "light" | "dark";
  concept?: "rest" | "websocket" | "rbac" | "rag" | "llm" | "oauth";
};

export const skillGroups: { label: string; skills: Skill[] }[] = [
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
      { name: "Next.js", icon: "nextjs.svg", tone: "light" },
      { name: "React Native", icon: "reactnative.svg" },
      { name: "Redux Toolkit", icon: "reduxtoolkit.svg" },
      { name: "Tailwind CSS", icon: "tailwindcss.svg" },
    ],
  },
  {
    label: "Backend",
    skills: [
      { name: "Node.js", icon: "nodejs.svg" },
      { name: "Express", icon: "expressjs.svg", tone: "light" },
      { name: "NestJS", icon: "nestjs.svg" },
      { name: "FastAPI", icon: "fastapi.svg" },
      { name: "GraphQL", icon: "graphql.svg" },
      { name: "REST", concept: "rest" },
      { name: "WebSockets", concept: "websocket" },
      { name: "RBAC", concept: "rbac" },
    ],
  },
  {
    label: "Data",
    skills: [
      { name: "PostgreSQL", icon: "postgressql.svg" },
      { name: "MySQL", icon: "mysql.svg" },
      { name: "Prisma", icon: "prisma.svg", tone: "light" },
      { name: "Redis", icon: "redis.svg" },
      { name: "MongoDB", icon: "mongodb.svg" },
      { name: "Supabase", icon: "supabase.svg" },
    ],
  },
  {
    label: "Cloud & DevOps",
    skills: [
      { name: "AWS", icon: "aws.svg", tone: "dark" },
      { name: "Docker", icon: "docker.svg" },
      { name: "GitHub Actions", icon: "github-actions.svg" },
      { name: "Hetzner", icon: "hetzner.svg" },
      { name: "Cloudflare", icon: "cloudflare.svg" },
      { name: "DigitalOcean", icon: "digitalocean.svg" },
      { name: "PM2", icon: "pm2.svg", tone: "dark" },
      { name: "Caddy", icon: "caddy.svg" },
      { name: "Coolify", icon: "coolify.svg", tone: "light" },
    ],
  },
  {
    label: "AI & Integrations",
    skills: [
      { name: "RAG", concept: "rag" },
      { name: "LLM APIs", concept: "llm" },
      { name: "OAuth2/PKCE", concept: "oauth" },
      { name: "Stripe", icon: "stripe.svg" },
      { name: "Paddle", icon: "paddle.svg" },
      { name: "Sentry", icon: "sentry.svg", tone: "dark" },
      { name: "BigQuery", icon: "bigquery.svg" },
    ],
  },
];
