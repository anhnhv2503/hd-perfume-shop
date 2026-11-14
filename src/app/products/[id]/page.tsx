import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import AddToCartButton from "@/components/ui/add-to-cart-button";
import ProductCard from "@/components/ui/product-card";
import PerformanceMeters from "@/components/ui/performance-meter";
import ProductImage from "@/components/ui/product-image";
import Reveal from "@/components/ui/reveal";
import { formatPrice, getProductById, products } from "@/mock-data/products";

type Props = { params: Promise<{ id: string }> };

export function generateStaticParams() {
  return products.map((p) => ({ id: p.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const product = getProductById((await params).id);
  return { title: product ? `${product.name} | HD Perfume` : "Không tìm thấy" };
}

const pyramid = [
  { key: "top", label: "Hương Đầu", hint: "Ấn tượng đầu tiên" },
  { key: "heart", label: "Hương Giữa", hint: "Linh hồn mùi hương" },
  { key: "base", label: "Hương Cuối", hint: "Dư hương lưu lại" },
] as const;

export default async function ProductPage({ params }: Props) {
  const product = getProductById((await params).id);
  if (!product) notFound();

  const others = products.filter((p) => p.id !== product.id);
  const related = [
    ...others.filter((p) => p.brand === product.brand),
    ...others.filter((p) => p.brand !== product.brand),
  ].slice(0, 4);

  return (
    <main className="max-w-7xl mx-auto px-6 lg:px-12 py-12">
      <nav className="text-[11px] uppercase tracking-widest opacity-60 mb-8">
        <Link href="/" className="hover:text-brand-gold">
          Trang chủ
        </Link>{" "}
        /{" "}
        <Link href="/products" className="hover:text-brand-gold">
          Cửa hàng
        </Link>{" "}
        / <span className="text-brand-gold">{product.name}</span>
      </nav>

      <div className="grid md:grid-cols-2 gap-10 lg:gap-20">
        <div className="relative aspect-[3/4] bg-brand-card overflow-hidden md:sticky md:top-32 md:self-start">
          <ProductImage
            src={product.image_url}
            alt={product.name}
            priority
            className="kenburns"
          />
        </div>

        <div className="space-y-10">
          <header className="fade-in space-y-3">
            <p className="text-xs uppercase tracking-[0.3em] text-brand-gold">
              {product.brand}
            </p>
            <h1 className="text-4xl md:text-5xl font-light italic">
              {product.name}
            </h1>
            <p className="text-sm uppercase tracking-widest opacity-60">
              {product.concentration} · {product.volume}
            </p>
            <p className="text-3xl text-brand-gold pt-2">
              {formatPrice(product.price)}
            </p>
          </header>

          <p className="text-lg font-light leading-relaxed opacity-80">
            {product.description}
          </p>

          <AddToCartButton productId={product.id} />

          <section>
            <h2 className="font-sans text-xs uppercase tracking-[0.3em] mb-6">
              Tháp Hương
            </h2>
            <div className="space-y-4">
              {pyramid.map(({ key, label, hint }, i) => (
                <Reveal
                  key={key}
                  delay={i * 150}
                  className="border-l border-brand-gold pl-5 py-1"
                >
                  <p className="text-sm uppercase tracking-widest">
                    {label}{" "}
                    <span className="opacity-40 normal-case italic tracking-normal">
                      — {hint}
                    </span>
                  </p>
                  <p className="font-light opacity-80 mt-1">
                    {product.olfactory_notes[key].join(" · ")}
                  </p>
                </Reveal>
              ))}
            </div>
          </section>

          <Reveal>
            <h2 className="font-sans text-xs uppercase tracking-[0.3em] mb-6">
              Hiệu năng
            </h2>
            <PerformanceMeters
              longevity={product.performance.longevity}
              sillage={product.performance.sillage}
            />
          </Reveal>

          <section className="grid grid-cols-2 gap-px bg-white/10 border border-white/10">
            {[
              ["Nồng độ", product.concentration],
              ["Dung tích", product.volume],
            ].map(([label, value]) => (
              <div key={label} className="bg-brand-dark p-5">
                <p className="text-[10px] uppercase tracking-widest opacity-50 mb-1">
                  {label}
                </p>
                <p className="font-light">{value}</p>
              </div>
            ))}
          </section>
        </div>
      </div>

      <section className="mt-28">
        <h2 className="text-3xl font-light text-center mb-12">
          Có Thể Bạn Cũng Thích
        </h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-4 sm:gap-x-8 gap-y-12">
          {related.map((p, i) => (
            <Reveal key={p.id} delay={i * 120}>
              <ProductCard product={p} />
            </Reveal>
          ))}
        </div>
      </section>
    </main>
  );
}
