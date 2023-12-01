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
    setPage(1);
    setQueryList([]);

    const fetchData = async () => {
      const res = await FetchDiet(query, 1);
      setQueryList(res.data.results);
    };

    fetchData();
  }, [query]);

  const handleOpenFullRecipe = recipeId => {
    navigate(`/recipe/${recipeId}`);
  };

  const handleLoadMore = async () => {
    setPage(prevPage => prevPage + 1);

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
