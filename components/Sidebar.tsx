import Link from "next/link";
import { IconContext } from "phosphor-react";
import { useState } from "react";
import navItems from "../data/navItems";
import { Close, Hamburger, SquaresFour } from "./Icons";
import NavItem from "./NavItem";

// TODO: Replace a tag with next link
const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  console.count("sidebar render");

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };
  const iconClasses = "w-6 h-6 ";

  return (
    <>
      {/* mobile menu bar */}
      <div className="bg-gray-200 flex justify-between md:hidden ">
        {/* logo */}
        <Link href="/">
          <a className="block p-4 font-bold">App Logo</a>
        </Link>
        {/* mobile menu button */}
        <button
          className=" rounded-lg p-2 m-2 focus:outline-none focus:bg-gray-300"
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
        }  bg-white  border-r  z-50 flex flex-col justify-between text-gray-500  w-64 space-y-6 px-2  min-h-screen  absolute inset-y-0 left-0 transform md:relative md:translate-x-0 transition duration-200 ease-in-out`}
      >
        <div className="px-2">
          {/* logo */}
          <Link href="/" passHref>
            <div className="flex items-center space-x-2 px-4 h-16 cursor-pointer ">
              <span className="text-2xl font-bold  flex items-center">
                <SquaresFour className="h-8 w-8 mr-2 text-red-400" />
                App Logo
              </span>
            </div>
          </Link>
          {/* nav */}
          <nav className="space-y-3 pt-4 ">
            <IconContext.Provider value={{ size: "23" }}>
              {navItems.map((item) => (
                <NavItem key={item.name} item={item} />
              ))}
            </IconContext.Provider>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
