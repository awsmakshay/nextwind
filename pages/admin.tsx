import { ReactElement } from "react";
import Layout from "../components/Layout";

const Admin = () => {
  return <div>Admin</div>;
};

export default Admin;

Admin.getLayout = (page: ReactElement) => {
  return <Layout>{page}</Layout>;
};
