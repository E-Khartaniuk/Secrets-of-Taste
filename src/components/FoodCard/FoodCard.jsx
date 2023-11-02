import React from 'react';
import cardCSS from './FoodCard.module.css';

function FoodCard({ cardInfo, handleOpenFullRecipe }) {
  const { id, image, title } = cardInfo;

  return (
    <li
      key={id}
      className={cardCSS.oneDishCard}
      onClick={() => handleOpenFullRecipe(id)}
    >
      <img src={image} alt={title} className={cardCSS.cardImg} />
      <h3 className={cardCSS.cardTitle}> {title}</h3>
    </li>
  );
}

export default FoodCard;
