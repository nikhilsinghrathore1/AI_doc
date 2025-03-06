import type { Metadata } from "next";
import "./globals.css";
import Provider from "./Provider";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className={`w-full h-screen flex antialiased`}>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
