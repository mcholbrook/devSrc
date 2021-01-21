import React, { Component } from "react";
import FlashCardStack from "../FlashCardStack/FlashCardStack";
import * as flashCardAPI from "../../services/flashCardApi";
import './AddFlashcard.css'

class AddFlashCard extends Component {
  state = {
    invalidForm: true,
    formData: {
      frontSide: "",
      backSide: "",
      tag: [],
    },
    user: this.props.user,
  };

  formRef = React.createRef();

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.handleAddFlashCard(this.state.formData);
    this.setState({formData: {frontSide: "",
    backSide: "",
    tag: []}})
  };

  // handleDeleteFlashCard = async (id) => {
  //     await flashCardAPI.deleteFlashCard(id)
  //     this.setState((state) => ({
  //         flashCards: state.flashCards.filter((f) => f._id !== id)
  //     }), () => this.props.history.push('/studyBuddy'))
  // }

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
        <div id="AddFlashCard" className="row">
        <h3>Add New Flashcard</h3>
          <form
            className="col s12"
            ref={this.formRef}
            onSubmit={this.handleSubmit}
          >
            <div className="row">
              <div className="input-field col s12">
                <input
                  name="frontSide"
                  id="flashCard-front"
                  type="text"
                  className="active"
                  value={this.state.formData.frontSide}
                  onChange={this.handleChange}
                  required
                />
                <label className="card-text" htmlFor="flashCard-front">Prompt:</label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12">
                <input
                  name="backSide"
                  id="flashCard-back"
                  type="text"
                  className="active"
                  value={this.state.formData.backSide}
                  onChange={this.handleChange}
                  required
                />
                <label className="card-text" htmlFor="flashCard-back">Answer:</label>
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
              <i className="material-icons left"></i>
              Add FlashCard
            </button>
          </form>
        </div>
      </>
    );
  }
}

export default AddFlashCard;

// import react
// import styling

// define class
// bring in state and user from app.js
// set validForm to false
// addCard functionality from app.js
// returns a render of a form for the user to define what the front and back of the card will contain,
// along with checkboxes to define tags
// submit button that saves card for user in appropriate card stack

// export class
