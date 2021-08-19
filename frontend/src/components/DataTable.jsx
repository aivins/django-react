import React from "react";
import { useTable, useSortBy, usePagination } from "react-table";
import {
  Table,
  Spinner,
  ButtonGroup,
  Button,
  Pagination,
} from "react-bootstrap";
import { ArrowRepeat } from "react-bootstrap-icons";
import ColumnToggle from "./ColumnToggle";

const DataTable = ({
  data = [],
  columns = [],
  striped = false,
  bordered = true,
  hover = true,
  sortable = true,
  loading = false,
  refetch = () => {
    console.log("No refetch function");
  },
  pageSize = 10,
  ...props
}) => {
  const {
    getTableProps,
    getTableBodyProps,
    allColumns,
    headerGroups,
    prepareRow,
    page,
    canPreviousPage,
    canNextPage,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state: { pageIndex },
  } = useTable(
    { columns, data, initialState: { pageIndex: 0, pageSize } },
    useSortBy,
    usePagination
  );

  const paginate = pageCount > 1;
  const maxPaginatorPageLinks = 10;
  const paginatorOffset =
    Math.floor(pageIndex / maxPaginatorPageLinks) * maxPaginatorPageLinks;
  console.log({ pageIndex, maxPaginatorPageLinks, paginatorOffset });

  return loading ? (
    <Spinner animation="border" />
  ) : (
    <>
      <ButtonGroup>
        <ColumnToggle columns={allColumns} />
        <Button onClick={() => refetch()}>
          <ArrowRepeat />
        </Button>
      </ButtonGroup>
      {paginate && <Paginator />}
      <Table {...{ striped, bordered, hover }} {...props} {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th
                  {...column.getHeaderProps(
                    sortable && column.getSortByToggleProps()
                  )}
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
          {page.map((row) => {
            prepareRow(row);

            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </Table>{" "}
    </>
  );
};

export default DataTable;
