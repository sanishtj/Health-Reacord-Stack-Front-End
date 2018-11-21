import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as memberActions from '../../../actions/memberActions';
import PageHeader from '../../common/PageHeader';
import PageHelp from '../../common/PageHelp';
import MemberList from './memberList';

class memberlistPage extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    // TODO: This needs to be done using shouldcomponetupdate
    if (!this.props.members || this.props.members.length == 0) {
      this.props.actions.fetchMembers();
    }
  }

  render() {
    return (
      <div className="page container pt-20">
        <PageHeader headerText="Your Family Members" headerIcon="fa-users" />
        <PageHelp helpText="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id at officia doloremque 
        incidunt praesentium fuga voluptatum, earum nemo! In, at ex. Necessitatibus non, asperiores 
        cum natus nam ducimus quisquam iure!" />
        <MemberList members={this.props.members} />
      </div>
    );
  }
}

function mapStatetoProps(state) {
  return {
    members: state.members,
  };
}

function mapDispatchtoProps(dispatch) {
  return {
    actions: bindActionCreators(memberActions, dispatch),
  };
}

export default connect(
  mapStatetoProps,
  mapDispatchtoProps,
)(memberlistPage);
