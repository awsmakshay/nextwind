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
      className={` flex cursor-pointer items-center justify-center rounded-lg border-2 px-0.5 hover:bg-gray-200  dark:border-gray-600  dark:hover:bg-gray-700`}
    >
      <button aria-label="Toggle Dark Mode" type="button">
        <svg
          width={36}
          height={36}
          viewBox="-6 -6 36 36"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
          className="fill-primary-100 stroke-primary-500 group-hover:stroke-primary-600 dark:fill-gray-400/20 dark:stroke-gray-400 dark:group-hover:stroke-gray-300"
        >
          <g className="dark:opacity-0">
            <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            <path
              d="M12 4v.01m5.66 2.335l-.007.007m2.352 5.653h-.01m-2.335 5.66l-.007-.007M12 20.01V20m-5.66-2.335l.007-.007m-2.352-5.653h.01M6.34 6.344l.007.007"
              fill="none"
            />
          </g>
          <g className="opacity-0 dark:opacity-100">
            <path d="M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
            <path
              d="M12 3v1m6.66 1.345l-.828.828m3.173 5.832h-1m-1.345 6.66l-.828-.828M12 21.01V20m-6.66-1.334l.835-.836m-3.18-5.825h1.01M5.34 5.344l.835.836"
              fill="none"
            />
          </g>
        </svg>
      </button>
    </div>
  );
};

export default DarkModeToggle;
