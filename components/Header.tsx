import Container from "./Container";
import Profile from "./Profile";
import ThemeToggle from "./ThemeToggle";

const Header = ({ title }: { title?: string }) => {
  return (
    <div className="sticky top-0 z-10 border-b border-gray-100 bg-white shadow-lg dark:border-gray-900 dark:bg-gray-800">
      <Container>
        <div className="flex h-16 items-center justify-between ">
          <div>
            <div className=" mt-1 text-xl font-medium capitalize   text-gray-700 dark:text-gray-100">
              {title}{" "}
            </div>
          </div>
          <div className="flex space-x-2">
            <ThemeToggle />
            <Profile />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Header;
