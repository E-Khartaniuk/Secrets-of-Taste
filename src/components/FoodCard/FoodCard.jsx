import React from 'react';
import css from './FoodCard.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { toggleFavorite } from 'components/redux/dishesSlice';

function FoodCard({ cardInfo, handleOpenFullRecipe }) {
  const dispatch = useDispatch();
  const favoriteItems = useSelector(state => state.dishes.favoriteItems);

  const { id, image, title } = cardInfo;

  const isFavorite = favoriteItems.some(item => item.id === id);

  const handleToggleFavorite = () => {
    dispatch(toggleFavorite(cardInfo));
  };

  return (
    <li className={css.dishElement}>
      <button className={css.favBtn} onClick={handleToggleFavorite}>
        {isFavorite ? '❤️' : '💚'}
      </button>

      <div onClick={() => handleOpenFullRecipe(id)} className={css.oneDishCard}>
        <img src={image} alt={title} className={css.cardImg} />
        <h3 className={css.cardTitle}>{title}</h3>
      </div>
    </li>
  );
}

export default FoodCard;
