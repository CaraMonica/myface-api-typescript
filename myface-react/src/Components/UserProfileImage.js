import React from "react";

const UserProfileImage = ({ profileImageUrl, username }) => (
  <div className="profile-img-container">
    <img className="profile-img" src={profileImageUrl} alt={`${username} profile`} />
  </div>
);

export default UserProfileImage;
