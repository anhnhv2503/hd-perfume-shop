import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/ui/reveal";

export const metadata: Metadata = { title: "Giới thiệu | HD Perfume" };

const values = [
  ["Nghệ thuật chế tác", "Mỗi mùi hương được sáng tạo từ những nguyên liệu tự nhiên quý hiếm đến từ Grasse, Haiti, Ấn Độ và nhiều vùng đất khác."],
  ["Di sản", "Chúng tôi trân trọng nghệ thuật nước hoa cổ điển — tháp hương với hương đầu, hương giữa, hương cuối — đồng thời đón nhận sự táo bạo hiện đại."],
  ["Phát triển bền vững", "Chai có thể nạp lại, bao bì tái chế được và nguyên liệu có nguồn gốc đạo đức là kim chỉ nam trong cách chúng tôi làm việc."],
];

export default function AboutPage() {
  return (
    <main className="max-w-5xl mx-auto px-6 lg:px-12 py-20">
      <div className="fade-in text-center mb-16">
        <p className="text-brand-gold uppercase tracking-[0.4em] text-xs mb-4">
          Câu chuyện của chúng tôi
        </p>
        <h1 className="text-4xl md:text-6xl font-light italic mb-6">
          Nghệ thuật của hương thơm
        </h1>
        <div className="w-12 h-px bg-brand-gold mx-auto"></div>
      </div>
      <p className="text-lg md:text-xl font-light leading-relaxed text-white/80 max-w-3xl mx-auto text-center mb-20">
        HD Perfume là ngôi nhà dành cho những mùi hương đọng lại trong ký ức.
        Chúng tôi tuyển chọn và sáng tạo nước hoa ở các nồng độ Eau de
        Toilette, Eau de Parfum và Extrait de Parfum — mỗi chai là một câu
        chuyện nhỏ được kể bằng những nốt hương.
      </p>
      <div className="grid md:grid-cols-3 gap-10 mb-20">
        {values.map(([title, text], i) => (
          <Reveal
            key={title}
            delay={i * 150}
            className="border-t border-brand-gold pt-6"
          >
            <h2 className="text-2xl italic font-light mb-3">{title}</h2>
            <p className="font-light opacity-70 leading-relaxed">{text}</p>
          </Reveal>
        ))}
      </div>
      <div className="text-center">
        <Link
          href="/products"
          className="btn-shine inline-block px-10 py-4 bg-brand-gold text-black uppercase tracking-widest text-xs font-semibold hover:bg-white transition-colors"
        >
          Mua Ngay
        </Link>
      </div>
    </main>
  );
}
