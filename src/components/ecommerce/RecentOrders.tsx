import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "../ui/table";
import Badge from "../ui/badge/Badge";

interface SecurityFlag {
  id: number;
  finding: string;
  detail: string;
  region: string;
  severity: "Critical" | "High" | "Medium" | "Low";
  status: "Active" | "Watching" | "Improving" | "Resolved";
}

const tableData: SecurityFlag[] = [
  {
    id: 1,
    finding: "Phishing kits targeting small businesses",
    detail: "Credential theft campaigns continue to rise",
    region: "Global",
    severity: "High",
    status: "Active",
  },
  {
    id: 2,
    finding: "MFA fatigue and weak admin controls",
    detail: "Identity remains the easiest entry point",
    region: "U.S.",
    severity: "Critical",
    status: "Watching",
  },
  {
    id: 3,
    finding: "Exposed cloud storage and stale access",
    detail: "Old users, vendors, and shared links create risk",
    region: "Global",
    severity: "Medium",
    status: "Active",
  },
  {
    id: 4,
    finding: "Ransomware pressure on public services",
    detail: "Healthcare, education, and local government remain targets",
    region: "U.S. / EU",
    severity: "High",
    status: "Watching",
  },
  {
    id: 5,
    finding: "Backup readiness gaps",
    detail: "Many teams still cannot prove fast recovery",
    region: "Global",
    severity: "Medium",
    status: "Improving",
  },
];

const severityColor = (severity: SecurityFlag["severity"]) => {
  if (severity === "Critical" || severity === "High") return "error";
  if (severity === "Medium") return "warning";
  return "success";
};

const statusColor = (status: SecurityFlag["status"]) => {
  if (status === "Resolved" || status === "Improving") return "success";
  if (status === "Watching") return "warning";
  return "error";
};

export default function RecentOrders() {
  return (
    <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white px-4 pb-3 pt-4 dark:border-gray-800 dark:bg-white/[0.03] sm:px-6">
      <div className="flex flex-col gap-2 mb-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white/90">
            Recent Security Flags Around the World
          </h3>
          <p className="mt-1 text-theme-sm text-gray-500 dark:text-gray-400">
            Public risk signals that show why cleanup, access control, and resilient operations matter.
          </p>
        </div>
      </div>
      <div className="max-w-full overflow-x-auto">
        <Table>
          <TableHeader className="border-gray-100 dark:border-gray-800 border-y">
            <TableRow>
              <TableCell isHeader className="py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400">
                Flag
              </TableCell>
              <TableCell isHeader className="py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400">
                Region
              </TableCell>
              <TableCell isHeader className="py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400">
                Severity
              </TableCell>
              <TableCell isHeader className="py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400">
                Status
              </TableCell>
            </TableRow>
          </TableHeader>

          <TableBody className="divide-y divide-gray-100 dark:divide-gray-800">
            {tableData.map((item) => (
              <TableRow key={item.id}>
                <TableCell className="py-3">
                  <div>
                    <p className="font-medium text-gray-800 text-theme-sm dark:text-white/90">
                      {item.finding}
                    </p>
                    <span className="text-gray-500 text-theme-xs dark:text-gray-400">
                      {item.detail}
                    </span>
                  </div>
                </TableCell>
                <TableCell className="py-3 text-gray-500 text-theme-sm dark:text-gray-400">
                  {item.region}
                </TableCell>
                <TableCell className="py-3 text-gray-500 text-theme-sm dark:text-gray-400">
                  <Badge size="sm" color={severityColor(item.severity)}>
                    {item.severity}
                  </Badge>
                </TableCell>
                <TableCell className="py-3 text-gray-500 text-theme-sm dark:text-gray-400">
                  <Badge size="sm" color={statusColor(item.status)}>
                    {item.status}
                  </Badge>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
