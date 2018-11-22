/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

import ClickMenuItem from './ClickMenuItem';

const ClickMenu = props => (
  <div className="click-menu dropdown">
    <a
      className="dropdown-toggle"
      data-toggle="dropdown"
      data-display="static"
      id={props.id}
      aria-haspopup="true"
      aria-expanded="false"
    >
      <i className={`fa ${props.toggleClass}`} aria-hidden="true" />
    </a>
    <ul
      className="dropdown-menu dropdown-menu-right"
      aria-labelledby={props.id}
    >
      {props.items && props.items.map(item => <ClickMenuItem key={item.text} item={item} />)}
    </ul>
  </div>
);

export default ClickMenu;
