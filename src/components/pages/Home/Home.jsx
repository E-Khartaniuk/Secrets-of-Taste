import React from 'react';
import RandomRecipes from 'components/RandomRecipes/RandomRecipes';

import css from './Home.module.css';
import SelectCategoryBtn from 'components/SelectCategoryBtn/SelectCategoryBtn';

function Home() {
  return (
    <div className={css.container}>
      {/* <h1>Your diversity in food</h1> */}
      <SelectCategoryBtn />
      <RandomRecipes />
    </div>
  );
}

export default Home;
