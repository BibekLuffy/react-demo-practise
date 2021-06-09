import { useContext } from "react";
import { Link } from "react-router-dom";

import classes from "./NavigationHeader.module.css";
import FavoritesContext from "../../store/favorites-context";

const NavigationHeader = () => {
  const favContext = useContext(FavoritesContext);
  return (
    <header className={classes.header}>
      <div className={classes.logo}>React Meetups</div>
      <nav>
        <ul>
          <li>
            <Link to="/meetup/">All Meetup</Link>
          </li>
          <li>
            <Link to="/meetup/new-meetup">Add new Meetup</Link>
          </li>
          <li>
            <Link to="/meetup/favorites">
              Favorites{" "}
              <span className={classes.badge}>{favContext.totalFavorites}</span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavigationHeader;
