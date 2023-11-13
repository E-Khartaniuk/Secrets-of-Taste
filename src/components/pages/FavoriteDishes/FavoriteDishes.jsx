import FoodCard from 'components/FoodCard/FoodCard';
import FetchById from 'components/Utils/FetchById';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function FavoriteDishes() {
  const navigate = useNavigate();
  const [food, setFood] = useState([]);
  const [favoriteId, setFavoriteId] = useState([]);

  // useEffect(() => {
  //   const favoriteIdFromLS = localStorage.getItem('favoriteIds');
  //   setFavoriteId(prevIds => [...prevIds, favoriteId]);
  //   console.log('favoriteFromLS', favoriteIdFromLS);
  // }, [favoriteId]);

  // useEffect(() => {
  //   for (const id of favoriteId) {
  //     FetchById(id).then(res => {
  //       console.log('reesssssssssssssssssssssssss', ree);
  //       setFood(prevFood => [...prevFood, res.data.recipes]);
  //     });
  //   }
  // }, [favoriteId]);

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
