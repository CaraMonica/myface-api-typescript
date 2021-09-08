import React from "react";
import "./App.scss";
import PostList from "./Components/PostList";
import UserList from "./Components/UserList";
import Header from "./Components/Header";

const App = () => {
  return (
    <div>
      <Header />
      <UserList />
    </div>
  );
};

export default App;
