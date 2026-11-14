import type { Metadata } from "next";
import Link from "next/link";
import ProductCard from "@/components/ui/product-card";
import Reveal from "@/components/ui/reveal";
import {
  brands,
  categoryLabels,
  collections,
  concentrations,
  products,
} from "@/mock-data/products";

export const metadata: Metadata = { title: "Cửa hàng | HD Perfume" };

type Params = {
  q?: string;
  concentration?: string;
  category?: string;
  collection?: string;
  brand?: string;
  sort?: string;
};

const sorts: Record<string, string> = {
  featured: "Nổi bật",
  "price-asc": "Giá: Thấp đến cao",
  "price-desc": "Giá: Cao đến thấp",
  name: "Tên A–Z",
};

/** Lower-case and strip Vietnamese diacritics so "hoa hong" matches "Hoa hồng". */
const normalize = (text: string) =>
  text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/đ/g, "d");

function href(current: Params, overrides: Partial<Params>) {
  const merged: Record<string, string | undefined> = {
    ...current,
    ...overrides,
  };
  const qs = new URLSearchParams();
  for (const [k, v] of Object.entries(merged)) if (v) qs.set(k, v);
  const str = qs.toString();
  return str ? `/products?${str}` : "/products";
}

export default async function ProductsPage({
  searchParams,
}: {
  searchParams: Promise<Params>;
}) {
  const params = await searchParams;
  const { q, concentration, category, collection, brand, sort } = params;
  const term = q?.trim() ? normalize(q.trim()) : undefined;

  const filtered = products
    .filter(
      (p) =>
        (!concentration || p.concentration === concentration) &&
        (!category || p.category === category) &&
        (!collection || p.collection === collection) &&
        (!brand || p.brand === brand) &&
        (!term ||
          normalize(
            [
              p.name,
              p.brand,
              p.description,
              ...p.olfactory_notes.top,
              ...p.olfactory_notes.heart,
              ...p.olfactory_notes.base,
            ].join(" "),
          ).includes(term)),
    )
    .sort((a, b) =>
      sort === "price-asc"
        ? a.price - b.price
        : sort === "price-desc"
          ? b.price - a.price
          : sort === "name"
            ? a.name.localeCompare(b.name)
            : 0,
    );

  const plain = (values: string[]) => values.map((v) => ({ value: v, label: v }));
  const groups: {
    title: string;
    key: keyof Params;
    options: { value: string; label: string }[];
  }[] = [
    {
      title: "Danh mục",
      key: "category",
      options: Object.entries(categoryLabels).map(([value, label]) => ({
        value,
        label,
      })),
    },
    { title: "Nồng độ", key: "concentration", options: plain(concentrations) },
    { title: "Bộ sưu tập", key: "collection", options: plain(collections) },
    { title: "Thương hiệu", key: "brand", options: plain(brands) },
  ];
  const hasFilters = Boolean(
    q || concentration || category || collection || brand,
  );

  const chip = (active: boolean) =>
    `px-4 py-2 text-[11px] uppercase tracking-widest border transition-colors ${
      active
        ? "bg-brand-gold text-black border-brand-gold"
        : "border-white/20 hover:border-brand-gold hover:text-brand-gold"
    }`;

  return (
    <main className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
      <div className="fade-in text-center mb-12">
        <p className="text-brand-gold uppercase tracking-[0.4em] text-xs mb-4">
          Bộ sưu tập
        </p>
        <h1 className="text-4xl md:text-5xl font-light italic mb-4">
          {collection ?? "Tất Cả Nước Hoa"}
        </h1>
        <div className="w-12 h-px bg-brand-gold mx-auto"></div>
      </div>

      <form
        id="search"
        action="/products"
        className="max-w-xl mx-auto mb-10 flex gap-4 border-b border-white/20 pb-2 scroll-mt-32"
      >
        {Object.entries(params).map(([k, v]) =>
          k !== "q" && v ? (
            <input key={k} type="hidden" name={k} value={v} />
          ) : null,
        )}
        <input
          name="q"
          defaultValue={q}
          aria-label="Tìm kiếm nước hoa"
          placeholder="Tìm theo tên, thương hiệu hoặc nốt hương (vd: oud, hoa hồng)"
          className="bg-transparent w-full text-sm placeholder:text-white/30 outline-none"
        />
        <button
          type="submit"
          className="shrink-0 text-brand-gold uppercase tracking-widest text-xs hover:text-white"
        >
          Tìm kiếm
        </button>
      </form>

      <div className="space-y-5 mb-12">
        {groups.map((g) => (
          <div
            key={g.title}
            className="flex flex-wrap items-center justify-center gap-3"
          >
            <span className="text-[10px] uppercase tracking-[0.3em] opacity-40 w-full sm:w-28 text-center sm:text-right">
              {g.title}
            </span>
            {g.options.map((o) => {
              const active = params[g.key] === o.value;
              return (
                <Link
                  key={o.value}
                  href={href(params, { [g.key]: active ? undefined : o.value })}
                  className={chip(active)}
                >
                  {o.label}
                </Link>
              );
            })}
          </div>
        ))}
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-10 border-y border-white/10 py-4 text-xs uppercase tracking-widest">
        <p className="opacity-60">
          {filtered.length} sản phẩm
          {hasFilters && (
            <Link
              href="/products"
              className="ml-4 text-brand-gold hover:text-white"
            >
              Xóa bộ lọc
            </Link>
          )}
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          {Object.entries(sorts).map(([key, label]) => (
            <Link
              key={key}
              href={href(params, { sort: key === "featured" ? undefined : key })}
              className={
                (sort ?? "featured") === key
                  ? "text-brand-gold"
                  : "opacity-60 hover:text-brand-gold"
              }
            >
              {label}
            </Link>
          ))}
        </div>
      </div>

      {filtered.length ? (
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-4 sm:gap-x-8 gap-y-12">
          {filtered.map((p, i) => (
            <Reveal key={p.id} delay={(i % 4) * 100}>
              <ProductCard product={p} />
            </Reveal>
          ))}
        </div>
      ) : (
        <p className="text-center opacity-60 py-16">
          Không có sản phẩm nào phù hợp với tìm kiếm của bạn.
        </p>
      )}
    </main>
  );
}
