/*
PSEUDOCODE

FRONTEND FOR SEARCH FIELD

-Import react (including component)
-Declare a class component, establish state with results: [], queryString: ''
-Add formRef = React.createRef() for form validation
-Add standard handleSubmit(calling the handlSearch function passed via props) and handleChange functions (can copy and paste)
-Render the form (only one field for the search query) and set onSubmit to be this.handleSubmit


BACKEND FOR SEARCH FIELD

Routes - Will utilize the resources router at /search, check auth, and call resourcesCtrl.search

Controllers - Creating a MongoDB text indexes to estabslish that you want to search for specific terms within strings and passing it title, Resource.find({}) using the Mongo $text and $search functions to search for keywords inside the title string, and then return results in a .json object.


FRONTEND FOR TRENDING RESOURCES

-Before a user makes a search, render a certain number (6?) of randomly chosen resources for the "Trending Resources" section. When componentDidMount is true && results === [], perform a db fetch through resourcesAPI.getRandom 
-resourcesAPI.getRandom will fetch via the BASE_URL/search/random path and return those results to the search page

BACKEND FOR TRENDING RESOURCES

Routes - Utilizes the resources router at /search/random, will check auth, and will call resourcesCtrl.randomSearch (need to differentiate because we will also need random results for the home page)

Controllers - will use .aggregate method to find random resources and pass them back in a .json object.


NOTES: must import resourcesAPI on App.js and pass handleSearch function to the /search Route, must also import this file on App.js


*/

import React, { Component } from "react";
import ShowResource from "../ShowResource/ShowResource";
import "./Search.css";

class SearchResources extends Component {
  state = {
    invalidForm: false,
    formData: {
      queryString: "",
    },
    results: [],
  };

  formRef = React.createRef();

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.handleSearch(this.state.formData);
  };

  handleChange = (e) => {
    const formData = {
      ...this.state.formData,
      [e.target.name]: e.target.value,
    };
    this.setState({
      formData,
      invalidForm: !this.formRef.current.checkValidity(),
    });
  };

  render() {
    return (
      <>
        <h2>Search Resources</h2>
        <div id="searching" className="row">
          <form className="col" ref={this.formRef} onSubmit={this.handleSubmit}>
            <div className="row">
              <div className="input-field">
                <input
                  className="active"
                  name="queryString"
                  value={this.state.formData.queryString}
                  onChange={this.handleChange}
                ></input>
              </div>
            </div>
            <button 
            type="submit"
            className="btn"
            disabled={this.state.invalidForm}
            >Submit</button>
          </form>
        </div>
        <div className="search-results">
        {this.props.searchResults.map((result) => (
          <div class="card">
            {/* <div class="card-image waves-effect waves-block waves-light">
              <img class="activator" src="/public/logo512.png" />
            </div> */}
            <div class="card-content">
              <span class="card-title activator grey-text text-darken-4">
                <a href={result.url}>{result.title}</a>
                {/* <i class="material-icons right">more_vert</i> */}
              </span>
              <p>Description: {result.description}</p>
            </div>
            <div class="card-reveal">
              <span class="card-title grey-text text-darken-4">
                Card Title<i class="material-icons right">close</i>
              </span>
              {/* <ShowResource 
                  /> */}
            </div>
          </div>
        ))}
        </div>
      </>
    );
  }
}

export default SearchResources;
