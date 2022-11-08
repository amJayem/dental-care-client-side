import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Contexts/AuthProvider";

const Header = () => {
  const { user, signOutUser } = useContext(AuthContext);

  // console.log('header user: ', user);

  const handleSignOut = () =>{
    signOutUser()
    .then()
    .catch(e=>console.error('logout error => ', e));
  };

  return (
    <div>
      <div className="navbar bg-base-200">
        <div className="navbar-start">
          <div className="dropdown ">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link to="/">Home</Link>
              </li>
              <li tabIndex={0}>
                <Link to="/services" className="justify-between">
                  Services
                  <svg
                    className="fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                  </svg>
                </Link>
                <ul className="p-2">
                  <li>
                    <Link to="/">Submenu 1</Link>
                  </li>
                  <li>
                    <Link to="/">Submenu 2</Link>
                  </li>
                </ul>
              </li><li>
                <Link to="/add-service">Add Service</Link>
              </li>
              {user?.email ? (
                <>
                  <li>
                    <Link to="/my-reviews">My Reviews</Link>
                  </li>
                  <li>
                    <Link onClick={handleSignOut}>Logout</Link>
                  </li>
                </>
              ) : (
                <>
                  <li>
                    <Link to="/login">Login</Link>
                  </li>
                  <li>
                    <Link to="/register">SignUp</Link>
                  </li>
                </>
              )}
            </ul>
          </div>
          <Link to="/" className="btn btn-ghost normal-case text-xl">
            Dental Care
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li tabIndex={0}>
              <Link to="/services">
                Services
                <svg
                  className="fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                >
                  <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                </svg>
              </Link>
              <ul className="p-2">
                <li>
                  <Link to="/">Submenu 1</Link>
                </li>
                <li>
                  <Link to="/">Submenu 2</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to="/">Blog</Link>
            </li>
            <li>
                <Link to="/add-service">Add Service</Link>
              </li>
            {user?.email ? (
              <>
              <li>
                <Link to="/my-reviews">My Reviews</Link>
              </li>
                <li>
                  <Link onClick={handleSignOut}>Logout</Link>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link to="/login">Login</Link>
                </li>
                <li>
                  <Link to="/register">SignUp</Link>
                </li>
              </>
            )}
          </ul>
        </div>
        <div className="navbar-end">
          <Link to="/" className="">
            {user?.email ? user.email : "No user"}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
