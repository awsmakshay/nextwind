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
      className={`${className}  flex w-full items-center  justify-center rounded-lg bg-primary-600 px-5 py-3 font-medium text-white transition hover:bg-primary-700 focus:outline-none focus:ring focus:ring-primary-300`}
    >
      {children}
    </button>
  );
};

export default Button;
