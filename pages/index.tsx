import Head from "next/head";
import dashboardItems from "../data/dashboardItems";
import Layout from "../components/Layout";
import { ReactElement } from "react";

type Props = {
  children: JSX.Element;
};

const Card = ({ children }: Props) => {
  return (
    <div className="h-80 rounded-md bg-white py-4 px-6 shadow-md dark:bg-gray-800 ">
      {children}
    </div>
  );
};

const Home = () => {
  return (
    <div>
      <Head>
        <title>Dashboard</title>
        <meta name="description" content="Dashboard" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="grid grid-cols-1 gap-8 py-12  lg:grid-cols-2">
        {dashboardItems.map((item, index) => (
          <div key={index}>
            <Card>
              <div className="flex  items-center justify-between">
                <div className="flex-1 pr-4 capitalize">
                  <div className="flex-col items-center justify-center   ">
                    <div className="font-medium text-gray-600 "></div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Home;

Home.getLayout = (page: ReactElement) => {
  return <Layout>{page}</Layout>;
};
