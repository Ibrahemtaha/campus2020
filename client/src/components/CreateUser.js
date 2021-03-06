import React, { useEffect, useState } from "react";
import axios from "axios";
//import Nav from "./Nav";
import { Link } from "react-router-dom";
import UserTable from "../components/user/UserTable";

export default function CreateUser({ history }) {
  //state
  const [state, setState] = useState({
    firstName: "",
    lastName: "",
    role: "",
    email: "",
    phone: "",
    password: "",
  });
  //destructure vlaues from state (so we can use just each var in value [instead of state.value])
  const { firstName, lastName, role, email, phone, password } = state;

  //onchange event handler
  const handleChange = (name) => (event) => {
    //console.log("name", name, "event", event.target.value);
    setState({ ...state, [name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(`http://localhost:3000/user/user`, {
        firstName,
        lastName,
        role,
        email,
        phone,
        password,
      });

      setState({
        ...state,
        firstName: "",
        lastName: "",
        role: "",
        email: "",
        phone: "",
        password: "",
      });
      //history.push("/");
      fetchUsers().then();
    } catch (error) {
      alert(error);
    }
  };

  // Display section Get All Users
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/user/users`);
      setUsers(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="container py-2">
      <br />
      <h1>Create User</h1>
      <br />
      {/* {JSON.stringify(state)} */}
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="form-group col">
            <label className="text-muted">First Name</label>
            <input
              onChange={handleChange("firstName")}
              value={firstName}
              type="text"
              className="form-control"
              placeholder="First Name"
              required
            />
          </div>
          <div className="form-group col">
            <label className="text-muted">Last Name</label>
            <input
              onChange={handleChange("lastName")}
              value={lastName}
              type="text"
              className="form-control"
              placeholder="Last name"
              required
            />
          </div>
        </div>
        <div className="row">
          <div className="form-group col">
            <label className="text-muted">Role</label>
            <select
              onChange={handleChange("role")}
              value={role}
              required
              placeholder="Role"
              className="form-control"
              class="custom-select"
            >
              <option value="" selected>
                Choose a Role
              </option>
              <option value="admin">Admin</option>
              <option value="teacher">Teacher</option>
              <option value="student">Student</option>
            </select>
          </div>
          {/* /////////// */}
          <div className="form-group col">
            <label className="text-muted">Email</label>
            <input
              onChange={handleChange("email")}
              value={email}
              type="text"
              className="form-control"
              placeholder="Email"
              required
            />
          </div>
        </div>
        <div className="row">
          <div className="form-group col">
            <label className="text-muted">Phone</label>
            <input
              onChange={handleChange("phone")}
              value={phone}
              type="text"
              className="form-control"
              placeholder="Phone"
              required
            />
          </div>
          <div className="form-group col">
            <label className="text-muted">Password</label>
            <input
              onChange={handleChange("password")}
              value={password}
              type="text"
              className="form-control"
              placeholder="Password"
              required
            />
            <p>
              Password must contain at least 6 characters: including at least: 1
              Uppercase, 1 Lowercase, 1 Digit, 1 Symbol.
            </p>
          </div>
        </div>
        <button className="btn btn-primary">Create</button>
      </form>

      {/* table START */}
      <br />
      <h1>User Table</h1>
      <hr />
      {/* {JSON.stringify(posts)} */}
      <UserTable users={users} />
    </div>
  );
}
