"use client";

import Link from "next/link";
import { useState } from "react";
import { useCart } from "@/context/cart-context";
import { formatPrice, getProductById } from "@/mock-data/products";

const field =
  "w-full bg-transparent border border-white/20 px-4 py-3 text-sm focus:border-brand-gold outline-none placeholder:text-white/30";

export default function CheckoutPage() {
  const { items, clear } = useCart();
  const [orderId, setOrderId] = useState<string | null>(null);

  const lines = items.flatMap((i) => {
    const product = getProductById(i.id);
    return product ? [{ product, quantity: i.quantity }] : [];
  });
  const subtotal = lines.reduce((s, l) => s + l.product.price * l.quantity, 0);
  const shipping = subtotal === 0 || subtotal >= 200 ? 0 : 10;

  if (orderId) {
    return (
      <main className="fade-in max-w-xl mx-auto px-6 py-24 text-center space-y-6">
        <p className="text-brand-gold uppercase tracking-[0.4em] text-xs">
          Cảm ơn bạn
        </p>
        <h1 className="text-4xl font-light italic">Đặt hàng thành công</h1>
        <p className="opacity-70">
          Đơn hàng <span className="text-brand-gold">{orderId}</span> của bạn đã
          được ghi nhận. Thư xác nhận sẽ được gửi đến email của bạn.
        </p>
        <Link
          href="/products"
          className="inline-block px-10 py-4 border border-white/30 uppercase tracking-widest text-xs font-semibold hover:border-brand-gold hover:text-brand-gold transition-colors"
        >
          Tiếp Tục Mua Sắm
        </Link>
      </main>
    );
  }

  if (lines.length === 0) {
    return (
      <main className="max-w-xl mx-auto px-6 py-24 text-center space-y-6">
        <h1 className="text-4xl font-light italic">
          Chưa có sản phẩm để thanh toán
        </h1>
        <Link
          href="/products"
          className="text-brand-gold uppercase tracking-widest text-xs"
        >
          Xem các dòng nước hoa →
        </Link>
      </main>
    );
  }

  return (
    <main className="max-w-6xl mx-auto px-6 lg:px-12 py-16">
      <h1 className="text-4xl font-light italic text-center mb-12">
        Thanh Toán
      </h1>
      <div className="grid lg:grid-cols-5 gap-12">
        <form
          className="lg:col-span-3 space-y-5"
          onSubmit={(e) => {
            e.preventDefault();
            setOrderId(`HD-${Date.now().toString().slice(-8)}`);
            clear();
          }}
        >
          <h2 className="font-sans text-xs uppercase tracking-[0.3em] mb-2">
            Thông tin giao hàng
          </h2>
          <input required name="name" placeholder="Họ và tên" className={field} />
          <div className="grid sm:grid-cols-2 gap-5">
            <input required type="email" name="email" placeholder="Email" className={field} />
            <input required type="tel" name="phone" placeholder="Số điện thoại" className={field} />
          </div>
          <input required name="address" placeholder="Địa chỉ" className={field} />
          <div className="grid sm:grid-cols-2 gap-5">
            <input required name="city" placeholder="Tỉnh / Thành phố" className={field} />
            <input required name="district" placeholder="Quận / Huyện" className={field} />
          </div>
          <textarea name="note" rows={3} placeholder="Lời nhắn quà tặng (không bắt buộc)" className={field} />
          <p className="text-xs opacity-50">
            Thanh toán khi nhận hàng. Đây là cửa hàng demo — không thu tiền thật.
          </p>
          <button
            type="submit"
            className="btn-shine w-full h-14 bg-brand-gold text-black uppercase tracking-widest text-xs font-semibold hover:bg-white transition-colors"
          >
            Đặt Hàng
          </button>
        </form>

        <aside className="lg:col-span-2 border border-white/10 p-6 h-fit space-y-4">
          <h2 className="font-sans text-xs uppercase tracking-[0.3em]">
            Tóm tắt đơn hàng
          </h2>
          <ul className="divide-y divide-white/10">
            {lines.map(({ product, quantity }) => (
              <li key={product.id} className="flex justify-between gap-4 py-3 text-sm">
                <span>
                  {product.name}{" "}
                  <span className="opacity-50">× {quantity}</span>
                </span>
                <span>{formatPrice(product.price * quantity)}</span>
              </li>
            ))}
          </ul>
          <div className="flex justify-between text-sm opacity-70">
            <span>Phí vận chuyển</span>
            <span>{shipping ? formatPrice(shipping) : "Miễn phí"}</span>
          </div>
          <div className="flex justify-between text-lg border-t border-white/10 pt-4">
            <span>Tổng cộng</span>
            <span className="text-brand-gold">
              {formatPrice(subtotal + shipping)}
            </span>
          </div>
          <p className="text-[10px] uppercase tracking-widest opacity-40">
            Miễn phí vận chuyển cho đơn từ $200
          </p>
        </aside>
      </div>
    </main>
  );
}
