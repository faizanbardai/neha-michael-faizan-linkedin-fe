import React, { Component } from "react";
import Posts from "./Posts";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Profile from "./Profile";
import NavBar from "./NavBar";

export default class Home extends Component {
  render() {
    return (
      <div>
        <Router>
          <NavBar />
          <Route path="/profile/:username" component={Profile} />
          <Route path="/" exact component={Posts} />
        </Router>
      </div>
    );
  }
}
