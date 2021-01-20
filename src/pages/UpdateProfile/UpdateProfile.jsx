// The user has been authenticated but they want to update their info 

// They must click of "Update Profile" or something of the like
// Hits route with a put request

// User is directed to SignupForm
// User updates SignupForm
// Hits route with a post request
// Into controllers where we have a function that will store the users token.

// In App.jsx we must import Updateprofile, import { Route, Redirect } from "react-router-dom"; and return a Route, then Redirect to UserProfile.
// Must use a handleUpdateProfile variable here

import React, { Component } from "react";
import './UpdateProfile.css'

class UpdateProfile extends Component {
  state = {
    users: [],
    invalidForm: true,
    formData: {
      github: "",
      linkedIn: "",
      website: "",
    },
  };

  formRef = React.createRef();

//   async componentDidMount() {
//     const users = await getAllUsers();
//     this.setState({ users });
//   }

// handleSubmit = e => {
//     e.preventDefault();
//     this.props.handleAddPuppy(this.state.formData);
// };

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
      
        <h1>Update Profile</h1>
        <h4>Connect with your classmates</h4>
        <div id="UserProfile" className="row">
          <form
            className="col s12"
            ref={this.formRef}
            onSubmit={this.handleSubmit}
          >
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
              Update
            </button>
          </form>
        </div>
      </>
    );
  }
}

export default UpdateProfile;