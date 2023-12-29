import React, { useState } from 'react';
import css from '../../index.css'; // Подключите ваш файл стилей

const ThemeToggle = () => {
  const [isDarkTheme, setDarkTheme] = useState(false);

  const toggleTheme = () => {
    setDarkTheme(prevTheme => !prevTheme);
  };

  return (
    <div
      className={`${isDarkTheme ? `${css.dark_theme}` : `${css.light_theme}`}`}
      // data-theme={`${isDarkTheme ? 'dark-theme' : 'light-theme'}`}
    >
      <button
        style={{
          padding: '10px',
          fontSize: '16px',
          border: 'none',
          cursor: 'pointer',
        }}
        onClick={toggleTheme}
      >
        Toggle Theme
      </button>
      <p>Current Theme: {isDarkTheme ? 'Dark' : 'Light'}</p>
    </div>
  );
};

export default ThemeToggle;
