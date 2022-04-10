const Button = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <button
      type="submit"
      className={`${className}  w-full px-5 py-3  font-medium text-white bg-primary-600 hover:bg-primary-700 transition focus:outline-none focus:ring focus:ring-primary-300 rounded-md flex items-center justify-center`}
    >
      {children}
    </button>
  );
};

export default Button;
