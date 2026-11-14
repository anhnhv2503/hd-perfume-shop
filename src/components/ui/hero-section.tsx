import Image from "next/image";
import Link from "next/link";
import hero from "@/assets/hero1.jpg";

export default function HeroSection() {
  return (
    <section
      className="relative h-screen w-full overflow-hidden flex items-center justify-center"
      data-purpose="hero-banner"
    >
      <div className="absolute inset-0">
        <Image
          alt="Chai nước hoa cao cấp"
          className="kenburns w-full h-full object-cover"
          priority
          src={hero}
        />
        <div className="absolute inset-0 hero-gradient"></div>
      </div>
      <div className="relative z-10 text-center px-4 max-w-4xl">
        <h2
          className="hero-in font-sans text-brand-gold uppercase tracking-[0.4em] text-sm mb-6"
          style={{ "--i": 0 } as React.CSSProperties}
        >
          Tinh hoa của sự tinh tế
        </h2>
        <h1
          className="hero-in text-5xl md:text-7xl lg:text-8xl font-light mb-8 italic"
          style={{ "--i": 1 } as React.CSSProperties}
        >
          Bộ Sưu Tập Midnight
        </h1>
        <p
          className="hero-in text-lg md:text-xl font-light mb-10 max-w-2xl mx-auto text-white/80 leading-relaxed"
          style={{ "--i": 2 } as React.CSSProperties}
        >
          Khám phá những mùi hương lưu giữ vẻ đẹp khó nắm bắt của thời gian.
          Chế tác tại Grasse, ủ đến độ hoàn hảo.
        </p>
        <div
          className="hero-in flex flex-col sm:flex-row gap-6 justify-center"
          style={{ "--i": 3 } as React.CSSProperties}
        >
          <Link
            className="btn-shine px-10 py-4 bg-brand-gold text-black rounded-custom uppercase tracking-widest text-xs font-semibold hover:bg-white transition-colors duration-300"
            href="/products"
          >
            Mua Ngay
          </Link>
          <Link
            className="px-10 py-4 border border-white/30 rounded-custom uppercase tracking-widest text-xs font-semibold hover:border-brand-gold hover:text-brand-gold transition-colors duration-300"
            href="/products?category=New%20Arrival"
          >
            Hàng Mới Về
          </Link>
        </div>
      </div>
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-40">
        <svg
          fill="none"
          height="24"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1"
          viewBox="0 0 24 24"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="m7 13 5 5 5-5"></path>
          <path d="m7 6 5 5 5-5"></path>
        </svg>
      </div>
    </section>
  );
}
