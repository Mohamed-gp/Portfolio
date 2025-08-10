import type { Metadata, Viewport } from "next";
import { Cairo } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
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
    default: "Mohamed Outerbah - Full Stack Developer",
    template: "%s | Mohamed Outerbah",
  },
  description:
    "Mohamed Outerbah is a skilled Full Stack Developer specializing in React, Next.js, Node.js, and modern web technologies. Explore my portfolio showcasing innovative projects and professional experience.",
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
    title: "Mohamed Outerbah - Full Stack Developer",
    description:
      "Full Stack Developer specializing in React, Next.js, Node.js, and modern web technologies. View my portfolio and projects.",
    images: [
      {
        url: "/profile/profilePicture2mb.png",
        width: 1200,
        height: 630,
        alt: "Mohamed Outerbah - Full Stack Developer",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mohamed Outerbah - Full Stack Developer",
    description:
      "Full Stack Developer specializing in React, Next.js, Node.js, and modern web technologies.",
    images: ["/profile/profilePicture2mb.png"],
    creator: "@mohamed_outerbah",
  },
  keywords: [
    "Mohamed Outerbah",
    "Full Stack Developer",
    "Web Developer",
    "React Developer",
    "Next.js Developer",
    "Node.js Developer",
    "JavaScript",
    "TypeScript",
    "Frontend Developer",
    "Backend Developer",
    "Portfolio",
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
              jobTitle: "Full Stack Developer",
              url: "https://mohamedouterbah.vercel.app",
              image:
                "https://mohamedouterbah.vercel.app/profile/profilePicture2mb.png",
              sameAs: [
                "https://github.com/Mohamed-gp",
                "https://www.linkedin.com/in/mohamedouterbah",
              ],
              knowsAbout: [
                "JavaScript",
                "TypeScript",
                "React",
                "Next.js",
                "Node.js",
                "Web Development",
                "Full Stack Development",
                "MongoDB",
                "PostgreSQL",
                "Express.js",
                "Tailwind CSS",
              ],
              description:
                "Full Stack Developer specializing in React, Next.js, Node.js, and modern web technologies",
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
      </body>
    </html>
  );
}
