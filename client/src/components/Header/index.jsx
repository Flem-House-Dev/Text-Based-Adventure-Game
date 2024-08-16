import { Link, useLocation } from "react-router-dom";
import Auth from "../../utils/auth";

function Header() {
  const currentPage = useLocation().pathname;

  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };

  return (
    <>
      <ul className="nav nav-tabs">
        <h2 className="header">Adventure Game</h2>
        <li className="nav-item">
          <Link
            to="/"
            className={currentPage === "/" ? "nav-link active" : "nav-link"}
          >
            Dashboard
          </Link>
        </li>

        {Auth.loggedIn() ? (
          <>
            <span>Hey there, {Auth.getProfile().data.username}!</span>
            <button className="btn btn-lg btn-light m-2" onClick={logout}>
              Logout
            </button>
          </>
        ) : (
          <>
            <li className="nav-item">
              <Link
                to="/login"
                className={
                  currentPage === "/login" ? "nav-link active" : "nav-link"
                }
              >
                Login
              </Link>
            </li>

            <li className="nav-item">
              <Link
                to="/signup"
                className={
                  currentPage === "/signup" ? "nav-link active" : "nav-link"
                }
              >
                Signup
              </Link>
            </li>
          </>
        )}
      </ul>
    </>
  );
}

export default Header;
