const Container = ({ children, className }) => {
  return <div className={`${className} container`}>{children}</div>;
};

export default Container;
