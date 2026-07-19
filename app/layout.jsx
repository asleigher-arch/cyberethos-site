import "./globals.css";

export const metadata = {
  title: "Cyber Ethos Operator",
  description:
    "A simple operator report that gives small business owners visibility into operations, security basics, AI workflow, and web intake."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
