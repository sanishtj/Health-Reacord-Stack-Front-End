import React from 'react';
import { Link } from 'react-scroll';

const Header = () => (
  <header className="whitecontainercolor">
    <nav className="navbar navbar-light sticky-top">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img
            src="/images/Logo-HR.png"
            className="img-fluid"
            alt="Health Record Stack Logo"            
          />
        </a>
        <ul className="">
          <li className="list-inline-item">Welcome, Sanish Joseph</li>
          <li className="list-inline-item">
            <div className="dropdown">
              <div className="dropdown-toggle" data-toggle="dropdown">
                <i className="fa fa-lg fa-cog" aria-hidden="true" />
              </div>
              <div className="dropdown-menu">
                <a className="dropdown-item" href="#">
                  Link 1
                </a>
                <a className="dropdown-item" href="#">
                  Link 2
                </a>
                <a className="dropdown-item" href="#">
                  Link 3
                </a>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  </header>
);

export default Header;
