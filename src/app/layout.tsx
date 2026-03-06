import type { Metadata } from "next";
import { Newsreader } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/nav-bar";
import Footer from "@/components/footer";

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "HD Perfume",
  description: "HD Perfume",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${newsreader.variable} font-mono`}>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
