import axios from 'axios';

const fetchRandomRecipes = async () => {
  const URL =
    'https://api.spoonacular.com/recipes/random?apiKey=573176e8f1234f0eb2ab1bc5db75f54f&number=6';
  try {
    const response = await axios.get(URL);

    return response;
  } catch (error) {}
};
export default fetchRandomRecipes;
