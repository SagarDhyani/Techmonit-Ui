import React from "react";
import { useState } from "react";
import { Button } from "@mui/material";
import { FaCircle } from "react-icons/fa";

const PgActivityQuery = () => {
  const [selectedOption1, setSelectedOption1] = useState("");

  return (
    <div className="query-layout">
      <div className="query-flex-container">
        <div className="dropdown">
          <label htmlFor="dropdown1" className="dropdown-label">
            Server:
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

        <div>
          <Button
            variant="contained"
            style={{ background: "#3a4f65" }}
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
            Export To Excel
          </Button>
        </div>

        <div className="flex items-center justify-between bg-gray-100 p-4 rounded-lg shadow-md ml-52">
          <div className="text-sm font-medium text-gray-600 flex space-x-4">
            <div className="flex items-center">
              <FaCircle className="text-green-600 text-lg animate-pulse mr-2" />
              <span className="font-semibold">
                Connected Server:{" "}
                <span className="font-semibold text-green-500">
                  DARMTRDummy
                </span>
              </span>
            </div>

            <div className="flex items-center">
              <FaCircle className="text-yellow-500 text-lg animate-pulse mr-2" />
              <span>
                Active Connections: <span className="text-green-600">1</span>
              </span>
            </div>

            <div className="flex items-center">
              <FaCircle className="text-red-500 text-lg animate-pulse mr-2" />
              <span className="text-red-500">
                Total Connections: <span className="text-red-700">18</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PgActivityQuery;
