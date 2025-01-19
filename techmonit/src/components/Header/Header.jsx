import { MdSpaceDashboard } from "react-icons/md";

const Header = () => {
  return (
    <nav className="fixed top-0 z-50 w-full bg-gray-200 border-b border-gray-200 shadow-md">
      <div className="px-3 py-3 lg:px-5 lg:pl-3">
        <div className="flex items-center justify-center sm:justify-center md:justify-between">
          <div className="flex items-center justify-start rtl:justify-end">
            <a href="#" className="flex ms-2">
              <MdSpaceDashboard className="h-8 me-3 text-xl text-yellow-500" />
              <span className="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap">
                TechMonit
              </span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
