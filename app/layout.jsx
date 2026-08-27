import "./globals.css";

export const metadata = {
  title: "Cyber Ethos | Small Business Operations and Offshore Support",
  description:
    "Cyber Ethos helps small business owners improve time, trust, control, and security, then plan practical offshore support and direct engineering help."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
