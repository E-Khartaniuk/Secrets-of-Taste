import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import css from './DishesList.module.css';
import FoodCard from 'components/FoodCard/FoodCard';
import fetchData from 'components/Utils/FetchData';

function DishesList() {
  const navigate = useNavigate();
  const [food, setFood] = useState([]);

  useEffect(() => {
    fetchData().then(res => setFood(res.data.results));
  }, []);

  const handleOpenFullRecipe = recipeId => {
    navigate(`/recipe/${recipeId}`);
  };

  return (
    <ul className={css.dishesList}>
      {food.map(oneDish => {
        return (
          <FoodCard
            cardInfo={oneDish}
            handleOpenFullRecipe={handleOpenFullRecipe}
          ></FoodCard>
        );
      })}
    </ul>
  );
}

export default DishesList;
