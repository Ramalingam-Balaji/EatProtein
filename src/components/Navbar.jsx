
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Menu, X, Download } from "lucide-react";

import { navItems, appPromoItem } from "../data/navItems";
import eatProteinIcon from "../assets/icon1.png";

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Scroll to a section on the Home page
  const scrollToSection = (target) => {
    if (!target) return;

    const section = document.getElementById(target);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  // Handle navigation to a page route
  const handleRouteClick = (path) => {
    if (!path) return;

    setMobileMenuOpen(false);

    // Navigate directly to the requested route
    navigate(path);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Handle section navigation from any page
  const handleSectionClick = (target) => {
    if (!target) return;

    setMobileMenuOpen(false);

    if (location.pathname !== "/") {
      navigate("/", {
        state: { scrollTo: target },
      });
      return;
    }

    scrollToSection(target);
  };

  // Handle each navigation item based on its type
  const handleNavigation = (item) => {
    if (item.type === "route") {
      handleRouteClick(item.path);
    } else if (item.type === "section") {
      handleSectionClick(item.id);
    }
  };

  // Scroll to a Home section after navigating from another page
  useEffect(() => {
    const target = location.state?.scrollTo;

    if (location.pathname !== "/" || !target) {
      return;
    }

    let frame;

    // Wait for the Home page sections to render
    const timeout = window.setTimeout(() => {
      frame = window.requestAnimationFrame(() => {
        scrollToSection(target);

        // Clear the pending navigation state
        navigate("/", {
          replace: true,
          state: {},
        });
      });
    }, 50);

    return () => {
      window.clearTimeout(timeout);

      if (frame) {
        window.cancelAnimationFrame(frame);
      }
    };
  }, [location.pathname, location.state, navigate]);

  // Handle the Download App button
  const handleAppClick = () => {
    handleSectionClick(appPromoItem.id);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-green-100/20 bg-white/95 shadow-sm backdrop-blur-md">
      <nav className="mx-auto flex min-h-[76px] max-w-[1450px] items-center justify-between gap-5 px-5 py-3 lg:px-8">
        {/* Logo */}
        <button
          type="button"
          onClick={() => handleSectionClick("home")}
          className="shrink-0"
          aria-label="Go to Home"
        >
          <img
            src={eatProteinIcon}
            alt="EatProtein"
            className="h-12 w-auto object-contain"
          />
        </button>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-1 lg:flex xl:gap-2">
          {navItems.map((item) => (
            <button
              key={item.label}
              type="button"
              onClick={() => handleNavigation(item)}
              className="whitespace-nowrap rounded-lg px-3 py-2 text-sm font-semibold text-gray-700 transition-colors duration-200 hover:bg-green-50 hover:text-green-700 xl:px-4"
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Desktop Download App Button */}
        <button
          type="button"
          onClick={handleAppClick}
          className="hidden shrink-0 items-center gap-2 rounded-full bg-green-600 px-5 py-3 text-sm font-bold text-white shadow-md transition-all duration-200 hover:bg-green-700 hover:shadow-lg sm:flex"
        >
          <Download size={17} />
          {appPromoItem.label}
        </button>

        {/* Mobile Menu Toggle */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen((open) => !open)}
          className="flex h-10 w-10 items-center justify-center rounded-lg text-green-800 transition-colors hover:bg-green-50 lg:hidden"
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X size={25} /> : <Menu size={25} />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="border-t border-green-100 bg-white px-5 py-4 shadow-lg lg:hidden">
          <div className="mx-auto flex max-w-[1450px] flex-col gap-1">
            {navItems.map((item) => (
              <button
                key={item.label}
                type="button"
                onClick={() => handleNavigation(item)}
                className="w-full rounded-lg px-4 py-3 text-left text-sm font-semibold text-gray-700 transition-colors hover:bg-green-50 hover:text-green-700"
              >
                {item.label}
              </button>
            ))}

            {/* Mobile Download App */}
            <button
              type="button"
              onClick={handleAppClick}
              className="mt-3 flex w-full items-center justify-center gap-2 rounded-full bg-green-600 px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-green-700"
            >
              <Download size={17} />
              {appPromoItem.label}
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
