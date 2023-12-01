import axios from 'axios';

const FetchDiet = async (query, page) => {
  const URL = `https://api.spoonacular.com/recipes/complexSearch?diet=${query}&apiKey=573176e8f1234f0eb2ab1bc5db75f54f&page=${page}&number=1`;
  console.log('page', page);
  try {
    const response = await axios.get(URL);
    console.log('respobse', response.data);
    return response;
  } catch (error) {}
};
export default FetchDiet;
