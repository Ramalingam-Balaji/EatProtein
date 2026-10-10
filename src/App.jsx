import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Franchise from "./pages/Franchise";
import FoodStores from "./pages/FoodStores";
import CategoryStores from "./pages/CategoryStores";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

export default function AppRoutes() {
  return (
    <div className="flex min-h-screen flex-col">
      <ScrollToTop />
      <Navbar />

      <div className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
           <Route path="/food-stores" element={<FoodStores />} />
           <Route
            path="/food-stores/:category"
            element={<CategoryStores />}
          />
          <Route path="/franchise" element={<Franchise />} />
        </Routes>
      </div>

      <Footer />
    </div>
  );
}