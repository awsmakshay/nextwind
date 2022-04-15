import { MagnifyingGlass } from "phosphor-react";
import { ReactElement, useMemo } from "react";
import Layout from "../../components/Layout";
import Table from "../../components/Table";
import membersData from "../../data/members.json";

const Members = () => {
  const data = useMemo(() => membersData, []);
  const columns = useMemo(
    () => [
      {
        Header: "First Name",
        accessor: "first_name",
      },
      {
        Header: "Last Name",
        accessor: "last_name",
      },
      {
        Header: "E-mail",
        accessor: "email",
      },
      {
        Header: "Gender",
        accessor: "gender",
      },
      {
        Header: "Company",
        accessor: "company",
      },
    ],
    []
  );
  return (
    <div>
      <div className="rounded-lg bg-white p-4 shadow-md">
        <div className="mb-4 flex items-center justify-between text-lg font-medium text-gray-600">
          <div className="">Members</div>
          <div className="flex space-x-4">
            <MagnifyingGlass className="mr-2 h-6 w-6" />
            Search
          </div>
        </div>
        <Table columns={columns} data={data} />
      </div>
    </div>
  );
};

export default Members;

Members.getLayout = (page: ReactElement) => {
  return <Layout>{page}</Layout>;
};
