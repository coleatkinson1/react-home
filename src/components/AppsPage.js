import React, { Component } from "react";

import projects from "./projects";

export default class AppsPage extends Component {
  render() {
    return (
      <div className="ui items">
        <h2>My recent react projects</h2>
        {projects.map(({ name, desc, extra, img }, i) => {
          return (
            <div className="item">
              <div className="image">
                <img alt="app screenshot" src={img} />
              </div>
              <div className="content">
                <a href="/" className="header">
                  {name}
                </a>
                <div className="meta">
                  <span>{desc}</span>
                </div>
                <div className="description">
                  <p />
                </div>
                <div className="extra">{extra}</div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}
