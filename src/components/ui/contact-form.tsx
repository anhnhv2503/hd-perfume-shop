"use client";

import { useState } from "react";

const field =
  "w-full bg-transparent border border-white/20 px-4 py-3 text-sm focus:border-brand-gold outline-none placeholder:text-white/30";

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  if (sent) {
    return (
      <div className="fade-in border border-brand-gold/40 p-8 text-center self-start">
        <h2 className="text-2xl italic font-light mb-2">Cảm ơn bạn</h2>
        <p className="opacity-70 font-light">
          Chuyên viên tư vấn mùi hương của chúng tôi sẽ sớm phản hồi bạn.
        </p>
      </div>
    );
  }

  return (
    <form
      className="space-y-5"
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
      }}
    >
      <input required name="name" placeholder="Họ và tên" className={field} />
      <input required type="email" name="email" placeholder="Email" className={field} />
      <textarea
        required
        name="message"
        rows={5}
        placeholder="Chúng tôi có thể giúp gì cho bạn?"
        className={field}
      />
      <button
        type="submit"
        className="btn-shine w-full h-14 bg-brand-gold text-black uppercase tracking-widest text-xs font-semibold hover:bg-white transition-colors"
      >
        Gửi Tin Nhắn
      </button>
    </form>
  );
}
