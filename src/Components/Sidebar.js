import React from "react";
import { Accordion } from "react-bootstrap";
import { Link } from "react-router-dom";

import "../Assets/Css/Sidebar.css";

import Brand from "../Assets/Images/Svg/Brand.svg";
import Home from "../Assets/Images/Svg/Home.svg";
import Export from "../Assets/Images/Svg/Export.svg";
import Organizations from "../Assets/Images/Svg/Organizations.svg";
import Cards from "../Assets/Images/Svg/Cards.svg";
import HelpCircle from "../Assets/Images/Svg/HelpCircle.svg";
import LogOut from "../Assets/Images/Svg/LogOut.svg";

const Sidebar = ({ show, setShow }) => {
  return (
    <div className="sidebarWrap">
      <div>
        <div className="brandSection">
          <div className="">
            <img src={Brand} alt="" />
          </div>
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
        </div>
        <div className="menuItem">
          <ul>
            <li>
              <a href="/">
                <img src={Home} alt="" />
                <span>Overview</span>
              </a>
            </li>
            <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header>
                  <img src={Organizations} alt="" /> <span>Organizations</span>
                </Accordion.Header>
                <Accordion.Body>
                  <li>
                    <Link to="/">Test</Link>
                  </li>
                  <li>
                    <Link to="/slots-listing">Test</Link>
                  </li>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>
                  <img src={Cards} alt="" /> <span>Cards</span>
                </Accordion.Header>
                <Accordion.Body>
                  <li>
                    <Link to="#">Abbott</Link>
                  </li>
                  <li>
                    <Link to="#">Accula</Link>
                  </li>
                  <li>
                    <Link to="#">CareStart</Link>
                  </li>
                  <li>
                    <Link to="#">Cepheid</Link>
                  </li>
                  <li>
                    <Link to="#">Cue</Link>
                  </li>
                  <li>
                    <Link to="#">Quidel</Link>
                  </li>
                  <li>
                    <Link to="#">Visby</Link>
                  </li>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
            <li>
              <a href="/">
                <img src={Export} alt="" />
                <span>Exports</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="menuItem">
        <ul>
          <li>
            <a href="/">
              <img src={HelpCircle} alt="" />
              <span>Support</span>
            </a>
          </li>
          <li>
            <a href="/">
              <img src={LogOut} alt="" />
              <span>Log Out</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
