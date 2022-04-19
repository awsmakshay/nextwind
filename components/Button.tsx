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
      className={`${className}  flex items-center justify-center  rounded-lg bg-primary-500 py-2.5 px-4 text-sm font-medium text-white transition hover:bg-primary-600 focus:outline-none focus:ring focus:ring-primary-300 dark:bg-primary-800 dark:hover:bg-primary-700  dark:focus:ring-primary-900`}
    >
      {children}
    </button>
  );
};

export default Button;
