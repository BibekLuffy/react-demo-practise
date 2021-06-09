import { useContext } from "react";
import MeetupList from "../components/meetups/MeetupList";

import FavoritesContext from "../store/favorites-context";

const Favorites = () => {
  const favContext = useContext(FavoritesContext);
  const favorites = favContext.favorites;
  let content;
  if (favContext.totalFavorites === 0) {
    content = <p>There is no favorites yet.</p>;
  } else {
    content = <MeetupList meetups={favorites} />;
  }
  return (
    <section>
      <h1>Favorite Meetups</h1>
      {content}
    </section>
  );
};

export default Favorites;
