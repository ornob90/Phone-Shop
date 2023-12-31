export const getFavFromLS = () => {
  const favorites = localStorage.getItem("favorites");

  if (favorites) {
    return JSON.parse(favorites);
  } else {
    return [];
  }
};

export const addFavInLS = (id) => {
  const favorites = getFavFromLS();

  favorites.push(id);
  localStorage.setItem("favorites", JSON.stringify(favorites));
};

export const deleteFavFromLS = (id) => {
  const favorites = getFavFromLS();
  const newFavorites = favorites.filter((phoneId) => phoneId !== id);
  localStorage.setItem("favorites", JSON.stringify(newFavorites));
  return newFavorites;
};
