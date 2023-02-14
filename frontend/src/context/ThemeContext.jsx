import {
  useMemo, createContext, useEffect, useState,
} from 'react';
import getSystemTheme from '../helpers/getSystemTheme';

const themeContext = createContext();

function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(
    localStorage.getItem('theme')
      ? localStorage.getItem('theme')
      : getSystemTheme(),
  );

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [theme]);

  const handleChangeTheme = () => {
    if (theme === 'dark') {
      setTheme('light');
      localStorage.setItem('theme', 'light');
    } else {
      setTheme('dark');
      localStorage.setItem('theme', 'dark');
    }
  };

  const value = useMemo(() => ({
    theme, setTheme, handleChangeTheme,
  }), [theme]);

  return (
    <themeContext.Provider value={value}>
      {children}
    </themeContext.Provider>
  );
}

export { ThemeProvider, themeContext };
