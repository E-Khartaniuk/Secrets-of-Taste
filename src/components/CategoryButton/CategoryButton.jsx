import React from 'react';
import css from './CategoryButton.module.css';

function CategoryButton({ children }) {
  return <button className={css.categoryButton}>{children}</button>;
}

export default CategoryButton;
