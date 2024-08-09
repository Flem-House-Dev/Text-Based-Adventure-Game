import { Link, useLocation } from 'react-router-dom';


function Header() {
  const currentPage = useLocation().pathname;

  return (
    <>
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
      <li className="nav-item">
        <Link
          to="/game"
          className={currentPage === '/game' ? 'nav-link active' : 'nav-link'}
        >
          Game
        </Link>
      </li>
    </ul>
    </>
  );
}

export default Header;
