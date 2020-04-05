import React, { useEffect, useState } from "react";
import axios from "axios";
import Nav from "./Nav";
import { Link } from "react-router-dom";

export default function CreateCourse({ history }) {
  //state
  const [state, setState] = useState({
    name: "",
    hours: "",
    file: "",
  });
  //destructure vlaues from state (so we can use just each var in value [instead of state.value])
  const { name, hours, file } = state;

  //onchange event handler
  const handleChange = (name) => (event) => {
    //console.log("name", name, "event", event.target.value);
    setState({ ...state, [name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("hours", hours);
      formData.append("name", name);

      const config = {
        headers: {
          "content-type": "multipart/form-data",
        },
      };
      const response = await axios.post(
        `http://localhost:3000/course/course`,
        formData,
        config
      );

      setState({ ...state, name: "", hours: "", file: "" });
      //history.push("/");
    } catch (error) {
      alert(error);
    }
  };

  const handleAttachmentSelection = (event) => {
    setState({
      ...state,
      file: event.target.files[0],
    });
  };
  // Display section
  const [courses, setCourses] = useState([]);

  const fetchCourses = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/course/courses`);
      setCourses(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  return (
    <div className="container py-2">
      <br />
      <h1>Create Course</h1>
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
          {file && <p className="mr-6">{file.name}</p>}
          <input
            onChange={handleAttachmentSelection}
            type="file"
            className="form-control"
            placeholder="Post Content"
          />
        </div>

        <button className="btn btn-primary">Create</button>
      </form>

      {/* table START */}

      <h1>Mern Stack!!!!</h1>
      <hr />
      {/* {JSON.stringify(posts)} */}
      {courses.map((course, i) => (
        <div
          className="row"
          key={course.course_id}
          style={{ border: "1px solid silver" }}
        >
          <div className="col pt-3 pb-2">
            <div className="row">
              <div className="col-md-10">
                <Link to={`/post/${course.course_id}`}>
                  <h2>{course.title}</h2>
                </Link>
                {/* <p className="lead">{course.content.substring(0, 100)}</p> */}
                <p>
                  Author{" "}
                  <span className="badge">
                    {course.user} Published on{" "}
                    <span className="badge">
                      {new Date(course.createdAt).toLocaleString()}
                    </span>
                  </span>
                </p>
              </div>
              <div className="col-md-2">
                <Link
                  to={`/post/update/${course.course_id}`}
                  className="btn btn-sm btn-outline-warning"
                >
                  Update
                </Link>
                {/* <button
                  onClick={() => deleteConfirm(course.course_id)}
                  className="btn btn-sm btn-outline-danger ml-1"
                >
                  Delete
                </button> */}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
