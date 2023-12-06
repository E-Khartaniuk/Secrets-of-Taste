import axios from 'axios';

const FetchNutritionById = async id => {
  const URL = `https://api.spoonacular.com/food/menuItems/${id}/nutritionWidget?apiKey=573176e8f1234f0eb2ab1bc5db75f54f`;

  try {
    const response = await axios.get(URL);

    return response;
  } catch (error) {}
};
export default FetchNutritionById;
