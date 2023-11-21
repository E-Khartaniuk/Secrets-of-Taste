import React, { useEffect, useState } from 'react';
import css from '../SimilarRecipes/SimilarRecipes.module.css';

import { useNavigate } from 'react-router-dom';
import fetchSimilar from 'components/Utils/fetchSimilar';

function SimilarRecipes({ similarID }) {
  const navigate = useNavigate();
  const [food, setFood] = useState([]);

  useEffect(() => {
    fetchSimilar(similarID).then(res => {
      setFood(res.data);
    });
  }, [similarID]);

  const handleOpenFullRecipe = recipeId => {
    navigate(`/recipe/${recipeId}`);
  };

  return (
    <>
      <h3>Similar recipes:</h3>
      <ul className={css.dishElement}>
        {food &&
          food.map(({ id, title, imageType }) => {
            return (
              <li
                key={id}
                className={css.oneDishCard}
                onClick={() => handleOpenFullRecipe(id)}
              >
                <img
                  src={`https://spoonacular.com/recipeImages/${id}-312x150.${imageType}`}
                  alt={title}
                  className={css.cardImg}
                />
                <h3 className={css.cardTitle}> {title}</h3>
              </li>
            );
          })}
      </ul>
    </>
  );
}

export default SimilarRecipes;
