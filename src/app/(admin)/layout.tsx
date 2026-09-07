// Legacy demo routes are redirected by src/proxy.ts. Public pages never mount admin chrome.
export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
