import React from "react";
import Rtable from "../ReactTable/Rtable";

const data = [
  {
    clientName: "John Doe",
    caseName: "Case A",
    databaseName: "DB1",
    serverName: "Server1",
  },
  {
    clientName: "Jane Smith",
    caseName: "Case B",
    databaseName: "DB2",
    serverName: "Server2",
  },
  {
    clientName: "Michael Brown",
    caseName: "Case C",
    databaseName: "DB3",
    serverName: "Server3",
  },
  {
    clientName: "Emily Davis",
    caseName: "Case D",
    databaseName: "DB4",
    serverName: "Server4",
  },
  {
    clientName: "Daniel Wilson",
    caseName: "Case E",
    databaseName: "DB5",
    serverName: "Server5",
  },
  {
    clientName: "Sophia Johnson",
    caseName: "Case F",
    databaseName: "DB6",
    serverName: "Server6",
  },
  {
    clientName: "David Martinez",
    caseName: "Case G",
    databaseName: "DB7",
    serverName: "Server7",
  },
  {
    clientName: "Emma Anderson",
    caseName: "Case H",
    databaseName: "DB8",
    serverName: "Server8",
  },
  {
    clientName: "James Taylor",
    caseName: "Case I",
    databaseName: "DB9",
    serverName: "Server9",
  },
  {
    clientName: "Olivia Moore",
    caseName: "Case J",
    databaseName: "DB10",
    serverName: "Server10",
  },
  {
    clientName: "Liam Harris",
    caseName: "Case K",
    databaseName: "DB11",
    serverName: "Server11",
  },
  {
    clientName: "Charlotte Clark",
    caseName: "Case L",
    databaseName: "DB12",
    serverName: "Server12",
  },
  {
    clientName: "Benjamin White",
    caseName: "Case M",
    databaseName: "DB13",
    serverName: "Server13",
  },
  {
    clientName: "Ava Hall",
    caseName: "Case N",
    databaseName: "DB14",
    serverName: "Server14",
  },
  {
    clientName: "Noah Allen",
    caseName: "Case O",
    databaseName: "DB15",
    serverName: "Server15",
  },
  {
    clientName: "Mia Young",
    caseName: "Case P",
    databaseName: "DB16",
    serverName: "Server16",
  },
  {
    clientName: "Ethan King",
    caseName: "Case Q",
    databaseName: "DB17",
    serverName: "Server17",
  },
  {
    clientName: "Amelia Scott",
    caseName: "Case R",
    databaseName: "DB18",
    serverName: "Server18",
  },
  {
    clientName: "Lucas Lee",
    caseName: "Case S",
    databaseName: "DB19",
    serverName: "Server19",
  },
  {
    clientName: "Isabella Walker",
    caseName: "Case T",
    databaseName: "DB20",
    serverName: "Server20",
  },
];

const FindDatabasetable = () => {
  const columns = [
    {
      header: "Client Name",
      accessorKey: "clientName",
    },
    {
      header: "Case Name",
      accessorKey: "caseName",
    },
    {
      header: "Database Name",
      accessorKey: "databaseName",
    },
    {
      header: "Server Name",
      accessorKey: "serverName",
    },
  ];

  return (
    <div className="result-layout">
      <Rtable columns={columns} data={data} />
    </div>
  );
};

export default FindDatabasetable;
