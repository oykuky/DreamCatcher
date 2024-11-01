import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Dream Catcher",
  description: "your dream catched",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
