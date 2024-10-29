import { Link, useLocation, useNavigate } from 'react-router-dom';
import Auth from '../../utils/auth';

function Header() {
  const currentPage = useLocation().pathname;
  const navigate = useNavigate(); // Use this to redirect after logout

  const logout = (event) => {
    event.preventDefault();
    Auth.logout(); // Call the Auth.logout() method
    navigate('/'); // Redirect to the home page or any other page
  };

  return (
    <ul className="nav nav-tabs">
      <h2 className='header'>Adventure Game</h2>
      <li className="nav-item">
        <Link
          to="/"
          className={currentPage === '/' ? 'nav-link active' : 'nav-link'}
        >
          Dashboard
        </Link>
      </li>
      {!Auth.loggedIn() ? (
        <>
          <li className="nav-item">
            <Link
              to="/login"
              className={currentPage === '/login' ? 'nav-link active' : 'nav-link'}
            >
              Login
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/signup"
              className={currentPage === '/signup' ? 'nav-link active' : 'nav-link'}
            >
              Signup
            </Link>
          </li>
        </>
      ) : (
        <li className="nav-item">
          <button
            className="nav-link btn btn-link"
            onClick={logout}
          >
            Logout
          </button>
        </li>
      )}
    </ul>
  );
}

export default Header;
