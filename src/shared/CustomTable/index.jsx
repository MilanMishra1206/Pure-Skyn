import React, { useState, useMemo } from "react";
import { useTable, useSortBy, usePagination } from "react-table";

const Table = ({
  columns,
  data,
  pageSizeOptions = [5, 10, 15],
  initialPageSize = 5,
  showPaginationControls,
}) => {
  const [filter, setFilter] = useState("");

  const filteredData = useMemo(() => {
    return data.filter((row) =>
      row.name.toLowerCase().includes(filter.toLowerCase())
    );
  }, [filter, data]);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    state: { pageIndex, pageSize },
    canPreviousPage,
    canNextPage,
    pageCount,
    gotoPage,
    previousPage,
    nextPage,
    setPageSize,
  } = useTable(
    {
      columns,
      data: filteredData,
      initialState: { pageIndex: 0, pageSize: initialPageSize },
      manualPagination: true,
      pageCount: Math.ceil(filteredData.length / initialPageSize),
    },
    useSortBy,
    usePagination
  );

  const currentPageRows = rows.slice(
    pageIndex * pageSize,
    (pageIndex + 1) * pageSize
  );

  return (
    <div className="container p-5">
      {/* Search Input */}
      <div className="mb-5">
        <input
          type="text"
          className="p-2 border border-gray-300 rounded"
          placeholder="Search by name..."
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        />
      </div>

      {/* Table */}
      <table
        {...getTableProps()}
        className="min-w-full border-collapse border border-gray-200"
      >
        <thead className="bg-gray-100">
          {headerGroups.map((headerGroup, index) => (
            <tr {...headerGroup.getHeaderGroupProps()} key={index}>
              {headerGroup.headers.map((column, index) => (
                <th
                  {...column.getHeaderProps(column.getSortByToggleProps())}
                  className="px-6 py-3 text-left cursor-pointer"
                  key={index}
                >
                  {column.render("Header")}
                  <span>
                    {column.isSorted
                      ? column.isSortedDesc
                        ? " 🔽"
                        : " 🔼"
                      : ""}
                  </span>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {currentPageRows.map((row, index) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()} className="border-t" key={index}>
                {row.cells.map((cell, idx) => (
                  <td {...cell.getCellProps()} className="px-6 py-3" key={idx}>
                    {cell.render("Cell")}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>

      {/* Pagination Controls */}
      {showPaginationControls && (
        <div className="mt-5 flex justify-between items-center">
          <div>
            <button
              onClick={() => gotoPage(0)}
              disabled={!canPreviousPage}
              className="px-3 py-2 bg-blue-500 text-white rounded disabled:bg-gray-300"
            >
              {"<<"}
            </button>{" "}
            <button
              onClick={() => previousPage()}
              disabled={!canPreviousPage}
              className="px-3 py-2 bg-blue-500 text-white rounded disabled:bg-gray-300"
            >
              {"<"}
            </button>{" "}
            <button
              onClick={() => nextPage()}
              disabled={!canNextPage}
              className="px-3 py-2 bg-blue-500 text-white rounded disabled:bg-gray-300"
            >
              {">"}
            </button>{" "}
            <button
              onClick={() => gotoPage(pageCount - 1)}
              disabled={!canNextPage}
              className="px-3 py-2 bg-blue-500 text-white rounded disabled:bg-gray-300"
            >
              {">>"}
            </button>
          </div>
          <div>
            <select
              value={pageSize}
              onChange={(e) => setPageSize(Number(e.target.value))}
              className="p-2 border border-gray-300 rounded"
            >
              {pageSizeOptions.map((size) => (
                <option key={size} value={size}>
                  Show {size}
                </option>
              ))}
            </select>
          </div>
        </div>
      )}
    </div>
  );
};

export default Table;
