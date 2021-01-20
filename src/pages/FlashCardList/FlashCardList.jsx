
import React, { Component } from 'react';
import FlashCardStack from '../../components/FlashCardStack/FlashCardStack'
import AddFlashcard from '../../components/AddFlashcard/AddFlashcard'
import * as flashCardAPI from '../../services/flashCardApi'

class FlashCardList extends Component {
    state = {
        flashCards: [],
        
    }

    async componentDidMount() {
        const flashCards = await flashCardAPI.getMyFlashCards(this.props.user)
        this.setState({flashCards: flashCards.flashCards})
    }

    handleAddFlashCard = async (newFlashCardData) => {
        const newFlashCard = await flashCardAPI.create(newFlashCardData);
        console.log(newFlashCard)
        this.setState(
          (state) => ({
            flashCards: [...state.flashCards, newFlashCard],
          }),
          () => this.props.history.push("/studyBuddy")
        );
      };

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
                flashCards={this.state.flashCards}
                handleDeleteFlashCard={this.handleDeleteFlashCard}
                user={this.props.user}
            />
        </div>
            <AddFlashcard 
                handleAddFlashCard={this.handleAddFlashCard}
                user={this.props.user}
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