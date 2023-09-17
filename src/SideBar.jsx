import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { data3 } from "./App";
import { data2 } from "./App";
import "./App.css";
const SideBar = () => {
  const [editBtn, editBtnValues] = useContext(data3);
  const [addBtn, addBtnValues] = useContext(data2);
  return (
    <>
      <div className="sidebar">
        <h2>Notes App</h2>
        <div className="border border-5 border-danger">
          <NavLink
            to="/"
            style={{ textDecoration: "none" }}
            onClick={() => {
              editBtnValues(true);
              addBtnValues(false);
            }}
          >
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
