import CategoryButton from 'components/CategoryButton/CategoryButton';
import React from 'react';
import css from './SelectCategoryBtn.module.css';

function SelectCategoryBtn() {
  return (
    <section className={css.categoryBtnsContainer}>
      <CategoryButton>Meat</CategoryButton>
      <CategoryButton>Grill</CategoryButton>
      <CategoryButton>Cocktail</CategoryButton>
      <CategoryButton>Vegan</CategoryButton>
    </section>
  );
}

export default SelectCategoryBtn;
