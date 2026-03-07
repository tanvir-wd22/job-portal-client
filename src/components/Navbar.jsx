import { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import AuthContext from '../context/AuthContext';
import Swal from 'sweetalert2';
import logo from '../assets/logo.png';

const Navbar = () => {
  const { user, logoutUser } = useContext(AuthContext);

  const handleLogoutBtn = () => {
    logoutUser()
      .then(() => {
        Swal.fire('log out done');
      })
      .catch(() => {
        Swal.fire('log out failed');
      });
  };

  const links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/myApplications">My Applications</NavLink>
      </li>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
    </>
  );
  return (
    <div>
      <div className="navbar bg-base-300 shadow-sm z-50">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {' '}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{' '}
              </svg>
            </div>
            <ul
              tabIndex={-1}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <div className="flex gap-1 items-center">
            <img src={logo} className="w-8" />
            <span className="btn btn-ghost text-xl">Job Portal</span>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end hidden lg:flex gap-2">
          {user ? (
            <>
              <span>{user?.displayName || 'Logged User'}</span>
              <button
                onClick={handleLogoutBtn}
                className="btn btn-xs btn-error"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="btn btn-xs">
                Login
              </Link>
              <Link to="/register" className="btn btn-xs">
                Register
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
