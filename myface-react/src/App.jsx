import { React } from "react";
import "./Styling/App.scss";
import PostList from "./Components/Posts/PostList";
import UserListPage from "./Components/User/UserListPage";
import { BrowserRouter as Router, Route } from "react-router-dom";
import UserPage from "./Components/User/UserPage";
import Navbar from "./Components/Header/Navbar";
import PostForm from "./Components/Posts/PostForm";


const App = () => (
  <Router>
    <Navbar />
    <Route exact path="/users" component={UserListPage} />
    <Route exact path="/posts" component={PostList} />
    <Route exact path="/users/:userId" component={UserPage} />
    <Route path="/posts/create" component={PostForm} />
  </Router>
);

export default App;
