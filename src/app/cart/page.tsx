"use client";

import Link from "next/link";
import ProductImage from "@/components/ui/product-image";
import { useCart } from "@/context/cart-context";
import { formatPrice, getProductById } from "@/mock-data/products";

export default function CartPage() {
  const { items, setQuantity, removeItem } = useCart();

  const lines = items.flatMap((i) => {
    const product = getProductById(i.id);
    return product ? [{ product, quantity: i.quantity }] : [];
  });
  const total = lines.reduce((s, l) => s + l.product.price * l.quantity, 0);

  return (
    <main className="max-w-4xl mx-auto px-6 lg:px-12 py-16">
      <h1 className="text-4xl font-light italic text-center mb-12">
        Giỏ Hàng Của Bạn
      </h1>

      {lines.length === 0 ? (
        <div className="text-center space-y-6">
          <p className="opacity-60">Giỏ hàng của bạn đang trống.</p>
          <Link
            href="/products"
            className="btn-shine inline-block px-10 py-4 bg-brand-gold text-black uppercase tracking-widest text-xs font-semibold hover:bg-white transition-colors"
          >
            Khám Phá Nước Hoa
          </Link>
        </div>
      ) : (
        <>
          <ul className="divide-y divide-white/10 border-y border-white/10">
            {lines.map(({ product, quantity }) => (
              <li key={product.id} className="flex gap-4 sm:gap-6 py-6">
                <Link
                  href={`/products/${product.id}`}
                  className="relative w-24 sm:w-28 aspect-[3/4] shrink-0 bg-brand-card overflow-hidden"
                >
                  <ProductImage src={product.image_url} alt={product.name} />
                </Link>
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.3em] opacity-50">
                      {product.brand}
                    </p>
                    <h2 className="text-xl italic font-light">
                      {product.name}
                    </h2>
                    <p className="text-xs uppercase tracking-widest opacity-60">
                      {product.concentration} · {product.volume}
                    </p>
                  </div>
                  <div className="flex items-center justify-between mt-4">
                    <div className="flex items-center border border-white/20">
                      <button
                        aria-label="Giảm số lượng"
                        className="w-9 h-9 hover:text-brand-gold"
                        onClick={() => setQuantity(product.id, quantity - 1)}
                      >
                        −
                      </button>
                      <span className="w-8 text-center text-sm">
                        {quantity}
                      </span>
                      <button
                        aria-label="Tăng số lượng"
                        className="w-9 h-9 hover:text-brand-gold"
                        onClick={() => setQuantity(product.id, quantity + 1)}
                      >
                        +
                      </button>
                    </div>
                    <p className="text-brand-gold">
                      {formatPrice(product.price * quantity)}
                    </p>
                  </div>
                </div>
                <button
                  aria-label={`Xóa ${product.name}`}
                  className="self-start opacity-50 hover:opacity-100 hover:text-brand-gold"
                  onClick={() => removeItem(product.id)}
                >
                  ✕
                </button>
              </li>
            ))}
          </ul>
          <div className="flex justify-between items-center mt-8">
            <span className="uppercase tracking-widest text-sm">Tạm tính</span>
            <span className="text-brand-gold text-2xl">
              {formatPrice(total)}
            </span>
          </div>
          <Link
            href="/checkout"
            className="btn-shine mt-8 flex items-center justify-center w-full h-14 bg-brand-gold text-black uppercase tracking-widest text-xs font-semibold hover:bg-white transition-colors"
          >
            Thanh Toán
          </Link>
        </>
      )}
    </main>
  );
}
