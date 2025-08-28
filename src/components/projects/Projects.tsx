"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardFooter } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Globe, Clock, Smartphone, Users, ExternalLink, Code } from "lucide-react";
import { useState, useRef } from "react";
import Link from "next/link";

export default function Projects() {
  // TO-DO : i will add ui-ux section with my portfolio design for now 
  const [activeTab, setActiveTab] = useState("all");
  const tabsRef = useRef<HTMLDivElement>(null);

  const projects = [
    {
      title: "Rentals - Real Estate Platform",
      country: "United Kingdom",
      flag: "🇬🇧",
      client: "Rentals Platform",
      type: "Web Application",
      url: "https://rentals.production-server.tech/",
      description: "Comprehensive real estate platform with property listings, search, and booking functionality with geolocation and map integration",
      status: "Live",
      role: "Full-Stack Developer",
      technologies: ["Real Estate Platform", "Geolocation", "Map Integration", "Advanced Filtering"]
    },
    {
      title: "Analytics Depot - AI-Powered Analytics Platform",
      country: "United States",
      flag: "🇺🇸",
      client: "Analytics Depot",
      company: "Analytics Depot",
      type: "Web Application",
      url: "https://analyticsdepot.com/",
      description: "RAG (Retrieval-Augmented Generation) system using FastAPI for intelligent data processing with real-time analytics dashboard",
      status: "Live",
      role: "Founding Engineer | Technical Lead",
      technologies: ["FastAPI", "RAG Systems", "AI/ML", "Next.js", "Data Visualization"]
    },
    {
      title: "HaulHub - Transportation & Logistics Platform",
      country: "Netherlands",
      flag: "🇳🇱",
      client: "HaulHub",
      type: ["Web Application", "Mobile Application"],
      url: "https://haulhub.app/",
      description: "Cross-platform mobile and web applications for logistics and transportation industry",
      status: "Live",
      role: "Full-Stack Developer",
      technologies: ["React Native", "Cross-platform", "Logistics Solutions", "Team Collaboration"]
    },
    {
      title: "ArtisBay - UX Enhancement Platform",
      country: "Japan",
      flag: "🇯🇵",
      client: "ArtisBay",
      company: "ArtisBay",
      type: "Web Application",
      url: "https://artisbay.com/",
      description: "Fixed responsive design issues and optimized CSS for mobile-first responsive functionality",
      status: "Live",
      role: "Full-Stack Developer",
      technologies: ["Responsive Design", "CSS Optimization", "Mobile-First Design"]
    },
    {
      title: "SaaS Boiler CLI - Template Generator",
      country: "Open Source",
      flag: "🌐",
      type: "CLI Tool",
      url: "https://www.npmjs.com/package/saas-boiler-cli",
      description: "Open-source CLI tool that peaked at 500+ downloads for rapid SaaS application scaffolding",
      status: "Live",
      role: "Co-Creator",
      technologies: ["Go", "CLI Development", "Next.js", "Nuxt.js", "Express.js", "Python"]
    },
    // {
    //   title: "Profitable Local Mobile App",
    //   country: "Client Project",
    //   flag: "📱",
    //   type: "Mobile Application",
    //   description: "Developed v2 version of existing React Native mobile application improving user experience and performance",
    //   status: "Live & Profitable",
    //   role: "Full-Stack Developer",
    //   technologies: ["React Native", "Performance Optimization", "UX/UI"]
    // },
  ];

  const webProjects = projects.filter((p) => 
    p.type === "Web Application" || 
    (Array.isArray(p.type) && p.type.includes("Web Application"))
  );
  const mobileProjects = projects.filter((p) =>
    Array.isArray(p.type)
      ? p.type.includes("Mobile Application")
      : p.type === "Mobile Application"
  );
  const cliProjects = projects.filter((p) => p.type === "CLI Tool");

  const getProjectsForTab = (tab: string) => {
    switch (tab) {
      case "web":
        return webProjects;
      case "mobile":
        return mobileProjects;
      case "cli":
        return cliProjects;
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
            Real-world applications and platforms serving users globally. 
            From AI-powered analytics to transportation solutions and open-source tools.
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
              <TabsList className="grid w-full max-w-lg mx-auto grid-cols-4 h-12 p-1 bg-muted/50 backdrop-blur-sm">
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
                <TabsTrigger
                  value="cli"
                  className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground transition-all duration-300 text-sm font-medium"
                >
                  <Code className="mr-1 h-4 w-4" />
                  CLI
                </TabsTrigger>
              </TabsList>
            </div>

            {["all", "web", "mobile", "cli"].map((tab) => (
              <TabsContent key={tab} value={tab} className="mt-0">
                <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8 justify-items-center">
                  {getProjectsForTab(tab).map((project, index) => (
                    <ProjectCard
                      key={project.title}
                      project={project}
                      index={index}
                    />
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </motion.div>
      </div>
    </section>
  );
}

function ProjectCard({ project, index }: { project: any; index: number }) {
  const isWebProject = project.type === "Web Application" || 
    (Array.isArray(project.type) && project.type.includes("Web Application"));
  const isMobileProject = Array.isArray(project.type)
    ? project.type.includes("Mobile Application")
    : project.type === "Mobile Application";
  const isCliProject = project.type === "CLI Tool";

  const CardWrapper = ({ children }: { children: React.ReactNode }) => {
    if (project.url) {
      return (
        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="block"
        >
          {children}
        </a>
      );
    }
    return <>{children}</>;
  };

  return (
    <CardWrapper>
      <Card className="overflow-hidden group border border-primary/10 bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-950 shadow-lg hover:shadow-2xl transition-all duration-500 hover:border-primary/20 hover:-translate-y-1 h-full flex flex-col">
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
                  project.status === "Live" || project.status === "Live & Profitable"
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

          {project.url && (
            <div className="pt-2 mt-auto">
              <Badge
                variant="outline"
                className="bg-primary/5 text-primary hover:bg-primary/10 group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
              >
                <ExternalLink className="mr-2 h-3 w-3" />
                Visit Project
              </Badge>
            </div>
          )}
        </div>
      </Card>
    </CardWrapper>
  );
}
