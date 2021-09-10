import React, { useEffect, useState } from "react";
import User from "./User";

const UserListPage = () => {
  const [userList, setUserList] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/users")
      .then(response => response.json())
      .then(data => setUserList(data.results));
  });

  return (
    <ul className="flex-container">
      {userList.map((user, index) => (
        <li key={index}>
          <User user={user} />
        </li>
      ))}
    </ul>
  );
};

export default UserListPage;
