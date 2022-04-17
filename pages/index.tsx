import Head from "next/head";
import dashboardItems from "../data/dashboardItems";
import Layout from "../components/Layout";
import { ReactElement } from "react";
import InfoCard from "../components/InfoCard";
import {
  CurrencyCircleDollar,
  CurrencyDollar,
  Heart,
  Package,
  User,
} from "phosphor-react";

type Props = {
  children: JSX.Element;
};

const Card = ({ children }: Props) => {
  return (
    <div className="h-80 rounded-lg bg-white py-4 px-6 shadow-md dark:bg-gray-800 ">
      {children}
    </div>
  );
};

// TODO: Next SEO for title and description
const Home = () => {
  return (
    <div>
      <Head>
        <title>Dashboard</title>
        <meta name="description" content="Dashboard" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="mb-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
        <InfoCard
          title="Net Profit"
          value="$12556"
          icon={
            <CurrencyCircleDollar
              className="h-12 w-12 text-sky-600"
              weight="duotone"
            />
          }
        />
        <InfoCard
          title="Likes"
          value="1943"
          icon={<Heart className="h-12 w-12 text-red-400" weight="duotone" />}
        />
        <InfoCard
          title="Total Orders"
          value="312656"
          icon={
            <Package className="h-12 w-12 text-indigo-500" weight="duotone" />
          }
        />
        <InfoCard
          title="Returning Users"
          value="83%"
          icon={<User className="h-12 w-12 text-cyan-500" weight="duotone" />}
        />
      </div>
      <div className="grid grid-cols-1 gap-8  lg:grid-cols-2">
        {[...Array(4)].map((_, index) => (
          <div key={index}>
            <Card>
              <div className="flex h-full items-center justify-center">
                <div className="font-medium text-gray-400 ">
                  Charts Coming Soon
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
