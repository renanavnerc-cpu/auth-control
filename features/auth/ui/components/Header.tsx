"use client";

import { ThemeToggleButton } from "./ThemeToggleButton";

export default function Header() {
  return (
    <header
      className="w-full p-4 flex justify-between items-center transition-colors"
      style={{
        backgroundColor: "var(--background)",
        color: "var(--foreground)",
      }}
    >
      <ThemeToggleButton />
    </header>
  );
}
