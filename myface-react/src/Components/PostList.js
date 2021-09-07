import React from "react";
import Post from "./Post";

const PostList = ({ postList }) => (
  <ul className="flex-container">
    {postList.map(post => (
      <Post post={post} />
    ))}
  </ul>
);

export default PostList;
