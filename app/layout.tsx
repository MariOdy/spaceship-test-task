import Providers from "./providers";

import "./globals.css";

export const metadata = {
  title: "Spaceship Test Task",
  description: "The Real Artists' Spaceship Test Task",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex items-center justify-center h-screen">
        {children}
      </body>
    </html>
  );
}
