import React from 'react';
import "./FlashCard.css"


function FlashCard({ frontSide, backSide, handleDeleteFlashCard, flashCard }) {
        // const [ isFront, changeFace] = useState(true);
        // function handleClick() {
        //   changeFace( oldState => !oldState)
        // }
        // const text = isFront ? frontSide : backSide
        // const sideClass = isFront ? "front" : "back"
        // const classList = `flip-card-${sideClass}`
        return (
            <>
              <div className="flip-card">
                <div className="flip-card-inner">
                  <div 
                    className="flip-card-front"
                    // onClick={handleClick}
                  >
                      {frontSide}
                  </div>
                  <div
                    className="flip-card-back"
                    // onClick={handleClick}
                  >
                    {backSide}
                  </div>
                </div>
              </div>
                  <button
                    type="submit"
                    onClick={() => handleDeleteFlashCard(flashCard._id)}
                    >
                      Delete
                    </button>
            </>
          
        )
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