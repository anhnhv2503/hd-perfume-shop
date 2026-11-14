"use client";

import { useState } from "react";
import { useCart } from "@/context/cart-context";

export default function AddToCartButton({ productId }: { productId: string }) {
  const { addItem } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    addItem(productId, quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="flex flex-col sm:flex-row gap-4">
      <div className="flex items-center border border-white/20 self-start">
        <button
          type="button"
          aria-label="Giảm số lượng"
          className="w-12 h-14 hover:text-brand-gold"
          onClick={() => setQuantity((q) => Math.max(1, q - 1))}
        >
          −
        </button>
        <span className="w-10 text-center" aria-live="polite">
          {quantity}
        </span>
        <button
          type="button"
          aria-label="Tăng số lượng"
          className="w-12 h-14 hover:text-brand-gold"
          onClick={() => setQuantity((q) => q + 1)}
        >
          +
        </button>
      </div>
      <button
        type="button"
        onClick={handleAdd}
        className="btn-shine flex-1 h-14 px-10 bg-brand-gold text-black uppercase tracking-widest text-xs font-semibold hover:bg-white transition-colors duration-300"
      >
        {added ? "Đã thêm ✓" : "Thêm Vào Giỏ"}
      </button>
    </div>
  );
}
