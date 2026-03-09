import Image from "next/image";
import logo from "@/assets/logo.png";
import Link from "next/link";

const NavBar = () => {
  const rightOptions = [
    {
      label: "Cửa Hàng",
      href: "#",
    },
    {
      label: "Bộ Sưu Tập",
      href: "#",
    },
  ];

  const leftOptions = [
    {
      label: "Giới Thiệu",
      href: "#",
    },
    {
      label: "Liên Hệ",
      href: "#",
    },
  ];

  return (
    <nav
      className="fixed w-full z-50 bg-brand-dark/80 backdrop-blur-md border-b border-white/10 bg-zinc-900"
      data-purpose="main-navigation"
    >
      <div className="max-row mx-auto px-6 lg:px-12 py-1 flex justify-between items-center">
        <div className="flex gap-8 items-center">
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
        <div className="text-2xl font-light tracking-[0.3em]">
          <Link href={"/"}>
            <Image src={logo} alt="Logo" width={100} height={100} />
          </Link>
        </div>
        <div className="flex gap-8 items-center">
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
            <button className="hover:text-brand-gold transition-colors">
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
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" x2="16.65" y1="21" y2="16.65"></line>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
