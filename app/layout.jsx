import "./globals.css";

export const metadata = {
  title: "Cyber Ethos | Small Business Operator Systems",
  description:
    "Operational insight, AI workflow systems, information security, and web infrastructure for small business owners."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
