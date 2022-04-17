import { ReactElement } from "react";
import DummyPage from "../../components/DummyPage";
import Layout from "../../components/Layout";

const Docs = () => {
  return (
    <div>
      <DummyPage />
    </div>
  );
};

export default Docs;

Docs.getLayout = (page: ReactElement) => {
  return <Layout>{page}</Layout>;
};
