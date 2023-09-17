import React from "react";
import { NavLink } from "react-router-dom";
import "./App.css";
const SideBar = () => {
  return (
    <>
      <div className="sidebar">
        <h2>Notes App</h2>
        <div className="border border-5 border-danger">
          <NavLink to="/" style={{ textDecoration: "none" }}>
            Home
          </NavLink>
        </div>
        <br />
        <div className="border border-5 border-danger">
          <NavLink to="/note" style={{ textDecoration: "none" }}>
            Note
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default SideBar;
