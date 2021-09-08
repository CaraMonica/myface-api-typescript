import React from "react";

const UserCoverImage = ({ coverImageUrl, username }) => (
  <img className="cover-img" src={coverImageUrl} alt={`${username} cover`} />
);

export default UserCoverImage;
