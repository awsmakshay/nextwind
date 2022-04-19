import { ReactElement } from "react";
import DummyPage from "../components/DummyPage";
import Layout from "../components/Layout";

const Admin = () => {
  return (
    <div>
      <DummyPage />
    </div>
  );
};

export default Admin;

Admin.getLayout = (page: ReactElement) => {
  return <Layout title="admin">{page}</Layout>;
};
