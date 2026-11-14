import collection1 from "@/assets/collection1.png";
import collection2 from "@/assets/collection2.png";
import collection3 from "@/assets/collection3.png";
import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/ui/reveal";

const Collection = () => {
  return (
    <section
      className="py-24 px-6 lg:px-12 bg-brand-dark"
      data-purpose="collections-grid"
    >
      <div className="max-w-7xl mx-auto">
        <Reveal className="text-center mb-16">
          <h3 className="text-3xl font-light mb-4">Bộ Sưu Tập Tuyển Chọn</h3>
          <div className="divider-draw w-12 h-px bg-brand-gold mx-auto"></div>
        </Reveal>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Link
            href="/products?collection=Solar%20Florals"
            className="group relative block aspect-[3/4] overflow-hidden rounded-custom cursor-pointer"
            data-purpose="collection-card"
          >
            <Image
              alt="Bộ sưu tập hương hoa"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              src={collection1}
            />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors"></div>
            <div className="absolute bottom-8 left-8 right-8">
              <h4 className="text-2xl italic mb-2">Solar Florals</h4>
              <p className="text-xs uppercase tracking-widest opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                Mua Ngay →
              </p>
            </div>
          </Link>

          <Link
            href="/products?collection=Smoky%20Woods"
            className="group relative block aspect-[3/4] overflow-hidden rounded-custom cursor-pointer mt-0 md:mt-12"
            data-purpose="collection-card"
          >
            <Image
              alt="Bộ sưu tập hương gỗ"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              src={collection2}
            />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors"></div>
            <div className="absolute bottom-8 left-8 right-8">
              <h4 className="text-2xl italic mb-2">Smoky Woods</h4>
              <p className="text-xs uppercase tracking-widest opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                Mua Ngay →
              </p>
            </div>
          </Link>

          <Link
            href="/products?collection=Velvet%20Orientals"
            className="group relative block aspect-[3/4] overflow-hidden rounded-custom cursor-pointer"
            data-purpose="collection-card"
          >
            <Image
              alt="Bộ sưu tập hương phương Đông"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              src={collection3}
            />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors"></div>
            <div className="absolute bottom-8 left-8 right-8">
              <h4 className="text-2xl italic mb-2">Velvet Orientals</h4>
              <p className="text-xs uppercase tracking-widest opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                Mua Ngay →
              </p>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Collection;
