/* 
PSEUDO CODE:
- import react, ResourceCard
- Add ShowResource component
    -render a div and pass resource props to be shown on page
        - create a text-box for user notes
        - Create a form to submit notes
            - ref formRef
            - add onSubmit to handle handleSubmit function
            - add onChange event handler to text box
            - Create submit button to render notes on the same page

*/

/* 
PSEUDO CODE:
- import react
- Add ShowResource component
    -render a div and pass resource props to be shown on page
        - create a text-box for user notes
        - Create a form to submit notes
            - ref formRef
            - add onSubmit to handle handleSubmit function
            - add onChange event handler to text box
            - Create submit button to render notes on the same page

*/

import React, {Component} from 'react'
import { getOneResource } from '../../services/resourceApi'

class ShowResource extends Component {
    state = {
       details: this.props.location.resource,
       resourceDetails: {} 
    }

    async componentDidMount() {
        const resourceDetails = await getOneResource(this.state.details)
        this.setState({resourceDetails})
    }
    render() { 
        const {resourceDetails} = this.state
        return (
            <>
            <p>{resourceDetails.title}</p>
            <p>{resourceDetails.description}</p>
            <p>{resourceDetails.url}</p>
            <p>{resourceDetails.tags}</p>
            </>
        );
    }
}
 
export default ShowResource;
