import React from 'react';
import '../FlashCard/FlashCard.css'

const BackFlashCard = (props) => {
  return ( 
    <div className="flash-card back" onClick={props.handleClick}>
      <p>{props.flashCard.backSide}</p>
    </div>
   );
}
 
export default BackFlashCard;