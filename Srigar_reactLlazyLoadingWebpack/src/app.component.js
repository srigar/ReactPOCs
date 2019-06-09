import React, { Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Link, Route } from "react-router-dom";

import { Home, Contact, About } from "./app.module";
import "./app.component.css";
import asyncComponentLoader from './async.component';

class App extends Component {
  render() {
    return (
      <div className="appComponent">
        <BrowserRouter>
          <div className="headerLinks">
            <Link to="/home">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/users">Users</Link>
          </div>
          <div className="componentContainer">
            <Switch>
              <Route path="/home" component={Home} />
              <Route path="/about" component={About} />
              <Route path="/contact" component={Contact} />
              <Route
                path="/users"
                component={asyncComponentLoader(() => import("./components/users/users.component").then(component =>  component))}
              />
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
