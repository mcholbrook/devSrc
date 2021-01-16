import React from "react";
import ResourceCard from "../../components/ResourceCard/ResourceCard";

const ResourceList = (props) => {
  return (
    <>
      <div className="saved-resources">
        {props.resources.map(resource => (
          <ResourceCard
          handleDeleteResource={props.handleDeleteResource} 
          resource={resource}
          user={props.user}
          key={resource._id} />
        ))}
      </div>
    </>
  );
};

export default ResourceList;
