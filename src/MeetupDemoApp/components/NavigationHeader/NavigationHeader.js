import { Link } from "react-router-dom";

import classes from "./NavigationHeader.module.css";

const NavigationHeader = () => {
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
            <Link to="/meetup/favorite">Favorites</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavigationHeader;
