import { React } from "react";
import "./Styling/App.scss";
import PostList from "./Components/Posts/PostListPage";
import PostForm from "./Components/Posts/PostForm";
import UserListPage from "./Components/User/UserListPage";
import { BrowserRouter as Router, Route } from "react-router-dom";
import UserPage from "./Components/User/UserPage";
import Navbar from "./Components/Header/Navbar";

const App = () => (
  <Router>
    <Navbar />
    <Route exact path="/users" component={UserListPage} />
    <Route exact path="/posts" component={PostList} />
    <Route exact path="/users/:userId" component={UserPage} />
    <Route exact path="/posts/create" component={PostForm} />
  </Router>
);

export default App;