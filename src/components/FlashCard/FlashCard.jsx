//import React, { useState } from 'react';
import React, { Component } from 'react';
import "./FlashCard.css"
import FrontFlashCard from '../FrontFlashCard/FrontFlashCard'
import BackFlashCard from '../BackFlashCard/BackFlashCard'
import ReactCardFlip from 'react-card-flip'


// function FlashCard({ frontSide, backSide, handleDeleteFlashCard, flashCard }) {
//         const [ isFront, changeFace] = useState(true);
//         function handleClick() {
//           changeFace( oldState => !oldState)
//         }
//         const text = isFront ? frontSide : backSide
//         const sideClass = isFront ? "front" : "back"
//         const classList = `flash-card ${sideClass}`
//         return (
//             <>
//                 <div 
//                   className={ classList } 
//                   onClick={handleClick}
//                 >
//                     {text}
//                 </div>
//                 <button
//                   type="submit"
//                   onClick={() => handleDeleteFlashCard(flashCard._id)}
//                   >
//                     Delete
//                   </button>
//             </>
//         )
//     }
    
// export default FlashCard;


class FlashCard extends Component {
  state = { 
    isFlipped: false
   }

  handleClick = (e) => {
    e.preventDefault();
    this.setState((prevState) => ({isFlipped: !prevState.isFlipped}))
  } 


  // handleSubmit = (e) => {
  //   e.preventDefault();
  //   this.props.handleAddResource(this.state.formData);
  //   this.setState((state) => ({
  //     formData: blankFormData
  //   }))
  // };

  render() { 
    return ( 
      <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="vertical">
        <FrontFlashCard 
          flashCard={this.props.flashCard}
          handleClick={this.handleClick}
        />
        <BackFlashCard 
          flashCard={this.props.flashCard}
          handleClick={this.handleClick}
          handleDeleteFlashCard={this.props.handleDeleteFlashCard}
        />
      
      </ReactCardFlip>
     );
  }
}
 
export default FlashCard;


// import react
// import styling

// define class
// bring in state and location from FlashCardStack route

// shows frontSide saved state of card and backSide saved state of card
// onclick of card will flip from frontSide to backSide
// button for edit/delete

// export class