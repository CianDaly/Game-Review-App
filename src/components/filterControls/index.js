import React, { Component } from "react";
import "./filterControls.css"

export default class FilterControls extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row bg-warning">
          <div className="col-md-12">
            <h4>
              <span>Filter </span>
              <input type="text" placeholder="Name Search" />
              <span> Game Title: </span>
              <select id="Title">
                <option value="Publisher">All</option>
                <option value="Link">Newest</option>
              </select>
            </h4>
          </div>
        </div>
      </div>
    );
  }
}