import { Disclosure, Transition } from "@headlessui/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { CaretRight } from "phosphor-react";

const NavItem = ({ item, setIsOpen }) => {
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
                  className={` ${
                    open && " font-semibold text-gray-700 dark:text-gray-50"
                  } flex  items-center justify-between rounded-lg  py-1 px-4 text-sm font-medium  transition duration-200 hover:text-primary-600 `}
                >
                  <div className="flex items-center capitalize">
                    <span className={`mr-2 mb-1 rounded-lg p-1.5`}>
                      {item.icon}
                    </span>
                    {item.name}
                  </div>
                  <CaretRight
                    weight="bold"
                    className={`${
                      open ? "rotate-90 transform " : ""
                    } h-4 w-4 transition `}
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
                <Disclosure.Panel className="mb-3 ml-6 dark:border-gray-600">
                  {/* Recursively using navitem here */}
                  {item.submenu.map((item) => (
                    <NavItem
                      key={item.name}
                      item={item}
                      setIsOpen={setIsOpen}
                    />
                  ))}
                </Disclosure.Panel>
              </Transition>
            </>
          )}
        </Disclosure>
      ) : (
        <Link href={item.route} passHref>
          <div
            onClick={() => setIsOpen(false)}
            className={`${
              router.pathname == item.route &&
              " text-primary-600 dark:text-primary-400  "
            }  flex cursor-pointer items-center justify-between rounded-lg py-1 px-4 text-sm  font-medium transition duration-200 hover:text-primary-600`}
          >
            <div className="flex items-center capitalize">
              <span
                className={`${
                  router.pathname == item.route &&
                  " bg-primary-100 dark:bg-primary-900  "
                }  mr-2 rounded-lg  p-1.5 `}
              >
                {item.icon}
              </span>
              {item.name}
            </div>
          </div>
        </Link>
      )}
    </div>
  );
};
export default NavItem;
