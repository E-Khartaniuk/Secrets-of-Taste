// import React, { useState } from 'react';
// import axios from 'axios';
// import css from './OneDish.module.css';

// function OneDish({ item }) {
//   const [moreDitails, setMoreDitails] = useState(null);
//   const [moreDitailsOpen, setMoreDitailsOpen] = useState(false);

//   const { title, image, id } = item;

//   // const handleDitail = async () => {
//   //   if (moreDitails) {
//   //     setMoreDitailsOpen(!moreDitailsOpen);
//   //     return;
//   //   }
//   //   try {
//   //     const response = await axios.get(
//   //       `https://api.spoonacular.com/recipes/${id}/information?includeNutrition=false&apiKey=573176e8f1234f0eb2ab1bc5db75f54f`
//   //     );
//   //     setMoreDitails(response.data);
//   //     setMoreDitailsOpen(!moreDitailsOpen);
//   //   } catch (error) {
//   //     console.log(error);
//   //   }

//   //   console.log('moreDitails', moreDitails);
//   // };

//   return (
//     <li key={id} className={css.oneDishCard}>
//       <img src={image} alt="rec" className={css.cardImg} />

//       <h3 className={css.cardTitle}> {title}</h3>
//       {/* <button type="button" onClick={handleDitail} className={css.cardBtn}>
//         More ditails
//       </button> */}
//       {/* {moreDitailsOpen && moreDitails && (
//         <>
//           <h3>Ingredients</h3>
//           <ul>
//             {moreDitails.extendedIngredients.map(ingredient => ingredient.name)}
//           </ul>
//         </>
//       )} */}
//     </li>
//   );
// }

// export default OneDish;
