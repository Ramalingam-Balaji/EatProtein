import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Menu, X, Download } from "lucide-react";

import { navItems, appPromoItem } from "../data/navItems";
import eatProteinIcon from "../assets/icon1.png";

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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

  const handleRouteClick = (path) => {
    if (!path) return;

    setMobileMenuOpen(false);
    navigate(path);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

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

  const handleNavigation = (item) => {
    if (item.type === "route") {
      handleRouteClick(item.path);
    } else if (item.type === "section") {
      handleSectionClick(item.id);
    }
  };

  useEffect(() => {
    const target = location.state?.scrollTo;

    if (location.pathname !== "/" || !target) {
      return;
    }

    let frame;

    const timeout = window.setTimeout(() => {
      frame = window.requestAnimationFrame(() => {
        scrollToSection(target);

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

  // Close the mobile menu when the route changes.
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const handleAppClick = () => {
    handleSectionClick(appPromoItem.id);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-green-100/20 bg-white/95 shadow-sm backdrop-blur-md">
      <nav className="mx-auto flex min-h-[68px] w-full max-w-[1450px] items-center justify-between gap-3 px-4 py-3 sm:px-5 lg:px-6 xl:gap-3 2xl:px-8">
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
            className="h-10 w-auto object-contain sm:h-12"
          />
        </button>

        {/* Desktop Navigation: wide screens only */}
        <div className="hidden min-w-0 flex-1 items-center justify-center gap-0 xl:flex">
          {navItems.map((item) => (
            <button
              key={item.label}
              type="button"
              onClick={() => handleNavigation(item)}
              className="whitespace-nowrap rounded-lg px-3 py-2 text-m font-semibold text-gray-700 transition-colors duration-200 hover:bg-green-50 hover:text-green-700 2xl:px-3 2xl:text-sm"
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Desktop Download App */}
        <button
          type="button"
          onClick={handleAppClick}
          className="hidden shrink-0 items-center gap-2 rounded-full bg-green-600 px-4 py-3 text-sm font-bold text-white shadow-md transition-all duration-200 hover:bg-green-700 hover:shadow-lg xl:flex"
        >
          <Download size={17} />
          <span>{appPromoItem.label}</span>
        </button>

        {/* Mobile and tablet menu toggle */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen((open) => !open)}
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg text-green-800 transition-colors hover:bg-green-50 xl:hidden"
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X size={25} /> : <Menu size={25} />}
        </button>
      </nav>

      {/* Mobile and tablet navigation */}
      {mobileMenuOpen && (
        <div className="max-h-[calc(100vh-68px)] overflow-y-auto border-t border-green-100 bg-white px-4 py-4 shadow-lg sm:px-5 xl:hidden">
          <div className="mx-auto flex w-full max-w-[1450px] flex-col gap-1">
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