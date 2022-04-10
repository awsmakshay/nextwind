import Container from "./Container";
import Profile from "./Profile";

const Header = () => {
  return (
    <div className="sticky top-0 border-b border-gray-100 bg-gray-50 dark:border-gray-900 dark:bg-gray-800">
      <Container>
        <div className="flex h-16 items-center justify-between ">
          <div>
            <div className=" font-medium text-gray-700 dark:text-gray-100">
              Dashboard{" "}
            </div>
          </div>
          <div>
            <Profile />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Header;
