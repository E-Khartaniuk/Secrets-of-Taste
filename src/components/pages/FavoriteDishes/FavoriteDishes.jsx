import FoodCard from 'components/FoodCard/FoodCard';
import FetchById from 'components/Utils/FetchById';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function FavoriteDishes() {
  const navigate = useNavigate();
  const [food, setFood] = useState([]);

  useEffect(() => {
    FetchById('665620,716406').then(res => {
      console.log('reesssssssssssssssssssssssss', ree);
      setFood(res.data.recipes);
    });
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
                cardInfo={oneDish}
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
