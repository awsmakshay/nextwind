import Container from "./Container";
import Header from "./Header";
import Navigation from "./Navigation";
type LayoutProps = {
  children: React.ReactNode;
  title?: string;
};

const Layout = ({ children, title }: LayoutProps) => {
  return (
    <div className=" theme-pink relative min-h-screen md:flex">
      <Navigation />
      <div className="flex-1 bg-gray-100 dark:bg-gray-900 md:h-screen md:overflow-y-scroll">
        <Header title={title} />
        <Container className="min-h-screen py-12">{children}</Container>
      </div>
    </div>
  );
};

export default Layout;
