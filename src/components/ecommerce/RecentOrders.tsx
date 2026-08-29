import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "../ui/table";
import Badge from "../ui/badge/Badge";

interface SecurityFinding {
  id: number;
  finding: string;
  detail: string;
  asset: string;
  severity: "Critical" | "High" | "Medium" | "Low";
  status: "Open" | "Investigating" | "Mitigated" | "Resolved";
}

const tableData: SecurityFinding[] = [
  {
    id: 1,
    finding: "MFA missing on admin mailbox",
    detail: "Microsoft 365 tenant",
    asset: "Identity",
    severity: "Critical",
    status: "Open",
  },
  {
    id: 2,
    finding: "Website plugins need updates",
    detail: "Business website",
    asset: "Web",
    severity: "High",
    status: "Investigating",
  },
  {
    id: 3,
    finding: "Shared password vault cleanup",
    detail: "Owner and VA access",
    asset: "Access",
    severity: "Medium",
    status: "Mitigated",
  },
  {
    id: 4,
    finding: "Backup coverage verified",
    detail: "Critical cloud files",
    asset: "Continuity",
    severity: "Low",
    status: "Resolved",
  },
  {
    id: 5,
    finding: "Phishing reporting workflow",
    detail: "Staff email procedure",
    asset: "Training",
    severity: "Medium",
    status: "Open",
  },
];

const severityColor = (severity: SecurityFinding["severity"]) => {
  if (severity === "Critical" || severity === "High") return "error";
  if (severity === "Medium") return "warning";
  return "success";
};

const statusColor = (status: SecurityFinding["status"]) => {
  if (status === "Resolved" || status === "Mitigated") return "success";
  if (status === "Investigating") return "warning";
  return "error";
};

export default function RecentOrders() {
  return (
    <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white px-4 pb-3 pt-4 dark:border-gray-800 dark:bg-white/[0.03] sm:px-6">
      <div className="flex flex-col gap-2 mb-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white/90">
            Recent Security Findings
          </h3>
          <p className="mt-1 text-theme-sm text-gray-500 dark:text-gray-400">
            Practical issues to clean up first.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button className="inline-flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-theme-sm font-medium text-gray-700 shadow-theme-xs hover:bg-gray-50 hover:text-gray-800 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-white/[0.03] dark:hover:text-gray-200">
            Filter
          </button>
          <button className="inline-flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-theme-sm font-medium text-gray-700 shadow-theme-xs hover:bg-gray-50 hover:text-gray-800 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-white/[0.03] dark:hover:text-gray-200">
            See all
          </button>
        </div>
      </div>
      <div className="max-w-full overflow-x-auto">
        <Table>
          <TableHeader className="border-gray-100 dark:border-gray-800 border-y">
            <TableRow>
              <TableCell isHeader className="py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400">
                Finding
              </TableCell>
              <TableCell isHeader className="py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400">
                Asset
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
                  {item.asset}
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
