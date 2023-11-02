import FetchFullRecipe from 'components/Utils/FetchFullRecipe';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import css from './FullRecipe.module.css';
import RecipeInstructions from 'components/RecipeInstructions/RecipeInstructions';

function FullRecipe() {
  const [fullRecipe, setFullRecipe] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    FetchFullRecipe(id).then(res => {
      setFullRecipe(res.data);
    });
  }, [id]);

  return (
    <>
      <div className={css.fullRecipeContainer}>
        <h1 className={css.title}>{fullRecipe.title}</h1>
        <div className={css.fullRecipeHeadContainer}>
          <img
            src={fullRecipe.image}
            alt={fullRecipe.title}
            className={css.recipeImg}
          />

          <div className={css.recipePropertyComtainer}>
            <p className={css.recipeProperty}>
              Cooking time: {fullRecipe.readyInMinutes} minutes
            </p>

            {fullRecipe.vegetarian ? (
              <p className={css.recipeProperty}>Vegetarian</p>
            ) : (
              <p className={css.recipeProperty}>Vegetarian: no</p>
            )}

            {fullRecipe.vegan ? (
              <p className={css.recipeProperty}>Vegan</p>
            ) : (
              <p className={css.recipeProperty}>Vegan: no</p>
            )}

            {fullRecipe.veryHealthy ? (
              <p className={css.recipeProperty}>Healthy</p>
            ) : (
              <p className={css.recipeProperty}>Unhealthy</p>
            )}

            {fullRecipe.glutenFree ? (
              <p className={css.recipeProperty}>Gluten free</p>
            ) : (
              <p className={css.recipeProperty}>Gluten free: no</p>
            )}
          </div>
        </div>
        <h3>Ingredients:</h3>

        <ul className={css.listContainer}>
          {fullRecipe.extendedIngredients &&
            fullRecipe.extendedIngredients.map(ingridient => (
              <li id={ingridient.id} className={css.ingridientListItem}>
                <p>{ingridient.original}</p>
              </li>
            ))}
        </ul>
        {fullRecipe.instructions && <h3>How to cook it:</h3>}
        <RecipeInstructions instructionsHTML={fullRecipe.instructions} />
        <RecipeInstructions instructionsHTML={fullRecipe.summary} />
      </div>
    </>
  );
}

export default FullRecipe;
