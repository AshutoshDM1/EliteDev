import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Ashutosh Tiwari",
  description: "EliteDev Portfolio of Ashutosh Tiwari",
  icons:
    "https://web.dev/static/articles/building/an-adaptive-favicon/image/example-dark-theme-favico-6a6f6f67bc3e7.png",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#ffffff]`}
      >
        {children}
      </body>
    </html>
  );
}
