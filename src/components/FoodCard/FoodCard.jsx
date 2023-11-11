import React, { useEffect, useState } from 'react';
import cardCSS from './FoodCard.module.css';

function FoodCard({ cardInfo, handleOpenFullRecipe }) {
  // const [favorite, setFavorite] = useState({});
  const { id, image, title } = cardInfo;

  const storedFavorites = JSON.parse(localStorage.getItem('favoriteIds')) || [];

  const [favoriteIds, setFavoriteIds] = useState(storedFavorites);

  useEffect(() => {
    localStorage.setItem('favoriteIds', JSON.stringify(favoriteIds));
  }, [favoriteIds]);

  const addToFavorite = () => {
    // Проверка, присутствует ли id уже в массиве
    if (favoriteIds.includes(id)) {
      // Если да, удалить его
      setFavoriteIds(prevIds => prevIds.filter(favId => favId !== id));
    } else {
      // Если нет, добавить его
      setFavoriteIds(prevIds => [...prevIds, id]);
    }
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
