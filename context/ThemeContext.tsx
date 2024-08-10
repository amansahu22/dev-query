"use client";

import { createContext, ReactNode, useContext, useState } from "react";

type SupportedThemes = "light" | "dark";

interface ThemeContextType {
  mode: SupportedThemes;
  setMode: (val: SupportedThemes) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [mode, setMode] = useState<SupportedThemes>("light");

  const handleThemeChange = (val: SupportedThemes) => {
    setMode(val);
  };

  return (
    <ThemeContext.Provider
      value={{
        mode,
        setMode: handleThemeChange,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);

  return context;
};
