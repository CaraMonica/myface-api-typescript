import React from "react";

const PostContent = ({ post, isOnPostPage }) => (
  <div className="post content-container">
    <div className="post-message">{post.message}</div>
    {isOnPostPage ? <div className="post-info post-creator">{post.postedBy.name}</div> : ""}
    <div className="post-info post-date">{post.createdAt}</div>
  </div>
);

export default PostContent;
