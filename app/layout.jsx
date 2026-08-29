import "./globals.css";

export const metadata = {
  title: "Cyber Ethos | Practical Tech, Security, and Support Systems",
  description:
    "Cyber Ethos helps small businesses clean up messy tools, improve security, automate repetitive work, and bring in VA or engineering help without full-time staff."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
