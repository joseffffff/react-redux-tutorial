import React from 'react';
import {connect} from 'react-redux';

import {getUsers} from '../../actions/users/GetUsers.action'
import Spinner from "../common/Spinner";
import Fatal from "../common/Fatal";
import Table from "../common/Table";

class Users extends React.Component {

  componentDidMount() {
    this.props.getUsers();
  }

  render() {

    if (this.props.users.loading) {
      return (<Spinner />);
    }

    if (!!this.props.users.error) {
      return (<Fatal message={this.props.users.error} />);
    }

    return (
      <Table
        headers={['ID', 'name', 'email', 'link']}
        keys={['id', 'name', 'email', 'website']}
        rows={this.props.users.users}
        eyeLink={'/users/'}
      />
    );
  }
}

const mapStateToProps = (reducers) => ({
  users: reducers.usersReducer,
});

const mapDispatchToProps = (dispatch) => ({
  getUsers: () => dispatch(getUsers()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Users);
