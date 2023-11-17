import React from 'react';
import cardCSS from './FoodCard.module.css';
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
    <li className={cardCSS.dishElement}>
      <button className={cardCSS.favBtn} onClick={handleToggleFavorite}>
        {isFavorite ? 'Unlike' : 'Like'}
      </button>
      <div
        onClick={() => handleOpenFullRecipe(id)}
        className={cardCSS.oneDishCard}
      >
        <img src={image} alt={title} className={cardCSS.cardImg} />
        <h3 className={cardCSS.cardTitle}>{title}</h3>
      </div>
    </li>
  );
}

export default FoodCard;
