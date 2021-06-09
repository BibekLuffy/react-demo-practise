import { useContext } from "react";
import FavoritesContext from "../../store/favorites-context";

import Card from "../ui/Card";
import classes from "./MeetupItem.module.css";

const MeetupItem = ({ id, title, address, description, src }) => {
  const favContext = useContext(FavoritesContext);

  const isFavorite = favContext.itemIsFavorite(id);

  const toggleFavoriteHandler = () => {
    if (isFavorite) {
      favContext.removeFavorite(id);
    } else {
      favContext.addFavorite({
        id,
        title,
        address,
        description,
        image: src,
      });
    }
  };
  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={src} alt={title} />
        </div>
        <div className={classes.content}>
          <h3>{title}</h3>
          <address>{address}</address>
          <p>{description}</p>
        </div>
        <div className={classes.actions}>
          <button onClick={toggleFavoriteHandler}>
            {isFavorite ? "Remove from Favorites" : "To Favorites"}
          </button>
        </div>
      </Card>
    </li>
  );
};

export default MeetupItem;
