import React from "react";
type InputProps = {
  className?: string;
} & React.ComponentPropsWithRef<"input">;

const Input = ({ className, ...props }: InputProps) => {
  return (
    <input
      {...props}
      className={`${className} w-full rounded-lg border-2 border-gray-200 bg-gray-50 p-3 pr-12 text-sm shadow-md focus:border-primary-500 focus:outline-none focus:ring focus:ring-primary-300 dark:border-gray-700 dark:bg-gray-900 dark:focus:ring-primary-700`}
    />
  );
};

export default Input;
