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



class ShowResource extends Component {
  state = { 
    resource: this.props.location.state.resource,
    notes: [...this.props.location.state.resource.notes]
   }


  // async componentDidMount() {
  //   const resource = await resourceAPI.getOne()
  //   if (this.state.user) {
  //     const myResources = await resourceAPI.getMyResources(this.state.user);
  //     this.setState({ myResources: myResources.savedItems });
  //   }
  // }

  handleAddNote = async (newNoteData) => {
    console.log(newNoteData)
    console.log(this.state)
    const newNote = await noteAPI.addNote(newNoteData);
    console.log(newNote)
    this.setState(state => ({
        notes: [...state.notes, newNote.notes[newNote.notes.length - 1]]
      })
    );
  };

  render() { 
    const resource = this.props.location.state.resource;
    return (
      <>
        
        <p>Title: {resource.title}</p>
        <p>Description: {resource.description}</p>
        <p>Tags: {resource.tag}</p>
        <a href={resource.url}>Go to Resource</a>
          {this.state.notes.map((note) =>(
              <div>Note: {note.content}</div>
          ))}
  
        <button>Save</button>
        <button>Upvote</button>
              <AddNote
              resource={resource}
              handleAddNote={this.handleAddNote}
              />
        </>
    )
  }
}
 
export default ShowResource;


