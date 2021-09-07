import React from "react";

const Post = ({ post }) => (
  <li className="post-item">
    <div className="img-container">
      <img className="post-image" src={post.imageUrl} alt={post.message} />
    </div>
    <div className="content-container">
      <div className="post-message">{post.message}</div>
      <div className="post-info post-creator">{post.postedBy.name}</div>
      <div className="post-info post-date">{post.createdAt}</div>
    </div>
  </li>
);

export default Post;
