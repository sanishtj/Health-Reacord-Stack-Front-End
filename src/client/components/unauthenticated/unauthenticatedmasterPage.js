import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import UnAthenticatedHeader from './presentational/unauthenticatedHeader';
import Footer from '../common/Footer';
import UnAuthenticatedContainer from './UnAuthenticatedContainer';
import * as userActions from '../../actions/userActions';

class unauthenticatedmasterPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { menuClass: 'collapse fix-unauth-menu' };
  }

  onMenuClicked = (act) => {
    if (act === 'login') this.props.actions.showLoginForm();
    else if (act === 'register') this.props.actions.showRegisterForm();
    else if (act === 'forgotpassword') {
      this.props.actions.showForgotPasswordForm();
    }  
    this.setState({ menuClass: 'collapse fix-unauth-menu' });
  };

  onMenuButtonClicked = () => {
    this.setState({ menuClass: 'collapse fix-unauth-menu show' });
  };

  render() {
    return (
      <div className="container">
        <UnAthenticatedHeader
          onMenuButtonClicked={this.onMenuButtonClicked}
          onMenuClicked={this.onMenuClicked}
          menuClass={this.state.menuClass}
        />
        <UnAuthenticatedContainer />
        <Footer />
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
)(unauthenticatedmasterPage);
