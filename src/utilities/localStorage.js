export const getFavFromLS = () => {
  const favorites = localStorage.getItem("favorites");

  if (favorites) {
    return favorites;
  }
  return [];
};

export const addFavInLS = (id) => {
  const favorites = getFavFromLS();

  favorites.push(id);
  localStorage.setItem("favorites", favorites);
};

export const deleteFavFromLS = (id) => {
  const favorites = getFavFromLS();

  const newFavorites = favorites.filter((phone) => phone.id !== id);

  localStorage.setItem("favorites", newFavorites);
};
