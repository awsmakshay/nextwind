import { useSortBy, useTable } from "react-table";
import { SortDownIcon, SortIcon, SortUpIcon } from "./Icons";

const Table = ({ columns, data }) => {
  // Use the state and functions returned from useTable to build your UI
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable(
      {
        columns,
        data,
      },
      useSortBy
    );
  return (
    <div className="flex flex-col overflow-x-scroll">
      <div>
        <table {...getTableProps()} className="relative min-w-full text-sm ">
          <thead className="w-full bg-gray-100 ">
            {headerGroups.map((headerGroup, index) => (
              <tr key={index} {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column, index) => (
                  <th
                    key={index}
                    scope="col"
                    className=" group px-4 pt-3 pb-2 text-left text-xs font-medium uppercase tracking-wider text-gray-800 hover:bg-primary-100"
                    {...column.getHeaderProps(column.getSortByToggleProps())}
                  >
                    <div className="flex items-center justify-between">
                      <p className=" whitespace-nowrap">
                        {column.render("Header")}
                      </p>
                      <span className="">
                        {column.isSorted ? (
                          column.isSortedDesc ? (
                            <SortDownIcon className="inline h-4 w-4  text-gray-600" />
                          ) : (
                            <SortUpIcon className="inline h-4 w-4  text-gray-600" />
                          )
                        ) : (
                          <SortIcon className="inline h-4 w-4  text-gray-600 opacity-0 group-hover:opacity-100" />
                        )}
                      </span>
                    </div>
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()} className="text-gray-600">
            {rows.map((row, i) => {
              prepareRow(row);
              return (
                <tr key={i} {...row.getRowProps()}>
                  {row.cells.map((cell, index) => {
                    return (
                      <td
                        key={index}
                        {...cell.getCellProps()}
                        className="max-w-[200px] truncate whitespace-nowrap border-t px-3 py-2   first-letter:uppercase"
                      >
                        {cell.render("Cell")}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
