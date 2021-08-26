import { useEffect, useState } from "react";
import { getSingleUser } from "../Utils/api";
import { Link } from "react-router-dom";

const UserProfile = ({ user, setUser }) => {
  const [profile, setProfile] = useState({});

  useEffect(() => {
    getSingleUser(user).then((profile) => {
      console.log(profile);
      setProfile(profile);
    });
  }, []);

  return (
    <div className="UserProfile">
      <h3>{profile.username}</h3>
      <img src={profile.avatar_url} alt={profile.username}></img>
      <p>Kudos: {profile.kudos}</p>
      <h4>Items ordered: {profile.items_ordered}</h4>
      <Link to={`/profile`}><button onClick={() => setUser("Guest")}>Log out</button></Link>
    </div>
  );
};

export default UserProfile;
