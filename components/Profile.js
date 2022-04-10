import { Popover, Transition } from "@headlessui/react";
import Link from "next/link";
import { GearSix, SignOut, User, UserCircle } from "phosphor-react";
import { Fragment } from "react";

export default function Profile() {
  const iconClasses = "w-5 h-5 mr-2";
  return (
    <Popover className="relative">
      {({ open }) => (
        <>
          <Popover.Button className={`border-2  rounded-lg p-2`}>
            <User weight="duotone" className="w-6 h-6 text-primary-500" />
          </Popover.Button>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-1"
          >
            <Popover.Panel className="absolute z-10 px-4 mt-2 transform sm:px-0 right-0">
              <div className="w-max rounded-lg shadow-smooth bg-white ">
                <div className="flex space-x-3 p-4 border-b border-gray-200">
                  <div>
                    <div className="border-2 rounded-lg p-2 ">
                      <User
                        weight="duotone"
                        className="w-6 h-6 text-primary-500"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold text-gray-700">Akshay Thakur</div>
                    <div className="text-sm text-gray-600">
                      akshay@thakur.com
                    </div>
                  </div>
                </div>
                <div className="p-4 flex flex-col ">
                  <Button>
                    <UserCircle weight="duotone" className={iconClasses} />
                    My Profile
                  </Button>
                  <Link href="/admin">
                    <a>
                      <Button>
                        {" "}
                        <GearSix weight="duotone" className={iconClasses} />
                        Settings
                      </Button>
                    </a>
                  </Link>
                  <Button>
                    {" "}
                    <SignOut weight="duotone" className={iconClasses} />
                    Sign out
                  </Button>
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  );
}

function Button({ children }) {
  return (
    <div className="p-2 hover:bg-gray-100 flex items-center  text-gray-600 transition cursor-pointer rounded-lg text-sm hover:text-primary-500 font-medium">
      {children}
    </div>
  );
}
