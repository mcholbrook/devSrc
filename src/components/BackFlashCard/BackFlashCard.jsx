import React from 'react';
import '../FlashCard/FlashCard.css'

const BackFlashCard = (props) => {
  return ( 
    <div className="flash-card back" onClick={props.handleClick}>
      {/* <div className="flash-card back"> */}
      <p>{props.flashCard.backSide}</p>
      {/* <button onClick={props.handleClick}>Click to flip</button> */}
      {/* </div> */}
    </div>
   );
}
 
export default BackFlashCard;