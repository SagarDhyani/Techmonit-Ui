import React from "react";
import Header from "../components/Header/Header";
import Sidebar from "../components/Sidebar/Sidebar";
import useDashboardTitle from "../hooks/useDashboardTitle";

const MainLayout = ({ children }) => {
  const { title } = useDashboardTitle();

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex-1 flex pt-10 bg-custom-layout">
        <Sidebar />
        <main className="flex-1 p-2 ml-2 mt-8 bg-custom-layout overflow-y-auto">
          <div className=" text-xl font-semibold text-gray-700">
            {title || "Dashboard"}{" "}
          </div>
          <div className="">{children}</div>
        </main>
      </div>
    </div>
  );
};

export default MainLayout;
