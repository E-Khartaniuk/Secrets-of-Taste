import React from 'react';
import CategoryButton from 'components/CategoryButton/CategoryButton';
import RandomRecipes from 'components/RandomRecipes/RandomRecipes';

import css from './Home.module.css';

function Home() {
  return (
    <main>
      <div className={css.container}>
        <section>
          <h1>Your diversity in food</h1>
          <CategoryButton>meat</CategoryButton>
          <CategoryButton>grill</CategoryButton>
          <CategoryButton>Cocktail</CategoryButton>
          <CategoryButton>vegan</CategoryButton>
        </section>
        <section>
          <RandomRecipes />
        </section>
      </div>
    </main>
  );
}

export default Home;
