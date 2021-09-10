import { React, Fragment, useState, useEffect } from "react";
import Post from "./Post";
import ArrowButtons from "../ArrowButtons";

const apiUrl = "http://localhost:3001/posts";

const PostListPage = () => {
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
    <Fragment>
      <ArrowButtons onPreviousClick={() => console.log("previous")} onNextClick={() => console.log("next")} />
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
    </Fragment>
  );
};

export default PostListPage;
