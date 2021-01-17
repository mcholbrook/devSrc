
import React, { Component } from 'react';
import FlashCardStack from '../../components/FlashCardStack/FlashCardStack'
import AddFlashcard from '../../components/AddFlashcard/AddFlashcard'

class FlashCardList extends Component {
    
    render() { 
        return ( 
        <>
        <div className='flashCardStackShow'>
            <FlashCardStack 
                flashCards={this.props.flashCards}
            />
        </div>
            <AddFlashcard 
                handleAddFlashCard={this.props.handleAddFlashCard}
            />
        </>
         );
    }
}
 
export default FlashCardList;


// import react
// import styling

// define class
// bring in user and state from FlashCardStackShow as props
// return a grid that will map all of "FlashCard" components per specific user
// pass state, user and delete handler to each mapped card

// export class