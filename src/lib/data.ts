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

  // Databases - Core Skills
  { filename: "mongodb.svg", name: "MongoDB" },
  { filename: "postgressql.svg", name: "PostgreSQL" },
  { filename: "prisma.svg", name: "Prisma" },

  // Services & APIs - Essential
  { filename: "supabase.svg", name: "Supabase" },
  { filename: "nextauth.webp", name: "Auth.js" },
  { filename: "jwt.svg", name: "JWT" },
  { filename: "stripe.svg", name: "Stripe" },

  // DevOps & Tools - Essential
  { filename: "docker.svg", name: "Docker" },
  { filename: "icons8-git.svg", name: "Git" },
  { filename: "Jest.svg", name: "Jest" },
  { filename: "zodlogo.svg", name: "Zod" },
  { filename: "vercel.svg", name: "Vercel" },
] as const;

const projects = [
  {
    title: "Ultimate eCommerce Platform",
    description:
      "A comprehensive full-stack eCommerce web platform featuring advanced shopping experience with wishlist, filtering, secure payment integration using Stripe, and complete admin dashboard for inventory management.",
    image: "/projects/ecommerce/hero.png",
    liveLink: "https://swiftbuy.production-server.tech/",
    githubLink: "https://github.com/Mohamed-gp/ecommerce_mern",
    techUsed: [
      { filename: "typescript.svg", name: "TypeScript" },
      { filename: "react.svg", name: "React" },
      { filename: "tailwindcss.svg", name: "Tailwind CSS" },
      { filename: "reactrouter.svg", name: "React Router" },
      { filename: "reduxtoolkit.svg", name: "Redux Toolkit" },
      { filename: "nodejs.svg", name: "Node.js" },
      { filename: "expressjs.svg", name: "Express.js" },
      { filename: "mongodb.svg", name: "MongoDB" },
      { filename: "jwt.svg", name: "JWT" },
      { filename: "stripe.svg", name: "Stripe" },
      { filename: "firebase.svg", name: "Firebase" },
      { filename: "icons8-git.svg", name: "Git" },
    ],
    features: [
      "Complete eCommerce functionality with cart and wishlist",
      "Secure payment processing with Stripe integration",
      "Advanced product filtering and search capabilities",
      "User authentication and authorization system",
      "Comprehensive admin dashboard for product & order management",
      "Real-time inventory tracking and management",
      "Order history and tracking system",
      "Responsive design for all devices",
      "Demo credentials available on login page for easy exploration",
    ],
    projectType: "Full-Stack Web Application",
    thereIsAdmin: true,
  },
  {
    title: "Property Rental Platform",
    description:
      "A sophisticated full-stack web platform for property rentals offering seamless booking experience with advanced search filters, payment processing, user reviews, and comprehensive property management system.",
    image: "/projects/property-rentals/hero.png",
    liveLink: "https://gl.production-server.tech/",
    githubLink: "https://github.com/Mohamed-gp/Property-Rentals",
    techUsed: [
      { filename: "nextjs.svg", name: "Next.js" },
      { filename: "javascript.svg", name: "JavaScript" },
      { filename: "react.svg", name: "React" },
      { filename: "tailwindcss.svg", name: "Tailwind CSS" },
      { filename: "reactrouter.svg", name: "React Router" },
      { filename: "reduxtoolkit.svg", name: "Redux Toolkit" },
      { filename: "nodejs.svg", name: "Node.js" },
      { filename: "expressjs.svg", name: "Express.js" },
      { filename: "postgressql.svg", name: "PostgreSQL" },
      { filename: "prisma.svg", name: "Prisma" },
      { filename: "stripe.svg", name: "Stripe" },
      { filename: "jwt.svg", name: "JWT" },
      { filename: "zodlogo.svg", name: "Zod" },
    ],
    features: [
      "Advanced property search with multiple filters",
      "Complete booking management system",
      "Secure payment integration with Stripe",
      "User reviews and ratings system",
      "Property owner dashboard for listing management",
      "PostgreSQL database with optimized SQL queries for efficient data retrieval",
      "Real-time availability and pricing updates",
      "Interactive property image galleries",
      "Location-based search with map integration",
      "Demo credentials available on login page for easy exploration",
    ],
    projectType: "Full-Stack Web Application",
    thereIsAdmin: true,
  },
  {
    title: "Food Delivery Mobile App",
    description:
      "A complete mobile application for food ordering and delivery built with React Native and Expo. Features real-time order tracking, restaurant browsing, secure payments, and seamless user experience across iOS and Android platforms. I learned team work during this project.",
    image:
      "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&h=400&fit=crop&auto=format&q=80",
    liveLink: null, // No live preview
    githubLink: "https://github.com/Mohamed-gp/YumYum",
    techUsed: [
      { filename: "expo.svg", name: "Expo" },
      { filename: "react.svg", name: "React Native" },
      { filename: "typescript.svg", name: "TypeScript" },
      { filename: "nodejs.svg", name: "Node.js" },
      { filename: "expressjs.svg", name: "Express.js" },
      { filename: "mongodb.svg", name: "MongoDB" },
      { filename: "stripe.svg", name: "Stripe" },
      { filename: "jwt.svg", name: "JWT" },
      { filename: "firebase.svg", name: "Firebase" },
      { filename: "icons8-git.svg", name: "Git" },
    ],
    features: [
      "Cross-platform mobile app for iOS and Android",
      "Real-time order tracking and notifications",
      "Restaurant browsing with menu management",
      "Redis caching for improved performance and reduced database load",
      "Secure in-app payment processing",
      "User authentication and profile management",
      "Push notifications for order updates",
      "Restaurant dashboard for order management",
      "Location-based restaurant discovery",
    ],
    projectType: "Mobile Application (React Native)",
    thereIsAdmin: false,
  },
];

export { navBarTitles, projectsImagesSkills, projects };
