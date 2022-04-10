const Container = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return <div className={`${className} container`}>{children}</div>;
};

export default Container;
