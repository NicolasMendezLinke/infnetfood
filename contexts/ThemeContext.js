import React, { createContext, useState, useMemo } from 'react';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const theme = useMemo(
    () => ({
      backgroundColor: isDarkTheme ? '#121212' : '#ffffff',
      textColor: isDarkTheme ? '#ffffff' : '#000000',
    }),
    [isDarkTheme]
  );

  return (
    <ThemeContext.Provider value={{ isDarkTheme, setIsDarkTheme, theme }}>
      {children}
    </ThemeContext.Provider>
  );
};
