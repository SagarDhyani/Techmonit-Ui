import React from "react";
import DbCountQuery from "../../components/DbCount/DbCountQuery";
import DbCountTable from "../../components/DbCount/DbCountTable";

const DbCountContainer = () => {
  return (
    <div>
      <DbCountQuery />
      <DbCountTable />
    </div>
  );
};

export default DbCountContainer;
