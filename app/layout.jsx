import "./globals.css";

export const metadata = {
  title: "Cyber Ethos | Small Business Tech Cleanup",
  description:
    "Cyber Ethos helps small businesses clean up messy tools, improve security, automate repetitive work, and build safer VA, offshore, and engineering support systems."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
