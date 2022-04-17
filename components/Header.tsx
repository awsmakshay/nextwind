import Container from "./Container";
import Profile from "./Profile";
import ThemeToggle from "./ThemeToggle";

const Header = () => {
  return (
    <div className="sticky top-0 z-10 border-b border-gray-100 bg-white shadow-lg dark:border-gray-900 dark:bg-gray-800">
      <Container>
        <div className="flex h-16 items-center justify-between ">
          <div>
            <div className=" rounded-lg bg-primary-200 py-1 px-3 text-sm font-medium text-primary-900 dark:bg-primary-900 dark:text-gray-100">
              Admin Portal{" "}
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
