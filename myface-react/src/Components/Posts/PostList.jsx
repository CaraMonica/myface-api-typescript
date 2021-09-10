import React, { useState, useEffect } from "react";
import Post from "./Post";

const apiUrl = "http://localhost:3001/posts";

const updateInteraction = (postId, interaction, updatePostState) =>
  fetch(`${apiUrl}/${postId}/${interaction}`, { method: "POST" })
    .then(response => response.json())
    .then(updatePostState);

const PostList = () => {
  const [postList, setPostList] = useState([]);

  useEffect(() => {
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => setPostList(data.results));
  }, []);

  const updatePostState = post => {
    const newPostList = [...postList];
    newPostList[newPostList.findIndex(p => p.id === post.id)] = post;
    setPostList(newPostList);
  };

  return (
    <ul className="flex-container">
      {postList.map((post, index) => (
        <Post
          post={post}
          key={index}
          isOnPostPage={true}
          onLikeClick={() => updateInteraction(post.id, "like", updatePostState)}
          onDislikeClick={() => updateInteraction(post.id, "dislike", updatePostState)}
          onUnlikeClick={() => updateInteraction(post.id, "unlike", updatePostState)}
          onUndislikeClick={() => updateInteraction(post.id, "undislike", updatePostState)}
        />
      ))}
    </ul>
  );
};

export default PostList;
