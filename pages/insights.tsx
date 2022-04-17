import { ReactElement } from "react";
import DummyPage from "../components/DummyPage";
import Layout from "../components/Layout";

const Insights = () => {
  return (
    <div>
      <DummyPage />
    </div>
  );
};

export default Insights;

Insights.getLayout = (page: ReactElement) => {
  return <Layout>{page}</Layout>;
};
