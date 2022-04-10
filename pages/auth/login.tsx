import { ArrowRight, At, Password, SquaresFour } from "phosphor-react";
import Button from "../../components/Button";
import Input from "../../components/Input";

const Login = () => {
  return (
    <div>
      <div className="flex h-screen ">
        <div className="bg-primary-50  w-7/12 hidden lg:flex flex-col items-center justify-center p-12">
          <div className="text-2xl font-bold  flex items-center w-full">
            <SquaresFour className="h-8 w-8 mr-2 text-red-400" />
            App Logo
          </div>
          <img src="/images/analytics.svg" alt="analytics" className="h-full" />
        </div>
        <div className="flex-col flex-1 flex items-center justify-center bg-white px-20">
          <div className=" max-w-lg w-full">
            <h1 className="text-xl font-bold text-gray-600 sm:text-3xl  mb-10">
              Sign in
            </h1>

            <form>
              <div className="space-y-4">
                <div>
                  <label htmlFor="email" className="text-sm font-medium">
                    Email
                  </label>
                  <div className="relative mt-1">
                    <Input
                      type="email"
                      name="email"
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
                      name="password"
                      placeholder="Enter password"
                      required
                    />
                    <span className="absolute inset-y-0 inline-flex items-center right-4">
                      <Password className="w-6 h-6 text-gray-400" />
                    </span>
                  </div>
                </div>
              </div>

              <Button className="mt-8">
                Sign In <ArrowRight weight="bold" className="w-4  h-4 ml-2 " />
              </Button>
            </form>
            <p className="text-sm text-center text-gray-500 mt-10">
              Don&apos;t have an account?{" "}
              <a
                className="underline decoration-2 decoration-primary-500"
                href=""
              >
                Sign up
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
