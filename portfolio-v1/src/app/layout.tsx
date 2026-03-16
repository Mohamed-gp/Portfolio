import type { Metadata, Viewport } from "next";
import { Cairo } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

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
    default:
      "Mohamed Outerbah - Full-Stack Engineer | Next.js, React & React Native Expert",
    template: "%s | Mohamed Outerbah",
  },
  description:
    "Full-Stack Engineer with 3+ years delivering production-grade platforms. Founding Engineer at Analytics Depot (AI SaaS, 200+ users). Building HaulHub — live logistics marketplace on iOS & Android. Expert in Next.js, TypeScript, React Native. 4.9/5 Fiverr rating. International clients across USA, UK, Netherlands, Japan, Saudi Arabia.",
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
    title:
      "Mohamed Outerbah - Full-Stack Engineer | Next.js, React & React Native Expert",
    description:
      "Full-Stack Engineer with 3+ years delivering production-grade platforms. Founding Engineer at Analytics Depot (AI SaaS, 200+ users). Building HaulHub on iOS & Android. 4.9/5 Fiverr rating.",
    images: [
      {
        url: "/profile/profilePicture2mb.jpg",
        width: 1200,
        height: 630,
        alt: "Mohamed Outerbah - Founding Engineer & Full-Stack Engineer",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Mohamed Outerbah - Full-Stack Engineer | Next.js, React & React Native Expert",
    description:
      "Full-Stack Engineer with 3+ years delivering production-grade platforms. Founding Engineer at Analytics Depot. Building HaulHub. 4.9/5 Fiverr rating.",
    images: ["/profile/profilePicture2mb.jpg"],
    creator: "@mohamed_outerbah",
  },
  keywords: [
    "Mohamed Outerbah",
    "Full-Stack Engineer",
    "Founding Engineer",
    "Analytics Depot",
    "HaulHub",
    "DzStore",
    "React Developer",
    "Next.js Expert",
    "NestJS Developer",
    "FastAPI Developer",
    "React Native Developer",
    "Expo Developer",
    "Python Developer",
    "TypeScript Developer",
    "AI SaaS",
    "RAG Systems",
    "LangChain",
    "NL-to-SQL",
    "Docker",
    "VPS Deployment",
    "Hetzner",
    "Coolify",
    "Stripe Integration",
    "WebSockets",
    "Real-time Collaboration",
    "International Developer",
    "Hackathon Winner",
    "CI/CD Optimization",
    "Node.js Developer",
    "JavaScript",
    "TypeScript",
    "Mobile App Development",
    "iOS & Android",
    "Cross-platform Development",
    "Software Architecture",
    "Web Development",
    "Software Engineer",
    "React",
    "Next.js",
    "Tailwind CSS",
    "MongoDB",
    "PostgreSQL",
    "Redis",
    "Prisma ORM",
    "Supabase",
    "Express.js",
    "REST API",
    "Microservices",
    "SaaS Development",
    "Open Source",
    "Sentry",
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
              jobTitle: "Full-Stack Engineer",
              url: "https://mohamedouterbah.vercel.app",
              image:
                "https://mohamedouterbah.vercel.app/profile/profilePicture2mb.jpg",
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
                "React",
                "Next.js",
                "TypeScript",
                "JavaScript",
                "React Native",
                "Expo",
                "NestJS",
                "FastAPI",
                "Python",
                "Node.js",
                "Express.js",
                "PostgreSQL",
                "MongoDB",
                "Redis",
                "Prisma ORM",
                "Docker",
                "CI/CD Pipelines",
                "GitHub Actions",
                "VPS Deployment",
                "Supabase",
                "Stripe",
                "Tailwind CSS",
                "REST API Design",
                "Role-Based Access Control",
                "SEO Optimization",
                "Google Maps API",
                "OAuth",
                "Sentry",
                "WebSockets",
                "LangChain",
                "Celery",
              ],
              alumniOf: {
                "@type": "EducationalOrganization",
                name: "Master's Degree in Computer Science",
              },
              award: [
                "Founding Engineer at Analytics Depot (AI SaaS, 200+ users)",
                "1st Place Hackathon Winner 2024",
                "Fiverr Level 1 Seller - 4.9/5 Rating",
                "DzStore - Shopify-equivalent SaaS with 50+ users",
              ],
              description:
                "Full-Stack Engineer with 3+ years delivering production-grade platforms for clients across the Netherlands, UK, and USA. Founding Engineer at Analytics Depot (AI SaaS, 200+ users). Building HaulHub — live logistics marketplace on iOS & Android.",
            }),
          }}
        />
      </head>

      <body
        className={`${cairo.className} antialiased`}
        suppressHydrationWarning
      >
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-primary focus:text-primary-foreground focus:rounded-md"
        >
          Skip to content
        </a>
        <ThemeProviderWrapper>
          <main id="main-content" className="min-h-screen" tabIndex={-1}>
            {children}
          </main>
        </ThemeProviderWrapper>

        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
