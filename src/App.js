import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./Components/Sidebar";
import Header from "./Components/Header";
import "./Assets/Css/Main.css";
import AppointmentSlot from "./Components/AppointmentSlot";
import SlotTable from "./Components/SlotTable";

const App = () => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    if (show === false) {
      document.querySelector("body").style.overflowY = "hidden";
    } else {
      document.querySelector("body").style.overflowY = "auto";
    }
  }, [show]);

  return (
    <div className={`mainWrap ${!show ? "show" : "hide"}`}>
      <Router>
        <Sidebar show={show} setShow={setShow} />
        <div className="contentSide">
          <Header show={show} setShow={setShow} />
          <Routes>
            <Route exact path="/" element={<AppointmentSlot />} />
            <Route exact path="/slots-listing" element={<SlotTable />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
};

export default App;
