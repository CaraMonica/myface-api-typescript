import React from "react";
import "./App.scss";
import PostList from "./Components/PostList";
import UserList from "./Components/UserList";
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
