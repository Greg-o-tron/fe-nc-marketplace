import { useState } from "react";
import { getAllUsers } from "../Utils/api";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const ProfileList = ({ user, setUser }) => {
  const [users, setUsers] = useState([]);

  const displayAllUsers = () => {
    getAllUsers().then((allUsers) => {
      setUsers(allUsers);
    });
  };

  useEffect(() => {
    displayAllUsers();
  }, []);

  useEffect(() => {}, [user]);

  return (
    <div className="ProfileList">
      <h2>Select user</h2>
      <ul>
        {users.map((user) => {
          return (
            <Link to={`/profile/${user.username}`} key={user.username}>
              <li
                className="user__card"
                onClick={() => setUser(user.username)}
              >
                <h3>{user.username}</h3>
                <img src={user.avatar_url} alt={user.username}></img>
                <p>Kudos: {user.kudos}</p>
              </li>
            </Link>
          );
        })}
      </ul>
    </div>
  );
};

export default ProfileList;
