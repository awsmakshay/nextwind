import { Disclosure } from "@headlessui/react";
import { useRouter } from "next/router";
import { CaretDown, CaretRight } from "phosphor-react";

const NavItem = ({ item }) => {
  const router = useRouter();
  // If there is submenu in item, recursively show it in navitems for multilevel menus
  return (
    <div>
      {item.submenu ? (
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="w-full">
                <div
                  className={`${
                    router.pathname == item.route &&
                    "bg-gray-700 text-teal-100 font-medium"
                  } ${
                    open && "bg-gray-800 text-gray-100 "
                  } py-2.5 px-4 rounded-md  transition duration-200 text-sm hover:bg-gray-700 hover:text-white flex items-center justify-between `}
                >
                  <div className="flex items-center capitalize">
                    <span className="mr-2">{item.icon}</span>
                    {item.name}
                  </div>
                  <CaretDown
                    className={`${open ? "transform rotate-180" : ""} w-5 h-5 `}
                  />
                </div>
              </Disclosure.Button>
              <Disclosure.Panel className="ml-2 pl-2 my-2 border-l-2 border-gray-600">
                {/* Recursively using navitem here */}
                {item.submenu.map((item) => (
                  <NavItem key={item.name} item={item} />
                ))}
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      ) : (
        <a
          href={item.route}
          className={`${
            router.pathname == item.route &&
            "bg-gray-700 text-gray-100 font-medium"
          }  py-2.5 px-4 rounded-md  transition duration-200 text-sm hover:bg-gray-700 hover:text-white flex items-center justify-between`}
        >
          <div className="flex items-center capitalize">
            <spam className="mr-2">{item.icon}</spam>
            {item.name}
          </div>
          <CaretRight className="w-5 h-5" />
        </a>
      )}
    </div>
  );
};
export default NavItem;
