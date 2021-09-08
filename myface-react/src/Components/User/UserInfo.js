import React from "react";

const UserInfo = ({ name, email }) => (
  <div className="user content-container">
    <div className="post-info post-creator">{name}</div>
    <div className="post-info post-date">{email}</div>
  </div>
);

export default UserInfo;
