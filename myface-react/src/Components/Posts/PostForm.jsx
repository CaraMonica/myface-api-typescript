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
      <form method="post" onSubmit={onFormSubmit}>
        <label>
          What's on your mind?
          <textarea onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            value={formData.message}
            type="text" name="message" />
        </label>
        <br />
        <br />
        <label>
          Image url:
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