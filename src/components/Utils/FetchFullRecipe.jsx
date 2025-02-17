import axios from 'axios';

const FetchFullRecipe = async id => {
  const URL = `https://api.spoonacular.com/recipes/${id}/information?includeNutrition=false&apiKey=573176e8f1234f0eb2ab1bc5db75f54f`;
  try {
    const response = await axios.get(URL);

    return response;
  } catch (error) {
    throw error.response.status;
  }
};
export default FetchFullRecipe;
