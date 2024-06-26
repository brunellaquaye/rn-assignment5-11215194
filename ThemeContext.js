import React, { createContext, useState, useContext } from "react";

const lightTheme = {
  dark: false,
  colors: {
    primary: "#6200ee",
    background: "#ffffff",
    text: "#000000",
    logo: "#DFDFDF",
    icon: "#000000",
    toggle: "#939393"
  },
};

const darkTheme = {
  dark: true,
  colors: {
    primary: "#bb86fc",
    background: "#110426",
    text: "#ffffff",
    logo: "#1F1134",
    icon: "#ffffff",
    toggle:"green"
  },
};

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(lightTheme);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme.dark ? lightTheme : darkTheme));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
export const useTheme = () => useContext(ThemeContext);
