import { Moon, Sun } from "lucide-react";
import type { Theme } from "../../hooks/useTheme";

type ThemeToggleProps = {
  theme: Theme;
  onToggle: () => void;
};

export function ThemeToggle({
  theme,
  onToggle,
}: ThemeToggleProps) {
  const isLight = theme === "light";

  return (
    <button
      className="theme-toggle"
      type="button"
      onClick={onToggle}
      aria-label={isLight ? "Switch to dark theme" : "Switch to light theme"}
      aria-pressed={isLight}
      title={isLight ? "Switch to dark theme" : "Switch to light theme"}
    >
      {isLight ? <Moon size={17} /> : <Sun size={17} />}
    </button>
  );
}