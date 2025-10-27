import type { Metadata, Viewport } from "next";
import { Cairo } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next"

import { ThemeProviderWrapper } from "@/components/theme-provider/ThemeProviderWrapper";
import "./globals.css";

// Optimized font loading - simplified and more reliable
const cairo = Cairo({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-cairo",
});

// Viewport configuration for better performance
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
};

// Comprehensive metadata for better SEO
export const metadata: Metadata = {
  title: {
    default: "Mohamed Outerbah - Founding Engineer | Full Stack Developer | AI/ML",
    template: "%s | Mohamed Outerbah",
  },
  description:
    "Founding Engineer & Technical Lead with 99%+ uptime track record. Expert in FastAPI, React Native, Next.js, AI/ML, and full-stack development. International experience (USA, UK, Netherlands, Japan). Fiverr Level 1 seller with 5/5 rating. Hackathon winner. 100/100 Lighthouse SEO scores.",
  applicationName: "Mohamed Outerbah Portfolio",
  authors: [
    {
      name: "Mohamed Outerbah",
      url: "https://www.linkedin.com/in/mohamedouterbah",
    },
  ],
  creator: "Mohamed Outerbah",
  publisher: "Mohamed Outerbah",
  metadataBase: new URL("https://mohamedouterbah.vercel.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://mohamedouterbah.vercel.app",
    siteName: "Mohamed Outerbah Portfolio",
    title: "Mohamed Outerbah - Founding Engineer | Full Stack Developer | AI/ML Expert",
    description:
      "Founding Engineer & Technical Lead at Analytics Depot. Expert in building AI-powered platforms with FastAPI, React Native, Next.js. 99%+ uptime, Fiverr Level 1 with 5/5 rating, international experience.",
    images: [
      {
        url: "/profile/profilePicture2mb.png",
        width: 1200,
        height: 630,
        alt: "Mohamed Outerbah - Founding Engineer & Full Stack Developer",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mohamed Outerbah - Founding Engineer | Full Stack Developer",
    description:
      "Founding Engineer with expertise in AI/ML, FastAPI, React Native, Next.js. 99%+ uptime, Fiverr Level 1 with 5/5 rating, international experience.",
    images: ["/profile/profilePicture2mb.png"],
    creator: "@mohamed_outerbah",
  },
  keywords: [
    "Mohamed Outerbah",
    "Founding Engineer",
    "Technical Lead",
    "Full Stack Developer",
    "AI/ML Engineer",
    "FastAPI Developer",
    "React Native Developer",
    "Next.js Expert",
    "Python Developer",
    "Go Developer",
    "RAG Systems",
    "AI-Powered Applications",
    "Analytics Depot",
    "International Developer",
    "USA Developer",
    "UK Developer",
    "Netherlands Developer",
    "Japan Developer",
    "Hackathon Winner",
    "CI/CD Optimization",
    "SEO Expert",
    "100/100 Lighthouse",
    "99% Uptime",
    "React Developer",
    "Node.js Developer",
    "JavaScript",
    "TypeScript",
    "Mobile App Development",
    "Cross-platform Development",
    "Team Leadership",
    "Software Architecture",
    "Web Development",
    "Software Engineer",
    "React",
    "Next.js",
    "Tailwind CSS",
    "MongoDB",
    "PostgreSQL",
    "Express.js",
    "REST API",
    "GraphQL",
    "Docker",
    "Microservices",
    "SaaS Development",
    "Open Source",
    "CLI Tools",
  ],
  category: "technology",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.ico", type: "image/x-icon" },
    ],
    apple: [{ url: "/favicon.ico" }],
  },
  manifest: "/manifest.json",
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION,
  },
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html
      lang="en"
      dir="ltr"
      suppressHydrationWarning
      className={cairo.variable}
    >
      <head>
        {/* Structured Data for better SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Mohamed Outerbah",
              jobTitle: "Founding Engineer | Technical Lead | Full Stack Developer",
              url: "https://mohamedouterbah.vercel.app",
              image:
                "https://mohamedouterbah.vercel.app/profile/profilePicture2mb.png",
              sameAs: [
                "https://github.com/Mohamed-gp",
                "https://www.linkedin.com/in/mohamedouterbah",
              ],
              worksFor: {
                "@type": "Organization",
                name: "Analytics Depot",
                address: {
                  "@type": "PostalAddress",
                  addressCountry: "USA",
                },
              },
              knowsAbout: [
                "AI/ML Engineering",
                "FastAPI",
                "Python",
                "RAG Systems",
                "React Native",
                "Mobile Development",
                "Go Programming",
                "Go Fiber",
                "JavaScript",
                "TypeScript",
                "React",
                "Next.js",
                "Node.js",
                "Full Stack Development",
                "Team Leadership",
                "Software Architecture",
                "CI/CD Optimization",
                "SEO Optimization",
                "MongoDB",
                "PostgreSQL",
                "Express.js",
                "NestJS",
                "Tailwind CSS",
                "Docker",
                "Microservices",
                "Cross-platform Development",
              ],
              alumniOf: {
                "@type": "EducationalOrganization",
                name: "Master's Degree in Computer Science",
              },
              award: [
                "1st Place Hackathon Winner 2024",
                "Fiverr Level 1 Seller - 5/5 Rating",
                "100/100 Lighthouse SEO Score",
              ],
              description:
                "Founding Engineer & Technical Lead with proven track record building AI-powered platforms with 99%+ uptime. Expert in FastAPI, React Native, Next.js, and full-stack development. International experience across USA, UK, Netherlands, and Japan.",
            }),
          }}
        />
      </head>

      <body
        className={`${cairo.className} antialiased`}
        suppressHydrationWarning
      >
        <ThemeProviderWrapper>
          <main id="main-content" tabIndex={-1}>
            {children}
          </main>
        </ThemeProviderWrapper>

        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
