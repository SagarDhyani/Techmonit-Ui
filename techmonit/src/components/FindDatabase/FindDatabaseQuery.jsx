import React, { useState } from "react";
import { Button } from "@mui/material";
import "../../containers/FindDatabaseContainer/findDatabase.css";

const FindDatabaseQuery = () => {
  const [selectedOption1, setSelectedOption1] = useState("");
  const [selectedOption2, setSelectedOption2] = useState("");
  const [selectedOption3, setSelectedOption3] = useState("");

  return (
    <div className="query-layout">
      <div className="query-flex-container">
        <div className="dropdown">
          <label htmlFor="dropdown1" className="dropdown-label">
            Platform:
          </label>
          <select
            id="dropdown1"
            value={selectedOption1}
            onChange={(e) => setSelectedOption1(e.target.value)}
            className="dropdown-select"
          >
            <option value="" disabled hidden>
              Select Platform
            </option>
            <option value="category1">ARA_DEV</option>
            <option value="category2">ARA_QA</option>
            <option value="category3">ARA_DEV_FOIA</option>
            <option value="category4">ARA_QA_FOIA</option>
          </select>
        </div>
        <div className="dropdown">
          <label htmlFor="dropdown2" className="dropdown-label">
            Database:
          </label>
          <select
            id="dropdown2"
            value={selectedOption2}
            onChange={(e) => setSelectedOption2(e.target.value)}
            className="dropdown-select"
          >
            <option value="" disabled hidden>
              Select Database Name
            </option>
            <option value="type1">Type 1</option>
            <option value="type2">Type 2</option>
            <option value="type3">Type 3</option>
          </select>
        </div>
        <div className="dropdown">
          <label htmlFor="dropdown3" className="dropdown-label">
            Case:
          </label>
          <select
            id="dropdown3"
            value={selectedOption3}
            onChange={(e) => setSelectedOption3(e.target.value)}
            className="dropdown-select"
          >
            <option value="" disabled hidden>
              Select Case Name
            </option>
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
            <option value="pending">Pending</option>
          </select>
        </div>

        <div>
          <Button
            variant="contained"
            style={{ background: "#3a4f65" }}
            className="submit-button"
          >
            Submit
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FindDatabaseQuery;
