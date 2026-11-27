import { useEffect, useState } from "react";

function getInitialTheme() {
  const current = document.documentElement.dataset.theme;
  if (current === "light" || current === "dark") return current;
  return window.matchMedia?.("(prefers-color-scheme: light)").matches ? "light" : "dark";
}

export default function ThemeToggle() {
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    try {
      localStorage.setItem("theme", theme);
    } catch {
      /* storage unavailable — theme still applies for this visit */
    }
  }, [theme]);

  const isLight = theme === "light";

  return (
    <button
      type="button"
      role="switch"
      aria-checked={isLight}
      aria-label="Light mode"
      className="theme-toggle"
      onClick={() => setTheme(isLight ? "dark" : "light")}
    >
      <span className="toggle-label">{isLight ? "LIGHT" : "DARK"}</span>
      <span className="toggle-track" aria-hidden="true">
        <span className="toggle-thumb" />
      </span>
    </button>
  );
}
