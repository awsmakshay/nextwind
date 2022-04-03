import Head from "next/head";
import { IconContext } from "phosphor-react";
import Container from "../components/Container";
import Layout from "../components/Layout";
import dashboardItems from "../data/dashboardItems";

const Card = ({ children }) => {
  return (
    <div className="bg-white rounded-md  shadow-md hover:-translate-y-1 hover:shadow-xl transition  py-4 px-6 h-full cursor-pointer">
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
        <Container>
          <div className="text-2xl text-gray-800 font-bold">Hi, Joshua 👋</div>
          <div className="text-sm capitalize text-gray-600">
            welcome to your dashboard
          </div>

          <div className="grid py-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {dashboardItems.map((item) => (
              <div key={item.name}>
                <Card>
                  <div className="flex  items-center justify-between">
                    <div className="capitalize flex-1 pr-4">
                      <div className="flex-col items-center justify-center   ">
                        <div className="text-teal-600 font-bold text-lg">
                          {item.name}
                        </div>
                      </div>
                    </div>
                    <div>
                      <IconContext.Provider
                        value={{ size: 64, weight: "duotone" }}
                      >
                        {item.icon}
                      </IconContext.Provider>
                    </div>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </Container>
      </Layout>
    </div>
  );
}
