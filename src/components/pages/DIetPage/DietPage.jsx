import FoodCard from 'components/FoodCard/FoodCard';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import css from './DietPage.module.css';
import FetchDiet from 'components/Utils/FetchDiet';

function DietPage() {
  const navigate = useNavigate();
  const [queryList, setQueryList] = useState([]);
  const [page, setPage] = useState(1);

  const { query } = useParams();

  useEffect(() => {
    // setQueryList([]);
    FetchDiet(query).then(res => {
      setQueryList(res.data.results);
    });
  }, [query]);

  const handleOpenFullRecipe = recipeId => {
    navigate(`/recipe/${recipeId}`);
  };

  const handleLoadMore = () => {
    setPage(page + 1);
    FetchDiet(query, page).then(res => {
      setQueryList(prev => [...prev, ...res.data.results]);
    });
  };

  return (
    <>
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

      <button
        type="button"
        onClick={handleLoadMore}
        className={css.loadMoreBtn}
      >
        Load more
      </button>
    </>
  );
}

export default DietPage;
