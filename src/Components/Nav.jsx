import { Link } from "react-router-dom";

const Nav = ({ user }) => {
  return (
    <nav>
      <h1>^ NC Marketplace</h1>
      <div>
        <Link className="nav-links" to="/">
          Home
        </Link>
        {user === "Guest" ? (
          <Link className="nav-links" to="/profile">
            Sign in
          </Link>
        ) : (
          <Link className="nav-links" to={`/profile/${user}`}>
            Profile
          </Link>
        )}
        <Link className="nav-links" to="/profile/:username/basket">
          Basket
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
