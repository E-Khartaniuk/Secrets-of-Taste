import FoodCard from 'components/FoodCard/FoodCard';
import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import css from './FavoriteDishes.module.css';

function FavoriteDishes() {
  const navigate = useNavigate();

  const favDishes = useSelector(state => state.dishes.favoriteItems);

  const handleOpenFullRecipe = recipeId => {
    navigate(`/recipe/${recipeId}`);
  };

  return (
    <section className={css.container}>
      <ul className={css.dishesList}>
        {favDishes &&
          favDishes.map(oneDish => {
            return (
              <FoodCard
                key={oneDish.id}
                cardInfo={oneDish}
                handleOpenFullRecipe={handleOpenFullRecipe}
              ></FoodCard>
            );
          })}
      </ul>
    </section>
  );
}

export default FavoriteDishes;
