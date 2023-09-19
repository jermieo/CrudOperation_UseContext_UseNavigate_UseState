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
      <div className="sidebar fw-bold">
        <h2 style={{ color: "rgb(26, 25, 72)", paddingTop: "40px" }}>
          Notes App
        </h2>
        <div
          style={{
            boxShadow:
              "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
          }}
        >
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
        <div
          style={{
            boxShadow:
              "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
          }}
        >
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
