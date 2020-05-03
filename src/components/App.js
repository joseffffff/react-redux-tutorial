import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import Menu from "./Menu";
import Users from "./modules/Users";
import Tasks from "./modules/Tasks";
import User from "./modules/User";
import Task from "./modules/Task";

class App extends React.Component {

  render() {
    return (
      <BrowserRouter>
        <Menu />
        <div className="page-margin">
          <Route exact path='/' component={Users} />
          <Route exact path='/users' component={Users} />
          <Route exact path='/users/:key' component={User} />
          <Route exact path='/tasks' component={Tasks} />
          <Route exact path='/tasks/:key' component={Task} />
        </div>
      </BrowserRouter>
    );
  }

}

export default App;
