import React from 'react';
import cardCSS from './FoodCard.module.css';

function FoodCard({ cardInfo, handleOpenFullRecipe }) {
  const { id, image, title } = cardInfo;

  const addToFavorite = () => {
    console.log('id', id);
  };

  return (
    <li
      key={id}
      // className={cardCSS.oneDishCard}
      className={cardCSS.dishElement}
      // onClick={() => handleOpenFullRecipe(id)}
    >
      <button onClick={addToFavorite} className={cardCSS.favBtn}>
        Like
      </button>
      <div
        onClick={() => handleOpenFullRecipe(id)}
        className={cardCSS.oneDishCard}
      >
        <img src={image} alt={title} className={cardCSS.cardImg} />
        <h3 className={cardCSS.cardTitle}> {title}</h3>
      </div>
    </li>
  );
}

export default FoodCard;
