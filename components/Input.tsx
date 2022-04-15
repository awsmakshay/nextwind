import React, { ComponentPropsWithRef } from "react";
type InputProps = {
  className?: string;
} & ComponentPropsWithRef<"input">;

const Input = ({ className, ...props }: InputProps) => {
  return (
    <input
      {...props}
      className={`${className} w-full rounded-lg border-gray-200 bg-gray-100 p-3 pr-12 text-sm shadow-sm focus:border-primary-500 focus:outline-none focus:ring focus:ring-primary-300 dark:bg-gray-900 dark:focus:ring-primary-700`}
    />
  );
};

export default Input;
