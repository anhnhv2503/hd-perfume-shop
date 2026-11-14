import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-[60vh] flex flex-col items-center justify-center gap-6 px-6 text-center">
      <h1 className="text-4xl italic font-light">Không tìm thấy sản phẩm</h1>
      <Link
        href="/products"
        className="text-brand-gold uppercase tracking-widest text-xs"
      >
        Quay lại cửa hàng →
      </Link>
    </main>
  );
}
