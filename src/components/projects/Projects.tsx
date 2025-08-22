"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardFooter } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Globe, Clock, Smartphone, Users } from "lucide-react";
import { useState, useRef } from "react";

export default function Projects() {
  // TO-DO : i will add ui-ux section with my portfolio design for now 
  const [activeTab, setActiveTab] = useState("all");
  const tabsRef = useRef<HTMLDivElement>(null);

  const projects = [
    {
      title: "Real Estate Web Platform",
      country: "United Kingdom",
      client: "Mustafa Nawaz",
      type: "Web Application",
      duration: "8 months project",
    },
    {
      title: "AI-Powered Analytics Platform",
      country: "United States",
      client: "crimsonbison",
      company: "analytics depot",
      type: "Web Application",
    },
    {
      title: "UX Enhancement Project",
      country: "Japan",
      client: "hamididz",
      company: "artisbay",
      type: "Web Application",
    },
    {
      title: "Transportation Platform",
      country: "Netherlands",
      type: ["Mobile Application", "Full Stack"],
      stack: "Mobile + Full Stack Development",
    },
  ];

  const webProjects = projects.filter((p) => p.type === "Web Application");
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
      // case "ui-ux":
      //   return projects.filter((p) => p.type === "UI/UX");
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
            <Clock className="mr-2 h-4 w-4" />
            Coming Soon
          </Badge>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
            Client Projects
          </h2>
          <p className="text-muted-foreground text-lg">
            Exciting collaborations with international clients, currently under
            development. These projects showcase diverse technical challenges
            and innovative solutions.
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
              <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 h-12 p-1 bg-muted/50 backdrop-blur-sm">
                <TabsTrigger
                  value="all"
                  className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground transition-all duration-300 text-sm font-medium"
                >
                  <Users className="mr-2 h-4 w-4" />
                  All
                </TabsTrigger>
                <TabsTrigger
                  value="web"
                  className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground transition-all duration-300 text-sm font-medium"
                >
                  <Globe className="mr-2 h-4 w-4" />
                  Web
                </TabsTrigger>
                <TabsTrigger
                  value="mobile"
                  className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground transition-all duration-300 text-sm font-medium"
                >
                  <Smartphone className="mr-2 h-4 w-4" />
                  Mobile
                </TabsTrigger>
              </TabsList>
            </div>

            {["all", "web", "mobile"].map((tab) => (
              <TabsContent key={tab} value={tab} className="mt-0">
                <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8">
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
  const isWebProject = project.type === "Web Application";
  const isMobileProject = Array.isArray(project.type)
    ? project.type.includes("Mobile Application")
    : project.type === "Mobile Application";
  const isFullStack =
    Array.isArray(project.type) && project.type.includes("Full Stack");

  return (
    <Card className="overflow-hidden group border border-primary/10 bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-950 shadow-lg hover:shadow-2xl transition-all duration-500 hover:border-primary/20">
      <div className="p-6 flex flex-col items-center text-center space-y-4">
        <div className="flex items-center gap-2 mb-2">
          <Badge className="bg-primary/10 text-primary hover:bg-primary/20">
            {project.country}
          </Badge>
          {project.client && (
            <Badge variant="outline" className="text-muted-foreground">
              {project.client}
            </Badge>
          )}
        </div>
        <h3 className="text-xl font-bold text-foreground">{project.title}</h3>
        {project.duration && (
          <span className="text-sm text-muted-foreground">
            {project.duration}
          </span>
        )}

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
          {isFullStack && (
            <Badge
              variant="secondary"
              className="bg-indigo-500/90 text-white border-none shadow-lg"
            >
              Full Stack
            </Badge>
          )}
        </div>

        <Badge
          variant="outline"
          className="bg-primary/5 text-primary hover:bg-primary/10 mt-4"
        >
          <Clock className="mr-2 h-4 w-4 animate-pulse" />
          Coming Soon
        </Badge>
      </div>
    </Card>
  );
}
