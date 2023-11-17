import FoodCard from 'components/FoodCard/FoodCard';
import FetchById from 'components/Utils/FetchById';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import css from '../../dishesList/DishesList.module.css';

function FavoriteDishes() {
  const navigate = useNavigate();

  const favDishes = useSelector(state => state.dishes.favoriteItems);
  // const favDishes = JSON.parse(localStorage.getItem('favoriteItems')) || [];

  const [food, setFood] = useState(favDishes);

  useEffect(() => {
    JSON.parse(localStorage.getItem('favoriteItems'));
  }, []);

  const handleOpenFullRecipe = recipeId => {
    navigate(`/recipe/${recipeId}`);
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
                handleOpenFullRecipe={handleOpenFullRecipe}
              ></FoodCard>
            );
          })}
      </ul>
    </section>
  );
}

export default FavoriteDishes;
