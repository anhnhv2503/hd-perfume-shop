import collection1 from "@/assets/collection1.png";
import collection2 from "@/assets/collection2.png";
import collection3 from "@/assets/collection3.png";
import Image from "next/image";

const Collection = () => {
  return (
    <section
      className="py-24 px-6 lg:px-12 bg-brand-dark"
      data-purpose="collections-grid"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h3 className="text-3xl font-light mb-4">Curated Collections</h3>
          <div className="w-12 h-[1px] bg-brand-gold mx-auto"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div
            className="group relative aspect-[3/4] overflow-hidden rounded-custom cursor-pointer"
            data-purpose="collection-card"
          >
            <Image
              alt="Floral Collection"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              src={collection1}
            />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors"></div>
            <div className="absolute bottom-8 left-8 right-8">
              <h4 className="text-2xl italic mb-2">Solar Florals</h4>
              <p className="text-xs uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                Shop Now →
              </p>
            </div>
          </div>

          <div
            className="group relative aspect-[3/4] overflow-hidden rounded-custom cursor-pointer mt-0 md:mt-12"
            data-purpose="collection-card"
          >
            <Image
              alt="Woody Collection"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              src={collection2}
            />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors"></div>
            <div className="absolute bottom-8 left-8 right-8">
              <h4 className="text-2xl italic mb-2">Smoky Woods</h4>
              <p className="text-xs uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                Shop Now →
              </p>
            </div>
          </div>

          <div
            className="group relative aspect-[3/4] overflow-hidden rounded-custom cursor-pointer"
            data-purpose="collection-card"
          >
            <Image
              alt="Oriental Collection"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              src={collection3}
            />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors"></div>
            <div className="absolute bottom-8 left-8 right-8">
              <h4 className="text-2xl italic mb-2">Velvet Orientals</h4>
              <p className="text-xs uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                Shop Now →
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Collection;
