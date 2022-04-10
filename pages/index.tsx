import Head from "next/head";
import dashboardItems from "../data/dashboardItems";
import Layout from "../components/Layout";
import { ReactElement } from "react";

type Props = {
  children: JSX.Element;
};

const Card = ({ children }: Props) => {
  return (
    <div className="rounded-md shadow-lg bg-white py-4 px-6 h-80 ">
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
      <div className="grid py-12 grid-cols-1 md:grid-cols-2  gap-5">
        {dashboardItems.map((item, index) => (
          <div key={index}>
            <Card>
              <div className="flex  items-center justify-between">
                <div className="capitalize flex-1 pr-4">
                  <div className="flex-col items-center justify-center   ">
                    <div className="text-gray-600 font-medium ">
                      {item.name}
                    </div>
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
