import React from "react";
import { Link } from "react-router-dom";

const NavBar = ({ user, handleLogout }) => {
  return (
    <>
      {user ? (
        <nav>
          <div className="nav-wrapper">
            <ul id="nav-mobile" className="left hide-on-med-and-down">
              <li className="nav-link">Welcome, {user.name}</li>
            </ul>
            <ul className="right hide-on-med-and-down">
            <li>
              <a class="active" href="/myNotebook">MyNotebook</a>
            </li>
            <li>
              <a class="active" href="/search">Search</a>
            </li>
            <li>
              <a class="active" href="/studyBuddy">Study Buddy</a>
            </li>
            <li>
              <a class="active" href="/chat">Chat</a>
            </li>
            <li>
              <a class="active" href="/myProfile">Profile</a>
            </li>
            <li>
              <a class="active" href=" ">Log Out</a>
            </li>
            </ul>
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