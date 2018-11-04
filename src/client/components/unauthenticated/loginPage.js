import React from 'react';
import { Redirect } from 'react-router-dom';

import fakeAuth from './fakeAuth';

class loginPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { redirectToReferrer: false };
    this.login = this.login.bind(this);
  }

  login = () => {
    fakeAuth.authenticate(() => {
      this.setState(() => ({
        redirectToReferrer: true,
      }));
    });
  };

  render() {
    return (
      <div>
        <div id="topframe">
          <div className="row tagline mt-5">
            <div className="col">
              <div className="text-white text-left">
                <h1 className="header_title pt-2 mb-0 font-weight-bold">
                  {"Manage and share your family's "}
                  <span className="fonts-italic font-italic font-weight-normal">
                    {'Health Records'}
                  </span>
                  {' easily'}
                </h1>
              </div>
            </div>
          </div>
          <div className="row mt-1">
            <div className="col">
              <button type="button" className="btn btn-default">
                {'HOW IT WORKS'}
              </button>
            </div>
          </div>
        </div>
        <div id="middleframe" className="whitecontainercolor px-24">
          <div className="row pt-5">
            <div className="col-6">
              <img
                src="http://via.placeholder.com/350x200"
                alt="add family members"
              />
            </div>
            <div className="col-6">
              <h3>Manage your family members</h3>
              <p>
                {'You can add your family members to track health related data of'}
                {'each members. We have restricted the maximum number of members'}
                {'as five to restrict commercial uses. You are allowed to add, update, and remove your family members.'}
              </p>
              <button type="button" className="btn btn-default">
                {'view more >'}
              </button>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-6">Manage medical history of each member</div>
            <div className="col-6">
              <img
                src="http://via.placeholder.com/350x200"
                alt="Manage Medical History"
              />
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-6">
              <img
                src="http://via.placeholder.com/350x200"
                alt="Share any medical history"
              />
            </div>
            <div className="col-6">Share any history data easily with doctors</div>
          </div>
        </div>
        <div id="bottomframe">
          <div className="row">
            <div className="col">Login Form</div>
          </div>
        </div>
      </div>
    );
  }
}

export default loginPage;
