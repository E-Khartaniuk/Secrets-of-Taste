import React, { useEffect, useState } from 'react';
import fetchRandomRecipes from 'components/Utils/fetchRandomRecipes';
import css from './RandomRecipes.module.css';
import cardCSS from '../oneDish/OneDish.module.css';

import { useNavigate } from 'react-router-dom';
import FoodCard from 'components/FoodCard/FoodCard';

function RandomRecipes() {
  const navigate = useNavigate();
  const [food, setFood] = useState([]);

  const [page, setPage] = useState(1);

  useEffect(() => {
    fetchRandomRecipes().then(res => {
      setFood(res.data.recipes);
    });
  }, []);

  const handleOpenFullRecipe = recipeId => {
    navigate(`/recipe/${recipeId}`);
  };

  const handleLoadMore = () => {
    setPage(page + 1);
    fetchRandomRecipes(page).then(res => {
      setFood(prev => [...prev, ...res.data.recipes]);
    });
  };

  return (
    <section>
      <ul className={css.dishesList}>
        {food &&
          food.map(oneDish => {
            return (
              <FoodCard
                key={oneDish.id}
                cardInfo={oneDish}
                className={cardCSS.oneDishCard}
                handleOpenFullRecipe={handleOpenFullRecipe}
              ></FoodCard>
            );
          })}
      </ul>
      <button
        type="button"
        onClick={handleLoadMore}
        className={css.loadMoreBtn}
      >
        Load more
      </button>
    </section>
  );
}

export default RandomRecipes;
