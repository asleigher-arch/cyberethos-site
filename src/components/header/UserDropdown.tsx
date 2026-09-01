export default function UserDropdown() {
  return (
    <div className="hidden items-center gap-3 rounded-full border border-gray-200 bg-white px-4 py-2 shadow-theme-xs dark:border-gray-800 dark:bg-white/[0.03] sm:flex">
      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-500 text-xs font-bold text-white">
        CE
      </span>
      <div className="leading-tight">
        <p className="text-sm font-semibold text-gray-800 dark:text-white/90">
          Cyber Ethos Dashboard
        </p>
        <p className="text-xs text-gray-500 dark:text-gray-400">
          Public security ops preview
        </p>
      </div>
    </div>
  );
}
