import FoodCard from 'components/FoodCard/FoodCard';
import fetchData from 'components/Utils/FetchData';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import css from './SearchPage.module.css';

function SearchPage() {
  const navigate = useNavigate();
  const [queryList, setSueryList] = useState([]);
  const { query } = useParams();

  useEffect(() => {
    fetchData(query).then(res => setSueryList(res.data.results));
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

export default SearchPage;
