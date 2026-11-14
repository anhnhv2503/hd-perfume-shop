"use client";

import Image from "next/image";
import logo from "@/assets/logo.png";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useCart } from "@/context/cart-context";

const CartLink = () => {
  const { count } = useCart();
  return (
    <Link
      href="/cart"
      aria-label={`Giỏ hàng (${count} sản phẩm)`}
      className="relative hover:text-brand-gold transition-colors"
    >
      <svg
        fill="none"
        height="20"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        viewBox="0 0 24 24"
        width="20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M6 7h12l1 13H5L6 7z" />
        <path d="M9 7a3 3 0 0 1 6 0" />
      </svg>
      {count > 0 && (
        <span
          key={count}
          className="badge-bump absolute -top-2 -right-2 min-w-4 h-4 px-1 rounded-full bg-brand-gold text-black text-[10px] leading-4 text-center font-semibold"
        >
          {count}
        </span>
      )}
    </Link>
  );
};

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Two links share /products, so only query-less links get an active state.
  const isActive = (href: string) => !href.includes("?") && pathname === href;

  const rightOptions = [
    { label: "Cửa Hàng", href: "/products" },
    { label: "Bộ Sưu Tập", href: "/products?category=Best%20Seller" },
  ];

  const leftOptions = [
    { label: "Giới Thiệu", href: "/about" },
    { label: "Liên Hệ", href: "/contact" },
  ];

  const allOptions = [...rightOptions, ...leftOptions];

  return (
    <nav
      className={`fixed w-full z-50 backdrop-blur-md border-b transition-all duration-500 ${
        scrolled
          ? "bg-black/90 border-white/10 shadow-lg shadow-black/40"
          : "bg-zinc-900/70 border-transparent"
      }`}
      data-purpose="main-navigation"
    >
      {/* ── Desktop layout ── */}
      <div className="max-row mx-auto px-6 lg:px-12 py-1 flex justify-between items-center">
        {/* Left links – hidden on mobile */}
        <div className="hidden md:flex gap-8 items-center">
          {rightOptions.map((option, index) => (
            <Link
              key={index}
              href={option.href}
              aria-current={isActive(option.href) ? "page" : undefined}
              className={`link-underline text-xs uppercase tracking-widest hover:text-brand-gold transition-colors ${
                isActive(option.href) ? "text-brand-gold" : ""
              }`}
            >
              {option.label}
            </Link>
          ))}
        </div>

        {/* Logo – always visible */}
        <div className="text-2xl font-light tracking-[0.3em]">
          <Link href={"/"}>
            <Image
              src={logo}
              alt="HD Perfume"
              width={100}
              height={100}
              priority
              className={`h-auto transition-[width] duration-500 ${
                scrolled ? "w-[68px]" : "w-[100px]"
              }`}
            />
          </Link>
        </div>

        {/* Right links + search – hidden on mobile */}
        <div className="hidden md:flex gap-8 items-center">
          {leftOptions.map((option, index) => (
            <Link
              key={index}
              href={option.href}
              aria-current={isActive(option.href) ? "page" : undefined}
              className={`link-underline text-xs uppercase tracking-widest hover:text-brand-gold transition-colors ${
                isActive(option.href) ? "text-brand-gold" : ""
              }`}
            >
              {option.label}
            </Link>
          ))}
          <div className="flex gap-4 ml-4">
            <Link
              href="/products#search"
              className="hover:text-brand-gold transition-colors"
              aria-label="Tìm kiếm"
            >
              <svg
                fill="none"
                height="18"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
                width="18"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="11" cy="11" r="8" />
                <line x1="21" x2="16.65" y1="21" y2="16.65" />
              </svg>
            </Link>
            <CartLink />
          </div>
        </div>

        {/* Mobile – search + hamburger */}
        <div className="flex md:hidden items-center gap-4">
          <CartLink />
          <Link
            href="/products#search"
            className="hover:text-brand-gold transition-colors"
            aria-label="Tìm kiếm"
          >
            <svg
              fill="none"
              height="18"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
              width="18"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="11" cy="11" r="8" />
              <line x1="21" x2="16.65" y1="21" y2="16.65" />
            </svg>
          </Link>

          <button
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Mở hoặc đóng menu"
            aria-expanded={menuOpen}
            className="hover:text-brand-gold transition-colors focus:outline-none"
          >
            {menuOpen ? (
              /* X icon */
              <svg
                fill="none"
                height="22"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
                width="22"
                xmlns="http://www.w3.org/2000/svg"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            ) : (
              /* Hamburger icon */
              <svg
                fill="none"
                height="22"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
                width="22"
                xmlns="http://www.w3.org/2000/svg"
              >
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* ── Mobile dropdown menu ── */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col items-center gap-6 py-6 border-t border-white/10">
          {allOptions.map((option, index) => (
            <Link
              key={index}
              href={option.href}
              onClick={() => setMenuOpen(false)}
              className="text-xs uppercase tracking-widest hover:text-brand-gold transition-colors"
            >
              {option.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
