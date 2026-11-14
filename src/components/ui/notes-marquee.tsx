import { products } from "@/mock-data/products";

// One signature note per fragrance, scrolling as a decorative ribbon.
const notes = [
  ...new Set(
    products.flatMap((p) => [p.olfactory_notes.heart[0], p.olfactory_notes.base[0]]),
  ),
];

export default function NotesMarquee() {
  const row = (hidden: boolean) => (
    <ul aria-hidden={hidden} className="flex shrink-0">
      {notes.map((note) => (
        <li
          key={note}
          className="flex items-center gap-8 pr-8 font-serif italic text-xl md:text-2xl font-light whitespace-nowrap opacity-70"
        >
          {note}
          <span className="text-brand-gold text-xs not-italic">✦</span>
        </li>
      ))}
    </ul>
  );

  return (
    <div
      className="marquee overflow-hidden border-y border-white/10 py-6 bg-black"
      aria-label="Các nốt hương đặc trưng"
    >
      <div className="marquee-track">
        {row(false)}
        {row(true)}
      </div>
    </div>
  );
}
