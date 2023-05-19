import React from "react";
import "../../stylesheets/Events/LongmontTreeLighting.css";
import ChristmasTree from "../../images/events/ChristmasTree.png"

const InclusiveCommunities = () => {
  return (
    <div className="tree-lighting-container">
      <div className="tree-lighting-title">
        Longmont Tree Lighting
      </div>
      <div className="tree-lighting-text">
        APAL members participated in City of Longmont Downtown Development Authority’s Tree Lighting Ceremony on November 24, 2017.
      </div>
      <img src={ChristmasTree} className="tree-lighting-image"/>
    </div>
  );
};

export default InclusiveCommunities;
