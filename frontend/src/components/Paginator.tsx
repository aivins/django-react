import React from "react";
import { Pagination } from "react-bootstrap";

const Paginator = ({
  pageIndex,
  pageCount,
  canNextPage,
  nextPage,
  gotoPage,
  canPreviousPage,
  previousPage,
  paginatorOffset,
  maxPaginatorPageLinks,
}) => (
  <Pagination>
    <Pagination.First onClick={() => gotoPage(0)} />
    <Pagination.Prev
      disabled={!canPreviousPage}
      onClick={() => previousPage()}
    />
    {paginatorOffset >= maxPaginatorPageLinks && (
      <Pagination.Ellipsis
        onClick={() => gotoPage(paginatorOffset - maxPaginatorPageLinks)}
      />
    )}
    {[
      ...Array(
        pageCount < maxPaginatorPageLinks ? pageCount : maxPaginatorPageLinks
      ).keys(),
    ]
      .map((i) => i + paginatorOffset)
      .map((i) => (
        <Pagination.Item
          key={i + 1}
          active={i === pageIndex}
          onClick={() => gotoPage(i)}
        >
          {i + 1}
        </Pagination.Item>
      ))}
    {paginatorOffset < pageCount - maxPaginatorPageLinks && (
      <Pagination.Ellipsis
        onClick={() => gotoPage(paginatorOffset + maxPaginatorPageLinks)}
      />
    )}
    <Pagination.Next disabled={!canNextPage} onClick={() => nextPage()} />
    <Pagination.Last onClick={() => gotoPage(pageCount - 1)} />
  </Pagination>
);

export default Paginator;
