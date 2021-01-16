import React from "react";
import ResourceCard from "../../components/ResourceCard/ResourceCard";

const ResourceList = (user, resources) => {
  return (
    <>
      <div className="saved-resources">
        {resources.map(resource => (
          <ResourceCard 
          resource={resource}
          user={user}
          key={resource._id} />
        ))}
      </div>
    </>
  );
};

export default ResourceList;
