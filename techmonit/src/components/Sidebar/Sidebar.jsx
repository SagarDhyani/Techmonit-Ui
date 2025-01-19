import { useState } from "react";
import MenuItem from "./MenuItem";
import { FaBars, FaTimes } from "react-icons/fa";

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const menuItems = [
    { name: "Find the database", path: "/find_database" },
    {
      name: "Server Activity",
      path: "/server_activity",
      subItems: [
        { name: "PG Activity", path: "/server_activity/pg_activity" },
        { name: "Bouncer Status", path: "/server_activity/bouncer_status" },
        {
          name: "RabbitMQ Management",
          path: "/server_activity/rabbit_management",
        },
        { name: "Redis Status", path: "/server_activity/redis_status" },
        { name: "ES Activity", path: "/server_activity/es_activity" },
      ],
    },
    { name: "Long Running Queries", path: "/settings" },
    {
      name: "Size DB & Table",
      path: "/",
      subItems: [
        { name: "DB Size", path: "/" },
        { name: "Table Size", path: "/" },
      ],
    },
    { name: "DB count", path: "/settings" },
    { name: "Techconfig", path: "/settings" },
    {
      name: "Linux Maintenance",
      path: "/profile",
      subItems: [
        { name: "Reboot", path: "/" },
        { name: "Last Reboot", path: "/" },
        { name: "MachineService", path: "/" },
        { name: "Htop", path: "/" },
      ],
    },
    { name: "Drive Size", path: "/settings" },
    {
      name: "Daily Job check",
      path: "/profile",
      subItems: [
        { name: "Daily Job check", path: "/" },
        { name: "Detail Job check", path: "/" },
      ],
    },
  ];

  return (
    <div>
      <button className="lg:hidden p-3 text-gray-800" onClick={toggleSidebar}>
        {isSidebarOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </button>
      <aside
        className={`${
          isSidebarOpen ? "block" : "hidden"
        } lg:block fixed lg:relative w-64 bg-gray-100 text-gray-800 border-r border-gray-300 h-screen flex flex-col z-10`}
      >
        <nav className="flex-1 overflow-y-auto">
          {menuItems.map((item) => (
            <MenuItem key={item.name} item={item} />
          ))}
        </nav>
      </aside>
    </div>
  );
};

export default Sidebar;
