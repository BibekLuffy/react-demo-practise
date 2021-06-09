import { createContext, useState } from "react";

const FavoritesContext = createContext({
  favorites: [],
  totalFavorites: 0,
  addFavorite: (favoriteMeetup) => {},
  removeFavorite: (meetupId) => {},
  itemIsFavorite: (meetupId) => {},
});

export const FavoritesContextProvider = ({ children }) => {
  const [userFavorites, setUserFavorites] = useState([]);

  const addFavoriteHandler = (favoriteMeetup) => {
    setUserFavorites((preUserFavorites) =>
      preUserFavorites.concat(favoriteMeetup)
    );
  };

  const removeFavoriteHandler = (meetupId) => {
    setUserFavorites((preUserFavorites) =>
      preUserFavorites.filter((meetup) => meetup.id !== meetupId)
    );
  };

  const itemIsFavoriteHandler = (meetupId) =>
    userFavorites.some((meetup) => meetup.id === meetupId);

  const context = {
    favorites: userFavorites,
    totalFavorites: userFavorites.length,
    addFavorite: addFavoriteHandler,
    removeFavorite: removeFavoriteHandler,
    itemIsFavorite: itemIsFavoriteHandler,
  };

  return (
    <FavoritesContext.Provider value={context}>
      {children}
    </FavoritesContext.Provider>
  );
};

export default FavoritesContext;
