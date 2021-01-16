import React from "react";
import { Link } from "react-router-dom";
import './NavBar.css'

const NavBar = ({ user, handleLogout }) => {
  return (
    <>
      {user ? (
        <nav>
          <div className="nav-wrapper teal lighten-2" >
            <ul id="nav-mobile" className="left hide-on-med-and-down">
              <li className="nav-link">Welcome, {user.name}</li>
            </ul>
            <ul className="right hide-on-med-and-down">
            <li>
              <a className="active" href="/myNotebook">MyNotebook</a>
            </li>
            <li>
              <a className="active" href="/search">Search</a>
            </li>
            <li>
              <a className="active" href="/studyBuddy">Study Buddy</a>
            </li>
            <li>
              <a className="active" href="/chat">Chat</a>
            </li>
            <li>
              <a className="active" href="/myProfile">Profile</a>
            </li>
            <li className="right">
              <a className="active" href=" " onClick={handleLogout}>Log Out</a>
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