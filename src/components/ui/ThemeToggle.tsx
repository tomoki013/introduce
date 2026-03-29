"use client";

import { useSyncExternalStore } from "react";
import { useTheme } from "next-themes";
import { FiSun, FiMoon } from "react-icons/fi";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const mounted = useSyncExternalStore(
    () => () => undefined,
    () => true,
    () => false
  );

  if (!mounted) {
    return null;
  }

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="rounded-md p-2 text-2xl transition-colors hover:bg-accent"
      aria-label="テーマを切り替える"
    >
      {theme === "dark" ? <FiSun /> : <FiMoon />}
    </button>
  );
}
