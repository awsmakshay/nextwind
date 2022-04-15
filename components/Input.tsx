import React from "react";

const Input = (props: React.ComponentPropsWithoutRef<"input">) => {
  return (
    <input
      {...props}
      className="w-full rounded-lg border-gray-200 p-3 pr-12 text-sm shadow-sm focus:border-primary-500 focus:outline-none focus:ring focus:ring-primary-300"
    />
  );
};

export default Input;
