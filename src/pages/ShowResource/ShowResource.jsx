/* 
PSEUDO CODE:
- import react, ResourceCard
- Add ShowResource component
    -render a div and pass resource props to be shown on page
        - create a text-box for user notes
        - Create a form to submit notes
            - ref formRef
            - add onSubmit to handle handleSubmit function
            - add onChange event handler to text box
            - Create submit button to render notes on the same page

*/


import React, { Component } from 'react';
import AddNote from '../../components/AddNote/AddNote'
import * as resourceAPI from '../../services/resourceApi'
import * as noteAPI from '../../services/noteApi'
import './ShowResource.css'



class ShowResource extends Component {
  state = {
    resource: this.props.location.state.resource,
    notes: [...this.props.location.state.resource.notes],
  }

  async componentDidMount() {
    const resource = await resourceAPI.getResource(this.props.location.state.resource._id);
    this.setState({notes: [...resource.notes]})
  }

  handleAddNote = async (newNoteData) => {
    console.log(newNoteData)
    console.log(this.state)
    const resource = await noteAPI.addNote(newNoteData);
    console.log(resource)
    this.setState(state => ({
      notes: [...state.notes, resource.notes[resource.notes.length - 1]]
    })
    );
  };



  render() {
    const resource = this.props.location.state.resource;
    return (
      <>
           <div id="addResource" className="row">
          <a href={resource.url}>
            <p className="resource-title">{resource.title}</p>
          </a>
          <div className="row">
            <p>Description: <br/>{resource.description}</p>
          </div>
          <div className="row">
            <p>Tags: <br />{resource.tag}</p>
          </div>

          <div className="row">
          <div className="overflow-auto">
            {this.state.notes.map((note) => (
                <p>{note.userName}: {note.content}</p>
            ))}
            </div>
            <div>
              {this.state.notes.map((note) => (
                <div>
                  {note.userName}: {note.content}
                </div>
              ))}
              <AddNote
                    resource={resource}
                    handleAddNote={this.handleAddNote}
                  />
                  <button
                    onClick={() => this.props.handleAddToSavedItems(resource)}
                  >
                    Save
                  </button>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default ShowResource;


