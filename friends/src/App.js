import React, {useState, useEffect} from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import Login from "./components/Login";
import Logout from "./components/Logout";
import FriendForm from "./components/FriendForm";
import FriendList from "./components/FriendList";
import PrivateRoute from "./components/PrivateRoute";

function App(props) {
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(()=>{
    if (localStorage.getItem("token")) {
      setLoggedIn(true);
    } else {
      setLoggedIn(false);
    }
  },[])

  const login = () => {
    setLoggedIn(true);
  };

  const logout = () => {
    setLoggedIn(false);
  };

  const expandMenu = () => {
    const myLinks = document.getElementById("myLinks");
    myLinks.classList.toggle("hidden");
  };

  return (
    <Router>
      <div className="App">
        <div class="topnav">
          <Link to="/" class="active">Friends App</Link>
          <a className="icon" onClick={expandMenu}><i className="fa fa-bars"></i></a>
          <div className="myLinks hidden" id="myLinks">
            {loggedIn?<Link to="/logout">Logout</Link>:<Link to="/login">Login</Link>}
            <Link to="/friends">Friend List</Link>
            <Link to="/friends/new">Add Friend</Link>
          </div>
        </div>
        <Switch>
          <PrivateRoute exact path="/friends" component={FriendList} />
          <PrivateRoute exact path="/friends/:friendId" component={FriendForm} />
          <Route path="/login" render={(props)=> <Login {...props} func={login} />}/>
          <Route path="/logout" render={(props)=> <Logout {...props} history={props.history} func={logout} />}/>
          {!loggedIn?<Route render={(props)=> <Login {...props} func={login} />}/>:<></>}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
