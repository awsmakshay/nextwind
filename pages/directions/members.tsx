import { ReactElement } from "react";
import Layout from "../../components/Layout";

const Members = () => {
  return <div>Member</div>;
};

export default Members;

Members.getLayout = (page: ReactElement) => {
  return <Layout>{page}</Layout>;
};
