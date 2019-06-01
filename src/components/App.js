import React, { Component } from "react";
import HomePage from "./HomePage";
import AppsPage from "./AppsPage";
import AboutPage from "./AboutPage";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = { currentPage: "home" };
  }
  onMenuChange = e => {
    e.preventDefault();
    const page = e.target.getAttribute("name");
    this.setState({ currentPage: page });
  };
  render() {
    return (
      <div className="container ui">
        <h1 className="ui center aligned icon header">
          <i className="circular react icon" />
          Cole's React Project Homepage
        </h1>
        <div className="ui divider" style={{ marginBottom: "4em" }} />
        <div className="ui grid">
          <div className="four wide column">
            <div className="ui vertical pointing menu">
              <span
                href="/"
                name="home"
                onClick={e => this.onMenuChange(e)}
                className={
                  this.state.currentPage === "home" ? "active item" : "item"
                }
                style={{ cursor: "pointer" }}
              >
                Home
              </span>
              <span
                href="/"
                name="apps"
                onClick={e => this.onMenuChange(e)}
                className={
                  this.state.currentPage === "apps" ? "active item" : "item"
                }
                style={{ cursor: "pointer" }}
              >
                React Apps
              </span>
              <span
                href="/"
                onClick={e => this.onMenuChange(e)}
                name="about"
                className={
                  this.state.currentPage === "about" ? "active item" : "item"
                }
                style={{ cursor: "pointer" }}
              >
                About
              </span>
            </div>
          </div>
          <div className="twelve wide column">
            {this.state.currentPage === "home" && <HomePage />}
            {this.state.currentPage === "apps" && <AppsPage />}
            {this.state.currentPage === "about" && <AboutPage />}
          </div>
        </div>
      </div>
    );
  }
}
