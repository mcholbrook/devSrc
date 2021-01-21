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
import "./ResourceCard.css";

const ResourceCard = ({ resource, handleDeleteResource }) => {
  return (
    <>
      <div className="card">
        {/* <div className="card-image waves-effect waves-block waves-light">
          <img className="activator" src="images/office.jpg" />
        </div> */}
        <div className="card-content">
          <span className="card-title activator grey-text text-darken-4">
            <a href={resource.url}>{resource.title}</a>
            {/* <i className="material-icons right">more_vert</i> */}
          </span>
          <p> Description: {resource.description}</p>
          <Link
            to={{
              pathname: "/details",
              state: { resource },
            }}
          >
            Details
          </Link>
          <button
            className="btn red lighten-2" 
            type="submit"
            onClick={() => handleDeleteResource(resource._id)}
          >
            Delete
          </button>
        </div>
        {/* <div className="card-reveal">
            <span className="card-title grey-text text-darken-4">Card Title<i className="material-icons right">close</i></span>
                <p>Here is some more information about this product that is only revealed once clicked on.</p>
        </div> */}
      </div>
    </>
  );
};

export default ResourceCard;
