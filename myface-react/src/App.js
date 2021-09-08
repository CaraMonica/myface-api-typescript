import React from "react";
import "./Styling/App.scss";
import PostList from "./Components/Posts/PostList";
import UserList from "./Components/User/UserList";
import Navbar from "./Components/Header/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => (
  <Router>
    <Switch>
      <Route path="/users">
        <Navbar />
        <UserList />
      </Route>
      <Route path="/posts">
        <Navbar />
        <PostList />
      </Route>
      <Route path="">
        <div>Sorry - that page doesn't exist.</div>
      </Route>
    </Switch>
  </Router>
);

export default App;
