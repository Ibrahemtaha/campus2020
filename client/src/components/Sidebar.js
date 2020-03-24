import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./Sidebar.css";

export default class Sidebar extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-3">
            <div
              className="nav flex-column nav-tabs text-center"
              id="v-tabs-tab"
              role="tablist"
              aria-orientation="vertical"
            >
              <a
                href="#v-tabs-home"
                className="nav-link active"
                id="v-tabs-home-tab"
                data-toggle="tab"
                role="tab"
              >
                Teacher
              </a>
              <a
                href="#v-tabs-about"
                className="nav-link"
                id="v-tabs-about-tab"
                data-toggle="tab"
                role="tab"
              >
                Students
              </a>
              <a
                href="#v-tabs-contact"
                className="nav-link"
                id="v-tabs-contact-tab"
                data-toggle="tab"
                role="tab"
              >
                Specialties
              </a>
              <a
                href="#v-tabs-any"
                className="nav-link"
                id="v-tabs-any-tab"
                data-toggle="tab"
                role="tab"
              >
                Courses
              </a>
              <a
                href="#v-tabs-any"
                className="nav-link"
                id="v-tabs-lesson-tab"
                data-toggle="tab"
                role="tab"
              >
                Lessons
              </a>
            </div>
          </div>
          {/* Content */}
          <div className="col-9 mt-1">
            <div className="tab-content" id="v-tabs-tabContent">
              <div
                className="tab-pane fade show active"
                id="v-tabs-home"
                role="tabpanel"
              >
                Home Home Home Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Dolor ab, asperiores nesciunt ipsa voluptatum
                explicabo hic nam odio expedita architecto illo adipisci
                delectus ipsam, quod officiis iure eligendi vero tempore.
              </div>
              <div className="tab-pane fade" id="v-tabs-about" role="tabpanel">
                about About About About
              </div>
              <div
                className="tab-pane fade"
                id="v-tabs-contact"
                role="tabpanel"
              >
                contact Contact Contact Contact
              </div>
              <div className="tab-pane fade" id="v-tabs-any" role="tabpanel">
                any Any Any Any
              </div>
              <div className="tab-pane fade" id="v-tabs-lesson" role="tabpanel">
                LESSONS LESSONS
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
