import React, { Component } from 'react';
import FlashCard from '../FlashCard/FlashCard'

const FlashCardStack = (props) => {
        return ( 
            <>
            <h2>Flash Cards</h2>
            <div id='flashCardStack' className="row">
                {props.flashCards.map(flashCard => (
                    <FlashCard 
                        flashCard={flashCard}
                        frontSide={flashCard.frontSide}
                        backSide={flashCard.backSide}
                        user={props.user}
                        // key={flashCard._id}
                        handleDeleteFlashCard={props.handleDeleteFlashCard}
                    />
                    
                ))}
                </div>
            </>
         );
}

 
export default FlashCardStack;

// import react
// import styling

// define class
// bring in user and state from FlashCardStackShow
// bring in handleDeleteCard from app.js
// return a render of a carousel of all saved cards under simlar tags


// button, that upon submit, updates card and brings you back to the Card view

// export class