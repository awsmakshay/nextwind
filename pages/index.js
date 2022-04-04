import Head from "next/head";
import { IconContext } from "phosphor-react";
import Container from "../components/Container";
import Layout from "../components/Layout";
import dashboardItems from "../data/dashboardItems";

const Card = ({ children }) => {
  return (
    <div className="rounded-md shadow-lg bg-white py-4 px-6 h-80 ">
      {children}
    </div>
  );
};

export default function Home() {
  return (
    <div>
      <Head>
        <title>Dashboard</title>
        <meta name="description" content="Dashboard" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <div className="grid py-12 grid-cols-1 md:grid-cols-2  gap-5">
          {dashboardItems.map((item) => (
            <div key={item.name}>
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
      </Layout>
    </div>
  );
}
