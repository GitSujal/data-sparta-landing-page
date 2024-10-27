import React from "react";
import { Button } from "@nextui-org/react";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "../hooks/useTheme";

export function DarkModeToggle() {
  const { isDark, toggleTheme } = useTheme();

  return (
    <Button
      isIconOnly
      variant="light"
      aria-label="Toggle dark mode"
      onClick={toggleTheme}
      className="text-default-900 dark:text-default-100"
    >
      {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
    </Button>
  );
}