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
          <Popover.Button
            className={`rounded-lg  border-2 p-2 dark:border-gray-700`}
          >
            <User weight="duotone" className="h-6 w-6 text-primary-500" />
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
            <Popover.Panel className="absolute right-0 z-10 mt-2 transform px-4 sm:px-0">
              <div className="w-max rounded-lg border bg-white shadow-smooth dark:border-gray-700 dark:bg-gray-800 dark:shadow-none ">
                <div className="flex space-x-3 border-b border-gray-200 p-4 dark:border-gray-700">
                  <div>
                    <div className="rounded-lg border-2 p-2 dark:border-gray-700 ">
                      <User
                        weight="duotone"
                        className="h-6 w-6 text-primary-500"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold text-gray-700 dark:text-gray-100">
                      Akshay Thakur
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-200">
                      @awsm_akshay
                    </div>
                  </div>
                </div>
                <div className="flex flex-col p-4 ">
                  <Button>
                    <UserCircle weight="duotone" className={iconClasses} />
                    My Profile
                  </Button>
                  <Button>
                    {" "}
                    <GearSix weight="duotone" className={iconClasses} />
                    Settings
                  </Button>
                  <Link href="/auth/login">
                    <a>
                      <Button>
                        {" "}
                        <SignOut weight="duotone" className={iconClasses} />
                        Sign out
                      </Button>
                    </a>
                  </Link>
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
    <div className="flex cursor-pointer items-center rounded-lg  p-2 text-sm font-medium text-gray-600 transition hover:bg-gray-100 hover:text-primary-500 dark:text-gray-200 dark:hover:bg-gray-900">
      {children}
    </div>
  );
}
