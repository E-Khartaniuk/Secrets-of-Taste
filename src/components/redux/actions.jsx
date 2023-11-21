const state = useSelector(state => state.favorite);

export const togleFavorite = async cardinfo => {
  if (state.favorite) {
  } else {
    setFavoriteIds(prevIds => [...prevIds, id]);
  }
  return addcontactToDB;
};

export const deleteFavorite = async id => {
  const deleteContactFromDB = await instance.delete(`/contacts/${id}`);

  return deleteContactFromDB;
};
