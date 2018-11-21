import React from "react";

const PageHelp = props => (
  <div className="card text-white bg-success mb-3">
    <div className="card-body">
      <i className="fa fa-h-square card-icon" aria-hidden="true" />
      <p className="m-0">{props.helpText}</p>
    </div>
  </div>
);

export default PageHelp;
