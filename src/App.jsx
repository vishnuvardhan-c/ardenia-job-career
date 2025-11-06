import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import StatsRow from "./components/StatsRow";
import BrandStrip from "./components/BrandStrip";
import LifeSection from "./components/LifeSection";
import FeatureCards from "./components/FeatureCards";
import SecondaryHero from "./components/SecondaryHero";
import GallerySection from "./components/GallerySection";
import RecommendSection from "./components/RecommendSection";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <StatsRow />
        <BrandStrip />
        <LifeSection />
        <FeatureCards />
        <SecondaryHero />
        <GallerySection />
        <RecommendSection />
      </main>

      <Footer />
    </>
  );
}
