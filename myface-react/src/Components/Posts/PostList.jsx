import React, { useState, useEffect } from "react";
import Post from "./Post";

const apiUrl = "http://localhost:3001/posts";

const PostList = () => {
  const [postList, setPostList] = useState([]);

  useEffect(() => {
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => setPostList(data.results));
  }, []);

  const updatePostState = newPost => {
    const newPostList = [...postList];
    newPostList[newPostList.findIndex(post => post.id === newPost.id)] = newPost;
    setPostList(newPostList);
  };

  const updateInteraction = (postId, interaction) =>
    fetch(`${apiUrl}/${postId}/${interaction}`, { method: "POST" })
      .then(response => response.json())
      .then(updatePostState);

  return (
    <ul className="flex-container">
      {postList.map((post, index) => (
        <Post
          post={post}
          key={index}
          isOnPostPage={true}
          onLikeClick={() => updateInteraction(post.id, "like")}
          onDislikeClick={() => updateInteraction(post.id, "dislike")}
          onUnlikeClick={() => updateInteraction(post.id, "unlike")}
          onUndislikeClick={() => updateInteraction(post.id, "undislike")}
        />
      ))}
    </ul>
  );
};

export default PostList;
