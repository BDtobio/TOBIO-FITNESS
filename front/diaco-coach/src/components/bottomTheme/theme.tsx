"use client";

import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved) {
      setTheme(saved);
      document.documentElement.classList.toggle("dark", saved === "dark");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  return (
    <button
      onClick={toggleTheme}
      className="rounded-full border border-neutral-300 dark:border-neutral-700
                 px-3 py-1.5 text-sm transition
                 bg-white dark:bg-neutral-900
                 text-neutral-800 dark:text-neutral-200"
    >
      {theme === "light" ? "🌙 Oscuro" : "☀️ Claro"}
    </button>
  );
}
