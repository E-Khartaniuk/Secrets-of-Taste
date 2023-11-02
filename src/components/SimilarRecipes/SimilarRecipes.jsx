// import React, { useEffect, useState } from 'react';
// import css from '../dishesList/DishesList.module.css';
// import cardCSS from '../oneDish/OneDish.module.css';
// import { useNavigate } from 'react-router-dom';
// import fetchSimilar from 'components/Utils/fetchSimilar';

// function SimilarRecipes({ similarID }) {
//   const navigate = useNavigate();
//   const [food, setFood] = useState([]);

//   useEffect(() => {
//     fetchSimilar(similarID).then(res => {
//       setFood(res.data);
//       console.log('similar FOOOOOOOOOD', food);
//       console.log('res', res.data);
//     });
//   }, []);

//   const handleOpenFullRecipe = recipeId => {
//     navigate(`/recipe/${recipeId}`);
//   };

//   return (
//     <ul className={css.dishesList}>
//       {food &&
//         food.map(({ id, image, title }) => {
//           return (
//             <li key={id} className={cardCSS.oneDishCard}>
//               <img src={image} alt={title} className={cardCSS.cardImg} />
//               <h3 className={cardCSS.cardTitle}> {title}</h3>
//               <button
//                 type="button"
//                 onClick={() => handleOpenFullRecipe(id)}
//                 className={cardCSS.cardBtn}
//               >
//                 Open full recipe
//               </button>
//             </li>
//           );
//         })}
//     </ul>
//   );
// }

// export default SimilarRecipes;
