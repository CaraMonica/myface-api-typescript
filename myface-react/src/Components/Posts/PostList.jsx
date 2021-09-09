import React, { useState, useEffect } from "react";
import Post from "./Post";

const PostList = () => {
  const [postList, setPostList] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/posts")
      .then(response => response.json())
      .then(data => setPostList(data.results));
  });

  // [5,9,2,5]
  // [(5,0),(9,1),(2,2), (5,3)]

  return (
    <ul className="flex-container">
      {postList.map((post, index) => (
        <Post post={post} key={index} isOnPostPage={true}/>
      ))}
    </ul>
  );
};

export default PostList;
