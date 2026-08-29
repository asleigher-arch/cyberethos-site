import "./globals.css";

export const metadata = {
  title: "Cyber Ethos | Practical Tech Cleanup for Small Businesses",
  description:
    "Cyber Ethos helps small businesses clean up messy tools, improve security basics, delegate work safely, automate repeated admin work, and build practical support systems."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
