import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import Login from "./components/Login";
import Logout from "./components/Logout";
import FriendForm from "./components/FriendForm";
import FriendList from "./components/FriendList";
import PrivateRoute from "./components/PrivateRoute";

function App() {


  return (
    <Router>
      <div className="App">
        <ul>
          <li>
            {localStorage.getItem("token")?<Link to="/logout">Logout</Link>:<Link to="/login">Login</Link>}
          </li>
          <li>
            <Link to="/friends">Friend List</Link>
          </li>
          <li>
            <Link to="/friends/new">Add Friend</Link>
          </li>
        </ul>
        <Switch>
          <PrivateRoute exact path="/friends" component={FriendList} />
          <PrivateRoute exact path="/friends/:friendId" component={FriendForm} />
          <Route path="/login" component={Login} />
          <Route path="/logout" component={Logout} />
          {!localStorage.getItem("token")?<Route component={Login} />:<></>}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
