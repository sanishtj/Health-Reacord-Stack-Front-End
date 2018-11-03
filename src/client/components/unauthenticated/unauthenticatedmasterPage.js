import React from 'react';

import Header from '../common/Header';
import Footer from '../common/Footer';
import UnAuthenticatedContainer from './UnAuthenticatedContainer';


class unauthenticatedmasterPage extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="container">
        <Header />
        <UnAuthenticatedContainer />
        <Footer />
      </div>
    );
  }
}

export default unauthenticatedmasterPage;
