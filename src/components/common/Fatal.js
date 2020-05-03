import * as React from "react";

export default class Fatal extends React.Component {

  render() {
    return (
      <h1>{this.props.message || 'Error'}</h1>
    );
  }

}