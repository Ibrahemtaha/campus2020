import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChalkboard,
  faChessKing,
  faAddressBook
} from "@fortawesome/free-solid-svg-icons";
import CreateCourse from "./CreateCourse";

import "./Sidebar.css";
//import { createCourse } from "../../../server/services/course.service";

export default class Sidebar extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-3">
            <div
              className="nav flex-column nav-tabs text-center border border-primary w-75"
              id="v-tabs-tab"
              role="tablist"
              aria-orientation="vertical"
            >
              <a
                href="#v-tabs-home "
                className="nav-link active"
                id="v-tabs-home-tab"
                data-toggle="tab"
                role="tab"
              >
                {" "}
                <FontAwesomeIcon icon={faAddressBook} className="mr-2" />
                Users
              </a>
              <a
                href="#v-tabs-about"
                className="nav-link"
                id="v-tabs-about-tab"
                data-toggle="tab"
                role="tab"
              >
                {" "}
                <FontAwesomeIcon icon={faChalkboard} className="mr-2" />
                Courses
              </a>
              <a
                href="#v-tabs-contact"
                className="nav-link"
                id="v-tabs-contact-tab"
                data-toggle="tab"
                role="tab"
              >
                {" "}
                <FontAwesomeIcon icon={faChessKing} className="mr-2" />
                Specialties
              </a>
              <a
                href="#v-tabs-any"
                className="nav-link"
                id="v-tabs-any-tab"
                data-toggle="tab"
                role="tab"
              >
                Flow
              </a>
              <a
                href="#v-tabs-any"
                className="nav-link"
                id="v-tabs-lesson-tab"
                data-toggle="tab"
                role="tab"
              >
                Calendar
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
                <CreateCourse />
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
