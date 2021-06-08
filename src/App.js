import { Route } from "react-router";
import { Link } from "react-router-dom";

import TodoApp from "./TodoDemoApp/TodoApp";
import MeetupApp from "./MeetupDemoApp/MeetupApp";

function App() {
  return (
    <div>
      <Link to="/" className="btn">
        See Todo App
      </Link>
      <Link to="/meetup" className="btn">
        See Meetup App
      </Link>
      <br />
      <br />
      <Route exact path="/">
        <TodoApp />
      </Route>
      <Route path="/meetup">
        <MeetupApp />
      </Route>
    </div>
  );
}

export default App;
