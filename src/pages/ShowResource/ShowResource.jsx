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

import React from 'react'

const ShowResource = () => {
    return (
        <h1>Resource!</h1>
    );
}
 
export default ShowResource;