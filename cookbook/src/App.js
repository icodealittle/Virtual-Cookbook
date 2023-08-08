import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Home";
import Profile from "./Profile";
import Settings from "./Settings";
import Login from "./Login";
import Register from "./Register";

function App(){
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/profile" exact component={Profile}/>
        <Route path="/settings" exact component={Settings}/>
        <Route path="/login" exact component={Login}/>
        <Route path="/register" exact component={Register}/>
      </Switch>
    </Router>
  );
}

export default App;