import React, { useState, useEffect } from "react";
import Post from "./Post";

const PostList = () => {
  const [postList, setPostList] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/posts")
      .then(response => response.json())
      .then(data => setPostList(data.results));
  });

  return (
    <ul className="flex-container">
      {postList.map(post => (
        <Post post={post} />
      ))}
    </ul>
  );
};

export default PostList;
