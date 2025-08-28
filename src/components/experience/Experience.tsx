"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Briefcase,
  GraduationCap,
  Award,
  Trophy,
  Medal,
  Star,
  ExternalLink,
  Calendar,
  Building,
  Box,
  ChevronLeft,
  ChevronRight,
  Leaf,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function Experience() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;

  const workExperience = [
    {
      title: "Founding Engineer | Technical Lead",
      company: "Analytics-Depot",
      location: "Remote (USA)",
      period: "Present",
      description:
        "Implemented RAG (Retrieval-Augmented Generation) system using FastAPI for intelligent data processing. Architected scalable web applications integrating AI/ML capabilities with traditional analytics. Built responsive Next.js frontend with real-time analytics dashboard and data visualization.",
      skills: [
        "FastAPI",
        "RAG Systems",
        "AI/ML",
        "Next.js",
        "Data Visualization",
        "Real-time Analytics",
        "Python",
        "TypeScript",
      ],
    },
    {
      title: "Full-Stack Developer",
      company: "HaulHub",
      location: "Remote (Netherlands)",
      period: "Contract",
      description:
        "Developed cross-platform mobile and web applications for logistics and transportation industry. Collaborated with a 6-person team of designers and developers to deliver projects under tight deadlines.",
      skills: [
        "React Native",
        "React",
        "Cross-platform Development",
        "Logistics Solutions",
        "Team Collaboration",
        "Agile Development",
      ],
    },
    {
      title: "Full-Stack Developer",
      company: "Rentals",
      location: "Freelance (United Kingdom)",
      period: "Ongoing",
      description:
        "Built comprehensive real estate platform with property listings, search, and booking functionality. Implemented advanced filtering system with geolocation and map integration. Currently developing v2 with enhanced UX/UI and performance optimizations.",
      skills: [
        "Real Estate Platform",
        "Geolocation",
        "Map Integration",
        "Advanced Filtering",
        "UX/UI Optimization",
        "Performance Optimization",
      ],
    },
    {
      title: "Full-Stack Developer",
      company: "ArtisBay",
      location: "Freelance (Japan)",
      period: "Contract",
      description:
        "Fixed responsive design issues ensuring proper display across all devices and screen sizes. Optimized CSS and layout components for mobile-first responsive functionality. Provided technical recommendations for platform improvements and best practices.",
      skills: [
        "Responsive Design",
        "CSS Optimization",
        "Mobile-First Design",
        "Cross-device Compatibility",
        "Performance Optimization",
      ],
    },
    {
      title: "Freelance Developer",
      company: "Fiverr",
      website: "https://www.fiverr.com/mohamedouterbah?public_mode=true",
      period: "2022 - Present",
      description:
        "Developed custom websites and full-stack applications for clients worldwide. Maintaining a high satisfaction rate with clients through effective communication and quality deliverables.",
      skills: [
        "React",
        "Next.js",
        "Node.js",
        "TypeScript",
        "TailwindCSS",
        "MongoDB",
        "Full-Stack Development",
      ],
      rating: {
        score: 5,
        platform: "Fiverr",
      },
    },
    {
      title: "Web Development Intern",
      company: "Exclusive Labs",
      period: "December 2024 - February 2025",
      description:
        "Developed full-stack course management system enabling efficient course tracking and administration. Built user authentication system with role-based access control (admin/student/instructor).",
      skills: [
        "Course Management System",
        "User Authentication",
        "Role-based Access Control",
        "React",
        "Node.js",
        "Database Management",
      ],
    },
  ];

  const projects = [
    {
      title: "Profitable Local Mobile App",
      description:
        "Developed v2 version of existing React Native mobile application improving user experience and performance. Contributed to application's continued profitability and growing user base.",
      skills: ["React Native", "Performance Optimization", "UX/UI", "Mobile Development"],
      status: "Live & Profitable",
    },
    {
      title: "SaaS Boiler CLI - SaaS Template Generator",
      website: "https://www.npmjs.com/package/saas-boiler-cli",
      description:
        "Created open-source CLI tool that peaked at 500 downloads for rapid SaaS application scaffolding. Supports multiple tech stacks: Next.js, Nuxt.js, Express.js, Go, Python with pre-configured setups.",
      skills: [
        "Go",
        "Nuxt.js",
        "Next.js",
        "Express.js",
        "Python",
        "CLI Development",
        "Open Source",
      ],
      achievements: [
        "500+ peak downloads on npm",
        "Multiple framework support",
        "Published and maintained on npm registry",
      ],
    },
  ];

  const education = [
    {
      degree: "Master's Degree in Computer Science",
      institution:
        "Higher School of Computer Science and Digital Technologies (ESTIN)",
      period: "2022 - Present",
      description:
        "Focused on advanced topics in computer science, software engineering, and emerging technologies. Gaining expertise in data structures, algorithms, software design, and more.",
    },
  ];

  const certifications = [
    {
      title: "Hackathon Winner - First Place",
      organization: "Ideathon Competition",
      date: "2024",
      description:
        "Secured 1st place for developing an innovative tech solution in a competitive ideathon.",
      image: "/achievement/ideathonCertificate.jpg",
      icon: <Star className="h-5 w-5 text-yellow-500" />,
      color: "from-yellow-500/20 to-amber-500/20",
    },
    {
      title: "Hackathon Experience - 5+ Competitions",
      organization: "Various Organizations",
      date: "2024",
      description:
        "Participated in 5+ hackathons focused on competitive programming, logistics optimization, AI, and real-world tech solutions.",
      image: "/achievement/codecraft.png",
      icon: <Trophy className="h-5 w-5 text-purple-500" />,
      color: "from-purple-500/20 to-indigo-500/20",
    },
    {
      title: "ByteCraft Competitive Programming",
      organization: "ByteCraft",
      date: "2023",
      description:
        "Participated in competitive programming challenges, enhancing algorithmic problem-solving skills.",
      image: "/achievement/codecraft.png",
      icon: <Medal className="h-5 w-5 text-purple-500" />,
      color: "from-purple-500/20 to-indigo-500/20",
    },
    {
      title: "Internal Hackathon",
      organization: "ByteCraft",
      date: "August 2023",
      description:
        "Participated in a hackathon focused on AI and technology solutions for farming and agricultural innovations.",
      image: "/achievement/internal-hackathon.png",
      icon: <Leaf className="h-5 w-5 text-green-500" />,
      color: "from-green-500/20 to-teal-500/20",
    },
    {
      title: "Innobyte Hackathon",
      organization: "ByteCraft",
      website: "https://innobyte.vercel.app",
      date: "December 2023",
      description:
        "Participated in the hackathon, developing innovative solutions among 18 teams at Syphax Hotel.",
      image: "/achievement/innobyte.png",
      icon: <Trophy className="h-5 w-5 text-blue-500" />,
      color: "from-emerald-500/20 to-green-500/20",
    },
    {
      title: "WeHack Logistics Optimization",
      organization: "Einstein's Club",
      date: "November 2024",
      description:
        "Participated in WeHack hackathon focused on optimizing logistics systems and supply chain solutions.",
      image: null,
      icon: <Box className="h-5 w-5 text-orange-500" />,
      color: "from-orange-500/20 to-red-500/20",
    },
    {
      title: "Salam Hack Online",
      organization: "Salam Hack",
      date: "2025",
      website: "https://salamhack.com/",
      description:
        "Participated in the Salam Hack Online competition, developing solutions to real-world problems.",
      image: null,
      icon: <Award className="h-5 w-5 text-blue-500" />,
      color: "from-blue-500/20 to-cyan-500/20",
    },
  ];

  // Calculate pagination info
  const totalPages = Math.ceil(certifications.length / itemsPerPage);
  const paginatedCertifications = certifications.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePrevPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  const handleNextPage = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  };

  return (
    <section id="experience" className="py-16 sm:py-20">
      <div className="container px-4 sm:px-6">
        <motion.div
          style={{ willChange: "transform, opacity" }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 sm:mb-16 max-w-3xl mx-auto"
        >
          <Badge
            variant="outline"
            className="mb-4 px-3 py-1 text-sm border-primary/20"
          >
            My Journey
          </Badge>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
            Professional Experience
          </h2>
          <p className="text-muted-foreground">
            My professional journey has equipped me with practical experience
            and valuable skills in software development.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          <motion.div
            style={{ willChange: "transform, opacity" }}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="md:col-span-1 lg:col-span-2"
          >
            <div className="flex items-center mb-6 sm:mb-8">
              <Briefcase className="h-5 w-5 sm:h-6 sm:w-6 mr-2 text-primary" />
              <h3 className="text-xl sm:text-2xl font-semibold">
                Work Experience
              </h3>
            </div>

            <div className="relative border-l-2 border-muted pl-4 sm:pl-6 ml-2 sm:ml-3 space-y-8 sm:space-y-10">
              {workExperience.map((job, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative"
                >
                  <div className="absolute -left-[1.25rem] sm:-left-[2.45rem] top-0 w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-primary/20 border-4 border-background" />
                  <div className="space-y-2">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <h4 className="text-lg sm:text-xl font-semibold">
                        {job.title}
                      </h4>
                      <Badge
                        variant="outline"
                        className="font-normal text-xs sm:text-sm"
                      >
                        {job.period}
                      </Badge>
                    </div>
                    <p className="text-primary font-medium text-sm sm:text-base flex items-center gap-2">
                      {job.company == "Fiverr" && job?.website ? (
                        <Link
                          href={job.website}
                          target="_blank"
                          className="text-primary font-medium text-sm sm:text-base flex items-center gap-2"
                        >
                          {job.company}
                        </Link>
                      ) : (
                        <>{job.company}</>
                      )}

                      {job.website && (
                        <Link
                          href={job.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-xs font-normal text-muted-foreground hover:text-primary transition-colors"
                        >
                          <ExternalLink className="h-3 w-3 ml-1" />
                        </Link>
                      )}
                    </p>
                    {job.location && (
                      <p className="text-muted-foreground text-xs sm:text-sm">
                        📍 {job.location}
                      </p>
                    )}
                    {job.rating && (
                      <div className="flex items-center gap-1.5">
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`h-4 w-4 ${
                                i < Math.floor(job.rating.score)
                                  ? "text-yellow-400 fill-yellow-400"
                                  : i < job.rating.score
                                  ? "text-yellow-400 fill-yellow-400" // For the partial star
                                  : "text-muted"
                              }`}
                            />
                          ))}
                        </div>
                        <span className="text-sm font-medium">
                          {job.rating.score} on {job.rating.platform}
                        </span>
                      </div>
                    )}
                    <p className="text-muted-foreground text-sm">
                      {job.description}
                    </p>
                    <div className="flex flex-wrap gap-1.5 sm:gap-2 pt-2">
                      {job.skills.map((skill, i) => (
                        <Badge
                          key={i}
                          variant="secondary"
                          className="px-2 py-0.5 text-xs"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            style={{ willChange: "transform, opacity" }}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center mb-6 sm:mb-8">
              <GraduationCap className="h-5 w-5 sm:h-6 sm:w-6 mr-2 text-primary" />
              <h3 className="text-xl sm:text-2xl font-semibold">Education</h3>
            </div>

            <div className="space-y-6">
              {education.map((edu, index) => (
                <Card key={index} className="bg-card/50">
                  <CardContent className="p-4 sm:p-6 space-y-3 sm:space-y-4">
                    <div className="space-y-2">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <h4 className="text-base sm:text-lg font-semibold">
                          {edu.degree}
                        </h4>
                        <Badge
                          variant="outline"
                          className="font-normal text-xs sm:text-sm"
                        >
                          {edu.period}
                        </Badge>
                      </div>
                      <p className="text-primary font-medium text-sm">
                        {edu.institution}
                      </p>
                      <p className="text-muted-foreground text-xs sm:text-sm">
                        {edu.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-8 sm:mt-10">
              <div className="flex items-center mb-6 justify-between">
                <div className="flex items-center">
                  <Award className="h-5 w-5 sm:h-6 sm:w-6 mr-2 text-primary" />
                  <h3 className="text-xl sm:text-2xl font-semibold">
                    Certifications & Achievements
                  </h3>
                </div>

                {/* Pagination indicator */}
                <div className="text-sm text-muted-foreground">
                  {currentPage} / {totalPages}
                </div>
              </div>

              <div className="space-y-3 sm:space-y-4">
                {paginatedCertifications.map((cert, index) => (
                  <motion.div
                    style={{ willChange: "transform, opacity" }}
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <Dialog>
                      <DialogTrigger asChild>
                        <Card className="bg-card/50 cursor-pointer hover:bg-card/80 transition-colors hover:shadow-md hover:-translate-y-0.5 duration-300">
                          <CardContent className="p-3 sm:p-4 flex items-center gap-3 sm:gap-4">
                            {/* Improved achievement icon/image container */}
                            <div
                              className={`w-12 h-12 sm:w-16 sm:h-16 rounded-lg relative overflow-hidden shadow-md bg-gradient-to-br ${cert.color} flex-shrink-0 border border-primary/10`}
                            >
                              {cert.image ? (
                                <Image
                                  src={cert.image}
                                  alt={cert.title}
                                  fill
                                  sizes="(max-width: 640px) 48px, 64px"
                                  className="object-cover object-center"
                                  placeholder="blur"
                                  blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwIiBoZWlnaHQ9IjExOSIgdmlld0JveD0iMCAwIDEyMCAxMTkiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIxMjAiIGhlaWdodD0iMTE5IiBmaWxsPSIjRThFQUYwIi8+Cjwvc3ZnPgo="
                                />
                              ) : (
                                <div className="absolute inset-0 flex items-center justify-center">
                                  <div
                                    className="absolute inset-0 opacity-25"
                                    style={{
                                      backgroundImage:
                                        "radial-gradient(circle, currentColor 1px, transparent 1px)",
                                      backgroundSize: "8px 8px",
                                    }}
                                  ></div>
                                  <div className="z-10 bg-background/70 rounded-full p-2 backdrop-blur-sm">
                                    {cert.icon}
                                  </div>
                                </div>
                              )}

                              {/* Badge overlay in corner */}
                              <div className="absolute -bottom-1 -right-1 bg-background rounded-full p-1 shadow-sm border border-primary/10 z-10">
                                {cert.icon}
                              </div>
                            </div>

                            <div className="flex-1 min-w-0">
                              <h4 className="font-semibold text-sm sm:text-base truncate">
                                {cert.title}
                              </h4>
                              <p className="text-xs sm:text-sm text-muted-foreground flex items-center mt-1 gap-1 flex-wrap">
                                <span className="inline-flex items-center">
                                  <Building className="h-3 w-3 mr-1 flex-shrink-0" />
                                  {cert.organization}
                                </span>
                                <span className="w-1 h-1 rounded-full bg-muted-foreground inline-block mx-1"></span>
                                <span className="inline-flex items-center">
                                  <Calendar className="h-3 w-3 mr-1 flex-shrink-0" />
                                  {cert.date}
                                </span>
                              </p>
                            </div>

                            {/* Indicator for clickable dialog */}
                            <div className="w-6 h-6 rounded-full bg-primary/5 flex items-center justify-center">
                              <svg
                                width="14"
                                height="14"
                                viewBox="0 0 15 15"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="text-primary/70"
                              >
                                <path
                                  d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
                                  fill="currentColor"
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                ></path>
                              </svg>
                            </div>
                          </CardContent>
                        </Card>
                      </DialogTrigger>
                      <DialogContent className="w-[95vw] sm:w-[90vw] md:w-[80vw] max-w-2xl">
                        <DialogHeader>
                          <DialogTitle className="flex items-center gap-2 text-xl">
                            {cert.icon} {cert.title}
                          </DialogTitle>
                        </DialogHeader>
                        <div className="flex flex-col items-center mt-4">
                          {cert.image ? (
                            <div className="relative w-full max-w-md mb-6 rounded-lg overflow-hidden shadow-md border border-primary/10">
                              <div className="aspect-[4/3] w-full bg-muted relative">
                                <Image
                                  src={cert.image}
                                  alt={cert.title}
                                  fill
                                  sizes="(max-width: 768px) 90vw, (max-width: 1200px) 80vw, 33vw"
                                  className="object-cover"
                                  priority
                                />
                              </div>
                            </div>
                          ) : (
                            <div
                              className={`w-full max-w-md aspect-[4/3] bg-gradient-to-br ${cert.color} flex items-center justify-center rounded-lg mb-6 border border-primary/10 relative overflow-hidden`}
                            >
                              {/* Pattern background */}
                              <div
                                className="absolute inset-0 opacity-10"
                                style={{
                                  backgroundImage:
                                    "radial-gradient(circle, currentColor 1px, transparent 1px), radial-gradient(circle, currentColor 1px, transparent 1px)",
                                  backgroundSize: "20px 20px",
                                  backgroundPosition: "0 0, 10px 10px",
                                }}
                              ></div>

                              {/* Large icon with glow */}
                              <div className="relative">
                                <div className="absolute inset-0 blur-xl opacity-40 bg-primary/20 rounded-full scale-150"></div>
                                <div className="relative z-10 text-[80px] sm:text-[100px] text-primary/60">
                                  {cert.icon}
                                </div>
                              </div>

                              {/* Stylized certificate text */}
                              <div className="absolute bottom-4 left-0 right-0 text-center">
                                <div className="inline-block px-4 py-2 bg-background/80 backdrop-blur-sm rounded-full text-sm font-medium border border-primary/10">
                                  Certificate of Achievement
                                </div>
                              </div>
                            </div>
                          )}

                          <div className="space-y-4 w-full">
                            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 bg-muted/30 rounded-lg p-3">
                              <div className="flex items-center gap-2">
                                <Building className="h-4 w-4 text-primary" />
                                <span className="font-medium">
                                  {cert.organization}
                                </span>
                              </div>
                              <Badge
                                variant="outline"
                                className="bg-background/50 backdrop-blur-sm"
                              >
                                <Calendar className="h-3 w-3 mr-1" />
                                {cert.date}
                              </Badge>
                            </div>

                            {cert.description && (
                              <div className="bg-muted/20 rounded-lg p-4 border-l-2 border-primary/20">
                                <p className="text-muted-foreground text-sm">
                                  {cert.description}
                                </p>
                              </div>
                            )}

                            <div className="flex flex-wrap gap-3 pt-2 justify-center sm:justify-start">
                              {cert.website && (
                                <Button asChild variant="outline" size="sm">
                                  <Link
                                    href={cert.website}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                  >
                                    <ExternalLink className="h-4 w-4 mr-2" />
                                    Visit Website
                                  </Link>
                                </Button>
                              )}
                            </div>
                          </div>
                        </div>
                      </DialogContent>
                    </Dialog>
                  </motion.div>
                ))}
              </div>

              {/* Pagination controls */}
              <div className="flex justify-center mt-6">
                <div className="flex items-center gap-2">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={handlePrevPage}
                    disabled={currentPage === 1}
                    className="w-8 h-8"
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </Button>

                  {/* Page indicators */}
                  <div className="flex gap-1">
                    {Array.from({ length: totalPages }).map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setCurrentPage(i + 1)}
                        className={`w-2 h-2 rounded-full transition-all ${
                          currentPage === i + 1
                            ? "bg-primary w-4"
                            : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                        }`}
                        aria-label={`Go to page ${i + 1}`}
                      />
                    ))}
                  </div>

                  <Button
                    variant="outline"
                    size="icon"
                    onClick={handleNextPage}
                    disabled={currentPage === totalPages}
                    className="w-8 h-8"
                  >
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
