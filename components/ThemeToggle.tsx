import React, { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';

const ThemeToggle: React.FC = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Check local storage or system preference
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    } else {
      setIsDark(false);
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.remove('dark');
      localStorage.theme = 'light';
      setIsDark(false);
    } else {
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
      setIsDark(true);
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className="p-2.5 rounded-xl transition-all duration-300
        bg-gray-100 text-gray-500 hover:bg-gray-200 hover:text-ven-blue
        dark:bg-slate-800 dark:text-ven-yellow dark:hover:bg-slate-700
        focus:outline-none focus:ring-2 focus:ring-ven-blue/50 dark:focus:ring-ven-yellow/50"
      aria-label="Alternar Modo Oscuro"
    >
      {isDark ? <Sun size={20} className="animate-fade-in" /> : <Moon size={20} className="animate-fade-in" />}
    </button>
  );
};

export default ThemeToggle;