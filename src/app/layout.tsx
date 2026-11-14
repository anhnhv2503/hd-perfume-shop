import type { Metadata } from "next";

import { bodyFont, newsreader } from "@/app/ui/font";
import BackToTop from "@/components/ui/back-to-top";
import CartToast from "@/components/ui/cart-toast";
import { CartProvider } from "@/context/cart-context";
import Footer from "@/components/ui/footer";
import NavBar from "@/components/ui/nav-bar";
import "./globals.css";

export const metadata: Metadata = {
  title: "HD Perfume",
  description: "HD Perfume — Nước hoa cao cấp chính hãng",
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
    <html lang="vi">
      <body
        className={`${newsreader.variable} ${bodyFont.variable} font-sans bg-brand-dark text-white selection:bg-brand-gold selection:text-black`}
      >
        <CartProvider>
          <NavBar />
          <div className="pt-27">{children}</div>
          <Footer />
          <CartToast />
          <BackToTop />
        </CartProvider>
      </body>
    </html>
  );
}
