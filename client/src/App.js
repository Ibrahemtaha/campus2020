import React from "react";
import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Login from "./pages/Login";
import Contact from "./pages/Contact";
import Admin from "./pages/Admin";
import Error from "./pages/Error";

function App() {
  return (
    <>
      <Home />
      <About />
      <Login />
      <Contact />
      <Admin />
      <Error />
    </>
  );
}

export default App;
