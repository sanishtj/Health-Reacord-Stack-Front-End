/* eslint-disable react/destructuring-assignment */
import React from 'react';
import {
  Element,
  animateScroll as scroll,
} from 'react-scroll';

import fakeAuth from './fakeAuth';
import MemberManageSteps from './presentational/memberManageSteps';

class loginPage extends React.Component {
  constructor(props) {
    super(props);
    // eslint-disable-next-line react/no-unused-state
    this.state = { redirectToReferrer: false, showMemberManage: false };
    this.login = this.login.bind(this);
    this.showMemberManage = this.showMemberManage.bind(this);
    this.hideMemberManage = this.hideMemberManage.bind(this);
  }

  login = () => {
    fakeAuth.authenticate(() => {
      this.setState(() => ({
        redirectToReferrer: true,
      }));
    });
  };

  showMemberManage = () => {
    this.setState(() => ({
      showMemberManage: true,
    }));
    scroll.scrollTo(500);
  };

  hideMemberManage = () => {
    this.setState(() => ({
      showMemberManage: false,
    }));
  };


  render() {
    return (
      <div>
        <div id="topframe" className="mb-20">
          <div className="row tagline">
            <div className="col">
              <div className="text-white text-left">
                <h1 className="header_title font-weight-bold">
                  {"Manage and share your family's "}
                  <span className="fonts-italic font-italic font-weight-normal">
                    {'Health Records'}
                  </span>
                  {' easily'}
                </h1>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <button type="button" className="btn btn-default header_title">
                {'HOW IT WORKS'}
              </button>
            </div>
          </div>
        </div>
        <div id="middleframe" className="whitecontainercolor">
          <div className="row">
            <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
              <div className="py-3 px-2">
                <img
                  src="/images/FamilyHealth.png"
                  alt="add family members"
                  className="img-fluid rounded"
                />
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
              <div className="py-3 px-2">
                <h3>Manage your family members</h3>
                <p>
                  {
                    'You can add your family members to track health related data of'
                  }
                  {
                    'each members. We have restricted the maximum number of members'
                  }
                  {
                    'as five to restrict commercial uses. You are allowed to add, update, and remove your family members.'
                  }
                </p>

                <button
                  type="button"
                  onClick={this.showMemberManage}
                  className="btn btn-custom-1 d-none d-md-block d-lg-block"
                >
                  {'view more >'}
                </button>

              </div>
            </div>
          </div>
          {this.state.showMemberManage ? (
            <MemberManageSteps hideMemberManage={this.hideMemberManage} />
          ) : null}

          <div className="row">
            <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 order-2 order-sm-2 order-md-1 order-lg-1 order-xl-1">
              <div className="py-3 px-2">
                <h3>Manage medical history</h3>
                <p>
                  {'Each member you add can have multiple medical histories.'}
                  {
                    'You can manage medicines taken,hospitals visted, doctor details, bills,'
                  }
                  {
                    'insurence and most importanly MEDICAL RECORDS along with basic informations like initial symptopns'
                  }
                </p>
                <button
                  type="button"
                  className="btn btn-custom-1 d-none d-md-block d-lg-block"
                >
                  {'view more >'}
                </button>
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 order-1 order-sm-1 order-md-2 order-lg-2 order-xl-2">
              <div className="py-3 px-2">
                <img
                  src="/images/ManageMedicalHistory.png"
                  alt="add family members"
                  className="img-fluid rounded"
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
              <div className="py-3 px-2">
                <img
                  src="/images/ShareMedicalData.png"
                  alt="add family members"
                  className="img-fluid rounded"
                />
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
              <div className="py-3 px-2">
                <h3>Share medical history</h3>
                <p>
                  {
                    "You can easily share any member's medical history you stored to doctors or hospital with a few clicks."
                  }
                  {
                    'Your medical records will be attached in the email before sending emails.'
                  }
                  {
                    'You are allowed to edit history or add more notes in the mail before you mail.'
                  }
                </p>
                <button
                  type="button"
                  className="btn btn-custom-1 d-none d-md-block d-lg-block"
                >
                  {'view more >'}
                </button>
              </div>
            </div>
          </div>
        </div>
        <div id="bottomframe">
          <div className="row">
            <div className="col">
              <Element name="loginForm" className="element">
                {'Here goes the login form'}
              </Element>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default loginPage;
