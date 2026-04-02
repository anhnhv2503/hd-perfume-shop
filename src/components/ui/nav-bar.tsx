"use client";

import Image from "next/image";
import logo from "@/assets/logo.png";
import Link from "next/link";
import { useState } from "react";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const rightOptions = [
    { label: "Cửa Hàng", href: "#" },
    { label: "Bộ Sưu Tập", href: "#" },
  ];

  const leftOptions = [
    { label: "Giới Thiệu", href: "#" },
    { label: "Liên Hệ", href: "#" },
  ];

  const allOptions = [...rightOptions, ...leftOptions];

  return (
    <nav
      className="fixed w-full z-50 bg-zinc-900/90 backdrop-blur-md border-b border-white/10"
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
              className="text-xs uppercase tracking-widest hover:text-brand-gold transition-colors"
            >
              {option.label}
            </Link>
          ))}
        </div>

        {/* Logo – always visible */}
        <div className="text-2xl font-light tracking-[0.3em]">
          <Link href={"/"}>
            <Image src={logo} alt="Logo" width={100} height={100} />
          </Link>
        </div>

        {/* Right links + search – hidden on mobile */}
        <div className="hidden md:flex gap-8 items-center">
          {leftOptions.map((option, index) => (
            <Link
              key={index}
              href={option.href}
              className="text-xs uppercase tracking-widest hover:text-brand-gold transition-colors"
            >
              {option.label}
            </Link>
          ))}
          <div className="flex gap-4 ml-4">
            <button
              className="hover:text-brand-gold transition-colors"
              aria-label="Search"
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
            </button>
          </div>
        </div>

        {/* Mobile – search + hamburger */}
        <div className="flex md:hidden items-center gap-4">
          <button
            className="hover:text-brand-gold transition-colors"
            aria-label="Search"
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
          </button>

          <button
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Toggle menu"
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
