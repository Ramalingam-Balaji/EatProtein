import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import HeroSection from "../components/HeroSection";
import ProteinCalculator from "../components/ProteinCalculator";
import FoodCategories from "../components/FoodCategories";
import AppPromo from "../components/AppPromo";
import HowItWorks from "../components/HowItWorks";
import FranchiseSection from "../components/FranchiseSection";
import About from "../components/About";

export default function Home() {
  const location = useLocation();
  const navigate = useNavigate();
  

useEffect(() => {
  const target = location.state?.scrollTo;

  if (!target) return;

  const timer = requestAnimationFrame(() => {
    document.getElementById(target)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    window.history.replaceState({}, document.title, window.location.pathname);
  });

  return () => cancelAnimationFrame(timer);
}, [location]);

  useEffect(() => {
    const sectionId = location.state?.scrollTo;

    if (!sectionId) return;

    const frame = requestAnimationFrame(() => {
      document.getElementById(sectionId)?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });

      // Clear the scroll request after handling it.
      navigate("/", {
        replace: true,
        state: null,
      });
    });

    return () => cancelAnimationFrame(frame);
  }, [location.state, navigate]);

  return (
    <div className="min-h-screen bg-white text-protein-text">
      <main>
        <section id="home" className="scroll-mt-24">
          <HeroSection />
        </section>

        <section id="high-protein-foods" className="scroll-mt-24">
          <FoodCategories />
        </section>

        <section id="protein-calculator" className="scroll-mt-24">
          <ProteinCalculator />
        </section>

        <section id="app-promo" className="scroll-mt-24">
          <AppPromo />
        </section>

        <section id="how-it-works" className="scroll-mt-24">
          <HowItWorks />
        </section>

        

        <section id="about" className="scroll-mt-24">
          <About />
        </section>
      
      <section id="franchise" className="scroll-mt-24">
          <FranchiseSection />
        </section>
        
      </main>
    </div>
  );
}