import React from 'react';
import RandomRecipes from 'components/RandomRecipes/RandomRecipes';

import css from './Home.module.css';
import SelectCategoryBtn from 'components/SelectCategoryBtn/SelectCategoryBtn';

function Home() {
  return (
    <div className={css.container}>
      <SelectCategoryBtn />
      <h1>Random dishes for you</h1>

      <RandomRecipes />
    </div>
  );
}

export default Home;
