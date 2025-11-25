"use client";

import { useTheme } from "next-themes";
import { useEffect } from "react";

export default function TimeBasedTheme() {
  const { setTheme } = useTheme();

  useEffect(() => {
    // Only set initial theme if no theme preference has been stored
    // Once user manually changes theme, this won't override it
    if (typeof window !== "undefined") {
      const storedTheme = localStorage.getItem("theme");

      // If no theme is stored (first visit), set based on time of day
      if (!storedTheme || storedTheme === "system") {
        const hour = new Date().getHours();
        const isDay = hour >= 6 && hour < 18;
        setTheme(isDay ? "light" : "dark");
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // Empty dependency array - only run once on mount

  return null;
}
