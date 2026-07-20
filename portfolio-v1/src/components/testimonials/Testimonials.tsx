"use client";
import { useState } from "react";
import Image from "next/image";

import {
  ExternalLink,
  Quote,
  Star,
  Clock,
  RefreshCw,
  ChevronRight,
  ChevronDown,
  Linkedin,
} from "lucide-react";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

interface Review {
  text: string;
  rating: number;
  date: string;
  platform?: "Fiverr" | "LinkedIn";
}

interface Client {
  id: number;
  username: string;
  displayName: string;
  avatar: string | null;
  countryFlag: string;
  countryName: string;
  title?: string;
  project?: string;
  source?: "Fiverr" | "LinkedIn";
  link: string;
  gradient: string;
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

function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString("en-US", {
    month: "short",
    year: "numeric",
  });
}

const clients: Client[] = [
  {
    id: 1,
    username: "mustafanawaz890",
    displayName: "mustafa nawaz",
    avatar: null,
    countryFlag: "🇬🇧",
    countryName: "United Kingdom",
    project: "Cribbix",
    gradient: "from-violet-600 via-purple-600 to-indigo-600",
    link: "https://www.fiverr.com/mohamedouterbah?public_mode=true",
    reviews: [
      {
        text: "Mohamed is a great developer with a deep understanding of building a product end to end. Amazing communication - highly recommended.",
        rating: 5,
        date: "2025-06-21",
      },
      {
        text: "Mohamed is an excellent software engineer. he will work meticulously to align product to the vision and goes above and beyond to deliver. Enjoyed working with Mohamed a lot and looking forward to working together again.",
        rating: 5,
        date: "2026-03-21",
      },
    ],
  },
  {
    id: 2,
    username: "vineetpinto",
    displayName: "Vineet Pinto",
    avatar: "/clients/vineet.jpg",
    countryFlag: "🇺🇸",
    countryName: "United States",
    title: "CEO & Founder, Analytics Depot",
    project: "Analytics Depot",
    source: "LinkedIn",
    gradient: "from-blue-600 via-cyan-600 to-teal-500",
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
    id: 3,
    username: "hamididz",
    displayName: "hamididz",
    avatar: "/clients/hamididz.webp",
    countryFlag: "🇯🇵",
    countryName: "Japan",
    project: "ArtisBay",
    gradient: "from-rose-500 via-pink-600 to-fuchsia-600",
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
  const [timelineClient, setTimelineClient] = useState<Client | null>(null);
  const [showAll, setShowAll] = useState(false);

  const visibleClients = showAll ? clients : clients.slice(0, 3);

  return (
    <section id="testimonials" className="py-16 sm:py-20 bg-muted/30">
      <div className="container px-4 sm:px-6 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Star className="h-4 w-4 fill-current" />
            Client Feedback
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-blue-800 to-indigo-800 dark:from-white dark:via-blue-200 dark:to-indigo-200 bg-clip-text text-transparent">
            What My Clients Say
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            I&apos;ve had the privilege of working with amazing clients who have
            shared their experiences working with me. Here&apos;s what they have
            to say.
          </p>
          <div className="flex items-center justify-center mt-6 gap-3">
            <div className="flex">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  className="h-5 w-5 sm:h-6 sm:w-6 text-yellow-400 fill-yellow-400"
                />
              ))}
            </div>
            <span className="font-semibold text-lg text-foreground">
              5.0 client rating
            </span>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {visibleClients.map((client, idx) => {
            const latestReview = client.reviews[client.reviews.length - 1];
            const isRepeatClient = client.reviews.length > 1;

            return (
              <div
                key={client.id}
                className={`bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 dark:border-gray-700 overflow-hidden flex flex-col group ${
                  idx >= 3
                    ? "animate-in fade-in slide-in-from-bottom-4 duration-500"
                    : ""
                }`}
                style={
                  idx >= 3
                    ? {
                        animationDelay: `${(idx - 3) * 100}ms`,
                        animationFillMode: "both",
                      }
                    : undefined
                }
              >
                {/* Card Header */}
                <div
                  className={`bg-gradient-to-r ${client.gradient} p-5 text-white relative overflow-hidden`}
                >
                  {/* Subtle pattern overlay */}
                  <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_30%_50%,white_1px,transparent_1px)] bg-[length:20px_20px]" />

                  <div className="relative z-10">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-3">
                        <div className="relative">
                          <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm overflow-hidden border-2 border-white/40">
                            {client.avatar ? (
                              <div className="relative w-full h-full">
                                <Image
                                  src={client.avatar}
                                  alt={`${client.displayName} profile picture`}
                                  fill
                                  sizes="48px"
                                  className="object-cover"
                                />
                              </div>
                            ) : (
                              <div className="w-full h-full flex items-center justify-center text-lg font-bold text-white">
                                {client.displayName.charAt(0).toUpperCase()}
                              </div>
                            )}
                          </div>
                          <div className="absolute -bottom-1 -right-1 text-lg">
                            {client.countryFlag}
                          </div>
                        </div>
                        <div className="min-w-0">
                          <h4 className="font-bold text-base truncate">
                            {client.displayName}
                          </h4>
                          <p className="text-white/70 text-xs">
                            {client.title ?? client.countryName}
                          </p>
                        </div>
                      </div>
                      <a
                        href={client.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white/15 hover:bg-white/25 transition-colors p-2 rounded-full shrink-0"
                      >
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    </div>

                    <div className="flex items-center justify-between mt-3">
                      {latestReview.platform === "LinkedIn" ? (
                        <div className="flex items-center gap-1.5 font-semibold text-sm">
                          <Linkedin className="h-4 w-4 fill-current" />
                          Recommendation
                        </div>
                      ) : (
                        <div className="flex items-center gap-1.5">
                          <div className="flex">
                            {Array.from({ length: 5 }).map((_, i) => (
                              <Star
                                key={i}
                                className={`h-4 w-4 ${
                                  i < Math.floor(latestReview.rating)
                                    ? "text-yellow-300 fill-yellow-300"
                                    : "text-white/30"
                                }`}
                              />
                            ))}
                          </div>
                          <span className="font-semibold text-sm">
                            {latestReview.rating}
                          </span>
                        </div>
                      )}
                      <div className="flex items-center gap-1 text-white/60 text-xs">
                        <Clock className="h-3 w-3" />
                        {getRelativeTime(latestReview.date)}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-5 flex-grow flex flex-col">
                  <div className="relative flex-grow">
                    <Quote className="h-8 w-8 text-blue-200 dark:text-blue-800 absolute -top-3 -left-1 opacity-40" />
                    <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed pl-6 font-medium">
                      {latestReview.text}
                    </p>
                  </div>

                  {/* Footer */}
                  <div className="mt-5 flex items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-700">
                    <div className="flex items-center gap-2">
                      <div className="bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 px-2.5 py-1 rounded-full text-xs font-semibold">
                        ✓ Verified
                      </div>
                      {isRepeatClient && (
                        <button
                          onClick={() => setTimelineClient(client)}
                          className="bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-300 px-2.5 py-1 rounded-full text-xs font-semibold flex items-center gap-1 hover:bg-yellow-200 dark:hover:bg-yellow-900/50 transition-colors"
                        >
                          <RefreshCw className="h-3 w-3" />
                          {client.reviews.length}x
                        </button>
                      )}
                    </div>
                    {isRepeatClient ? (
                      <button
                        onClick={() => setTimelineClient(client)}
                        className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium text-xs flex items-center gap-0.5 transition-colors"
                      >
                        All reviews
                        <ChevronRight className="h-3.5 w-3.5" />
                      </button>
                    ) : (
                      <a
                        href={client.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium text-xs flex items-center gap-0.5 transition-colors"
                      >
                        Verify
                        <ExternalLink className="h-3 w-3" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Show More / Show Less */}
        {clients.length > 3 && (
          <div className="flex justify-center mt-10">
            <button
              onClick={() => setShowAll((prev) => !prev)}
              className="group inline-flex items-center gap-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 px-6 py-3 rounded-full font-semibold text-sm shadow-md hover:shadow-lg transition-all duration-300"
            >
              {showAll ? "Show Less" : `Show More (${clients.length - 3})`}
              <ChevronDown
                className={`h-4 w-4 transition-transform duration-300 ${
                  showAll ? "rotate-180" : "group-hover:translate-y-0.5"
                }`}
              />
            </button>
          </div>
        )}
      </div>

      {/* Timeline Dialog for Repeat Clients */}
      <Dialog
        open={timelineClient !== null}
        onOpenChange={(open) => !open && setTimelineClient(null)}
      >
        <DialogContent className="max-w-lg max-h-[80vh] overflow-y-auto">
          {timelineClient && (
            <>
              <DialogHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div
                    className={`w-12 h-12 rounded-full bg-gradient-to-r ${timelineClient.gradient} overflow-hidden flex items-center justify-center text-white font-bold text-lg shrink-0`}
                  >
                    {timelineClient.avatar ? (
                      <Image
                        src={timelineClient.avatar}
                        alt={timelineClient.displayName}
                        width={48}
                        height={48}
                        className="object-cover"
                      />
                    ) : (
                      timelineClient.displayName.charAt(0).toUpperCase()
                    )}
                  </div>
                  <div>
                    <DialogTitle className="text-left">
                      {timelineClient.displayName}
                    </DialogTitle>
                    <DialogDescription className="text-left">
                      {timelineClient.countryFlag} {timelineClient.countryName}{" "}
                      · {timelineClient.reviews.length} reviews
                    </DialogDescription>
                  </div>
                </div>
                <div className="inline-flex items-center gap-1 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-300 px-3 py-1 rounded-full text-xs font-semibold w-fit">
                  <RefreshCw className="h-3 w-3" />
                  Repeat Client
                </div>
              </DialogHeader>

              {/* Timeline */}
              <div className="mt-4 space-y-0">
                {[...timelineClient.reviews]
                  .sort(
                    (a, b) =>
                      new Date(b.date).getTime() - new Date(a.date).getTime(),
                  )
                  .map((review, index, arr) => (
                    <div key={index} className="relative pl-8 pb-6 last:pb-0">
                      {/* Timeline line */}
                      {index < arr.length - 1 && (
                        <div className="absolute left-[11px] top-6 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-blue-200 dark:from-blue-400 dark:to-blue-800" />
                      )}

                      {/* Timeline dot */}
                      <div className="absolute left-0 top-1 w-6 h-6 rounded-full bg-blue-500 border-4 border-white dark:border-gray-900 shadow-md flex items-center justify-center">
                        <div className="w-2 h-2 rounded-full bg-white" />
                      </div>

                      <div className="bg-muted/50 rounded-lg p-4 border border-border">
                        <div className="flex items-center justify-between mb-2">
                          {review.platform === "LinkedIn" ? (
                            <div className="flex items-center gap-1.5 text-sm font-medium text-blue-600 dark:text-blue-400">
                              <Linkedin className="h-3.5 w-3.5 fill-current" />
                              LinkedIn Recommendation
                            </div>
                          ) : (
                            <div className="flex items-center gap-1">
                              {Array.from({ length: 5 }).map((_, i) => (
                                <Star
                                  key={i}
                                  className={`h-3.5 w-3.5 ${
                                    i < Math.floor(review.rating)
                                      ? "text-yellow-400 fill-yellow-400"
                                      : "text-gray-300"
                                  }`}
                                />
                              ))}
                              <span className="text-sm font-medium ml-1">
                                {review.rating}
                              </span>
                            </div>
                          )}
                          <div className="flex items-center gap-1 text-xs text-muted-foreground">
                            <Clock className="h-3 w-3" />
                            {formatDate(review.date)} ·{" "}
                            {getRelativeTime(review.date)}
                          </div>
                        </div>
                        <p className="text-sm text-foreground leading-relaxed">
                          &ldquo;{review.text}&rdquo;
                        </p>
                      </div>
                    </div>
                  ))}
              </div>

              {/* Fiverr link at bottom of dialog */}
              <div className="mt-4 text-center">
                <a
                  href={timelineClient.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-semibold text-sm inline-flex items-center gap-1 transition-colors"
                >
                  Verify
                  <ExternalLink className="h-4 w-4" />
                </a>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
