import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TrendingSection from "@/components/TrendingSection";
import FeaturedCollection from "@/components/FeaturedCollection";
import QuoteSection from "@/components/QuoteSection";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <TopBar />
      <Header />
      <main>
        <Hero />
        <TrendingSection />
        <FeaturedCollection />
        <QuoteSection />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
};

export default Index;