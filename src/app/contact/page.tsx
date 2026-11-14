import type { Metadata } from "next";
import ContactForm from "@/components/ui/contact-form";

export const metadata: Metadata = { title: "Liên hệ | HD Perfume" };

const label = "font-sans text-xs uppercase tracking-[0.3em] mb-2";

export default function ContactPage() {
  return (
    <main className="max-w-5xl mx-auto px-6 lg:px-12 py-20">
      <div className="fade-in text-center mb-16">
        <p className="text-brand-gold uppercase tracking-[0.4em] text-xs mb-4">
          Tư vấn cá nhân
        </p>
        <h1 className="text-4xl md:text-5xl font-light italic mb-6">
          Liên hệ với chúng tôi
        </h1>
        <div className="w-12 h-px bg-brand-gold mx-auto"></div>
      </div>
      <div className="grid md:grid-cols-2 gap-14">
        <div className="space-y-8 font-light">
          <div>
            <h2 className={label}>Cửa hàng</h2>
            <p className="opacity-70">12 Nguyễn Huệ, Quận 1, TP. Hồ Chí Minh</p>
          </div>
          <div>
            <h2 className={label}>Giờ mở cửa</h2>
            <p className="opacity-70">Thứ Hai – Chủ Nhật · 9:00 – 21:00</p>
          </div>
          <div>
            <h2 className={label}>Liên lạc</h2>
            <p className="opacity-70">hello@hdperfume.example</p>
            <p className="opacity-70">+84 28 0000 0000</p>
          </div>
          <div>
            <h2 className={label}>Giao hàng & Đổi trả</h2>
            <p className="opacity-70">
              Miễn phí vận chuyển cho đơn từ $200. Sản phẩm còn nguyên seal được
              đổi trả trong vòng 14 ngày.
            </p>
          </div>
        </div>
        <ContactForm />
      </div>
    </main>
  );
}
