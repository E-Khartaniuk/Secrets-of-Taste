import axios from 'axios';

export default function FetchById(id) {
  const URL = `https://api.spoonacular.com/recipes/${id}/information?apiKey=573176e8f1234f0eb2ab1bc5db75f54f`;
  try {
    const response = axios.get(URL);

    return response;
  } catch (error) {
    throw error.response.status;
  }
}
