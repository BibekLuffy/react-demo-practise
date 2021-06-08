import { Route, Switch } from "react-router";
import Layout from "./components/ui/Layout";

import AllMeetup from "./pages/AllMeetup";
import Favorites from "./pages/Favorites";
import NewMeetup from "./pages/NewMeetup";

const MeetupApp = () => {
  return (
    <Layout>
      <Switch>
        <Route exact path="/meetup/">
          <AllMeetup />
        </Route>
        <Route path="/meetup/new-meetup">
          <NewMeetup />
        </Route>
        <Route path="/meetup/favorites">
          <Favorites />
        </Route>
      </Switch>
    </Layout>
  );
};

export default MeetupApp;
