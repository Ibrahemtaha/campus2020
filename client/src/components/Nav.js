import React from "react";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <a class="navbar-brand" href="#">
        Navbar
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item active">
            <Link class="nav-link" to="/">
              Home <span class="sr-only">(current)</span>
            </Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="About">
              About
            </Link>
          </li>
        </ul>
        <ul className="navbar-nav ml-auto">
          <li class="nav-item">
            <Link class="nav-link" to="Login">
              Login
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
