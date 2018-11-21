import React from 'react';

const PageHeader = props => (
  <h3 className="page-title txt-color-blueDark">
    <i className={`fa-fw fa mr-2 ${props.headerIcon}`} />
    {props.headerText}
  </h3>
);

export default PageHeader;
