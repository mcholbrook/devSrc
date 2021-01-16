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
import ResourceCard from '../../components/ResourceCard/ResourceCard'

class AddResource extends Component {
    state = {
        invalidForm: true,
        formData: {
            title: '',
            description: '',
            url: '',
            tag: ''
        },
        resources: []
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
            invalidForm: !this.formRef.current.checkValidity()
        })
    }

    render() { 
        return (
            <>
            <div className='AddResource'>
					<form className='col s12' ref={this.formRef} onSubmit={this.handleSubmit}>
						<div className='row'>
							<div className='input-field col s12'>
								<input name='title' id='resource_title' type='text' className='active' value={this.state.formData.title} onChange={this.handleChange} required />
								<label htmlFor='resource_title'>Title:</label>
							</div>
						</div>
						<div className='row'>
							<div className='input-field col s12'>
								<input name='description' id='description' type='text' className='active' value={this.state.formData.description} onChange={this.handleChange} required/>
								<label htmlFor='description'>Description:</label>
							</div>
						</div>
						<div className='row'>
							<div className='input-field col s12'>
								<input name='url' id='resource_url' type='text' className='active' value={this.state.formData.url} onChange={this.handleChange}/>
								<label htmlFor='rescource_url'>Link</label>
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
							Submit Resource
						</button>                           
					</form>
				</div>	
            </>
        );
   
}
 
export default AddResource;