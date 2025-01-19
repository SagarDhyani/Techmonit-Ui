import React from "react";
import PgActivityQuery from "../../components/PgActivity/PgActivityQuery";
import FindDatabasetable from "../../components/FindDatabase/FindDatabasetable";

const PgActivityContainer = () => {
  return (
    <div>
      <PgActivityQuery />
      <FindDatabasetable /> //used same and static for demo
    </div>
  );
};

export default PgActivityContainer;
