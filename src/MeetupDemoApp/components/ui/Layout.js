import classes from "./Layout.module.css";
import NavigationHeader from "../NavigationHeader/NavigationHeader";

const Layout = ({ children }) => {
  return (
    <div>
      <NavigationHeader />
      <main className={classes.main}>{children}</main>
    </div>
  );
};

export default Layout;
