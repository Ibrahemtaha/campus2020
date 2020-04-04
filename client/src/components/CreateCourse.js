import React, { useState } from "react";
import axios from "axios";
import Nav from "./Nav";

function CreateCourse({ history }) {
  //state
  const [state, setState] = useState({
    name: "",
    hours: "",
    file: ""
  });
  //destructure vlaues from state (so we can use just each var in value [instead of state.value])
  const { name, hours, file } = state;

  //onchange event handler
  const handleChange = name => event => {
    //console.log("name", name, "event", event.target.value);
    setState({ ...state, [name]: event.target.value });
  };

  const handleSubmit = async event => {
    event.preventDefault();
    try {
      const response = await axios.post(`http://localhost:3000/course/course`, {
        name,
        hours,
        file
      });

      setState({ ...state, name: "", hours: "", file: "" });
      //history.push("/");
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div className="container py-2">
      <br />
      <h1>Creat Course</h1>
      <br />
      {/* {JSON.stringify(state)} */}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="text-muted">Name</label>
          <input
            onChange={handleChange("name")}
            value={name}
            type="text"
            className="form-control"
            placeholder="Course Name"
            required
          />
        </div>
        <div className="form-group">
          <label className="text-muted">Hours</label>
          <input
            onChange={handleChange("hours")}
            value={hours}
            type="text"
            className="form-control"
            placeholder="User name"
            required
          />
        </div>
        <div className="form-group">
          <label className="text-muted">File</label>
          <input
            onChange={handleChange("file")}
            value={file}
            type="file"
            className="form-control"
            placeholder="Post Content"
            cols="20"
            rows="5"
          />
        </div>
        <button className="btn btn-primary">Create</button>
      </form>
    </div>
  );
}

export default CreateCourse;
