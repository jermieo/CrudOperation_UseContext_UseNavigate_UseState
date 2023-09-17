import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { data3 } from "./App";
import { data2 } from "./App";
import { FaBookOpen } from "react-icons/fa";
import { FaHouseUser } from "react-icons/fa";
import "./App.css";
const SideBar = () => {
  const [editBtn, editBtnValues] = useContext(data3);
  const [addBtn, addBtnValues] = useContext(data2);
  return (
    <>
      <div className="sidebar">
        <h2 style={{ color: "rgb(223, 212, 212)" }}>Notes App</h2>
        <div className="border border-5 border-danger">
          <NavLink
            to="/"
            style={{ textDecoration: "none" }}
            onClick={() => {
              editBtnValues(true);
              addBtnValues(false);
            }}
          >
            <FaHouseUser />
            Home
          </NavLink>
        </div>
        <br />
        <div className="border border-5 border-danger">
          <NavLink to="/note" style={{ textDecoration: "none" }}>
            <FaBookOpen />
            Note
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default SideBar;
