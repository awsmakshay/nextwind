import Container from "./Container";
import Header from "./Header";
import Sidebar from "./Sidebar";
type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className=" relative min-h-screen md:flex">
      <Sidebar />
      <div className="flex-1 bg-gray-100 dark:bg-gray-900 md:h-screen md:overflow-y-scroll">
        <Header />
        <Container className="min-h-screen">{children}</Container>
      </div>
    </div>
  );
};

export default Layout;
