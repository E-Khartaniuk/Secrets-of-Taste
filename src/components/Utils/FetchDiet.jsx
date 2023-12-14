import axios from 'axios';

const FetchDiet = async (query, offset) => {
  const URL = `https://api.spoonacular.com/recipes/complexSearch?diet=${query}&apiKey=573176e8f1234f0eb2ab1bc5db75f54f&offset=${offset}&number=24`;
  try {
    const response = await axios.get(URL);
    return response;
  } catch (error) {
    console.log('error', error);
  }
};
export default FetchDiet;
