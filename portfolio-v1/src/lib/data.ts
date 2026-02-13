const navBarTitles = [
  "Home",
  "About",
  "Skills",
  "Projects",
  "Contact",
  // "Experience",
  // "Contact",
] as const;

const projectsImagesSkills = [
  // Frontend - Core Skills
  { filename: "typescript.svg", name: "TypeScript" },
  { filename: "javascript.svg", name: "JavaScript" },
  { filename: "react.svg", name: "React" },
  { filename: "nextjs.svg", name: "Next.js" },
  { filename: "expo.svg", name: "Expo (React Native)" },
  { filename: "tailwindcss.svg", name: "Tailwind CSS" },
  { filename: "reactrouter.svg", name: "React Router" },
  { filename: "reduxtoolkit.svg", name: "Redux Toolkit" },
  { filename: "zustand.webp", name: "Zustand" },

  // Backend - Core Skills
  { filename: "nodejs.svg", name: "Node.js" },
  { filename: "expressjs.svg", name: "Express.js" },
  { filename: "nestjs.svg", name: "NestJS" },
  { filename: "fastapi.svg", name: "FastAPI" },
  { filename: "python.svg", name: "Python" },

  // Databases - Core Skills
  { filename: "mongodb.svg", name: "MongoDB" },
  { filename: "postgressql.svg", name: "PostgreSQL" },
  { filename: "prisma.svg", name: "Prisma" },
  { filename: "redis.svg", name: "Redis" },

  // Services & APIs - Essential
  { filename: "stripe.svg", name: "Stripe" },
  { filename: "jwt.svg", name: "JWT" },

  // DevOps & Tools - Essential
  { filename: "docker.svg", name: "Docker" },
  { filename: "icons8-git.svg", name: "Git" },
  { filename: "github-actions.svg", name: "GitHub Actions" },
  { filename: "vercel.svg", name: "Vercel" },
] as const;

const projects: Record<string, unknown>[] = [];

export { navBarTitles, projectsImagesSkills, projects };
