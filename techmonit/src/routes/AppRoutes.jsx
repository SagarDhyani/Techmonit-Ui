import React from "react";
import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import FindDatabase from "../pages/FindDatabase";
import PgActivity from "../pages/PgActivity";
import DbCount from "../pages/DbCount";
import LongRunningQueries from "../pages/LongRunningQueries";

const AppRoutes = () => {
  return (
    <Suspense fallback={"...Loading"}>
      <Routes>
        <Route path="/find_database" element={<FindDatabase />} />
        <Route path="/server_activity/pg_activity" element={<PgActivity />} />
        <Route path="/db_count" element={<DbCount />} />
        <Route path="/long_running_queries" element={<LongRunningQueries />} />
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;
