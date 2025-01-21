import { Button } from "@mui/material";
import React from "react";
import { useState } from "react";

const DbCountQuery = () => {
  const [selectedOption1, setSelectedOption1] = useState("");

  return (
    <div className="query-layout">
      <div className="query-flex-container">
        <div className="dropdown">
          <label htmlFor="dropdown1" className="dropdown-label">
            Machine Project:
          </label>
          <select
            id="dropdown1"
            value={selectedOption1}
            onChange={(e) => setSelectedOption1(e.target.value)}
            className="dropdown-select"
          >
            <option value="" disabled hidden>
              Select Machine Project
            </option>
            <option value="category1">ARA_DEV</option>
            <option value="category2">ARA_QA</option>
            <option value="category3">ARA_DEV_FOIA</option>
            <option value="category4">ARA_QA_FOIA</option>
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

export default DbCountQuery;
