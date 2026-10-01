"use client";
import Image from "next/image";

import { ExternalLink, Quote, Clock, Linkedin } from "lucide-react";

interface Review {
  text: string;
  rating: number;
  date: string;
  platform?: "Fiverr" | "LinkedIn";
}

interface Client {
  id: number;
  displayName: string;
  avatar: string | null;
  countryName: string;
  title?: string;
  project?: string;
  projectUrl?: string;
  link: string;
  reviews: Review[];
}

function getRelativeTime(dateStr: string): string {
  const date = new Date(dateStr);
  const now = new Date();
  const diffMs = now.getTime() - date.getTime();
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

  if (diffDays === 0) return "Today";
  if (diffDays === 1) return "Yesterday";
  if (diffDays < 7) return `${diffDays} days ago`;
  if (diffDays < 30) {
    const weeks = Math.floor(diffDays / 7);
    return `${weeks} week${weeks > 1 ? "s" : ""} ago`;
  }
  if (diffDays < 365) {
    const months = Math.floor(diffDays / 30);
    return `${months} month${months > 1 ? "s" : ""} ago`;
  }
  const years = Math.floor(diffDays / 365);
  return `${years} year${years > 1 ? "s" : ""} ago`;
}

const clients: Client[] = [
  {
    id: 1,
    displayName: "Vineet Pinto",
    avatar: "/clients/vineet.jpg",
    countryName: "United States",
    title: "CEO & Founder, Analytics Depot",
    project: "Analytics Depot",
    projectUrl: "https://analyticsdepot.com/",
    link: "https://www.linkedin.com/in/mohamedouterbah/details/recommendations/",
    reviews: [
      {
        text: "Mohamed has been our Frontend Lead at Analytics Depot and one of the most reliable engineers on the team. He owns every user-facing aspect of the platform, from the dashboard builder to real-time collaboration, and consistently delivers high-quality production-ready work at an impressive pace. I'd gladly work with him again and highly recommend him to any team.",
        rating: 5,
        date: "2026-07-19",
        platform: "LinkedIn",
      },
    ],
  },
  {
    id: 2,
    displayName: "mustafa nawaz",
    avatar: null,
    countryName: "United Kingdom",
    project: "Cribbix",
    projectUrl: "https://cribbix.com/",
    link: "https://www.fiverr.com/mohamedouterbah?public_mode=true",
    reviews: [
      {
        text: "Mohamed is an excellent software engineer. he will work meticulously to align product to the vision and goes above and beyond to deliver. Enjoyed working with Mohamed a lot and looking forward to working together again.",
        rating: 5,
        date: "2026-03-21",
      },
    ],
  },
  {
    id: 3,
    displayName: "hamididz",
    avatar: "/clients/hamididz.webp",
    countryName: "Japan",
    project: "ArtisBay",
    link: "https://www.fiverr.com/mohamedouterbah?public_mode=true",
    reviews: [
      {
        text: "We assigned him the task of enhancing font responsiveness, which he executed flawlessly. Beyond that, he proactively suggested valuable improvements that further optimized the design. His communication was clear and professional, and his skills were truly outstanding. Highly recommended!",
        rating: 5,
        date: "2025-03-21",
      },
    ],
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-16 sm:py-20 bg-muted/30">
      <div className="container px-4 sm:px-6 max-w-7xl mx-auto">
        {/* Header */}
        <h2 className="text-center text-2xl sm:text-3xl md:text-4xl font-bold mb-10 sm:mb-12">
          Testimonials
        </h2>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {clients.map((client) => {
            const latestReview = client.reviews[client.reviews.length - 1];

            return (
              <div
                key={client.id}
                className="relative bg-card rounded-2xl border shadow-sm hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 overflow-hidden flex flex-col"
              >
                {/* Brand accent */}
                <div className="h-1 w-full bg-gradient-to-r from-blue-600 to-cyan-500" />

                {/* Card Header */}
                <div className="px-5 pt-5 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="w-11 h-11 rounded-full overflow-hidden ring-2 ring-primary/15 shrink-0 bg-gradient-to-br from-blue-600 to-cyan-500">
                      {client.avatar ? (
                        <div className="relative w-full h-full">
                          <Image
                            src={client.avatar}
                            alt={`${client.displayName} profile picture`}
                            fill
                            sizes="44px"
                            className="object-cover"
                          />
                        </div>
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-base font-bold text-white">
                          {client.displayName.charAt(0).toUpperCase()}
                        </div>
                      )}
                    </div>
                    <div className="min-w-0">
                      <h4 className="font-semibold text-base truncate capitalize">
                        {client.displayName}
                      </h4>
                      <p className="text-muted-foreground text-xs truncate">
                        {client.title ?? client.countryName}
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col items-end gap-1 shrink-0 text-xs text-muted-foreground">
                    {latestReview.platform === "LinkedIn" && (
                      <span className="inline-flex items-center gap-1 font-medium text-[#0a66c2]">
                        <Linkedin className="h-3.5 w-3.5 fill-current" />
                        Recommendation
                      </span>
                    )}
                    <span className="inline-flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {getRelativeTime(latestReview.date)}
                    </span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-5 flex-grow flex flex-col">
                  <div className="relative flex-grow">
                    <Quote className="h-7 w-7 text-primary/15 absolute -top-2 -left-1" />
                    <p className="text-foreground/80 text-sm leading-relaxed pl-6">
                      {latestReview.text}
                    </p>
                  </div>

                  {/* Footer */}
                  <div className="mt-5 flex items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-700">
                    {client.project ? (
                      client.projectUrl ? (
                        <a
                          href={client.projectUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 hover:bg-blue-200 dark:hover:bg-blue-900/50 px-2.5 py-1 rounded-full text-xs font-semibold flex items-center gap-1 transition-colors"
                        >
                          {client.project}
                          <ExternalLink className="h-3 w-3" />
                        </a>
                      ) : (
                        <div className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-2.5 py-1 rounded-full text-xs font-semibold">
                          {client.project}
                        </div>
                      )
                    ) : (
                      <span />
                    )}
                    <a
                      href={client.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium text-xs flex items-center gap-0.5 transition-colors"
                    >
                      {latestReview.platform === "LinkedIn"
                        ? "Verify on LinkedIn"
                        : "Verify"}
                      <ExternalLink className="h-3 w-3" />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
