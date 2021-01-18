import React from "react";
import ResourceCard from "../../components/ResourceCard/ResourceCard";

const ResourceList = (props) => {
  return (
    <>
      <div className="saved-resources">
        {props.myResources.map((resource) => (
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
