import React, { Component } from "react";
import coleProfile from "../assets/profile.png";

export default class componentName extends Component {
  render() {
    return (
      <div className="ui container">
        <h2>About the Author</h2>
        <div className="ui items">
          <div className="item">
            <div className="image">
              <img src={coleProfile} />
              <a href="http://coleatkinson.nz/contact/">
                <i className="envelope open icon" />
              </a>
              <a href="http://coleatkinson.nz">
                <i className="chrome open icon" />
              </a>
              <a href="https://twitter.com/coleatkinson1">
                <i className="twitter open icon" />
              </a>
            </div>
            <div className="content">
              <a className="header">Cole Atkinson</a>
              <div className="meta">
                <span>
                  Self-taught programmer from New Zealand. Co-founder and Tech
                  Lead for Admin Mouse. Currently learning React and related
                  technologies, and seeking remote employment in the I.T.
                  industry.
                </span>
              </div>
              <div className="description">
                <p />
              </div>
              <div className="extra">
                Skills & Experience
                <br />
                HTML/CSS/JS - React/Redux - Python - C#
              </div>
            </div>
          </div>
        </div>
        <h2>Technologies used</h2>
        <div className="ui relaxed divided list">
          <div className="item">
            <i className="large github middle aligned icon" />
            <div className="content">
              <a href="/" className="header">
                Semantic-Org/Semantic-UI
              </a>
              <div className="description">Updated 10 mins ago</div>
            </div>
          </div>
          <div className="item">
            <i className="large github middle aligned icon" />
            <div className="content">
              <a href="/" className="header">
                Semantic-Org/Semantic-UI
              </a>
              <div className="description">Updated 10 mins ago</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
