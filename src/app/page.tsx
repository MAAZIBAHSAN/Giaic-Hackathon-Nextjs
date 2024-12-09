import FeaturedPosts  from "@/app/components/FeaturedPosts";
import Footer from "@/app/components/Footer";
import GreenDiv from "@/app/components/GreenCarousel";
import  {TopHeader, Header} from "@/app/components/Header";
import Hero from "@/app/components/Hero";
import {FeaturedProducts, FeaturedProducts2}  from "@/app/components/ProductCards";
import PromoSection from "@/app/components/PromoSection";
import SecondHero from "@/app/components/SecondHero";

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
