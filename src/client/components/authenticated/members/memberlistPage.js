import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as memberActions from '../../../actions/memberActions';

class memberlistPage extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    // TODO: This needs to be done using shouldcomponetupdate
    if(!this.props.members || this.props.members.length == 0)
    this.props.actions.fetchMembers();
  }

  memberRow(member, index) {
    return <div key={index}>{member.FullName}</div>;
  }

  render() {
    return (
      <div className="page">
        Test
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
