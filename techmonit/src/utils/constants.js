export const menuItems = [
  { name: "Find the database", path: "/find_database" },
  {
    name: "Server Activity",
    path: "/server_activity",
    subItems: [
      { name: "PG Activity", path: "/server_activity/pg_activity" },
      { name: "Bouncer Status", path: "/server_activity/bouncer_status" },
      {
        name: "RabbitMQ Management",
        path: "/server_activity/rabbit_management",
      },
      { name: "Redis Status", path: "/server_activity/redis_status" },
      { name: "ES Activity", path: "/server_activity/es_activity" },
    ],
  },
  { name: "Long Running Queries", path: "/long_running_queries" },
  {
    name: "Size DB & Table",
    path: "size_db",
    subItems: [
      { name: "DB Size", path: "/size_db/db_size" },
      { name: "Table Size", path: "/" },
    ],
  },
  { name: "DB count", path: "/db_count" },
  { name: "Techconfig", path: "/techconfig" },
  {
    name: "Linux Maintenance",
    path: "/linux_maintenance",
    subItems: [
      { name: "Reboot", path: "/linux_maintenance/reboot" },
      { name: "Last Reboot", path: "/linux_maintenance/last_reboot" },
      { name: "MachineService", path: "/linux_maintenance/machine_service" },
      { name: "Htop", path: "/linux_maintenance/htop" },
    ],
  },
  { name: "Drive Size", path: "/drive_size" },
  {
    name: "Daily Job check",
    path: "/daily_job_check",
    subItems: [
      { name: "Daily Job check", path: "/" },
      { name: "Detail Job check", path: "/" },
    ],
  },
];
