"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardFooter } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import {
  Globe,
  Clock,
  Smartphone,
  Users,
  ExternalLink,
  Code,
  X,
} from "lucide-react";
import { useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";

interface Project {
  title: string;
  country: string;
  flag: string;
  client?: string;
  company?: string;
  type: string | string[];
  url: string;
  github?: string;
  video?: string;
  image: string;
  description: string;
  status: string;
  role: string;
  technologies: string[];
}

export default function Projects() {
  // TO-DO : i will add ui-ux section with my portfolio design for now
  const [activeTab, setActiveTab] = useState("all");
  const tabsRef = useRef<HTMLDivElement>(null);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const projects = [
    {
      title: "Analytics Depot — AI-Powered Analytics Platform",
      country: "United States",
      flag: "🇺🇸",
      client: "Analytics Depot",
      company: "Analytics Depot",
      type: ["Web Application", "Mobile Application"],
      url: "https://analyticsdepot.com/",
      image: "/projects/analytics-depot/hero-updated-1.png",
      description:
        "Founding Full-Stack Engineer on a live AI analytics platform — competing with Julius and Databox. Owning all frontend architecture: custom drag-and-drop dashboard builder, shareable reports with password protection and embed mode, PDF/PowerPoint export. Shipped real-time collaboration with WebSockets, NL-to-SQL query interface, Apple Auth, Sentry observability, and React Native mobile app.",
      status: "Live",
      role: "Founding Full-Stack Engineer",
      technologies: [
        "Next.js",
        "FastAPI",
        "React Native",
        "WebSockets",
        "Redis",
        "Celery",
        "RAG Systems",
        "LangChain",
        "Sentry",
      ],
    },
    {
      title: "HaulHub — Transportation & Logistics Marketplace",
      country: "Netherlands",
      flag: "🇳🇱",
      client: "HaulHub",
      type: ["Web Application", "Mobile Application"],
      url: "https://haulhub.app/",
      image: "/projects/haulhub/hero-updated-1.png",
      description:
        "Building a production Uber-style logistics marketplace with 12+ service categories — live on iOS & Android in the Netherlands. Complex multi-role system with Admin, End Users, Service Providers, and Company Employees. Integrated Stripe payments (on-demand, subscriptions, provider payouts). Deployed Dockerized microservices on Hetzner via Coolify.",
      status: "Live on iOS & Android",
      role: "Full-Stack Developer",
      technologies: [
        "Next.js",
        "NestJS",
        "React Native",
        "Expo",
        "Stripe",
        "Docker",
        "PostgreSQL",
      ],
    },
    {
      title: "DzStore — E-commerce SaaS Platform",
      country: "Algeria",
      flag: "🇩🇿",
      type: "Web Application",
      url: "https://dzstore.org/",
      image: "/projects/dzstore/hero-updated-1.png",
      description:
        "Co-founded and built a Shopify-equivalent SaaS for Algerian merchants with 1,000+ users. Flagship of the Dzeri ecosystem targeting Algerian market digitization. Full e-commerce platform with store management, product listings, and payment processing.",
      status: "Live · 1,000+ Users",
      role: "Co-Founder & Full-Stack Engineer",
      technologies: [
        "Next.js",
        "PostgreSQL",
        "TypeScript",
        "Tailwind CSS",
        "SaaS",
      ],
    },
    {
      title: "Cribbix — Real Estate Platform",
      country: "United Kingdom",
      flag: "🇬🇧",
      client: "Cribbix",
      type: "Web Application",
      url: "https://cribbix.com/",
      image: "/projects/cribbix/hero-updated-1.png",
      description:
        "Built a Rightmove-style real estate platform (V1 & V2): tenant dashboard, application tracking, payments history, price drop alerts, interactive map search with full filtering, and Stripe subscriptions. Implemented Redis caching, rate limiting, reCAPTCHA v3. Managed full VPS deployment on DigitalOcean independently.",
      status: "Live",
      role: "Full-Stack Developer",
      technologies: [
        "Next.js",
        "Redis",
        "Stripe",
        "SSR/CSR",
        "reCAPTCHA",
        "DigitalOcean",
      ],
    },
    // Khdame — commented out per request. Uncomment to restore the project card.
    // {
    //   title: "Khdame — CRM & Marketplace",
    //   country: "Client Project",
    //   flag: "📱",
    //   type: ["Web Application", "Mobile Application"],
    //   url: "https://www.khdame.com/",
    //   image: "/projects/khdame/hero-updated-1.png",
    //   description:
    //     "Co-founded and built a CRM suite for small and medium retail businesses: desktop-optimized web app, Android app (Expo), and integrated marketplace with product listings, price filters, and region-based search. Real-time push notifications, WebSocket infrastructure, inventory management, statistics dashboard, OTP email verification, Google Auth, and Play Store submission.",
    //   status: "Live & Profitable",
    //   role: "Co-Founder & Full-Stack Developer",
    //   technologies: [
    //     "React Native",
    //     "Expo",
    //     "WebSockets",
    //     "Push Notifications",
    //     "Google Auth",
    //   ],
    // },
    {
      title: "Munia — Open Source Social Media",
      country: "Open Source",
      flag: "🌐",
      type: "Web Application",
      url: "https://munia.norcio.dev/",
      github: "https://github.com/leandronorcio/munia",
      video:
        "https://norcio-dot-dev-public-files.s3.us-east-1.amazonaws.com/munia/showcase.mp4",
      image: "/projects/munia/hero-updated-1.png",
      description:
        "Contributed auth-aware navigation and dynamic UI logic to a Next.js open-source project with 300+ GitHub stars.",
      status: "Live",
      role: "Contributor",
      technologies: ["Next.js", "Open Source", "Authentication", "TypeScript"],
    },
  ];

  const webProjects = projects.filter(
    (p) =>
      p.type === "Web Application" ||
      (Array.isArray(p.type) && p.type.includes("Web Application"))
  );
  const mobileProjects = projects.filter((p) =>
    Array.isArray(p.type)
      ? p.type.includes("Mobile Application")
      : p.type === "Mobile Application"
  );

  const getProjectsForTab = (tab: string) => {
    switch (tab) {
      case "web":
        return webProjects;
      case "mobile":
        return mobileProjects;
      default:
        return projects;
    }
  };

  return (
    <section
      id="projects"
      className="py-16 sm:py-20 bg-gradient-to-br from-muted/30 via-background to-muted/20"
    >
      <div className="container px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 sm:mb-16 max-w-4xl mx-auto"
        >
          <Badge
            variant="outline"
            className="mb-4 px-4 py-2 text-sm border-primary/20 bg-primary/5"
          >
            <Globe className="mr-2 h-4 w-4" />
            Live Projects
          </Badge>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
            Client Projects & Contributions
          </h2>
          <p className="text-muted-foreground text-lg">
            Real-world applications and platforms serving users globally. From
            AI-powered analytics to transportation solutions and open-source
            tools.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Tabs
            value={activeTab}
            onValueChange={setActiveTab}
            className="w-full"
          >
            <div className="flex justify-center mb-12">
              <TabsList className="grid w-full max-w-lg mx-auto grid-cols-3 h-12 p-1 bg-muted/50 backdrop-blur-sm">
                <TabsTrigger
                  value="all"
                  className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground transition-all duration-300 text-sm font-medium"
                >
                  <Users className="mr-1 h-4 w-4" />
                  All
                </TabsTrigger>
                <TabsTrigger
                  value="web"
                  className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground transition-all duration-300 text-sm font-medium"
                >
                  <Globe className="mr-1 h-4 w-4" />
                  Web
                </TabsTrigger>
                <TabsTrigger
                  value="mobile"
                  className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground transition-all duration-300 text-sm font-medium"
                >
                  <Smartphone className="mr-1 h-4 w-4" />
                  Mobile
                </TabsTrigger>
              </TabsList>
            </div>

            {["all", "web", "mobile"].map((tab) => (
              <TabsContent key={tab} value={tab} className="mt-0">
                <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8 justify-items-center">
                  {getProjectsForTab(tab).map((project) => (
                    <ProjectCard
                      key={project.title}
                      project={project}
                      onClick={() => handleProjectClick(project)}
                    />
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </motion.div>

        {/* Project Details Modal */}
        <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
          <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold flex items-center gap-2">
                <span className="text-2xl">{selectedProject?.flag}</span>
                {selectedProject?.title}
              </DialogTitle>
              <DialogDescription className="text-base">
                {selectedProject?.role} • {selectedProject?.country}
              </DialogDescription>
            </DialogHeader>

            {selectedProject && (
              <div className="space-y-6">
                {/* Video Preview (for Munia) */}
                {selectedProject.video && (
                  <div
                    className="relative w-full rounded-lg overflow-hidden bg-muted"
                    style={{ aspectRatio: "16/9" }}
                  >
                    <video
                      src={selectedProject.video}
                      controls
                      autoPlay
                      muted
                      loop
                      playsInline
                      className="absolute inset-0 w-full h-full object-contain rounded-lg"
                    />
                  </div>
                )}

                {/* Project Image (only if no video) */}
                {selectedProject.image && !selectedProject.video && (
                  <div
                    className="relative w-full rounded-lg overflow-hidden"
                    style={{ aspectRatio: "16/9" }}
                  >
                    <Image
                      src={selectedProject.image}
                      alt={selectedProject.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 700px"
                      quality={95}
                      className="object-cover"
                    />
                  </div>
                )}

                {/* Status & Type Badges */}
                <div className="flex flex-wrap gap-2">
                  {selectedProject.status && (
                    <Badge
                      className={`${
                        selectedProject.status === "Live" ||
                        selectedProject.status === "Live & Profitable"
                          ? "bg-green-600 text-white"
                          : "bg-muted text-foreground"
                      }`}
                    >
                      {selectedProject.status}
                    </Badge>
                  )}
                  {(selectedProject.type === "Web Application" ||
                    (Array.isArray(selectedProject.type) &&
                      selectedProject.type.includes("Web Application"))) && (
                    <Badge className="bg-blue-500 text-white">
                      <Globe className="mr-1 h-3 w-3" />
                      Web Application
                    </Badge>
                  )}
                  {(selectedProject.type === "Mobile Application" ||
                    (Array.isArray(selectedProject.type) &&
                      selectedProject.type.includes("Mobile Application"))) && (
                    <Badge className="bg-purple-500 text-white">
                      <Smartphone className="mr-1 h-3 w-3" />
                      Mobile Application
                    </Badge>
                  )}
                  {selectedProject.type === "CLI Tool" && (
                    <Badge className="bg-green-500 text-white">
                      <Code className="mr-1 h-3 w-3" />
                      CLI Tool
                    </Badge>
                  )}
                </div>

                {/* Description */}
                <div>
                  <h3 className="font-semibold text-lg mb-2">
                    About the Project
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {selectedProject.description}
                  </p>
                </div>

                {/* Technologies Used */}
                {selectedProject.technologies &&
                  selectedProject.technologies.length > 0 && (
                    <div>
                      <h3 className="font-semibold text-lg mb-3">
                        Technologies Used
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.technologies.map(
                          (tech: string, i: number) => (
                            <Badge
                              key={i}
                              variant="outline"
                              className="px-3 py-1"
                            >
                              {tech}
                            </Badge>
                          )
                        )}
                      </div>
                    </div>
                  )}

                {/* Action Buttons */}
                <div className="pt-4 flex flex-wrap gap-3">
                  {selectedProject.url && (
                    <Button asChild className="w-full sm:w-auto" size="lg">
                      <a
                        href={selectedProject.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Visit Live Project
                      </a>
                    </Button>
                  )}
                  {selectedProject.github && (
                    <Button
                      asChild
                      variant="outline"
                      className="w-full sm:w-auto"
                      size="lg"
                    >
                      <a
                        href={selectedProject.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Code className="mr-2 h-4 w-4" />
                        View Source Code
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
}

function ProjectCard({
  project,
  onClick,
}: {
  project: Project;
  onClick: () => void;
}) {
  const isWebProject =
    project.type === "Web Application" ||
    (Array.isArray(project.type) && project.type.includes("Web Application"));
  const isMobileProject = Array.isArray(project.type)
    ? project.type.includes("Mobile Application")
    : project.type === "Mobile Application";
  const isCliProject = project.type === "CLI Tool";

  return (
    <Card
      onClick={onClick}
      className="overflow-hidden group border border-primary/10 bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-950 shadow-lg hover:shadow-2xl transition-all duration-500 hover:border-primary/20 hover:-translate-y-1 h-full flex flex-col cursor-pointer"
    >
      {/* Project Image */}
      {project.image && (
        <div className="relative w-full h-52 overflow-hidden bg-muted">
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
            quality={90}
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>
      )}

      <div className="p-6 flex flex-col items-center text-center space-y-4 flex-1">
        <div className="flex items-center gap-2 mb-2 flex-wrap justify-center">
          <Badge className="bg-primary/10 text-primary hover:bg-primary/20 flex items-center gap-1.5">
            <span className="text-sm">{project.flag}</span>
            {project.country}
          </Badge>
          {project.status && (
            <Badge
              variant="outline"
              className={`${
                project.status === "Live" ||
                project.status === "Live & Profitable"
                  ? "text-green-600 border-green-600 bg-green-50 dark:bg-green-950/20"
                  : "text-muted-foreground"
              }`}
            >
              {project.status}
            </Badge>
          )}
        </div>

        <div className="space-y-2 flex-1">
          <h3 className="text-lg font-bold text-foreground leading-tight">
            {project.title}
          </h3>
          {project.role && (
            <p className="text-sm text-primary font-medium">{project.role}</p>
          )}
          {project.description && (
            <p className="text-sm text-muted-foreground line-clamp-3">
              {project.description}
            </p>
          )}
        </div>

        <div className="flex flex-wrap gap-2 justify-center">
          {isWebProject && (
            <Badge
              variant="secondary"
              className="bg-blue-500/90 text-white border-none shadow-lg"
            >
              <Globe className="mr-1 h-3 w-3" />
              Web
            </Badge>
          )}
          {isMobileProject && (
            <Badge
              variant="secondary"
              className="bg-purple-500/90 text-white border-none shadow-lg"
            >
              <Smartphone className="mr-1 h-3 w-3" />
              Mobile
            </Badge>
          )}
          {isCliProject && (
            <Badge
              variant="secondary"
              className="bg-green-500/90 text-white border-none shadow-lg"
            >
              <Code className="mr-1 h-3 w-3" />
              CLI Tool
            </Badge>
          )}
        </div>

        {project.technologies && project.technologies.length > 0 && (
          <div className="flex flex-wrap gap-1 justify-center min-h-[2rem]">
            {project.technologies.slice(0, 3).map((tech: string, i: number) => (
              <Badge key={i} variant="outline" className="text-xs px-2 py-0.5">
                {tech}
              </Badge>
            ))}
            {project.technologies.length > 3 && (
              <Badge variant="outline" className="text-xs px-2 py-0.5">
                +{project.technologies.length - 3} more
              </Badge>
            )}
          </div>
        )}

        <div className="pt-2 mt-auto">
          <Badge
            variant="outline"
            className="bg-primary/5 text-primary hover:bg-primary/10 group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
          >
            <ExternalLink className="mr-2 h-3 w-3" />
            View Details
          </Badge>
        </div>
      </div>
    </Card>
  );
}
