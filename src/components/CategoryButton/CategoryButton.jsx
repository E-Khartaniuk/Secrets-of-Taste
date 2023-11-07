import React from 'react';
import css from './CategoryButton.module.css';
import { useNavigate } from 'react-router-dom';

function CategoryButton({ children }) {
  const navigate = useNavigate();
  const navigateToCategory = e => {
    navigate(`/search/${e.target.textContent}`);
  };

  return (
    <button className={css.categoryButton} onClick={navigateToCategory}>
      {children}
    </button>
  );
}

export default CategoryButton;
