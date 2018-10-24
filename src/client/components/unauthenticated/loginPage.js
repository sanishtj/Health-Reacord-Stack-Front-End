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
  }

  render() {
    const { redirectToReferrer } = this.state;

    if (redirectToReferrer === true) {
      return <Redirect to="/" />;
    }

    return (
      <div>
        <p>You must log in to view the page</p>
        <button type="button" onClick={this.login}>Log in</button>
      </div>
    );
  }
}

export default loginPage;
