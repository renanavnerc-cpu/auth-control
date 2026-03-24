"use client";

import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

type Theme = "light" | "dark";
type ThemeContextType = {
  theme: Theme;
  toggleTheme: () => void;
};

export const ThemeContext = createContext<ThemeContextType | undefined>(
  undefined,
);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<Theme>("light"); // Tema padrão
  const [mounted, setMounted] = useState(false); // Só renderiza depois da montagem

  // Ler tema do localStorage de forma assíncrona para evitar warning
  useEffect(() => {
    const saved = localStorage.getItem("theme") as Theme | null;
    queueMicrotask(() => {
      if (saved) setTheme(saved);
      setMounted(true);
    });
  }, []);

  // Atualiza a classe dark no html e localStorage
  useEffect(() => {
    if (!mounted) return;

    const root = document.documentElement;

    // pegar os valores das variáveis do CSS
    const lightBackground =
      getComputedStyle(root).getPropertyValue("--background-light") ||
      "#ffffff";
    const lightForeground =
      getComputedStyle(root).getPropertyValue("--foreground-light") ||
      "#111111";
    const darkBackground =
      getComputedStyle(root).getPropertyValue("--background-dark") || "#111111";
    const darkForeground =
      getComputedStyle(root).getPropertyValue("--foreground-dark") || "#ffffff";

    // e aplicar dinamicamente
    if (theme === "dark") {
      root.style.setProperty("--background", darkBackground);
      root.style.setProperty("--foreground", darkForeground);
    } else {
      root.style.setProperty("--background", lightBackground);
      root.style.setProperty("--foreground", lightForeground);
    }
    localStorage.setItem("theme", theme);
  }, [theme, mounted]);

  const toggleTheme = () =>
    setTheme((prev) => (prev === "light" ? "dark" : "light"));

  // Se ainda não montou, não renderiza nada → evita Hydration Mismatch
  if (!mounted) return null;

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("useTheme must be used within a ThemeProvider");
  return context;
};
