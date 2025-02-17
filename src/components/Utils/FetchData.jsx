import axios from 'axios';

export default function fetchData(query) {
  const URL = `https://api.spoonacular.com/recipes/complexSearch?query=${query}&apiKey=573176e8f1234f0eb2ab1bc5db75f54f&number=24`;
  try {
    const response = axios.get(URL);

    return response;
  } catch (error) {
    throw error.response.status;
  }
}
