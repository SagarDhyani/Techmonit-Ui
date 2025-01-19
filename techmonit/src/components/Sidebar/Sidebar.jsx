import { useState } from "react";
import MenuItem from "./MenuItem";
import { FaBars, FaTimes } from "react-icons/fa";
import { menuItems } from "../../utils/constants";

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div>
      <aside className="lg:block fixed lg:relative w-64 bg-custom-layout text-gray-800 border-r border-gray-300 h-screen flex flex-col z-10">
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
