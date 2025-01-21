import { MdSpaceDashboard } from "react-icons/md";

const Header = () => {
  return (
    <nav className="fixed top-0 z-50 w-full bg-custom-layout border-b border-gray-200 shadow-md">
      <div className="px-3 py-3 lg:px-5 lg:pl-3">
        <div className="flex items-center justify-between">
          {/* Left Section - Logo */}
          <div className="flex items-center">
            <a href="#" className="flex ms-2">
              <MdSpaceDashboard className="h-8 me-3 text-xl text-yellow-500" />
              <span className="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap">
                TechMonit
              </span>
            </a>
          </div>

          {/* Right Section - Username */}
          <div className="flex items-center space-x-3">
            <img
              src="https://ui-avatars.com/api/?name=Nikhil&background=007BFF&color=FFFFFF&rounded=true"
              alt="User Avatar"
              className="w-10 h-10 rounded-full border-2 border-blue-500 shadow-sm"
            />
            <span className="text-lg font-medium text-gray-800 dark:text-white">
              Hello, <span className="font-bold text-blue-500">Nikhil</span>
            </span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
