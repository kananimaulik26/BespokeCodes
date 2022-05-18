import React from "react";
import { Dropdown } from "react-bootstrap";
import "../Assets/Css/Header.css";
import User from "../Assets/Images/User.png";
import Search from "../Assets/Images/Svg/search.svg";

const Header = ({ show, setShow }) => {
  return (
    <div className="headerWrap">
      <div className="d-flex">
        <button
          className="sidebarCloseBtn btn"
          onClick={() => {
            setShow(!show);
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        <div className="searchBox">
          <img src={Search} alt="" />
          <input type="text" placeholder="Search anything" />
        </div>
      </div>
      <div>
        <Dropdown>
          <Dropdown.Toggle id="dropdown-basic" className="userDropdown">
            <img src={User} alt="Userimage" />
            <div>
              <h6>Mr Luis</h6>
              <span>Patient</span>
            </div>
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">Profile</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Logout</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </div>
  );
};

export default Header;
