import React from 'react';
import '../FlashCard/FlashCard.css'

const BackFlashCard = (props) => {
  return ( 
    <div className="flash-card back" onClick={props.handleClick}>
      <p>{props.flashCard.backSide}</p>
      <button
        type="submit"
        onClick={() => props.handleDeleteFlashCard(props.flashCard._id)}
        >
          Delete
        </button>
    </div>
   );
}
 
export default BackFlashCard;