import React, { useEffect, useState } from 'react';
import fetchRandomRecipes from 'components/Utils/fetchRandomRecipes';
import css from '../dishesList/DishesList.module.css';
import cardCSS from '../oneDish/OneDish.module.css';

import { useNavigate } from 'react-router-dom';
import FoodCard from 'components/FoodCard/FoodCard';

function RandomRecipes() {
  const navigate = useNavigate();
  const [food, setFood] = useState([]);

  useEffect(() => {
    fetchRandomRecipes().then(res => {
      setFood(res.data.recipes);
    });
  }, []);

  const handleOpenFullRecipe = recipeId => {
    navigate(`/recipe/${recipeId}`);
  };

  return (
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
  );
}

export default RandomRecipes;
