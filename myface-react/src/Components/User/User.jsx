import React from "react";
// import Post from "../Posts/Post";
import UserCoverImage from "./UserCoverImage";
import UserProfileImage from "./UserProfileImage";
import UserInfo from "./UserInfo";

const User = ({ user }) => (
  <div className="user-profile-container">
    <UserCoverImage coverImageUrl={user.coverImageUrl} username={user.username} />
    <div className="table-row">
      <UserProfileImage profileImageUrl={user.profileImageUrl} username={user.username} />
      <UserInfo name={user.name} email={user.email} />
    </div>
  </div>
);

export default User;
