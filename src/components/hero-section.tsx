import Image from "next/image";
import hero from "@/assets/hero.png";

export default function HeroSection() {
  return (
    <section
      className="relative h-screen w-full overflow-hidden flex items-center justify-center"
      data-purpose="hero-banner"
    >
      <div className="absolute inset-0">
        <Image
          alt="Premium Perfume Bottle"
          className="w-full h-full object-cover"
          src={hero}
        />
        <div className="absolute inset-0 hero-gradient"></div>
      </div>
      <div className="relative z-10 text-center px-4 max-w-4xl fade-in">
        <h2 className="text-brand-gold uppercase tracking-[0.4em] text-sm mb-6">
          Essence of Sophistication
        </h2>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-light mb-8 italic">
          The Midnight Collection
        </h1>
        <p className="text-lg md:text-xl font-light mb-10 max-w-2xl mx-auto opacity-80 leading-relaxed">
          Discover scents that capture the elusive beauty of time. Crafted in
          Grasse, aged to perfection.
        </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <a
            className="px-10 py-4 bg-brand-gold text-black rounded-custom uppercase tracking-widest text-xs font-semibold hover:bg-white transition-colors duration-300"
            href="#"
          >
            Explore Collection
          </a>
          <a
            className="px-10 py-4 border border-white/30 rounded-custom uppercase tracking-widest text-xs font-semibold hover:border-brand-gold hover:text-brand-gold transition-colors duration-300"
            href="#"
          >
            The Discovery Set
          </a>
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
