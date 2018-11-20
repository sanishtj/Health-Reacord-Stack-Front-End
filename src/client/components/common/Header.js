import React from "react";
import { Link } from "react-scroll";

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
        <div className="user-details pull-right">
          <div className="user-info pull-left d-none d-sm-none d-md-block d-lg-block d-xl-block">
            <div className="pull-left">
              <span className="user-name text-right">Welcome Sanish Joseph</span>             
            </div>
          </div>
          <div className="user-menu dropdown  pull-right">
            <a
              href="#Menu"
              className="dropdown-toggle"
              data-toggle="dropdown"
              aria-expanded="false"
            >
              <i className="fa fa-cog" />
            </a>
            <ul className="dropdown-menu dropdown-menu-right">
              <li className="dropdown-item">
                <a href="#">
                  <i className="fa fa-language mr-2" />
                  <span>Switch to Arabic</span>
                </a>
              </li>
              <li className="dropdown-item">
                <a href="#UpdatePersonalInfo">
                  <i className="fa fa-user mr-2" />
                  <span>My Profile</span>
                </a>
              </li>
              <li className="dropdown-item">
                <a href="#ChangeSecuritySettings">
                  <i className="fa fa-cog mr-2" />
                  <span>My Configuration</span>
                </a>
              </li>
              <li className="dropdown-item">
                <a href="login.html">
                  <i className="fa fa-sign-out mr-2" />
                  <span>Logout</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  </header>
);

export default Header;
