import React, { useState } from "react";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Button } from "@mui/material";
import { FaCircle } from "react-icons/fa";

const LongRunningQuery = () => {
  const [selectedOption1, setSelectedOption1] = useState("");
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  return (
    <div className="query-layout">
      <div className="query-flex-container">
        <div className="dropdown">
          <label htmlFor="dropdown1" className="dropdown-label">
            Server Name:
          </label>
          <select
            id="dropdown1"
            value={selectedOption1}
            onChange={(e) => setSelectedOption1(e.target.value)}
            className="dropdown-select"
          >
            <option value="" disabled hidden>
              Select Server Name
            </option>
            <option value="category1">ARA_DEV</option>
            <option value="category2">ARA_QA</option>
            <option value="category3">ARA_DEV_FOIA</option>
            <option value="category4">ARA_QA_FOIA</option>
          </select>
        </div>
        <div className="date-pickers">
          <div className="date-picker">
            <label htmlFor="start-date" className="date-picker-label">
              Start Date:
            </label>
            <ReactDatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              dateFormat="MM/dd/yyyy"
              className="datepicker-input"
              placeholderText="Select Start Date"
            />
          </div>

          <div className="date-picker">
            <label htmlFor="end-date" className="date-picker-label">
              End Date:
            </label>
            <ReactDatePicker
              selected={endDate}
              onChange={(date) => setEndDate(date)}
              dateFormat="MM/dd/yyyy"
              className="datepicker-input"
              placeholderText="Select End Date"
            />
          </div>
        </div>
        <div>
          <Button
            variant="contained"
            style={{ background: "#3a4f65", marginLeft: "1px" }}
            className="submit-button"
          >
            Submit
          </Button>
        </div>
        <div>
          <Button
            variant="contained"
            style={{ background: "#3a4f65" }}
            className="submit-button"
          >
            EXPORT
          </Button>
        </div>
        <div className="flex items-center justify-between bg-gray-100 p-4 rounded-lg shadow-md ml-0">
          <div className="text-sm font-medium text-gray-600 flex space-x-4">
            <div className="flex items-center">
              <FaCircle className="text-green-600 text-lg animate-pulse mr-2" />
              <span className="font-semibold">
                Long Rumming Queries:{" "}
                <span className="font-semibold text-green-500">
                  More Than 5 Mins
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LongRunningQuery;
