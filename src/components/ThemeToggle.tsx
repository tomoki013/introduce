"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { FiSun, FiMoon } from "react-icons/fi";

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="rounded-md p-2 text-2xl transition-colors hover:bg-gray-200 dark:hover:bg-slate-700"
      aria-label="テーマを切り替える"
    >
      {theme === "dark" ? <FiSun /> : <FiMoon />}
    </button>
  );
}
