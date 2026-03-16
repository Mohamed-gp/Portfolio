"use client";

import { useEffect, useRef } from "react";

const ConsoleLog = () => {
  const hasLogged = useRef(false);

  useEffect(() => {
    if (hasLogged.current) return;
    hasLogged.current = true;

    // Welcome banner with gradient effect
    console.log(
      "%c🚀 Mohamed Outerbah - Full-Stack Engineer",
      "background: linear-gradient(90deg, #667eea 0%, #764ba2 100%); color: white; font-size: 20px; font-weight: bold; padding: 12px 20px; border-radius: 10px; text-shadow: 0 2px 4px rgba(0,0,0,0.3);"
    );

    // Portfolio info with icon
    console.log(
      "%c💼 Portfolio Source Code",
      "color: #4f46e5; font-size: 16px; font-weight: bold; padding: 8px 0;"
    );
    console.log(
      "%c🔗 https://github.com/Mohamed-gp/Mohamed-gp.github.io",
      "background: #1f2937; color: #60a5fa; font-size: 14px; padding: 8px 12px; border-radius: 6px; border-left: 4px solid #60a5fa;"
    );

    // Contact section with styling
    console.log(
      "%c📧 Get In Touch",
      "color: #059669; font-size: 16px; font-weight: bold; padding: 8px 0;"
    );
    console.log(
      "%c✉️ mohamedterba6@gmail.com",
      "background: #065f46; color: #34d399; font-size: 14px; padding: 8px 12px; border-radius: 6px; border-left: 4px solid #34d399;"
    );

    // Fun message
    console.log(
      "%c✨ Thanks for checking out my code! Star the repo if you like it! ⭐",
      "background: #7c3aed; color: white; font-size: 13px; padding: 8px 12px; border-radius: 6px; font-style: italic;"
    );

    // Development tip
    console.log(
      "%c🔍 Pro tip: Check the Network tab to see how optimized this site is!",
      "color: #f59e0b; font-size: 12px; padding: 4px 0; font-style: italic;"
    );
  }, []);

  return null;
};

export default ConsoleLog;
