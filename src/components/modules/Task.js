import * as React from "react";

export default class Task extends React.Component {

  render() {
    return (<h1>Task number {this.props.match.params.key}</h1>)
  }

}