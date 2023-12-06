import axios from 'axios';

const FetchSuitableWine = async dish => {
  const URL = `https://api.spoonacular.com/food/wine/pairing?food=${dish}&apiKey=573176e8f1234f0eb2ab1bc5db75f54f`;

  try {
    const response = await axios.get(URL);
    console.log('first', response.data);
    return response;
  } catch (error) {}
};
export default FetchSuitableWine;
