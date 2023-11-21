import axios from 'axios';

const fetchSimilar = async similarID => {
  const URL = `https://api.spoonacular.com/recipes/${similarID}/similar?apiKey=573176e8f1234f0eb2ab1bc5db75f54f&number=3`;
  console.log('similarID', similarID);
  try {
    const response = await axios.get(URL);

    return response;
  } catch (error) {}
};
export default fetchSimilar;
