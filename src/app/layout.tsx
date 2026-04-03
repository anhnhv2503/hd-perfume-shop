import type { Metadata } from "next";

import { newsreader } from "@/app/ui/font";
import Footer from "@/components/ui/footer";
import NavBar from "@/components/ui/nav-bar";
import "./globals.css";

export const metadata: Metadata = {
  title: "HD Perfume",
  description: "HD Perfume",
  icons: {
    icon: [{ url: "/logo.png", type: "image/png" }],
  },
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
        <div className="pt-27">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
