import React from "react";
import PostContent from "./PostContent";
import PostImage from "./PostImage";

const Post = ({ post, isOnPostPage }) => (
  <li className="post-item">
    <PostImage post={post} />
    <PostContent post={post} isOnPostPage={isOnPostPage} />
  </li>
);

export default Post;