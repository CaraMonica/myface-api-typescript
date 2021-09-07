import React, { useState, useEffect } from "react";
import "./App.css";
import PostList from "./Components/PostList";

const App = data => {
  const [postList, setPostList] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/posts")
      .then(response => response.json())
      .then(data => setPostList(data.results));
  });

  return (
    <div>
      <h1 id="title">MyFace</h1>
      <PostList postList={postList} />
    </div>
  );
};

export default App;
