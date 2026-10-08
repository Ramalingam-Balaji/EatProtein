import { ArrowUp, Leaf } from "lucide-react";
import { NAV_ITEMS } from "../data/navItems";
import eatProteinIcon from "../assets/icon1.png";

export default function Footer() {
  const goTo = (target) => document.getElementById(target)?.scrollIntoView({ behavior: "smooth" });

  return (
    <footer id="about" className="scroll-mt-20 bg-[#023b21] px-5 py-9 text-white">
      <div className="mx-auto grid max-w-[1450px] gap-7 md:grid-cols-[1.5fr_1fr_1fr]">
        <div>
          <div className="flex items-center">
  <img
    src={eatProteinIcon}
    alt="EatProtein"
    className="h-12 w-auto object-contain"
  />
</div>
          <p className="mt-3 max-w-md text-xs leading-5 text-green-100/70">
            Healthy Food • Fit Life • Better You. Discover protein-rich foods and make smarter nutrition choices every day.
          </p>
        </div>
        <div>
          <h3 className="font-bold">Quick Links</h3>
          <div className="mt-3 grid grid-cols-2 gap-2">
            {NAV_ITEMS.map((item) => (
              <button key={item.target} onClick={() => goTo(item.target)} className="text-left text-xs text-green-100/70 hover:text-white">
                {item.label}
              </button>
            ))}
          </div>
        </div>
        <div>
          <h3 className="font-bold">About EatProtein</h3>
          <p className="mt-3 text-xs leading-5 text-green-100/70">
            A nutrition-first platform concept that helps people discover, understand and choose better protein foods.
          </p>
        </div>
      </div>
      <div className="mx-auto mt-7 flex max-w-[1450px] items-center justify-between border-t border-white/10 pt-5 text-[10px] text-green-100/50">
        <span>© 2026 EatProtein. All rights reserved.</span>
        <button onClick={() => goTo("home")} className="flex items-center gap-1 hover:text-white">Back to top <ArrowUp size={12} /></button>
      </div>
    </footer>
  );
}