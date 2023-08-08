import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./Home";
import Profile from "./Profile";
import Setting from "./Setting";
import SignIn from "./SignIn";
import Register from "./Register";

function App(){
  return (
    <Router>
      <Routes>
        <Route path="/" exact component={Home}/>
        <Route path="/profile" exact component={Profile}/>
        <Route path="/settings" exact component={Setting}/>
        <Route path="/login" exact component={SignIn}/>
        <Route path="/register" exact component={Register}/>
      </Routes>
    </Router>
  );
}

export default App;