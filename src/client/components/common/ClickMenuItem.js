import React from 'react';
import { Link } from 'react-router-dom';

const ClickMenuItem = props => (
  <li className="dropdown-item">
    <Link to="/member/add">
      <i className={`fa ${props.item.class} mr-2`} />
      <span>{props.item.text}</span>
    </Link>
  </li>
);

export default ClickMenuItem;
