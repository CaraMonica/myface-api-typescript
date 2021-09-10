import React from "react";
import PostContent from "./PostContent";
import PostImage from "./PostImage";
import InteractionButton from "./InteractionButton";

const Post = ({ post, isOnPostPage, onLikeClick, onDislikeClick, onUnlikeClick, onUndislikeClick }) => (
  <li className="post-item">
    <PostImage post={post} />
    <PostContent post={post} isOnPostPage={isOnPostPage} />
    <div class="interaction-btn-container">
      <InteractionButton
        post={post}
        isLikeButton={true}
        onClick={post.isLikedByCurrentUser ? onUnlikeClick : onLikeClick}
      />
      <InteractionButton
        post={post}
        isLikeButton={false}
        onClick={post.isDislikedByCurrentUser ? onUndislikeClick : onDislikeClick}
      />
    </div>
  </li>
);

export default Post;
