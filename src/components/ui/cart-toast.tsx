"use client";

import Link from "next/link";
import { useEffect } from "react";
import ProductImage from "@/components/ui/product-image";
import { useCart } from "@/context/cart-context";
import { getProductById } from "@/mock-data/products";

/** Confirmation shown for a few seconds after something is added to the cart. */
export default function CartToast() {
  const { lastAdded, dismissLastAdded } = useCart();

  useEffect(() => {
    if (!lastAdded) return;
    const t = setTimeout(dismissLastAdded, 3500);
    return () => clearTimeout(t);
  }, [lastAdded, dismissLastAdded]);

  const product = lastAdded ? getProductById(lastAdded.id) : undefined;

  return (
    <div
      aria-live="polite"
      className="fixed z-[60] bottom-6 left-4 right-4 sm:left-auto sm:right-20 sm:w-80 pointer-events-none"
    >
      {lastAdded && product && (
        <div
          key={lastAdded.key}
          className="toast-in pointer-events-auto relative overflow-hidden flex items-center gap-4 bg-brand-card border border-white/10 p-3 shadow-2xl shadow-black/60"
        >
          <div className="relative w-12 h-16 shrink-0 overflow-hidden bg-black">
            <ProductImage src={product.image_url} alt="" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-[10px] uppercase tracking-widest text-brand-gold">
              Đã thêm vào giỏ
            </p>
            <p className="font-serif italic truncate">
              {product.name}
              <span className="opacity-50 not-italic text-sm">
                {" "}
                × {lastAdded.quantity}
              </span>
            </p>
            <Link
              href="/cart"
              onClick={dismissLastAdded}
              className="text-[11px] uppercase tracking-widest opacity-70 hover:opacity-100 hover:text-brand-gold"
            >
              Xem giỏ hàng →
            </Link>
          </div>
          <button
            type="button"
            aria-label="Đóng"
            onClick={dismissLastAdded}
            className="self-start opacity-50 hover:opacity-100 text-sm px-1"
          >
            ✕
          </button>
          <span className="toast-timer absolute bottom-0 left-0 h-px w-full bg-brand-gold" />
        </div>
      )}
    </div>
  );
}
