import React, { useState, useEffect } from "react";
import User from "./User";

const UserList = () => {
  const [userList, setUserList] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/users")
      .then(response => response.json())
      .then(data => setUserList(data.results));
  });

  return (
    <ul className="flex-container">
      {userList.map(user => (
        <User user={user} />
      ))}
    </ul>
  );
};

export default UserList;
