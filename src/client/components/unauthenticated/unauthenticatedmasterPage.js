import React from 'react';

import UnAthenticatedHeader from './presentational/unauthenticatedHeader';
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
        <UnAthenticatedHeader />
        <UnAuthenticatedContainer />        
        <Footer />
      </div>
    );
  }
}

export default unauthenticatedmasterPage;
