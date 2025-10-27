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
import { Globe, Clock, Smartphone, Users, ExternalLink, Code, X } from "lucide-react";
import { useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Projects() {
  // TO-DO : i will add ui-ux section with my portfolio design for now 
  const [activeTab, setActiveTab] = useState("all");
  const tabsRef = useRef<HTMLDivElement>(null);
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleProjectClick = (project: any) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const projects = [
    {
      title: "Analytics Depot - AI-Powered Analytics Platform",
      country: "United States",
      flag: "🇺🇸",
      client: "Analytics Depot",
      company: "Analytics Depot",
      type: "Web Application",
      url: "https://analyticsdepot.com/",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop&auto=format&q=80",
      description: "RAG (Retrieval-Augmented Generation) system using FastAPI for intelligent data processing with real-time analytics dashboard. Led team of 3 developers, achieved 99%+ uptime.",
      status: "Live",
      role: "Founding Engineer | Technical Lead",
      technologies: ["FastAPI", "RAG Systems", "AI/ML", "Next.js", "Data Visualization", "Python"]
    },
    {
      title: "HaulHub - Transportation & Logistics Platform",
      country: "Netherlands",
      flag: "🇳🇱",
      client: "HaulHub",
      type: ["Web Application", "Mobile Application"],
      url: "https://haulhub.app/",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=400&fit=crop&auto=format&q=80",
      description: "Cross-platform mobile and web applications for logistics and transportation industry. Improved delivery tracking efficiency working with 6-person team.",
      status: "Live",
      role: "Full-Stack Developer",
      technologies: ["React Native", "Cross-platform", "Logistics Solutions", "Team Collaboration"]
    },
    {
      title: "Rentals - Real Estate Platform",
      country: "United Kingdom",
      flag: "🇬🇧",
      client: "Rentals Platform",
      type: "Web Application",
      image: "/projects/rentals/hero.png",
      description: "Comprehensive real estate platform with 1,000+ listings, map-based filtering. Building v2 with AI-powered search & 2x faster load times.",
      status: "V2 In Development",
      role: "Full-Stack Developer",
      technologies: ["Real Estate Platform", "Geolocation", "Map Integration", "AI Search", "Performance"]
    },
    {
      title: "ArtisBay - Performance Enhancement",
      country: "Japan",
      flag: "🇯🇵",
      client: "ArtisBay",
      company: "ArtisBay",
      type: "Web Application",
      url: "https://artisbay.com/",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop&auto=format&q=80",
      description: "Fixed responsive design issues and improved performance by 35% faster load times through CSS optimization",
      status: "Live",
      role: "Full-Stack Developer",
      technologies: ["Responsive Design", "CSS Optimization", "Performance Tuning"]
    },
    {
      title: "Profitable Local Mobile App",
      country: "Client Project",
      flag: "📱",
      type: "Mobile Application",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=400&fit=crop&auto=format&q=80",
      description: "Rebuilt v2 in React Native, boosting performance and retention. Added new features that attracted real paying clients and contributed to profit growth.",
      status: "Live & Profitable",
      role: "Full-Stack Developer",
      technologies: ["React Native", "Performance Optimization", "UX/UI", "Mobile Development"]
    },
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
                {/* Project Image */}
                {selectedProject.image && (
                  <div className="relative w-full h-64 rounded-lg overflow-hidden">
                    <Image
                      src={selectedProject.image}
                      alt={selectedProject.title}
                      width={800}
                      height={400}
                      className="w-full h-full object-cover"
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
                  <h3 className="font-semibold text-lg mb-2">About the Project</h3>
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

                {/* Visit Project Button */}
                {selectedProject.url && (
                  <div className="pt-4">
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
                  </div>
                )}
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
}

function ProjectCard({ project, index, onClick }: { project: any; index: number; onClick: () => void }) {
  const isWebProject = project.type === "Web Application" || 
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
          <div className="relative w-full h-48 overflow-hidden bg-muted">
            <Image
              src={project.image}
              alt={project.title}
              width={800}
              height={400}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
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
