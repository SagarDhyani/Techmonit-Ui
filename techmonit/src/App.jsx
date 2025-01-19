import React from "react";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";

const App = () => {
  return (
    <div className="h-screen flex flex-col">
      <Header />
      <div className="flex-1 pt-16">
        <Sidebar />
      </div>
    </div>
  );
};

export default App;
