import { createContext, useState, useEffect } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem("isDarkMode");
    return savedTheme ? JSON.parse(savedTheme) : true;
  });

  useEffect(() => {
    localStorage.setItem("isDarkMode", JSON.stringify(isDarkMode));

    document.documentElement.style.setProperty(
      "--bg-color",
      isDarkMode ? "hsl(207, 26%, 17%)" : "hsl(0, 0%, 98%)"
    );
    document.documentElement.style.setProperty(
      "--text-color",
      isDarkMode ? "hsl(0, 0%, 100%)" : "hsl(200, 15%, 8%)"
    );
    document.documentElement.style.setProperty(
      "--element-bg",
      isDarkMode ? "hsl(209, 23%, 22%)" : "hsl(0, 0%, 100%)"
    );

    document.documentElement.style.setProperty(
      "--icon-color",
      isDarkMode ? "invert(1)" : "invert(0)"
    );

    document.documentElement.style.setProperty(
      "--boxshadow",
      isDarkMode
        ? "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;;" 
        : "rgba(0, 0, 0, 0.16) 0px 1px 4px"
    );
  }, [isDarkMode]);

  return (
    <ThemeContext.Provider value={{ isDarkMode, setIsDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
};
