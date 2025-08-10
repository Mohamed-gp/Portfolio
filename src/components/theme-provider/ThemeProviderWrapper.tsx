"use client";

import dynamic from "next/dynamic";
import { Suspense } from "react";

// Create minimal loader
const ThemeProviderLoader = () => <></>;

// Properly type the dynamic import to fix TypeScript error
const ThemeProvider = dynamic(
  () => import("./ThemeProvider").then((mod) => mod.ThemeProvider),
  {
    ssr: false,
    loading: ThemeProviderLoader,
  }
);

export function ThemeProviderWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Suspense fallback={<ThemeProviderLoader />}>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
        storageKey="theme-preference"
      >
        {children}
      </ThemeProvider>
    </Suspense>
  );
}
