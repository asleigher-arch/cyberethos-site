import "./globals.css";

export const metadata = {
  title: "Cyber Ethos | Mission-Driven AI Systems",
  description:
    "Premium AI automation, operational systems, and cybersecurity foundations for modern small businesses."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
