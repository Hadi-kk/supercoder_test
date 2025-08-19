import HeroSection from "@/features/main/components/organisms/HeroSection/HeroSection";
import ProductsSection from "@/features/main/components/organisms/ProductsSection/ProductsSection";
import CategoryCarousel from "@/features/main/components/molecules/CategoryCarousel/CategoryCarousel";
import CallToActionBanner from "@/features/main/components/molecules/CallToActionBanner/CallToActionBanner";

const LandingPage = () => {
  return (
    <div>
      <HeroSection />
      <div className="px-32 py-24">
        <CategoryCarousel />
        <ProductsSection />
        <CallToActionBanner />
      </div>
    </div>
  );
};

export default LandingPage;
