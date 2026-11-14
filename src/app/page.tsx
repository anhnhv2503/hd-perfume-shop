import Collection from "@/components/ui/collection";
import HeroSection from "@/components/ui/hero-section";
import NotesMarquee from "@/components/ui/notes-marquee";
import ProductSection from "@/components/ui/product-section";
import { getBestSellers, getNewArrivals } from "@/mock-data/products";

export default function Home() {
  return (
    <div className="">
      <HeroSection />
      <NotesMarquee />
      <ProductSection
        subtitle="Được yêu thích nhất"
        title="Sản Phẩm Bán Chạy"
        products={getBestSellers()}
        href="/products?category=Best%20Seller"
      />
      <Collection />
      <ProductSection
        subtitle="Vừa cập bến"
        title="Hàng Mới Về"
        products={getNewArrivals()}
        href="/products?category=New%20Arrival"
      />
    </div>
  );
}
