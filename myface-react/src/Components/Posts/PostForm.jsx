import { React, Fragment, useState } from "react";

const PostForm = () => {
  const [message, setMessage] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const onCreatePost = event => {
    event.preventDefault();
    fetch("http://localhost:3001/posts/create", {
      method: "POST",
      body: JSON.stringify({ message, imageUrl }),
      headers: { "Content-Type": "application/json" },
    }).then(() => (window.location.href = "/posts"));
  };

  return (
    <Fragment>
      <h1>Create Post</h1>
      <form onSubmit={onCreatePost}>
        <label>
          What's on your mind:
          <input type="text" name="message" onChange={e => setMessage(e.target.value)} required />
        </label>
        <label>
          Image Link:
          <input type="url" name="imageUrl" onChange={e => setImageUrl(e.target.value)} required />
        </label>
        <button type="submit">Post</button>
      </form>
    </Fragment>
  );
};

export default PostForm;
