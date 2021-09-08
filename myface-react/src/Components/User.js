import React from "react";
import Post from "./Post";
import UserCoverImage from "./UserCoverImage";

const User = ({ user }) => (
  <li className="user post-item">
    <UserCoverImage coverImageUrl={user.coverImageUrl} username={user.username} />
    <div className="table-row">
      <div className="profile-img-container">
        <img className="profile-img" src={user.profileImageUrl} alt={`${user.username} profile`} />
      </div>
      <div className="user content-container">
        <div className="post-info post-creator">{user.name}</div>
        <div className="post-info post-date">{user.email}</div>
      </div>
    </div>
    Posts
    <ul className="flex-container user-posts">
      {user.posts.map(post => (
        <Post post={post} isOnPostPage={false}/>
      ))}
    </ul>
  </li>
);

export default User;
