/* 
PSEUDO CODE:
- Import react and link
- Set up resource card component
    - fsc as we are not setting state
    - pass props. Use destructuring -(user, resource, ..)
    - Return resource props for link, title, description, and tags
    - Create a button to save a resource
        - set onClick event for addToCollection function which should be passed in as props
        - pass specific resource id
    - Create a button for upvotes
        - set onClick event for upvote function which should be passed as props
        - pass specific resource id
*/

import React from "react";
import { Link } from "react-router-dom";


const ResourceCard = ({ resource, handleDeleteResource }) => {
    return (
        <>
        <div class="card">
            <div class="card-image waves-effect waves-block waves-light">
                <img class="activator" src="images/office.jpg"/>
        </div>
        <div class="card-content">
            <span class="card-title activator grey-text text-darken-4"><a href={resource.url}>{resource.title}</a><i class="material-icons right">more_vert</i></span>
               <p>{resource.description}</p>
               <button
            type="submit"
            onClick={(resource) => handleDeleteResource(resource)}
          >
            Delete
          </button>
        </div>
        <div class="card-reveal">
            <span class="card-title grey-text text-darken-4">Card Title<i class="material-icons right">close</i></span>
                <p>Here is some more information about this product that is only revealed once clicked on.</p>
        </div>
        </div>
        </>
      );
    };

export default ResourceCard;
