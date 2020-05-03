import * as React from "react";

export default class Spinner extends React.Component {

  render() {
    return (
      <div className="wrapper">
        <div className="lds-ring">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    )
  }


}