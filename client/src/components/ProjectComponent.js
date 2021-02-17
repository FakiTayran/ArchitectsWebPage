import React from "react";

const ProjectComponent = (props) => {
  return props.projects.map((p) => {
    return (
      <div key={p.title} className="w3-col l3 m6 w3-margin-bottom">
        <div className="w3-display-container">
          <div className="w3-display-topleft w3-black w3-padding">
            {p.title}
          </div>
          <img src={p.image} alt="House" style={{ width: "100%" }} />
        </div>
      </div>
    );
  });
};

export default ProjectComponent;