
import React, { Component } from 'react';
import FlashCardStack from '../../components/FlashCardStack/FlashCardStack'
import AddFlashcard from '../../components/AddFlashcard/AddFlashcard'
import * as flashCardAPI from '../../services/flashCardApi'

class FlashCardList extends Component {
    state = {
        flashCards: []
    }

    handleDeleteFlashCard = async (id) => {
        await flashCardAPI.deleteFlashCard(id)
        this.setState((state) => ({
            flashCards: state.flashCards.filter((f) => f._id !== id)
        }), () => this.props.history.push('/studyBuddy'))
    }

    render() { 
        return ( 
        <>
        <div className='flashCardStack'>
            <FlashCardStack 
                flashCards={this.props.user.flashCards}
                handleDeleteFlashCard={this.handleDeleteFlashCard}
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