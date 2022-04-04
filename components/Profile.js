import { Popover, Transition } from "@headlessui/react";
import { User } from "phosphor-react";
import { Fragment } from "react";

export default function Profile() {
  return (
    <Popover className="relative">
      {({ open }) => (
        <>
          <Popover.Button className={`border-2  rounded-lg p-2`}>
            <User className="w-6 h-6" />
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
                      <User className="w-6 h-6" />
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
                  <Button>My profile</Button>
                  <Button>Settings</Button>
                  <Button>Sign out</Button>
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
    <div className="p-2 hover:bg-gray-100 text-gray-700 transition cursor-pointer rounded-lg text-sm hover:text-primary-500 font-medium">
      {children}
    </div>
  );
}
