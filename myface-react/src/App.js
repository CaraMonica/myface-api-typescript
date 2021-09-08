import React from "react";
import "./Styling/App.scss";
import PostList from "./Components/Posts/PostList";
import UserList from "./Components/User/UserList";
import Navbar from "./Components/Header/Navbar";

const App = () => {
  return (
    <div>
      <Navbar />
      <UserList />
    </div>
  );
};

export default App;
