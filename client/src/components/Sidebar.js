import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./Sidebar.css";

export default class Sidebar extends Component {
  render() {
    return (
      <div className="d-flex" id="wrapper">
        <div className="bg-light border-right" id="sidebar-wrapper">
          <div className="sidebar-heading text-primary border border-primary">
            <Link to="#">Admin Dashboard </Link>
          </div>
          <div className="list-group list-group-flush">
            <Link
              to="#"
              className="list-group-item list-group-item-action bg-light "
            >
              Teachers
            </Link>
            <Link
              to="#"
              className="list-group-item list-group-item-action bg-light"
            >
              Students
            </Link>
            <Link
              to="#"
              className="list-group-item list-group-item-action bg-light"
            >
              Sepcialties
            </Link>
            <Link
              to="#"
              className="list-group-item list-group-item-action bg-light"
            >
              Courses
            </Link>
            <Link
              to="#"
              className="list-group-item list-group-item-action bg-light"
            >
              Lessons
            </Link>
            <Link
              to="#"
              className="list-group-item list-group-item-action bg-light"
            >
              Status
            </Link>
          </div>
        </div>

        <div id="page-content-wrapper"></div>
      </div>
    );
  }
}
