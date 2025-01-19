import React from "react";
import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import FindDatabase from "../pages/FindDatabase";

const AppRoutes = () => {
  return (
    <Suspense fallback={"...Loading"}>
      <Routes>
        <Route path="/find_database" element={<FindDatabase />} />
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;
