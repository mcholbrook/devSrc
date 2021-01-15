/* 
PSEUDO CODE:
- Write the route in routes/resources to create a resource
- Write the Create controller function
    - export create
- Write the api method for creating a resource
    - import token
    - set base_URL
- Add the AddResource Component
    - import react
    - set state of the form 
    - write handleSubmit function
    - write handleSubmit function
    - formRef = React.createRef();
    - Render a form
        - ref formRef
        - add onSubmit to handle handleSubmit function
        - set input values
        - add onChange event handler to inputs
        - Create submit button
- Write the route in app.js
*/

import React, {Component} from 'react'

class AddResource extends Component {
    state = {
        invalidForm: true,
        formData: {
            title: '',
            description: '',
            url: '',
            tag: ''
        }
    }

    formRef = React.createRef();

    handleSubmit = e => {
        e.preventDefault()
        this.props.handleAddResource(this.state.formData)
    }

    handleChange = e => {
        const formData = {...this.state.formData, [e.target.name]: e.target.value}
        this.setState({
            formData,
            invalidForm: !this.formRef.current.checkvalidity()
        })
    }



    render() { 
        return (
            <>
            <div className='AddMovie'>
					<form className='col s12' ref={this.formRef} onSubmit={this.handleSubmit}>
						<div className='row'>
							<div className='input-field col s12'>
								<input name='title' id='resource_title' type='text' className='active' value={this.state.formData.name} onChange={this.handleChange} required />
								<label htmlFor='resource_title'>Title:</label>
							</div>
						</div>
						<div className='row'>
							<div className='input-field col s12'>
								<input name='description' id='description' type='text' className='active' value={this.state.formData.cast} onChange={this.handleChange} required/>
								<label htmlFor='description'>Description:</label>
							</div>
						</div>
						<div className='row'>
							<div className='input-field col s12'>
								<input name='url' id='resource_url' type='text' className='active' value={this.state.formData.description} onChange={this.handleChange}/>
								<label htmlFor='rescource_url'>Link</label>
							</div>
						</div>
						<div><label>Tags:</label>
							<p>
								<label>  
									<input className='with-gap' name='tag' value='Javascript' onChange={this.handleChange} type='radio'/>
									<span>javascript</span>
								</label>
							</p>
							<p>
								<label>  
									<input className='with-gap' name='tag' value='HTML' onChange={this.handleChange} type='radio'/>
									<span>HTML</span>
								</label>
							</p>
							<p>
								<label>  
									<input className='with-gap' name='tag' value='CSS' onChange={this.handleChange} type='radio'/>
									<span>CSS</span>
								</label>
							</p>
							<p>
								<label>  
									<input className='with-gap' name='tag' value='Node.js' onChange={this.handleChange} type='radio'/>
									<span>Node.js</span>
								</label>
							</p>
							<p>
								<label>  
									<input className='with-gap' name='tag' value='React' onChange={this.handleChange} type='radio'/>
									<span>React</span>
								</label>
							</p>
                            <p>
								<label>  
									<input className='with-gap' name='tag' value='MongoDB' onChange={this.handleChange} type='radio'/>
									<span>MongoDB</span>
								</label>
							</p>
                            <p>
								<label>  
									<input className='with-gap' name='tag' value='Python' onChange={this.handleChange} type='radio'/>
									<span>Python</span>
								</label>
							</p>
                            <p>
								<label>  
									<input className='with-gap' name='tag' value='Django' onChange={this.handleChange} type='radio'/>
									<span>Django</span>
								</label>
							</p>
						</div>
						<button
								type='submit'
								className='btn red'
								disabled={this.state.invalidForm}
						>
							<i className='material-icons left'>add</i>
							Add Movie
						</button>                           
					</form>
				</div>	
            </>
        );
    }
}
 
export default AddResource;