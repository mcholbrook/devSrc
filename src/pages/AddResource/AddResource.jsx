/* 
PSEUDO CODE:
- Write the route in routes/resources to create a resource
- Write the Create controller function
    - export create
- Write the api method for creating a resource
    - import token
    - set base_URL
- Add the AddResource Component
    - import react
    - set state of the form 
    - write handleSubmit function
    - write handleSubmit function
    - formRef = React.createRef();
    - Render a form
        - ref formRef
        - add onSubmit to handle handleSubmit function
        - set input values
        - add onChange event handler to inputs
        - Create submit button
- Write the route in app.js
*/


import React, {Component} from 'react'
import * as resourceAPI from '../../services/resourceApi'
import ResourceList from "../../components/ResourceList/ResourceList";
import "./AddResource.css";

class AddResource extends Component {
  state = {
    invalidForm: true,
    formData: {
      title: "",
      description: "",
      url: "",
      tag: "",
    },
    resources: [],
  };

  formRef = React.createRef();

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.handleAddResource(this.state.formData);
  };

  handleDeleteResource = async (id) => {
	await resourceAPI.deleteFromSaved(id)
	this.setState((state) => ({
	  resources: state.resources.filter((r) => r._id !== id)
	}), () => this.props.history.push('/myNotebook'))
  }

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

//   handleAddNote = async (addNoteToResource) => {
//     const addNewNote = await resourceAPI.addNote(addNoteToResource)
//     const newNoteArray = this.state.reasources.map((r) =>
//     r._id === addNewNote._id ? addNewNote : r)
//     this.setState ({resources: newNoteArray}, () => 
//     this.props.history.push("/details"))
//   }





  render() {
    return (
      <>
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
    );
  }
}

export default AddResource;
