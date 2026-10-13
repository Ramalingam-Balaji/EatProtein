import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Franchise from "./pages/Franchise";
import FoodStores from "./pages/FoodStores";
import CategoryStores from "./pages/CategoryStores";
import Contact from "./pages/Contact";
import Store from "./pages/Store";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

export default function AppRoutes() {
  return (
    <div className="flex min-h-screen w-full min-w-0 flex-col bg-white">
      <ScrollToTop />

      <Navbar />

      <main className="w-full min-w-0 flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/food-stores" element={<FoodStores />} />
          <Route
            path="/food-stores/:category"
            element={<CategoryStores />}
          />
          <Route
            path="/store-registration"
            element={<Store />}
          />
          <Route path="/franchise" element={<Franchise />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}