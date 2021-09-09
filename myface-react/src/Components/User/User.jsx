import React from "react";
import Post from "../Posts/Post";
import UserCoverImage from "./UserCoverImage";
import UserProfileImage from "./UserProfileImage";
import UserInfo from "./UserInfo";

const User = ({ user }) => (
  <div>
    <UserCoverImage coverImageUrl={user.coverImageUrl} username={user.username} />
    <div className="table-row">
      <UserProfileImage profileImageUrl={user.profileImageUrl} username={user.username} />
      <UserInfo name={user.name} email={user.email} />
    </div>
    {/* <ul className="flex-container user-posts">
      {user.posts.map(post => (
        <Post post={post} isOnPostPage={false}/>
      ))}
    </ul> */}
  </div>
);

export default User;
