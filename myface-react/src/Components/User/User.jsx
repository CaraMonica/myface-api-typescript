import React from "react";
// import Post from "../Posts/Post";
import UserCoverImage from "./UserCoverImage";
import UserProfileImage from "./UserProfileImage";
import UserInfo from "./UserInfo";

const User = ({ user }) => (
  <div className="user-profile-container">
    <div className="user-info-row">
      <UserProfileImage profileImageUrl={user.profileImageUrl} username={user.username} />
      <UserInfo name={user.name} email={user.email} />
    </div>
    <UserCoverImage coverImageUrl={user.coverImageUrl} username={user.username} />
  </div>
);

export default User;
