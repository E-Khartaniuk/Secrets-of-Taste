import axios from 'axios';

export default function FetchDiet(query) {
  const URL = `https://api.spoonacular.com/recipes/complexSearch?diet=${query}&apiKey=573176e8f1234f0eb2ab1bc5db75f54f&number=6`;
  try {
    const response = axios.get(URL);

    return response;
  } catch (error) {}
}
