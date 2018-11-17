/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { Redirect } from 'react-router';
import { Element, animateScroll as scroll } from 'react-scroll';
import Modal from 'react-modal';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import MemberManageSteps from './presentational/memberManageSteps';
import VideoPlayer from './presentational/videoPlayer';
import LoginForm from './presentational/LoginForm';
import * as properties from './properties/externalProperties';
import * as userActions from '../../actions/userActions';
import fakeAuth from './fakeAuth';

Modal.setAppElement('#root');

class loginPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showMemberManage: false,
      modalIsOpen: false,
      email: '',
      password: '',
      isEmailValid: { valid: false, errors: [] },
      isPasswordValid: { valid: false, errors: [] },
      isFormValid: false,
      redirectToReferrer: false,
    };

    this.showMemberManage = this.showMemberManage.bind(this);
    this.hideMemberManage = this.hideMemberManage.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.onLogin = this.onLogin.bind(this);
    this.handleUserInput = this.handleUserInput.bind(this);
  }

  onLogin = () => {
    fakeAuth.authenticate(() => {
      this.setState(() => ({
        redirectToReferrer: true,
      }));
    });
    // this.props.actions.login(username, password);
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

  openModal() {
    this.setState(() => ({
      modalIsOpen: true,
    }));
  }

  closeModal() {
    this.setState(() => ({
      modalIsOpen: false,
    }));
  }

  validateField(fieldName, value) {
    const emailValid = this.state.isEmailValid;
    const passwordValid = this.state.isPasswordValid;

    emailValid.errors = [];
    passwordValid.errors = [];

    switch (fieldName) {
      case 'email':
        // eslint-disable-next-line no-useless-escape
        emailValid.valid = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
          String(value).toLowerCase(),
        );
        if (!emailValid.valid) {
          emailValid.errors.push('Please enter a valid email');
        }
        break;
      case 'password':
        passwordValid.valid = value.length >= 6;
        if (!passwordValid.valid) {
          passwordValid.errors.push(
            'Password length must be more than 6 characters',
          );
        } else {
          passwordValid.valid = value.length <= 12;
          if (!passwordValid.valid) {
            passwordValid.errors.push(
              'Password length must be less than 12 characters',
            );
          }
        }
        break;
      default:
        break;
    }

    this.setState(() => ({
      isEmailValid: emailValid,
      isPasswordValid: passwordValid,
      isFormValid: emailValid.valid && passwordValid.valid,
    }));
  }

  handleUserInput(e) {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({ [name]: value }, () => {
      this.validateField(name, value);
    });
  }

  render() {
    const { redirectToReferrer } = this.state;
    if (redirectToReferrer === true) {
      return <Redirect to="/" />;
    }

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
              <button
                type="button"
                className="btn btn-custom-2 header_title"
                onClick={this.openModal}
              >
                {'HOW IT WORKS'}
              </button>

              <Modal
                style={properties.customStyles}
                isOpen={this.state.modalIsOpen}
                onAfterOpen={this.afterOpenModal}
                onRequestClose={this.closeModal}
                overlayClassName="modal_Overlay"
              >
                <div className="test">
                  <VideoPlayer {...properties.videoJsOptions} />
                </div>
              </Modal>
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
                <LoginForm
                  onLogin={this.onLogin}
                  email={this.state.email}
                  password={this.state.password}
                  handleUserInput={this.handleUserInput}
                  isEmailValid={this.state.isEmailValid}
                  isPasswordValid={this.state.isPasswordValid}
                  isFormValid={this.state.isFormValid}
                />
                {/* <RegisterForm />
                <ForgotPasswordForm />                 */}
              </Element>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStatetoProps(state, ownprops) {
  return {
    authuser: state.authuser,
  };
}

function mapDispatchtoProps(dispatch) {
  return {
    actions: bindActionCreators(userActions, dispatch),
  };
}

export default connect(
  mapStatetoProps,
  mapDispatchtoProps,
)(loginPage);
