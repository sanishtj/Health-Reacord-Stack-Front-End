import React from 'react';
import { Route } from 'react-router-dom';
import registerPage from './registerPage';
import loginPage from './loginPage';
import forgotpasswordPage from './forgotpasswordPage';

class unauthenticatedmasterPage extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="container">
        <Route path="/" component={loginPage} />
        <Route exact path="/register" component={registerPage} />
        <Route exact path="/forgotpassword" component={forgotpasswordPage} />
      </div>
    );
  }
}

export default unauthenticatedmasterPage;
