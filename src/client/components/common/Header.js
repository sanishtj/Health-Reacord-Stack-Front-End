import React from 'react';
import { Link } from 'react-scroll';

const Header = () => (
  <header>
    <nav className="navbar navbar-inverse">
      <div className="container-fluid">
        <div className="navbar-header">
          <a className="navbar-brand" href="#">
            Website Logo
          </a>
          <Link
            to="loginForm"
            spy
            smooth
            offset={50}
            duration={1000}
          >
            Login
          </Link>
        </div>
        <ul className="nav list-inline">
          <li className="list-inline-item">welcome</li>
          <li className="list-inline-item">Settings</li>
        </ul>
      </div>
    </nav>
  </header>
);

export default Header;
