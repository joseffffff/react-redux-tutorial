import * as React from "react";
import {connect} from "react-redux";
import {getTasks} from "../../actions/tasks/GetTasks.actions";
import Spinner from "../common/Spinner";
import Fatal from "../common/Fatal";
import Table from "../common/Table";

class Tasks extends React.Component {

  componentDidMount() {
    this.props.getTasks();
  }

  render() {

    if (this.props.tasks.loading) {
      return (<Spinner />);
    }

    if (!!this.props.tasks.error) {
      return (<Fatal message={this.props.tasks.error} />);
    }

    return (
      <Table
        headers={['ID', 'Title', 'Is Completed']}
        keys={['id', 'title', 'completed']}
        rows={this.props.tasks.tasks}
        eyeLink={'/tasks/'}
      />
    );
  }
}

const mapStateToProps = (reducers) => ({
  tasks: reducers.tasksReducer,
});

const mapDispatchToProps = (dispatch) => ({
  getTasks: () => dispatch(getTasks()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Tasks);