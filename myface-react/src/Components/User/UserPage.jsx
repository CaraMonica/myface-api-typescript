import React, { Fragment, useState, useEffect } from "react";
import User from "./User";

const UserPage = ({ match }) => {
  const [userList, setUserList] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/users")
      .then(response => response.json())
      .then(data => setUserList(data.results));
  }, []);

  const user = userList.find(({ id }) => id === parseInt(match.params.userId));
  return user ? <User user={user} /> : <div> user not found </div>
};

export default UserPage;
