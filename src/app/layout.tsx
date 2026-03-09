import Footer from "@/components/footer";
import NavBar from "@/components/nav-bar";
import type { Metadata } from "next";
import { Newsreader } from "next/font/google";
import "./globals.css";

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
      <body
        className={`${newsreader.variable} font-mono bg-brand-dark text-white selection:bg-brand-gold selection:text-black`}
      >
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
