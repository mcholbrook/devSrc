import React from "react";
import ResourceCard from "../../components/ResourceCard/ResourceCard";

const ResourceList = (props) => {
  return (
    <>
    <h2>My Saved Items:</h2>
      <div className="saved-resources">
        {props.savedItems.map((resource) => (
          <ResourceCard
            handleDeleteResource={props.handleDeleteResource}
            // handleAddNote={props.handleAddNote}
            resource={resource}
            user={props.user}
          />
        ))}
      </div>
    </>
  );
};

export default ResourceList;
