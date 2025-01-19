import { useState } from "react";
import { FaDatabase, FaServer, FaCog, FaHdd } from "react-icons/fa";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { BsDot } from "react-icons/bs";
import { Link } from "react-router-dom";

const MenuItem = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSubMenu = () => {
    setIsOpen(!isOpen);
  };

  const icons = {
    "Find the database": <FaDatabase className="text-blue-400" />,
    "Server Activity": <FaServer className="text-yellow-400" />,
    "Long Running Queries": <FaCog className="text-green-400" />,
    "Size DB & Table": <FaHdd className="text-red-400" />,
    "DB count": <FaDatabase className="text-purple-400" />,
    Techconfig: <FaCog className="text-orange-400" />,
    "Linux Maintenance": <FaServer className="text-pink-400" />,
    "Drive Size": <FaHdd className="text-teal-400" />,
    "Daily Job check": <FaCog className="text-indigo-400" />,
  };

  return (
    <div className="menu-item">
      <Link
        to={item.path}
        onClick={toggleSubMenu}
        className="flex items-center justify-between px-4 py-3 cursor-pointer hover:bg-blue-100 transition-colors duration-300"
      >
        <div className="flex items-center gap-2">
          {icons[item.name] || <FaCog className="text-gray-300" />}
          <span className="text-lg font-medium text-gray-600">{item.name}</span>
        </div>
        {item.subItems && (
          <span
            className={`transition-transform duration-300 ${
              isOpen ? "rotate-90" : ""
            } text-gray-600`}
          >
            <MdOutlineKeyboardArrowRight />
          </span>
        )}
      </Link>
      {item.subItems && isOpen && (
        <div className="sub-menu pl-8">
          {item.subItems.map((subItem) => (
            <Link
              key={subItem.name}
              to={subItem.path}
              className="py-2 text-gray-300 relative group flex items-center gap-2 hover:text-gray-800"
            >
              <BsDot
                size={30}
                className="text-xl text-gray-600 group-hover:text-green"
              />
              {subItem.name}
              <span className="underline-animation"></span>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default MenuItem;
