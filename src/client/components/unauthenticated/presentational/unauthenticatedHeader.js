/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { Link } from 'react-scroll';

const UnAthenticatedHeader = props => (
  <header className="whitecontainercolor">
    <nav className="navbar navbar-light sticky-top">
      <div className="container-fluid">
        <div className="navbar-header">
          <a className="navbar-brand" href="#">
            <img
              src="/images/Logo-HR.png"
              className="img-fluid"
              alt="Health Record Stack Logo"              
            />
          </a>
        </div>
        <ul className="nav navbar-nav navbar-right">
          <li className="nav-item dropdown">
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarToggleExternalContent"
              aria-controls="navbarToggleExternalContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
              onClick={() => {
                props.onMenuButtonClicked();
              }}
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div className={props.menuClass} id="navbarToggleExternalContent">
              <div className="">
                <ul className="dropdown-menu show dropdown-menu-right">
                  <li className="dropdown-item">
                    <Link
                      onClick={() => {
                        props.onMenuClicked('login');
                      }}
                      to="loginForm"
                      spy
                      smooth
                      offset={50}
                      duration={1000}
                    >
                      Login
                    </Link>
                  </li>
                  <li className="dropdown-item">
                    <Link
                      onClick={() => {
                        props.onMenuClicked('register');
                      }}
                      to="loginForm"
                      spy
                      smooth
                      offset={50}
                      duration={1000}
                    >
                      Register
                    </Link>
                  </li>
                  <li className="dropdown-item">
                    <Link
                      onClick={() => {
                        props.onMenuClicked('forgotpassword');
                      }}
                      to="loginForm"
                      spy
                      smooth
                      offset={50}
                      duration={1000}
                    >
                      Forgot Password
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  </header>
);

export default UnAthenticatedHeader;
