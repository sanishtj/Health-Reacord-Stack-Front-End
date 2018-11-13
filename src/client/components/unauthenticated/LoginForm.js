import React from 'react';


class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    // this.props.actions.logout();
    this.state = {};
    this.login = this.login.bind(this);
  }

  login = () => {
    this.props.onLogin('sanishtj', 'blahblah');
  }

  render() {
    return (
      <div>
        <button
          type="button"
          className="btn btn-custom-1 d-none d-md-block d-lg-block"
          onClick={this.login}
        >
          Login
        </button>
      </div>
    );
  }
}

export default LoginForm;
