import { ReactElement } from "react";
import DummyPage from "../components/DummyPage";
import Layout from "../components/Layout";

const Customers = () => {
  return (
    <div>
      <DummyPage />
    </div>
  );
};

export default Customers;

Customers.getLayout = (page: ReactElement) => {
  return <Layout>{page}</Layout>;
};
