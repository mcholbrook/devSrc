import React, { Component } from 'react';
import FlashCard from '../FlashCard/FlashCard'

const FlashCardStack = (props) => {
        return ( 
            <>
            <h1>Flash Cards</h1>
            <div className='flashCardStack'>
                {props.flashCards.map(flashcard => (
                    <FlashCard 
                        flashcard={flashcard}
                        frontSide={flashcard.frontSide}
                        backSide={flashcard.backSide}
                        user={props.user}
                        key={flashcard._id}
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