import axios from 'axios';

const fetchRandomRecipes = async (page = 1) => {
  const URL = `https://api.spoonacular.com/recipes/random?apiKey=573176e8f1234f0eb2ab1bc5db75f54f&page=${page}&number=12`;

  try {
    const response = await axios.get(URL);

    return response;
  } catch (error) {
    throw error.response.status;
  }
};
export default fetchRandomRecipes;
