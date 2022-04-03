import { ArrowRight, At, Eye, Password } from "phosphor-react";
import Button from "../components/Button";
import Input from "../components/Input";

const Login = () => {
  return (
    <div className="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
      <div className="max-w-lg mx-auto mt-12">
        <h1 className="text-2xl font-bold text-center text-teal-600 sm:text-3xl ">
          Welcome to 340B Portal
        </h1>

        <form
          action=""
          className="p-8 mt-8 mb-0 space-y-4 rounded-md shadow-2xl bg-white"
        >
          <div>
            <label htmlFor="email" className="text-sm font-medium">
              Email
            </label>
            <div className="relative mt-1">
              <Input
                type="email"
                id="email"
                placeholder="Enter email"
                required
              />
              <span className="absolute inset-y-0 inline-flex items-center right-4">
                <At className="w-6 h-6 text-gray-400" />
              </span>
            </div>
          </div>
          <div>
            <label htmlFor="password" className="text-sm font-medium">
              Password
            </label>
            <div className="relative mt-1">
              <Input
                type="password"
                id="password"
                placeholder="Enter password"
                required
              />
              <span className="absolute inset-y-0 inline-flex items-center right-4">
                <Password className="w-6 h-6 text-gray-400" />
              </span>
            </div>
          </div>
          <Button>
            Sign In <ArrowRight weight="bold" className="w-4  h-4 ml-2 " />
          </Button>
          <p className="text-sm text-center text-gray-500">
            No account?{" "}
            <a className="underline" href="">
              Sign up
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
