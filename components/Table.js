import { ArrowDown, ArrowsDownUp, ArrowUp } from "phosphor-react";
import { useSortBy, useTable } from "react-table";

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
        <table {...getTableProps()} className=" min-w-full  text-sm  ">
          <thead className="w-full ">
            {headerGroups.map((headerGroup, index) => (
              <tr key={index} {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column, index) => (
                  <th
                    key={index}
                    scope="col"
                    className=" group px-3 pt-3 pb-2 text-left text-xs font-medium uppercase tracking-wider text-gray-500 hover:bg-primary-100 dark:text-gray-100 dark:hover:bg-primary-900"
                    {...column.getHeaderProps(column.getSortByToggleProps())}
                  >
                    <div className="flex items-center justify-between">
                      <p className=" whitespace-nowrap">
                        {column.render("Header")}
                      </p>
                      <span className="text-gray-600 dark:text-gray-100">
                        {column.isSorted ? (
                          column.isSortedDesc ? (
                            <ArrowDown className="inline h-4 w-4  " />
                          ) : (
                            <ArrowUp className="inline h-4 w-4  " />
                          )
                        ) : (
                          <ArrowsDownUp className="inline h-4 w-4   opacity-0 group-hover:opacity-100" />
                        )}
                      </span>
                    </div>
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody
            {...getTableBodyProps()}
            className="text-gray-600 dark:text-gray-200"
          >
            {rows.map((row, i) => {
              prepareRow(row);
              return (
                <tr
                  key={i}
                  {...row.getRowProps()}
                  className="border-t-2 border-dashed border-gray-100 dark:border-gray-900"
                >
                  {row.cells.map((cell, index) => {
                    return (
                      <td
                        key={index}
                        {...cell.getCellProps()}
                        className="max-w-[200px] truncate whitespace-nowrap  px-3 py-3 first-letter:uppercase   "
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
