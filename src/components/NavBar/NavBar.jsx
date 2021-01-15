import React from "react";
import { Link } from "react-router-dom";

const NavBar = ({ user, handleLogout }) => {
  return (
    <>
      {user ? (
        <nav>
          <div className="nav-wrapper">
            <ul id="nav-mobile" className="right">
              <li className="nav-link">Welcome, {user.name}</li>
            </ul>
            <Link to="/myNotebook" className="nav-link">
              MyNotebook
            </Link>
            <Link to="/search" className="nav-link">
              Search
            </Link>
            <Link to="/flashcards" className="nav-link">
              Study Buddy
            </Link>
            <Link to="/chat" className="nav-link">
              Chat
            </Link>
            <Link to="/myProfile" className="nav-link">
              Profile
            </Link>
            <Link to=" " className="nav-link" onClick={handleLogout}>
              Log Out
            </Link>
          </div>
        </nav>
      ) : (
        <nav>
          <div className="nav-wrapper">
            <ul id="nav-mobile" className="right">
              <li>
                <Link to="/login" className="nav-link">
                  Log In
                </Link>
              </li>
              <li>
                <Link to="/signup" className="nav-link">
                  Sign Up
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      )}
    </>
  );
};

export default NavBar;
