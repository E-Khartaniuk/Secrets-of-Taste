import React, { useEffect, useState } from 'react';
import cardCSS from './FoodCard.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from 'components/redux/dishesSlice';

function FoodCard({ cardInfo, handleOpenFullRecipe }) {
  const count = useSelector(state => state.dishes.value);
  const dispatch = useDispatch();
  console.log('count', count);
  // const [favorite, setFavorite] = useState({});
  const { id, image, title } = cardInfo;

  const storedFavorites = JSON.parse(localStorage.getItem('favoriteIds')) || [];

  const [favoriteIds, setFavoriteIds] = useState(storedFavorites);

  useEffect(() => {
    localStorage.setItem('favoriteIds', JSON.stringify(favoriteIds));
  }, [favoriteIds]);

  const addToFavorite = () => {
    if (favoriteIds.includes(id)) {
      setFavoriteIds(prevIds => prevIds.filter(favId => favId !== id));
    } else {
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
      <button
        onClick={() => {
          dispatch(increment(cardInfo));
        }}
      >
        Like
      </button>
      {/* <button
        onClick={() => {
          dispatch(decrement());
        }}
      >
        Like
      </button> */}
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
