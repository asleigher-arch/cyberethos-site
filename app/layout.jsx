import "./globals.css";

export const metadata = {
  title: "Cyber Ethos Operator",
  description:
    "A simple operator review for small-business operations, security basics, AI readiness, and web intake."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
