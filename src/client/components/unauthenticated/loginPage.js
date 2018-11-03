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
          {/* <img src={import('../../images/healthrecordstacklogintopframe.jpg')} alt="sdfsdf sdfs" /> */}
        </div>
        <div id="middleframe" className="whitecontainercolor">ds</div>
        <div id="bottomframe">dsf</div>
      </div>
    );
  }
}

export default loginPage;
