import React from "react";

const PostImage = ({ post }) => (
    <div className="img-container">
      <img className="post-image" src={post.imageUrl} alt={post.message} />
    </div>
);

export default PostImage;
