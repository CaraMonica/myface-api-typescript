import React from "react";

const User = ({ user }) => (
  <li className="user post-item">
    <img className="cover-img" src={user.coverImageUrl} alt={`${user.username} cover`} />
    <div className="table-row">
      <div className="profile-img-container">
        <img className="profile-img" src={user.profileImageUrl} alt={`${user.username} profile`} />
      </div>
      <div className="user content-container">
        <div className="post-info post-creator">{user.name}</div>
        <div className="post-info post-date">{user.email}</div>
      </div>
    </div>
  </li>
);

export default User;
