import React from "react";
import FindDatabaseQuery from "../../components/FindDatabase/FindDatabaseQuery";
import FindDatabasetable from "../../components/FindDatabase/FindDatabasetable";

const FindDatabaseContainer = () => {
  return (
    <div>
      <FindDatabaseQuery />
      <FindDatabasetable />
    </div>
  );
};

export default FindDatabaseContainer;
