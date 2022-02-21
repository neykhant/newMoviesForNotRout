import React from "react";
import TableBody from "./TableBody";
import TableHeader from "./TableHeader";


const Table = ({items, columns, sortColumn, onSort}) => {
  return (
    <table className="table">
      <TableHeader
        columns={columns}
        sortColumn={sortColumn}
        onSort={onSort}
      />
      <TableBody items={items} columns={columns} />
    </table>
  );
};

export default Table;
