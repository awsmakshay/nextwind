import { Disclosure, Transition } from "@headlessui/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { CaretRight } from "phosphor-react";

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
                    router.pathname == item.route && "text-primary-500 "
                  } hover:text-primary-500  py-1 px-4 rounded-lg  transition duration-200 text-sm font-medium  flex items-center justify-between `}
                >
                  <div className="flex items-center capitalize">
                    <span className="mr-2 mb-1">{item.icon}</span>
                    {item.name}
                  </div>
                  <CaretRight
                    weight="bold"
                    className={`${
                      open ? "transform rotate-90" : ""
                    } w-4 h-4 transition `}
                  />
                </div>
              </Disclosure.Button>
              <Transition
                enter="transition duration-100 ease-out"
                enterFrom="transform scale-95 opacity-0"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-75 ease-out"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-95 opacity-0"
              >
                <Disclosure.Panel className="ml-3 my-1 border-l space-y-2">
                  {/* Recursively using navitem here */}
                  {item.submenu.map((item) => (
                    <NavItem key={item.name} item={item} />
                  ))}
                </Disclosure.Panel>
              </Transition>
            </>
          )}
        </Disclosure>
      ) : (
        <Link href={item.route} passHref>
          <div
            className={`${
              router.pathname == item.route && " text-primary-500 "
            }  py-1 px-4 rounded-lg font-medium transition duration-200 text-sm cursor-pointer  hover:text-primary-500 flex items-center justify-between`}
          >
            <div className="flex items-center capitalize">
              <span className="mr-2">{item.icon}</span>
              {item.name}
            </div>
          </div>
        </Link>
      )}
    </div>
  );
};
export default NavItem;
