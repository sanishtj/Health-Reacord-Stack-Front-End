import React from 'react';
import Header from '../common/Header';
import Footer from '../common/Footer';
import Container from '../common/Container';


class authenticatedmasterPage extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="container">
        <Header />       
        <Container />
        <Footer />
      </div>
    );
  }
}

export default authenticatedmasterPage;
