import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import ProteinCalculator from "../components/ProteinCalculator";
import FoodCategories from "../components/FoodCategories";
import AppPromo from "../components/AppPromo";
import HowItWorks from "../components/HowItWorks";
import FranchiseSection from "../components/FranchiseSection";
import Footer from "../components/Footer";
import About from "../components/About";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-protein-text">
      <Navbar />
      <main>
        <HeroSection />
        <ProteinCalculator />
        <FoodCategories />
        <AppPromo />
        <HowItWorks />
        <About />
        <FranchiseSection />
      </main>
      <Footer />
    </div>
  );
}