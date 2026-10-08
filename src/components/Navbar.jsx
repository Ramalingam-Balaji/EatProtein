import { ArrowRight, Leaf, Menu, Smartphone, X } from "lucide-react";
import { useState } from "react";
import { NAV_ITEMS } from "../data/navItems";
import eatProteinIcon from "../assets/icon1.png";

function goTo(target) {
  document.getElementById(target)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const handleNav = (target) => {
    setOpen(false);
    goTo(target);
  };
  const [activeNav, setActiveNav] = useState("");

  return (
    <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-[68px] max-w-[1500px] items-center justify-between px-5 lg:px-7">
    <button
  onClick={() => handleNav("home")}
  className="flex items-center"
>
  <img
    src={eatProteinIcon}
    alt="EatProtein"
    className="h-12 w-auto object-contain"
  />
</button>

        <nav className="hidden items-center gap-7 lg:flex">
          {NAV_ITEMS.map((item) => (
  <button
    key={item.target}
    onClick={() => {
      setActiveNav(item.target);
      handleNav(item.target);
    }}
    className={`group relative py-6 text-[15px] font-medium transition-all duration-300 ${
      activeNav === item.target
        ? "text-protein-green"
        : "text-slate-800"
    } hover:-translate-y-1 hover:text-protein-green`}
  >
    {item.label}

    <span
      className={`absolute bottom-4 left-1/2 h-[2px] -translate-x-1/2 rounded-full bg-protein-green transition-all duration-300 ${
        activeNav === item.target
          ? "w-8 opacity-100"
          : "w-0 opacity-0 group-hover:w-8 group-hover:opacity-100"
      }`}
    />
  </button>
))}
        </nav>

        <button
          onClick={() => handleNav("app")}
          className="hidden items-center gap-2 rounded-xl bg-protein-green px-5 py-2.5 text-[15px] font-bold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-green-800 sm:flex"
        >
          <Smartphone size={15} />
          Download App
          <ArrowRight size={15} />
        </button>

        <button className="lg:hidden" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="border-t border-slate-100 bg-white px-5 py-4 lg:hidden">
          <div className="flex flex-col gap-1">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.target}
                onClick={() => handleNav(item.target)}
                className="rounded-lg px-3 py-3 text-left text-sm font-semibold hover:bg-green-50"
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => handleNav("app")}
              className="mt-2 rounded-xl bg-protein-green px-4 py-3 text-sm font-bold text-white"
            >
              Download App
            </button>
          </div>
        </div>
      )}
    </header>
  );
}