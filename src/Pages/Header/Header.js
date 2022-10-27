import React from "react";
import { Link } from "react-router-dom";
import { FaBookReader } from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { useState } from "react";

const Header = () => {
  // this state for toggle
  const [toggle, setToggle] = useState(false);
  const { user, logOut } = useContext(AuthContext);

  const handelLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.error(error));
  };
  return (
    <div className="navbar bg-base-100 font-mono">
      <div className="navbar-start ">
        <div className="dropdown">
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
        </div>
        <Link to="/home" className="btn btn-ghost normal-case text-xl">
          <FaBookReader className="mr-1"></FaBookReader>
          <p>EduChamp</p>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/courses">Courses</Link>
          </li>

          <li>
            <Link to="/faq">FAQ</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
          <li>
            {/* this is for toogle button  */}
            <div className="flex">
              <label className="inline-flex relative items-center mr-5 cursor-pointer">
                <input
                  type="checkbox"
                  className="sr-only peer "
                  checked={toggle}
                  readOnly
                />
                <div
                  onClick={() => {
                    setToggle(!toggle);
                  }}
                  className="w-11 h-6 bg-gray-200 rounded-full peer  peer-focus:ring-green-300  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-600"
                ></div>
              </label>
            </div>
          </li>
        </ul>
      </div>
      <>
        {user?.uid ? (
          <>
            <div className="navbar-end">
              <button onClick={handelLogOut} className="btn">
                LogOut
              </button>
            </div>
          </>
        ) : (
          <div className="navbar-end">
            <Link to="/login" className="btn">
              Login
            </Link>
          </div>
        )}
        {user?.photoURL ? (
          <img
            title={user.displayName}
            className="ml-2"
            alt=""
            style={{ height: "30px" }}
            src={user?.photoURL}
          ></img>
        ) : (
          // <FaUser className="ml-2"></FaUser>
          <div></div>
        )}
      </>
    </div>
  );
};

export default Header;
