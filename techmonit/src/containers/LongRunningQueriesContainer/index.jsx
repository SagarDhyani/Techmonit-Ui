import React from "react";
import LongRunningQuery from "../../components/LongRunningQueries/LongRunningQuery";
import LongRunningQueriesTable from "../../components/LongRunningQueries/LongRunningQueriesTable";

const LongRunningQueriesContainer = () => {
  return (
    <div>
      <LongRunningQuery />
      <LongRunningQueriesTable />
    </div>
  );
};

export default LongRunningQueriesContainer;
