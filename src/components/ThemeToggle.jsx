import React, { useContext } from 'react';
import { FaSun } from 'react-icons/fa';
import { FaMoon } from 'react-icons/fa6';

import { ThemeContext } from '../context/ThemeContext';

const ThemeToggle = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  return (
    <div>
      {theme === 'dark' ? (
        <div onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
          <FaSun />
          Light Mode
        </div>
      ) : (
        <div onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
          <FaMoon />
          Dark Mode
        </div>
      )}
    </div>
  );
};

export default ThemeToggle;
