import React from "react";
import Rtable from "../ReactTable/Rtable";

const DbCountTable = () => {
  const columns = [
    {
      header: "Index",
      accessorKey: "index",
    },
    {
      header: "Server Name",
      accessorKey: "serverName",
    },
    {
      header: "3 Largest Db",
      accessorKey: "largestDbs",
      cell: ({ row }) => (
        <div>
          {row.original.largestDbs.map((db, index) => (
            <div key={index}>{db}</div>
          ))}
        </div>
      ),
    },
    {
      header: "Size in GB",
      accessorKey: "sizes",
      cell: ({ row }) => (
        <div>
          {row.original.sizes.map((size, index) => (
            <div key={index}>{size}</div>
          ))}
        </div>
      ),
    },
    {
      header: "Count Db",
      accessorKey: "countDb",
    },
  ];

  const data = [
    {
      index: 1,
      serverName: "Server A",
      largestDbs: ["Database1", "Database2", "Database3"],
      sizes: [50, 30, 20],
      countDb: 100,
    },
    {
      index: 2,
      serverName: "Server B",
      largestDbs: ["Database4", "Database5", "Database6"],
      sizes: [70, 40, 30],
      countDb: 140,
    },
    {
      index: 3,
      serverName: "Server C",
      largestDbs: ["Database7", "Database8", "Database9"],
      sizes: [60, 45, 35],
      countDb: 140,
    },
  ];

  return (
    <div className="result-layout">
      <Rtable columns={columns} data={data} />
    </div>
  );
};

export default DbCountTable;
