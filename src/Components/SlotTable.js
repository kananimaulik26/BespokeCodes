import React from "react";
import { Table } from "react-bootstrap";
import Edit from "../Assets/Images/Svg/Edit.svg";
import Delete from "../Assets/Images/Svg/Delete.svg";
import Search from "../Assets/Images/Svg/search.svg";
import "../Assets/Css/SlotTable.css";

const SlotTable = () => {
  const slots = JSON.parse(localStorage.getItem("slots") || "[]");

  return (
    <div className="slotTableWrap">
      <div className="slotTableHeader">
        <div className="searchForm">
          <img src={Search} alt="" />
          <input type="text" placeholder="Search" />
        </div>
        <input type="date" />
        <button className="btn">Search</button>
      </div>
      <Table hover responsive size="sm">
        <thead>
          <tr>
            <th></th>
            <th>Slot Timing</th>
            <th>Seating Capacity</th>
            <th>Manage</th>
          </tr>
        </thead>
        <tbody>
          {slots.map((item, index) => (
            <tr key={index}>
              <td>
                <input type="checkbox" />
              </td>
              <td>{item.timing}</td>
              <td>{item.capacity}</td>
              <td>
                <button className="btn">
                  <img src={Edit} alt="" />
                </button>
                <button className="btn">
                  <img src={Delete} alt="" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default SlotTable;
