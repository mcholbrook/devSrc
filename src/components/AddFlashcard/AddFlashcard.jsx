import React, { Component } from 'react';
import FlashCardStack from '../FlashCardStack/FlashCardStack'

class AddFlashCard extends Component {
    state = { 
        invalidForm: true,
        formData: {
            frontSide: '',
            backSide: '',
            tag: ''
        }
     }

    formRef = React.createRef()

    handleSubmit = e => {
        e.preventDefault()
        this.props.handleAddFlashCard(this.state.formData)
    }

    handleChange = e => {
        const formData = {...this.state.formData, [e.target.name]: e.target.value}
        this.setState({
            formData,
            invalidForm: !this.formRef.current.checkValidity()
        })
    }

    render() { 
        return ( 
            <>
            <div className="AddFlashCard">
                <h3>Add New Flashcard</h3>
                <form className='col s12' ref={this.formRef} onSubmit={this.handleSubmit}>
                    <div className='row'>
                        <div className='input-field col s12'>
                            <input name='frontSide' id='flashCard-front' type='text' className='active' value={this.state.formData.frontSide} onChange={this.handleChange} required />
                            <label htmlFor='flashCard-front'>Prompt:</label>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='input-field col s12'>
                            <input name='backSide' id='flashCard-back' type='text' className='active' value={this.state.formData.backSide} onChange={this.handleChange} required />
                            <label htmlFor='flashCard-back'>Answer:</label>
                        </div>
                    </div>
                    <div><label>Tags:</label>
							<p>
								<label>  
									<input className='with-gap' name='tag' value='Javascript' onChange={this.handleChange} type='checkbox'/>
									<span>Javascript</span>
								</label>
							</p>
							<p>
								<label>  
									<input className='with-gap' name='tag' value='HTML' onChange={this.handleChange} type='checkbox'/>
									<span>HTML</span>
								</label>
							</p>
							<p>
								<label>  
									<input className='with-gap' name='tag' value='CSS' onChange={this.handleChange} type='checkbox'/>
									<span>CSS</span>
								</label>
							</p>
							<p>
								<label>  
									<input className='with-gap' name='tag' value='Node.js' onChange={this.handleChange} type='checkbox'/>
									<span>Node.js</span>
								</label>
							</p>
							<p>
								<label>  
									<input className='with-gap' name='tag' value='React' onChange={this.handleChange} type='checkbox'/>
									<span>React</span>
								</label>
							</p>
                            <p>
								<label>  
									<input className='with-gap' name='tag' value='MongoDB' onChange={this.handleChange} type='checkbox'/>
									<span>MongoDB</span>
								</label>
							</p>
                            <p>
								<label>  
									<input className='with-gap' name='tag' value='Python' onChange={this.handleChange} type='checkbox'/>
									<span>Python</span>
								</label>
							</p>
                            <p>
								<label>  
									<input className='with-gap' name='tag' value='Django' onChange={this.handleChange} type='checkbox'/>
									<span>Django</span>
								</label>
							</p>
						</div>
                    <button
                        type='submit'
                        className='btn red'
                        disabled={this.state.invalidForm}
                    >
                        <i className='material-icons left'></i>
                        Add FlashCard
                    </button>
                </form>
            </div>
            </>
         );
    }
}
 
export default AddFlashCard;

// import react
// import styling

// define class
// bring in state and user from app.js
// set validForm to false
// addCard functionality from app.js
// returns a render of a form for the user to define what the front and back of the card will contain,
// along with checkboxes to define tags
// submit button that saves card for user in appropriate card stack


// export class