import FoodCard from 'components/FoodCard/FoodCard';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import css from './DietPage.module.css';
import FetchDiet from 'components/Utils/FetchDiet';

function DietPage() {
  const navigate = useNavigate();
  const [queryList, setQueryList] = useState([]);
  const { query } = useParams();

  useEffect(() => {
    FetchDiet(query).then(res => setQueryList(res.data.results));
  }, [query]);

  const handleOpenFullRecipe = recipeId => {
    navigate(`/recipe/${recipeId}`);
  };
  return (
    <ul className={css.dishesList}>
      {queryList.map(oneDish => {
        return (
          <FoodCard
            key={oneDish.id}
            cardInfo={oneDish}
            handleOpenFullRecipe={handleOpenFullRecipe}
          ></FoodCard>
        );
      })}
    </ul>
  );
}

export default DietPage;
