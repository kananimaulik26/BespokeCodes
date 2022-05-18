import React, { useState } from "react";
import Calendar from "react-calendar";
import { useNavigate } from "react-router-dom";
import { Tab, Tabs } from "react-bootstrap";
import "react-calendar/dist/Calendar.css";
import "../Assets/Css/AppointmentSlot.css";

const Hours = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24];
const Minutes = [0, 15, 30, 45];

const AppointmentSlot = () => {
  const history = useNavigate();
  const [value, setValue] = useState(new Date());
  const [startTime, setStartTime] = useState({ hour: 1, minute: 0 });
  const [endTime, setEndTime] = useState({ hour: 1, minute: 0 });
  const [capacity, setCapacity] = useState("");

  const onDateChange = (date) => {
    setValue(date);
    setStartTime({ hour: 1, minute: 0 });
    setEndTime({ hour: 1, minute: 0 });
  };

  const saveSlot = () => {
    if (capacity >= 1) {
      let slots = [];
      const startMinutes = startTime.hour * 60 + startTime.minute;
      const endMinutes = endTime.hour * 60 + endTime.minute;

      for (let index = startMinutes; index < endMinutes + 15; index = index + 15) {
        const hour = parseInt(index / 60);

        let start = index;
        while (start >= 60) {
          start = start - 60;
        }
        let end = index + 15;
        while (end >= 60) {
          end = end - 60;
        }

        slots.push({
          timing: `${hour}:${start === 0 ? "00" : start} - ${end === 0 ? hour + 1 : hour}:${end === 0 ? "00" : end}`,
        });
      }
      let average = Math.ceil(capacity / slots.length);
      let remaning = (slots.length - 1) * average;
      remaning = Math.abs(remaning - capacity);
      slots = slots.map((item, index) => ({ ...item, capacity: slots.length - 1 === index ? remaning : average }));
      localStorage.setItem("slots", JSON.stringify(slots));
      history("/slots-listing")
    } else {
      alert("Please enter valid capacity");
    }
  };

  return (
    <div className="appointmentSlotTab">
      <Tabs defaultActiveKey="home" id="uncontrolled-tab-example" className="mb-3">
        <Tab eventKey="home" title="Create Bulk 15 Min. Slots">
          <div className="createSlot row">
            <div className="col-xxl-3 col-lg-4">
              <h6>1. SELECT Date of Appointment *</h6>
              <p>Please select the dates that you'd like to open up slots.</p>
              <Calendar onChange={onDateChange} value={value} />
            </div>
            <div className="col-xl-4 col-lg-5">
              <h6>2. SELECT The Hours *</h6>
              <p>Please select the Start and End Time.</p>
              <div className="selectTime">
                <div>
                  <div className="d-flex">
                    <div className="me-1">
                      <label>Start Hour</label>
                      <select
                        onChange={(e) =>
                          setStartTime({
                            hour: Number(e.target.value),
                            minute: startTime.minute,
                          })
                        }
                        value={startTime.hour}
                      >
                        {Hours.map((item, index) => (
                          <option value={item} key={index}>
                            {item}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label>Minute</label>
                      <select
                        onChange={(e) =>
                          setStartTime({
                            hour: startTime.hour,
                            minute: Number(e.target.value),
                          })
                        }
                        value={startTime.minute}
                      >
                        {Minutes.map((item) => (
                          <option value={item} key={item}>
                            {item}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <p>Please select the Start Time.</p>
                </div>
                <b>:</b>
                <div>
                  <div className="d-flex">
                    <div className="me-1">
                      <label>End Hour</label>
                      <select
                        onChange={(e) =>
                          setEndTime({
                            hour: Number(e.target.value),
                            minute: endTime.minute,
                          })
                        }
                        value={endTime.hour}
                      >
                        {Hours.map((item, index) => (
                          <option disabled={startTime.hour > item} value={item} key={index}>
                            {item}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label>Minute</label>
                      <select
                        onChange={(e) =>
                          setEndTime({
                            hour: endTime.hour,
                            minute: Number(e.target.value),
                          })
                        }
                        value={endTime.minute}
                      >
                        {Minutes.map((item) => (
                          <option value={item} key={item}>
                            {item}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <p>Please select the time your last 15 min Block Starts</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <h6>3. Choose Seating Capacity *</h6>
              <p>Please enter total Seating Capacity.</p>
              <input
                type="number"
                value={capacity}
                onChange={(e) => {
                  parseInt(e.target.value) > 0 && setCapacity(e.target.value);
                }}
              />
            </div>
          </div>
          <div className="createSlotBtn mt-5 mb-3">
            <button className="btn me-2">Cancel</button>
            <button className="btn" onClick={saveSlot}>
              Create Slots
            </button>
          </div>
        </Tab>
        <Tab eventKey="profile" title="Create One Slots">
          Test
        </Tab>
      </Tabs>
    </div>
  );
};

export default AppointmentSlot;
