import React from 'react';
import '../FlashCard/FlashCard.css'

const FrontFlashCard = (props) => {
  return ( 
    <div className="flash-card front" onClick={props.handleClick}>
      {/* <div className="flash-card front"> */}
      <p>{props.flashCard.frontSide}</p>
      {/* <button onClick={props.handleClick}>Click to flip</button> */}
      {/* </div> */}
    </div>
   );
}
 
export default FrontFlashCard;