// User fills out SignupForm
// Hits route with a post request
// Into controllers where we have a function that will store the users token.
// Must communicate with the authService function in the frontend

// Now that the user has been authenticated

// User is able to view information such as:
// name, email, password that was entered in the signupForm
// Alias?, Bio?

// In App.jsx we must import
// import Login from "../Login/Login";
// import Signup from "../Signup/Signup";
// import authService from "../../services/authService";
//and return a Route

import React, { Component } from "react";
import { getAllUsers } from "../../services/userService";

class UserProfile extends Component {
  state = {
    users: [],
    invalidForm: true,
    formData: {
      name: "",
      email: "",
      password: "",
      avatar: "",
      github: "",
      linkedIn: "",
      website: "",
    },
  };

  async componentDidMount() {
    const users = await getAllUsers();
    this.setState({ users });
  }

  handleChange = (e) => {
    const formData = {
      ...this.state.formData,
      [e.target.name]: e.target.value,
    };
    console.log(this.state)
    console.log(this.props.myResources)
    this.setState({
      formData,
      invalidForm: !this.formRef.current.checkValidity(),
    });
  };

  render() {
    return (
      <>
        <h1>User Profile</h1>
        <div id="UserProfile" className="row">
          <form
            className="col s12"
            ref={this.formRef}
            onSubmit={this.handleSubmit}
          >
            <div className="row">
              <div className="input-field col s12">
                <input
                  name="user-name"
                  id="user-name"
                  type="text"
                  className="active"
                  value={this.state.formData.name}
                  onChange={this.handleChange}
                  required
                />
                <label className="card-text" htmlFor="profile-name">
                  User Name:
                </label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12">
                <input
                  name="email"
                  id="email"
                  type="text"
                  autoComplete="off"
                  className="active"
                  value={this.state.formData.email}
                  onChange={this.handleChange}
                  required
                />
                <label className="card-text" htmlFor="email">
                  Email:
                </label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12">
                <input
                  name="password"
                  id="password"
                  type="text"
                  autoComplete="off"
                  className="active"
                  value={this.state.formData.url}
                  onChange={this.handleChange}
                />
                <label className="card-text" htmlFor="password">
                Password:
                </label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12">
                <input
                  name="avatar"
                  id="avatar"
                  type="text"
                  autoComplete="off"
                  className="active"
                  value={this.state.formData.url}
                  onChange={this.handleChange}
                />
                <label className="card-text" htmlFor="avatar">
                Avatar (url):
                </label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12">
                <input
                  name="github"
                  id="github"
                  type="text"
                  autoComplete="off"
                  className="active"
                  value={this.state.formData.url}
                  onChange={this.handleChange}
                />
                <label className="card-text" htmlFor="github">
                GitHub Profile (url):
                </label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12">
                <input
                  name="linkedIn"
                  id="linkedIn"
                  type="text"
                  autoComplete="off"
                  className="active"
                  value={this.state.formData.url}
                  onChange={this.handleChange}
                />
                <label className="card-text" htmlFor="linkedIn">
                LinkedIn Profile (url):
                </label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12">
                <input
                  name="website"
                  id="website"
                  type="text"
                  autoComplete="off"
                  className="active"
                  value={this.state.formData.url}
                  onChange={this.handleChange}
                />
                <label className="card-text" htmlFor="website">
                Website (url):
                </label>
              </div>
            </div>
            <button
              type="submit"
              className="btn"
              disabled={this.state.invalidForm}
            >
              Submit Resource
            </button>
          </form>
        </div>
      </>
    );
  }
}

export default UserProfile;
