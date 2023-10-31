import "./globals.css";

export const metadata = {
  title: "Magnet",
  description: "Creando nuevas experiencias digitales.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
