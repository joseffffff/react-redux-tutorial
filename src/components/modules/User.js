import * as React from "react";
import {connect} from "react-redux";
import {getUsers} from "../../actions/users/GetUsers.action";
import Spinner from "../common/Spinner";
import Fatal from "../common/Fatal";
import {getUserPosts} from "../../actions/users/GetUserPosts.actions";

class User extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      user: this.props.users.users[this.props.match.params.key],
    };
  }

  componentDidMount() {
    if (!this.props.users.length || !this.state.user) {
      this.props.getUsers()
        .then(res => {
          this.setState({
            user: this.props.users.users[this.props.match.params.key],
          });
          this.downloadPosts();
        });
    } else {
      this.downloadPosts();
    }
  }

  downloadPosts() {
    this.props.getPosts(this.state.user.id);
  }

  render() {

    console.log(this.state.user)

    if (this.props.users.loading) {
      return (<Spinner />);
    }

    if (!!this.props.users.error) {
      return (<Fatal message={this.props.users.error} />);
    }

    return (
      <div className="flex-wrapper">
        <div className="flex-col">
          <h1>User</h1>
          <table className="table-styles">
            <tbody>
              <tr>
                <th>Name</th>
                <td>{this.state.user?.name}</td>
              </tr>
              <tr>
                <th>Username</th>
                <td>{this.state.user?.username}</td>
              </tr>
              <tr>
                <th>Email</th>
                <td>{this.state.user?.email}</td>
              </tr>
              <tr>
                <th>Address</th>
                <td>{this.state.user?.address.street} - {this.state.user?.address.city}</td>
              </tr>
              <tr>
                <th>Phone</th>
                <td>{this.state.user?.phone}</td>
              </tr>
              <tr>
                <th>Website</th>
                <td>{this.state.user?.website}</td>
              </tr>
              <tr>
                <th>Company</th>
                <td>{this.state.user?.company.name}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="flex-col">
          <h1>Posts</h1>
          <div className="posts-wrapper">
            {this.renderPosts()}
          </div>
        </div>
      </div>
    );
  }

  renderPosts() {

    if (!this.state.user?.posts) {
      return null;
    }

    return this.state.user.posts.map((post) => (
      <div className="post">
        <h4>{post.title}</h4>
        <p>{post.body}</p>
      </div>
    ));
  }
}

const mapStateToProps = (reducers) => ({
  users: reducers.usersReducer,
});

const mapDispatchToProps = (dispatch) => ({
  getUsers: () => dispatch(getUsers()),
  getPosts: (userId) => dispatch(getUserPosts(userId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(User);