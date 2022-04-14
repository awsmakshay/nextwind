import { useEffect, useState } from "react";
import useDarkMode from "use-dark-mode-hook";

const DarkModeToggle = () => {
  const [isDarkMode, toggleDarkMode] = useDarkMode({
    initialValue: false,
    darkModeClass: "dark",
    lightModeClass: "light",
    element: "body",
  });

  console.log(isDarkMode);

  return (
    <div
      onClick={() => toggleDarkMode(!isDarkMode)}
      className={` flex cursor-pointer items-center justify-center rounded-lg bg-gray-200 p-1 px-2.5 hover:ring-2 dark:bg-gray-700`}
    >
      <button aria-label="Toggle Dark Mode" type="button">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          stroke="currentColor"
          className="h-6 w-6 "
        >
          {!isDarkMode && (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              className="text-stone-500"
              fill="currentColor"
              d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
            />
          )}
          {isDarkMode && (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              className="text-amber-400"
              fill="currentColor"
              d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
            />
          )}
        </svg>
      </button>
    </div>
  );
};

export default DarkModeToggle;
