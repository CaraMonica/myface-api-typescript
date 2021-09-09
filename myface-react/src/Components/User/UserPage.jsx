import React, { useState, useEffect } from "react";
import User from "./User";

const UserPage = ({ match, location }) => {
    const [user, setUser] = useState(undefined)

    useEffect(() => {
        fetch("http://localhost:3001/users")
            .then(response => response.json())
            .then(data => setUser(data.results.find(({ userId }) => userId === match.params.userId)))
    }, [match.params.userId]);

    return user ? <User user={user} /> : <div> user not found </div>
}

export default UserPage;