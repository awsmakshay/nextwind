import { useState } from "react";
import { Close, Hamburger, SquaresFour } from "./Icons";
import { IconContext } from "phosphor-react";
import navItems from "../data/navItems";
import NavItem from "./NavItem";

const Layout = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };
  const iconClasses = "w-6 h-6 mr-4";
  return (
    <div className="relative min-h-screen md:flex ">
      {/* mobile menu bar */}
      <div className="bg-gray-800 text-gray-100 flex justify-between md:hidden">
        {/* logo */}
        <a href="#" className="block p-4 text-white font-bold">
          App Logo
        </a>
        {/* mobile menu button */}
        <button
          className="  p-4 focus:outline-none focus:bg-gray-700"
          onClick={handleOpen}
        >
          <>
            {isOpen ? (
              <Close className={iconClasses} />
            ) : (
              <Hamburger className={iconClasses} />
            )}
          </>
        </button>
      </div>
      {/* sidebar */}
      <div
        className={`${
          !isOpen && "-translate-x-full"
        }  bg-gray-900 shadow-lg shadow-gray-800 z-50 flex flex-col justify-between text-blue-100 w-64 space-y-6 pt-10 h-screen  absolute inset-y-0 left-0 transform md:relative md:translate-x-0 transition duration-200 ease-in-out`}
      >
        <div>
          {/* logo */}
          <a href="#" className="text-gray-50 flex items-center space-x-2 px-4">
            <span className="text-2xl font-bold  flex items-center">
              <SquaresFour className="h-8 w-8 mr-2 text-teal-500" />
              App Logo
            </span>
          </a>
          {/* nav */}
          <nav className="space-y-2 border-t border-gray-700 pt-4 mt-6 mx-3">
            <IconContext.Provider value={{ size: "26" }}>
              {navItems.map((item) => (
                <NavItem key={item.name} item={item} />
              ))}
            </IconContext.Provider>
          </nav>
        </div>

        <a
          className="flex items-center justify-center w-full h-16 mt-auto bg-gray-800 hover:bg-gray-700 hover:text-gray-300"
          href="#"
        >
          <svg
            className="w-6 h-6 stroke-current"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            ></path>
          </svg>
          <span className="ml-2 text-sm font-medium">Joshua</span>
        </a>
      </div>
      {/* content */}
      <div className="flex-1 h-screen overflow-y-scroll py-12">{children}</div>
    </div>
  );
};

export default Layout;
