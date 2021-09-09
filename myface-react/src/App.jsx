import { React, Fragment } from "react";
import "./Styling/App.scss";
import PostList from "./Components/Posts/PostList";
import UserListPage from "./Components/User/UserListPage";
import { BrowserRouter as Router, Route } from "react-router-dom";
import UserPage from "./Components/User/UserPage";

const App = () => (
  <Router>

    <Route exact path="/users" component={UserListPage} />

    <Route exact path="/posts" component={PostList} />

    <Route exact path="/users/:userId" component={UserPage} />

  </Router>
);

export default App;
