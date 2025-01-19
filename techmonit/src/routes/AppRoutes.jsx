import React from "react";
import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import FindDatabase from "../pages/FindDatabase";
import PgActivity from "../pages/PgActivity";

const AppRoutes = () => {
  return (
    <Suspense fallback={"...Loading"}>
      <Routes>
        <Route path="/find_database" element={<FindDatabase />} />
        <Route path="/server_activity/pg_activity" element={<PgActivity />} />
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;
