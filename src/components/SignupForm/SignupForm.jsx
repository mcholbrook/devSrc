import React, { Component } from "react";
import { Link } from "react-router-dom";
import authService from "../../services/authService";
import './SignupForm.css'

class SignupForm extends Component {
  state = {
    name: "",
    email: "",
    password: "",
    passwordConf: "",
  };

  handleChange = (e) => {
    this.props.updateMessage("");
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = async (e) => {
    const { history, updateMessage, handleSignupOrLogin } = this.props;
    e.preventDefault();
    try {
      await authService.signup(this.state);
      handleSignupOrLogin();
      history.push("/");
    } catch (err) {
      updateMessage(err.message);
    }
  };

  isFormInvalid() {
    const { name, email, password, passwordConf } = this.state;
    return !(name && email && password && password === passwordConf);
  }

  render() {
    const { name, email, password, passwordConf } = this.state;
    return (
      <div id="Signup" className="row">
        <h3>Sign Up</h3>
        <form
          className="col s12"
          autoComplete="off"
          onSubmit={this.handleSubmit}
        >
          <input
            type="text"
            autoComplete="off"
            id="name"
            className="active"
            value={name}
            name="name"
            onChange={this.handleChange}
          />
          <label 
          className="card-text" 
          htmlFor="name">
            Name
          </label>
          <input
            type="text"
            autoComplete="off"
            id="email"
            className="active"
            value={email}
            name="email"
            onChange={this.handleChange}
          />
          <label 
          className="card-text" 
          htmlFor="email">
            Email
          </label>
          <input
            type="password"
            autoComplete="off"
            id="password"
            className="active"
            value={password}
            name="password"
            onChange={this.handleChange}
          />
          <label 
          className="card-text" 
          htmlFor="password">
            Password
          </label>
          <input
            type="password"
            autoComplete="off"
            id="confirm"
            className="active"
            value={passwordConf}
            name="passwordConf"
            onChange={this.handleChange}
          />
          <label 
          className="card-text" 
          htmlFor="confirm">
            Confirm Password
          </label>
          <button 
          type="submit" 
          className="btn" 
          disabled={this.isFormInvalid()}>
            Sign Up
          </button>
          &nbsp;&nbsp;
          <Link className="btn red lighten-2" to="/">
            Cancel
          </Link>
        </form>
      </div>
    );
  }
}

export default SignupForm;

/*
<div id="addResource" className="row">
          <form
            className="col s12"
            ref={this.formRef}
            onSubmit={this.handleSubmit}
          >
            <div className="row">
              <div className="input-field col s12">
                <input
                  name="title"
                  id="resource_title"
                  type="text"
                  className="active"
                  value={this.state.formData.title}
                  onChange={this.handleChange}
                  required
                />
                <label className="card-text" htmlFor="resource_title">
                  Title:
                </label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12">
                <input
                  name="description"
                  id="description"
                  type="text"
                  autoComplete="off"
                  className="active"
                  value={this.state.formData.description}
                  onChange={this.handleChange}
                  required
                />
                <label className="card-text" htmlFor="description">
                  Description:
                </label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12">
                <input
                  name="url"
                  id="resource_url"
                  type="text"
                  autoComplete="off"
                  className="active"
                  value={this.state.formData.url}
                  onChange={this.handleChange}
                />
                <label className="card-text" htmlFor="rescource_url">
                  Link
                </label>
              </div>
            </div>
            <div className="tags">
              <label className="card-text">Tags:</label>
              <p className="tag-selections">
                <label>
                  <input
                    className="with-gap"
                    name="tag"
                    value="Javascript"
                    onChange={this.handleChange}
                    type="checkbox"
                  />
                  <span className="card-text">Javascript</span>
                </label>
              </p>
              <p className="tag-selections">
                <label>
                  <input
                    className="with-gap"
                    name="tag"
                    value="HTML"
                    onChange={this.handleChange}
                    type="checkbox"
                  />
                  <span className="card-text">HTML</span>
                </label>
              </p>
              <p className="tag-selections">
                <label>
                  <input
                    className="with-gap"
                    name="tag"
                    value="CSS"
                    onChange={this.handleChange}
                    type="checkbox"
                  />
                  <span className="card-text">CSS</span>
                </label>
              </p>
              <p className="tag-selections">
                <label>
                  <input
                    className="with-gap"
                    name="tag"
                    value="Node.js"
                    onChange={this.handleChange}
                    type="checkbox"
                  />
                  <span className="card-text">Node.js</span>
                </label>
              </p>
              <p className="tag-selections">
                <label>
                  <input
                    className="with-gap"
                    name="tag"
                    value="React"
                    onChange={this.handleChange}
                    type="checkbox"
                  />
                  <span className="card-text">React</span>
                </label>
              </p>
              <p className="tag-selections">
                <label>
                  <input
                    className="with-gap"
                    name="tag"
                    value="MongoDB"
                    onChange={this.handleChange}
                    type="checkbox"
                  />
                  <span className="card-text">MongoDB</span>
                </label>
              </p>
              <p className="tag-selections">
                <label>
                  <input
                    className="with-gap"
                    name="tag"
                    value="Python"
                    onChange={this.handleChange}
                    type="checkbox"
                  />
                  <span className="card-text">Python</span>
                </label>
              </p>
              <p className="tag-selections">
                <label>
                  <input
                    className="with-gap"
                    name="tag"
                    value="Django"
                    onChange={this.handleChange}
                    type="checkbox"
                  />
                  <span className="card-text">Django</span>
                </label>
              </p>
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
		<ResourceList 
			myResources={this.props.myResources}
			handleDeleteResource= {this.handleDeleteResource}
            // handleAddNote={this.handleAddNote}
			user= {this.props.user} />
      </>
*/
