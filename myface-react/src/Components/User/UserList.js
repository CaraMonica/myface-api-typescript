import { useState, useEffect } from "react";

const UserList = () => {
  const [userList, setUserList] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/users/")
      .then(response => response.json())
      .then(data => setUserList(data.results));
  });

  return userList
};

export default UserList;
