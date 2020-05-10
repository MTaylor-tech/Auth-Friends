import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import Login from "./components/Login";
import FriendForm from "./components/FriendForm";
import FriendList from "./components/FriendList";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <Router>
      <div className="App">
        <ul>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/friends">Friend List</Link>
          </li>
        </ul>
        <Switch>
          <PrivateRoute exact path="/friends" component={FriendList} />
          <PrivateRoute exact path="/friends/:friendId" component={FriendForm} />
          <Route path="/login" component={Login} />
          <Route component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
