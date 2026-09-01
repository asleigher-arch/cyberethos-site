import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "../ui/table";
import Link from "next/link";
import Badge from "../ui/badge/Badge";

const reviewEmail =
  "mailto:info@cyberethos.org?subject=Request%20a%20Security%20%26%20Ops%20Review&body=Hi%20Cyber%20Ethos%2C%0A%0AI%27d%20like%20to%20request%20a%20Security%20%26%20Ops%20Review.%0A%0ABusiness%20name%3A%0AWebsite%3A%0AWhat%20feels%20messy%20or%20risky%3A%0ATools%20we%20use%3A%0AStaff%2FVA%2Fcontractor%20access%20concerns%3A%0ABest%20contact%20email%2Fphone%3A%0A%0AThanks.%0A";

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
          <Link href="#what-we-review" className="inline-flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-theme-sm font-medium text-gray-700 shadow-theme-xs hover:bg-gray-50 hover:text-gray-800 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-white/[0.03] dark:hover:text-gray-200">
            See Review Scope
          </Link>
          <Link href={reviewEmail} className="inline-flex items-center gap-2 rounded-lg bg-brand-500 px-4 py-2.5 text-theme-sm font-medium text-white shadow-theme-xs hover:bg-brand-600">
            Request Review
          </Link>
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
