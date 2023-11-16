import FoodCard from 'components/FoodCard/FoodCard';
import FetchById from 'components/Utils/FetchById';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function FavoriteDishes() {
  const navigate = useNavigate();

  const favDishes = useSelector(state => state.dishes.value);
  const [food, setFood] = useState(favDishes);

  console.log('food', food);

  useEffect(() => {
    setFood(JSON.parse(localStorage.getItem('favoriteIds')) || []);
  }, []);

  const handleOpenFullRecipe = recipeId => {
    navigate(`/recipe/${recipeId}`);
  };

  return (
    <section>
      <ul
      // className={css.dishesList}
      >
        {food &&
          food.map(oneDish => {
            return (
              <FoodCard
                key={oneDish.id}
                cardInfo={oneDish.payload}
                // className={cardCSS.oneDishCard}
                handleOpenFullRecipe={handleOpenFullRecipe}
              ></FoodCard>
            );
          })}
      </ul>
    </section>
  );
}

export default FavoriteDishes;
