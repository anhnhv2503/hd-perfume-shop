import Link from "next/link";
import ProductImage from "@/components/ui/product-image";
import QuickAddButton from "@/components/ui/quick-add-button";
import { categoryLabels, formatPrice } from "@/mock-data/products";

type Product = {
  id: string;
  name: string;
  brand: string;
  concentration: string;
  volume: string;
  price: number;
  category: keyof typeof categoryLabels;
  image_url: string;
};

export default function ProductCard({ product }: { product: Product }) {
  const href = `/products/${product.id}`;

  return (
    <article className="group hover-lift" data-purpose="product-card">
      <div className="relative aspect-[3/4] overflow-hidden bg-brand-card">
        <Link href={href} aria-label={product.name} className="absolute inset-0">
          <ProductImage
            src={product.image_url}
            alt={product.name}
            className="transition-transform duration-[1200ms] ease-out group-hover:scale-110"
          />
          <span className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </Link>
        <span className="absolute top-3 left-3 bg-black/70 backdrop-blur px-3 py-1 text-[10px] uppercase tracking-widest text-brand-gold pointer-events-none">
          {categoryLabels[product.category]}
        </span>
        <QuickAddButton productId={product.id} productName={product.name} />
      </div>
      <Link href={href} className="block pt-5 space-y-1">
        <p className="text-[10px] uppercase tracking-[0.3em] opacity-50">
          {product.brand}
        </p>
        <h3 className="text-xl font-light italic transition-colors duration-300 group-hover:text-brand-gold">
          {product.name}
        </h3>
        <p className="text-xs uppercase tracking-widest opacity-60">
          {product.concentration} · {product.volume}
        </p>
        <p className="text-brand-gold pt-1">{formatPrice(product.price)}</p>
      </Link>
    </article>
  );
}
