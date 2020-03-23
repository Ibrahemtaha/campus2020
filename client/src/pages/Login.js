import React from "react";
import Nav from "../components/Nav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock, faUser } from "@fortawesome/free-solid-svg-icons";

export default function Login() {
  return (
    <div>
      <Nav />
      <div className="container mt-5 w-50">
        <div className="card-group">
          <div class="card">
            <article class="card-body">
              <h4 class="card-title text-center mb-4 mt-1">Sign in</h4>
              <hr />
              <p class="text-success text-center">Please Sgin in here</p>
              <form>
                <div class="form-group">
                  <div class="input-group">
                    <div class="input-group-prepend">
                      <span class="input-group-text">
                        {" "}
                        <FontAwesomeIcon icon={faUser} />{" "}
                      </span>
                    </div>
                    <input
                      name=""
                      class="form-control"
                      placeholder="Email or login"
                      type="email"
                    />
                  </div>
                </div>
                <div class="form-group">
                  <div class="input-group">
                    <div class="input-group-prepend">
                      <span class="input-group-text">
                        {" "}
                        <FontAwesomeIcon icon={faLock} />{" "}
                      </span>
                    </div>
                    <input
                      class="form-control"
                      placeholder="******"
                      type="password"
                    />
                  </div>
                </div>
                <div class="form-group">
                  <button type="submit" class="btn btn-primary btn-block">
                    {" "}
                    Login{" "}
                  </button>
                </div>
                <p class="text-center">
                  <a href="#" class="btn">
                    Forgot password?
                  </a>
                </p>
              </form>
            </article>
          </div>
        </div>
      </div>
    </div>
  );
}
