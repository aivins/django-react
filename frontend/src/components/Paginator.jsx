import React from "react";

const Paginator = () => (
  <Pagination>
    <Pagination.First onClick={() => gotoPage(0)} />
    {canPreviousPage && <Pagination.Prev onClick={() => previousPage()} />}
    {paginatorOffset >= maxPaginatorPageLinks && (
      <Pagination.Ellipsis
        onClick={() => gotoPage(paginatorOffset - maxPaginatorPageLinks)}
      />
    )}
    {[...Array(maxPaginatorPageLinks).keys()]
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
    {canNextPage && <Pagination.Next onClick={() => nextPage()} />}
    <Pagination.Last onClick={() => gotoPage(pageCount - 1)} />
  </Pagination>
);

export default Pagination;
