import React, { useState } from 'react';
const CreatePostForm = () => {
const [formData, setFormData] = useState({
                                    message: "",
                                    imageUrl: ""
                                    });
   return (<>
        <h3> Create Post</h3>
        <form>
            <label>
                Please type your post here:
                <textarea onChange={(e) => setFormData({...formData, message: e.target.value})} value={formData.message} type="text" name="message" />
            </label>
            <label>
                Please enter the url for an image here:
                <input onChange={(e) => setFormData({...formData, imageUrl: e.target.value})} value={formData.imageUrl} type="url" name="imageUrl" />
            </label>
            {/* <label>
                or upload an image from your computer here:
                <input type="file" name="imageUrl" />
            </label> */}
   
        </form>
        <button type="submit">Submit</button>

       
    </>)

};

export default CreatePostForm;


