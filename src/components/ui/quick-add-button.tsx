"use client";

import { useCart } from "@/context/cart-context";

export default function QuickAddButton({
  productId,
  productName,
}: {
  productId: string;
  productName: string;
}) {
  const { addItem } = useCart();

  return (
    <button
      type="button"
      aria-label={`Thêm ${productName} vào giỏ hàng`}
      onClick={() => addItem(productId)}
      className="quick-add absolute bottom-3 right-3 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-brand-gold text-black hover:bg-white active:scale-90 shadow-lg shadow-black/40"
    >
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      >
        <path d="M12 5v14M5 12h14" />
      </svg>
    </button>
  );
}
