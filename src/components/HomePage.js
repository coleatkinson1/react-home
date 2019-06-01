import React, { Component } from "react";

export default class HomePage extends Component {
  render() {
    return (
      <div className="ui text container">
        <h2>Welcome</h2>
        <p>
          I have created this subdomain to house all my react projects, as well
          as the source code to build them. This is part of an on-going effort
          to find in employment in a remote role, working with React.
        </p>
        <p>All demos run in docker containers, served by NGINX</p>
        <div className="ui icon message" style={{ margin: "3em 0 3em 0" }}>
          <i className="react icon" />
          <div className="content">
            <div className="header">This page was built using React!</div>
            <p>You can view the source code [here]</p>
          </div>
        </div>

        <h3>How to use this site:</h3>
        <p>You can view my projects [here] or by using the menu on the left.</p>
        <p>
          Projects contain a demo of the app in action, as well as the source
          code, and a link to the github repository.
        </p>
      </div>
    );
  }
}
