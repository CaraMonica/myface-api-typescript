import React, { useState, Fragment } from 'react';

const PostForm = () => {
  const [formData, setFormData] = useState({
    message: "",
    imageUrl: "",
  });

    const onFormSubmit = event => {
    event.preventDefault();
    fetch("http://localhost:3001/posts/create", {
      method: "POST",
      body: JSON.stringify({ message: formData.message, imageUrl: formData.imageUrl }),
      headers: { "Content-Type": "application/json" },
    }).then(() => (window.location.href = "/posts"));
  };

  return (
    <Fragment>
      <h3> Create Post</h3>
      <form method="post" onSubmit={onFormSubmit}>
        <label>
          Please type your post here:
          <textarea onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            value={formData.message}
            type="text" name="message" />
        </label>
        <label>
          Please enter the url for an image here:
          <input onChange={(e) => setFormData({ ...formData, imageUrl: e.target.value })}
            value={formData.imageUrl}
            type="url" name="imageUrl" />
        </label>
        {/* <label>
            or upload an image from your computer here:
            <input type="file" name="imageUrl" />
        </label> */}
        <button type="submit">Submit</button>
      </form>
    </Fragment>)
}

export default PostForm;