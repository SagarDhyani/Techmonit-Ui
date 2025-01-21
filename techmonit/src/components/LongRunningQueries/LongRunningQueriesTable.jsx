import React from "react";
import Rtable from "../ReactTable/Rtable";

const data = [
  {
    database: "DB1",
    pid: "12345",
    blockedBy: "67890",
    appName: "App1",
    clientAdd: "192.168.1.1",
    query: "SELECT * FROM users WHERE id = 1;",
  },
  {
    database: "DB2",
    pid: "12346",
    blockedBy: "67891",
    appName: "App2",
    clientAdd: "192.168.1.2",
    query: "UPDATE orders SET status = 'shipped' WHERE id = 100;",
  },
  {
    database: "DB1",
    pid: "12347",
    blockedBy: "67892",
    appName: "App3",
    clientAdd: "192.168.1.3",
    query: "DELETE FROM inventory WHERE product_id = 200;",
  },
  {
    database: "DB3",
    pid: "12348",
    blockedBy: "67893",
    appName: "App4",
    clientAdd: "192.168.1.4",
    query: "SELECT name FROM employees WHERE department = 'HR';",
  },
  {
    database: "DB4",
    pid: "12349",
    blockedBy: "67894",
    appName: "App5",
    clientAdd: "192.168.1.5",
    query:
      "SELECT * FROM sales WHERE date BETWEEN '2022-01-01' AND '2022-12-31';",
  },
  {
    database: "DB2",
    pid: "12350",
    blockedBy: "67895",
    appName: "App6",
    clientAdd: "192.168.1.6",
    query: "INSERT INTO payments (amount, method) VALUES (100, 'Credit');",
  },
  {
    database: "DB3",
    pid: "12351",
    blockedBy: "67896",
    appName: "App7",
    clientAdd: "192.168.1.7",
    query: "UPDATE users SET last_login = NOW() WHERE id = 150;",
  },
  {
    database: "DB1",
    pid: "12352",
    blockedBy: "67897",
    appName: "App8",
    clientAdd: "192.168.1.8",
    query: "SELECT COUNT(*) FROM products WHERE status = 'available';",
  },
  {
    database: "DB4",
    pid: "12353",
    blockedBy: "67898",
    appName: "App9",
    clientAdd: "192.168.1.9",
    query: "SELECT * FROM customers WHERE registration_date >= '2023-01-01';",
  },
  {
    database: "DB2",
    pid: "12354",
    blockedBy: "67899",
    appName: "App10",
    clientAdd: "192.168.1.10",
    query: "DELETE FROM logs WHERE created_at < '2022-01-01';",
  },
  {
    database: "DB3",
    pid: "12355",
    blockedBy: "67900",
    appName: "App11",
    clientAdd: "192.168.1.11",
    query: "SELECT id, name FROM products WHERE price > 50;",
  },
  {
    database: "DB1",
    pid: "12356",
    blockedBy: "67901",
    appName: "App12",
    clientAdd: "192.168.1.12",
    query: "SELECT * FROM orders WHERE order_status = 'pending';",
  },
  {
    database: "DB4",
    pid: "12357",
    blockedBy: "67902",
    appName: "App13",
    clientAdd: "192.168.1.13",
    query: "UPDATE users SET status = 'active' WHERE id = 10;",
  },
  {
    database: "DB2",
    pid: "12358",
    blockedBy: "67903",
    appName: "App14",
    clientAdd: "192.168.1.14",
    query: "SELECT email FROM customers WHERE subscribed = true;",
  },
  {
    database: "DB3",
    pid: "12359",
    blockedBy: "67904",
    appName: "App15",
    clientAdd: "192.168.1.15",
    query: "SELECT COUNT(*) FROM transactions WHERE status = 'completed';",
  },
  {
    database: "DB1",
    pid: "12360",
    blockedBy: "67905",
    appName: "App16",
    clientAdd: "192.168.1.16",
    query: "SELECT * FROM logs WHERE level = 'error';",
  },
  {
    database: "DB2",
    pid: "12361",
    blockedBy: "67906",
    appName: "App17",
    clientAdd: "192.168.1.17",
    query: "UPDATE inventory SET stock = stock - 1 WHERE product_id = 250;",
  },
  {
    database: "DB4",
    pid: "12362",
    blockedBy: "67907",
    appName: "App18",
    clientAdd: "192.168.1.18",
    query: "SELECT AVG(price) FROM products WHERE category = 'electronics';",
  },
  {
    database: "DB3",
    pid: "12363",
    blockedBy: "67908",
    appName: "App19",
    clientAdd: "192.168.1.19",
    query:
      "INSERT INTO users (name, email) VALUES ('John Doe', 'john@example.com');",
  },
  {
    database: "DB2",
    pid: "12364",
    blockedBy: "67909",
    appName: "App20",
    clientAdd: "192.168.1.20",
    query: "SELECT id FROM orders WHERE status = 'cancelled';",
  },
];

const LongRunningQueriesTable = () => {
  const columns = [
    {
      header: "Database",
      accessorKey: "database",
    },
    {
      header: "PId",
      accessorKey: "pid",
    },
    {
      header: "Blocked By",
      accessorKey: "blockedBy",
    },
    {
      header: "Application name",
      accessorKey: "appName",
    },
    {
      header: "Client Add",
      accessorKey: "clientAdd",
    },
    {
      header: "Query",
      accessorKey: "query",
    },
  ];

  return (
    <div className="result-layout">
      <Rtable columns={columns} data={data} />
    </div>
  );
};

export default LongRunningQueriesTable;
