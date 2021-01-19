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


class ShowResource extends Component {
  state = { 
    resource: this.props.location.state.resource
   }

  render() { 
    const resource = this.props.location.state.resource;
    return (
      <>
        
        <p>Title: {resource.title}</p>
        <p>Description: {resource.description}</p>
        <p>Tags: {resource.tag}</p>
        <a href={resource.url}>Go to Resource</a>
          {resource.notes.map((note) =>(
              <div>Note: {note.content}</div>
          ))}
  
        <button>Save</button>
        <button>Upvote</button>
              <AddNote
              resource={resource}
              handleAddNote={this.props.handleAddNote}
              />
        </>
    )
  }
}
 
export default ShowResource;


