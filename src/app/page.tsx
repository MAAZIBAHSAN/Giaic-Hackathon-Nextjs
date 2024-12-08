import FeaturedPosts from "@/components/FeaturedPosts";
import Footer from "@/components/Footer";
import GreenDiv from "@/components/GreenCarousel";
import  {TopHeader, Header} from "@/components/Header";
import Hero from "@/components/Hero";
import FeaturedProducts, { FeaturedProducts2 } from "@/components/ProductCards";
import PromoSection from "@/components/PromoSection";
import SecondHero from "@/components/SecondHero";

export default function Home() {
  return (
    <main>
      <div>
        <TopHeader />
        <Header />
        <Hero />
        <SecondHero />
        <FeaturedProducts />
        <FeaturedProducts2 />
        <GreenDiv />
        <PromoSection />
        <FeaturedPosts />
        <Footer />
      </div>
    </main>
  );
}
