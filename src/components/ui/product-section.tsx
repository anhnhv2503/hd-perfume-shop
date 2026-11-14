import Link from "next/link";
import ProductCard from "@/components/ui/product-card";
import Reveal from "@/components/ui/reveal";

export default function ProductSection({
  title,
  subtitle,
  products,
  href,
}: {
  title: string;
  subtitle: string;
  products: React.ComponentProps<typeof ProductCard>["product"][];
  href: string;
}) {
  return (
    <section className="py-24 px-6 lg:px-12 bg-brand-dark">
      <div className="max-w-7xl mx-auto">
        <Reveal className="text-center mb-16">
          <p className="text-brand-gold uppercase tracking-[0.4em] text-xs mb-4">
            {subtitle}
          </p>
          <h2 className="text-3xl md:text-4xl font-light mb-4">{title}</h2>
          <div className="divider-draw w-12 h-px bg-brand-gold mx-auto"></div>
        </Reveal>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-4 sm:gap-x-8 gap-y-12">
          {products.slice(0, 4).map((p, i) => (
            <Reveal key={p.id} delay={i * 120}>
              <ProductCard product={p} />
            </Reveal>
          ))}
        </div>
        <Reveal className="text-center mt-14">
          <Link
            href={href}
            className="inline-block px-10 py-4 border border-white/30 uppercase tracking-widest text-xs font-semibold hover:border-brand-gold hover:text-brand-gold transition-colors duration-300"
          >
            Xem Tất Cả
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
