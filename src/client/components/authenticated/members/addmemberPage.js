import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as memberActions from '../../../actions/memberActions';

class addmemberPage extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      member: {
        FullName: '',
      },
    };

    this.textInputChange = this.textInputChange.bind(this);
    this.addMember = this.addMember.bind(this);
  }

  textInputChange(event) {
    this.setState({ member: { FullName: event.target.value } });
  }

  addMember(event) {
    event.preventDefault();
    this.props.actions.addMember(this.state.member);
  }

  memberRow(member,index)
  {
    return <div key={index}>{member.FullName}</div>;
  }

  render() {
    return (
      <div>
        <div>
          {this.props.members.map(this.memberRow)}
        </div>
        <form className="needs-validation page" noValidate>
          <div className="form-row">
            <div className="col-md-6 mb-3">
              <label htmlFor="Name">Name</label>
              <input
                onChange={this.textInputChange}
                type="text"
                className="form-control"
                id="Name"
                name="Name"
                placeholder="First name"
                value={this.state.member.FullName}
                required
              />
            </div>
          </div>

          <button
            className="btn btn-primary"
            type="submit"
            onClick={this.addMember}
          >
            Submit form
          </button>
        </form>
      </div>
    );
  }
}

function mapStatetoProps(state, ownprops) {
  return {
    members: state.members,
  };
}

function mapDispatchtoProps(dispatch) {
  return {
    actions: bindActionCreators(memberActions, dispatch),
  };
}

export default connect(mapStatetoProps, mapDispatchtoProps)(addmemberPage);
