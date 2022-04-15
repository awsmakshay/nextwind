import { ArrowRight, At, Password, SquaresFour } from "phosphor-react";
import Button from "../../components/Button";
import Input from "../../components/Input";

const Login = () => {
  return (
    <div>
      <div className="flex h-screen ">
        <div className="hidden  w-7/12 flex-col items-center justify-center bg-primary-50 p-12 lg:flex">
          <div className="flex w-full  items-center text-2xl font-bold">
            <SquaresFour className="mr-2 h-8 w-8 text-primary-400" />
            App Logo
          </div>
          <img src="/images/analytics.svg" alt="analytics" className="h-full" />
        </div>
        <div className="flex flex-1 flex-col items-center justify-center bg-white px-20">
          <div className=" w-full max-w-lg">
            <h1 className="mb-10 text-xl font-bold text-gray-600  sm:text-3xl">
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
                    <span className="absolute inset-y-0 right-4 inline-flex items-center">
                      <At className="h-6 w-6 text-gray-400" />
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
                    <span className="absolute inset-y-0 right-4 inline-flex items-center">
                      <Password className="h-6 w-6 text-gray-400" />
                    </span>
                  </div>
                </div>
              </div>

              <Button className="mt-8">
                Sign In <ArrowRight weight="bold" className="ml-2  h-4 w-4 " />
              </Button>
            </form>
            <p className="mt-10 text-center text-sm text-gray-500">
              Don&apos;t have an account?{" "}
              <a
                className="underline decoration-primary-500 decoration-2"
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
