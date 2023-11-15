const state = useSelector(state => state.favorite);

export const getFavorite = async () => {
  const data = JSON.parse(localStorage.getItem('favoriteIds')) || [];
  return data;
};

export const togleFavorite = async contactData => {
  if (favoriteIds.includes(id)) {
    setFavoriteIds(prevIds => prevIds.filter(favId => favId !== id));
  } else {
    setFavoriteIds(prevIds => [...prevIds, id]);
  }
  return addcontactToDB;
};

export const deleteFavorite = async id => {
  const deleteContactFromDB = await instance.delete(`/contacts/${id}`);

  return deleteContactFromDB;
};
