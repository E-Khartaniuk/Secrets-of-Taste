import axios from 'axios';

export default function fetchData() {
  const URL =
    'https://api.spoonacular.com/recipes/complexSearch?apiKey=573176e8f1234f0eb2ab1bc5db75f54f&number=8';
  try {
    const response = axios.get(URL);

    return response;
  } catch (error) {}
}
