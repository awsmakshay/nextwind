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
      <div className="flex justify-between bg-gray-200 md:hidden ">
        {/* logo */}
        <Link href="/">
          <a className="block p-4 font-bold">App Logo</a>
        </Link>
        {/* mobile menu button */}
        <button
          className=" m-2 rounded-lg p-2 focus:bg-gray-300 focus:outline-none"
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
        }  absolute  inset-y-0  left-0 z-50 flex min-h-screen w-64  transform flex-col justify-between  space-y-6  border-r bg-white px-2 text-gray-500 transition duration-200 ease-in-out md:relative md:translate-x-0`}
      >
        <div className="px-2">
          {/* logo */}
          <Link href="/" passHref>
            <div className="flex h-16 cursor-pointer items-center space-x-2 px-4 ">
              <span className="flex items-center  text-2xl font-bold">
                <SquaresFour className="mr-2 h-8 w-8 text-red-400" />
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