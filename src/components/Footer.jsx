import { ArrowUp } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { navItems, appPromoItem } from "../data/navItems";
import eatProteinIcon from "../assets/icon1.png";

export default function Footer() {
  const location = useLocation();
  const navigate = useNavigate();

  const goTo = (target) => {
    if (location.pathname !== "/") {
      navigate("/", { state: { scrollTo: target } });
      return;
    }

    document.getElementById(target)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <footer
      id="about"
      className="scroll-mt-20 bg-[#023b21] px-5 py-9 text-white"
    >
      <div className="mx-auto grid max-w-[1450px] gap-7 md:grid-cols-[1.5fr_1fr_1fr]">
        {/* Brand */}
        <div>
          <div className="flex items-center">
            <img
              src={eatProteinIcon}
              alt="EatProtein"
              className="h-12 w-auto object-contain"
            />
          </div>

          <p className="mt-3 max-w-md text-xs leading-5 text-green-100/70">
            Healthy Food • Fit Life • Better You. Discover protein-rich
            foods and make smarter nutrition choices every day.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-bold">Quick Links</h3>

          <div className="mt-3 grid grid-cols-2 gap-2">
            {navItems.map((item) => (
              <div key={item.label}>
                {item.type === "route" ? (
                  <Link
                    to={item.path}
                    className="text-xs text-green-100/70 transition-colors hover:text-white"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <button
                    type="button"
                    onClick={() => goTo(item.id)}
                    className="text-left text-xs text-green-100/70 transition-colors hover:text-white"
                  >
                    {item.label}
                  </button>
                )}
              </div>
            ))}

            {/* Download App */}
            <button
              type="button"
              onClick={() => goTo(appPromoItem.id)}
              className="text-left text-xs text-green-100/70 transition-colors hover:text-white"
            >
              {appPromoItem.label}
            </button>
          </div>
        </div>

        {/* About */}
        <div>
          <h3 className="font-bold">About EatProtein</h3>

          <p className="mt-3 text-xs leading-5 text-green-100/70">
            A nutrition-first platform concept that helps people discover,
            understand and choose better protein foods.
          </p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mx-auto mt-7 flex max-w-[1450px] items-center justify-between border-t border-white/10 pt-5 text-[10px] text-green-100/50">
        <span>© {new Date().getFullYear()} EatProtein. All rights reserved.</span>

        <button
          type="button"
          onClick={() => goTo("home")}
          className="flex items-center gap-1 transition-colors hover:text-white"
        >
          Back to top <ArrowUp size={12} />
        </button>
      </div>
    </footer>
  );
}

