"use client";

type Theme = "light" | "dark";

export function ThemeToggle() {
  const toggleTheme = () => {
    const next: Theme = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    localStorage.setItem("forge-theme", next);
  };

  return <button className="theme-toggle" type="button" aria-label="Toggle light and dark mode" title="Toggle color theme" onClick={toggleTheme}>
    <span className="theme-icon theme-icon-sun" aria-hidden="true">☼</span>
    <span className="theme-icon theme-icon-moon" aria-hidden="true">◐</span>
  </button>;
}
