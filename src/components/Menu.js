import * as React from "react";
import {Link} from "react-router-dom";

class Menu extends React.Component {

  render() {
    return (
      <nav id="menu">
        <Link to="/">Users</Link>
        <Link to="/tasks">Tasks</Link>
      </nav>
    );
  }

}

export default Menu;