import FetchFullRecipe from 'components/Utils/FetchFullRecipe';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import css from './FullRecipe.module.css';
import RecipeInstructions from 'components/RecipeInstructions/RecipeInstructions';
import SimilarRecipes from 'components/SimilarRecipes/SimilarRecipes';
import { useDispatch, useSelector } from 'react-redux';
import { toggleFavorite } from 'components/redux/dishesSlice';

function FullRecipe() {
  const [fullRecipe, setFullRecipe] = useState([]);
  const { id } = useParams();
  const dispatch = useDispatch();

  const favoriteItems = useSelector(state => state.dishes.favoriteItems);
  const isFavorite = favoriteItems.some(item => item.id === Number(id));

  const handleToggleFavorite = () => {
    dispatch(toggleFavorite(fullRecipe));
  };

  useEffect(() => {
    FetchFullRecipe(id).then(res => {
      setFullRecipe(res.data);
    });
  }, [id]);

  return (
    <div className={css.fullRecipeContainer}>
      <h1 className={css.title}>{fullRecipe.title}</h1>
      <div className={css.fullRecipeHeadContainer}>
        <div className={css.imgContainer}>
          <button className={css.favBtn} onClick={handleToggleFavorite}>
            {isFavorite ? '❤️' : '💚'}
          </button>
          <img
            src={fullRecipe.image}
            alt={fullRecipe.title}
            className={css.recipeImg}
          />
        </div>

        <div className={css.recipePropertyContainer}>
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

      <section className={css.ingredientsSection}>
        <h3 className={css.ingredientsSectionTitle}>Ingredients:</h3>

        <ul className={css.listContainer}>
          {fullRecipe.extendedIngredients &&
            fullRecipe.extendedIngredients.map(ingridient => (
              <li id={ingridient.id} className={css.ingridientListItem}>
                <span>{ingridient.original}</span>
                <img
                  src={`https://spoonacular.com/cdn/ingredients_100x100/${ingridient.image}`}
                  alt={ingridient.aisle}
                  className={css.ingridientImg}
                />
              </li>
            ))}
        </ul>
      </section>
      {fullRecipe.instructions && (
        <section className={css.instructions}>
          {fullRecipe.instructions && (
            <h3 className={css.ingredientsSectionTitle}>How to cook it:</h3>
          )}
          <RecipeInstructions instructionsHTML={fullRecipe.instructions} />
        </section>
      )}

      <section className={css.instructions}>
        <h3 className={css.ingredientsSectionTitle}>Summary:</h3>
        {fullRecipe.summary && (
          <RecipeInstructions instructionsHTML={fullRecipe.summary} />
        )}
      </section>

      <section className={css.instructions}>
        <SimilarRecipes similarID={id} />
      </section>

      {/* <NutritionById id={id}></NutritionById> */}
    </div>
  );
}

export default FullRecipe;
