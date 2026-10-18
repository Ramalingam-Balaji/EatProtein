import { ArrowUp, Play, Apple } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { navItems, appPromoItem } from "../data/navItems";
import eatProteinIcon from "../assets/icon1.png";
import {
  Instagram,
  Linkedin,
  Facebook,
  MessageCircle,
} from "lucide-react";

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
              className="h-16 w-auto object-contain"
            />
          </div>

          <p className="mt-3 max-w-md text-sm leading-5 text-green-100/70">
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
                    className="text-sm text-green-100/70 transition-colors hover:text-white"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <button
                    type="button"
                    onClick={() => goTo(item.id)}
                    className="text-left text-sm text-green-100/70 transition-colors hover:text-white"
                  >
                    {item.label}
                  </button>
                )}
              </div>
            ))}

            {/* Download App */}
            {/* <button
              type="button"
              onClick={() => goTo(appPromoItem.id)}
              className="text-left text-sm text-green-100/70 transition-colors hover:text-white"
            >
              {appPromoItem.label}
            </button> */}
          </div>
        </div>

        {/* Download App */}
        <div>
          <h3 className="font-bold">Download Our App</h3>

          <div className="mt-5">
  {/* Download App Buttons */}
  <div className="flex flex-wrap items-center gap-3">
    <a
        href="https://apps.apple.com/in/app/eat-protein/id6636532383"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 rounded-lg bg-black px-4 py-2 text-left text-white transition duration-200 hover:-translate-y-1 hover:bg-gray-900"
      >
        <Apple size={24} fill="white" />
    
        <span>
          <small className="block text-[8px]">
            Download on the
          </small>
    
          <b className="text-sm">
            App Store
          </b>
        </span>
      </a>

     <a
    href="https://play.google.com/store/apps/details?id=com.mannschaft.eatprotien"
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-2 rounded-lg bg-black px-4 py-2 text-left text-white transition duration-200 hover:-translate-y-1 hover:bg-gray-900"
  >
    <Play size={22} fill="white" />

    <span>
      <small className="block text-[8px]">
        GET IT ON
      </small>

      <b className="text-sm">
        Google Play
      </b>
    </span>
  </a>
  </div>

  {/* Social Media Links */}
  <div className="mt-5">
    <p className="mb-3 text-sm font-medium text-green-100/80">
      Follow us
    </p>

    <div className="flex items-center gap-3">
      <a
        href="YOUR_INSTAGRAM_URL"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram"
        className="flex h-10 w-10 items-center justify-center rounded-full
                   border border-green-100/20 text-green-100
                   transition-all duration-300 hover:border-green-300
                   hover:bg-green-100/10 hover:text-white"
      >
        <Instagram size={19} />
      </a>

      <a
        href="YOUR_LINKEDIN_URL"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
        className="flex h-10 w-10 items-center justify-center rounded-full
                   border border-green-100/20 text-green-100
                   transition-all duration-300 hover:border-green-300
                   hover:bg-green-100/10 hover:text-white"
      >
        <Linkedin size={19} />
      </a>

      <a
        href="YOUR_FACEBOOK_URL"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Facebook"
        className="flex h-10 w-10 items-center justify-center rounded-full
                   border border-green-100/20 text-green-100
                   transition-all duration-300 hover:border-green-300
                   hover:bg-green-100/10 hover:text-white"
      >
        <Facebook size={19} />
      </a>

      <a
        href="https://wa.me/YOUR_PHONE_NUMBER"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp"
        className="flex h-10 w-10 items-center justify-center rounded-full
                   border border-green-100/20 text-green-100
                   transition-all duration-300 hover:border-green-300
                   hover:bg-green-100/10 hover:text-white"
      >
        <MessageCircle size={19} />
      </a>
    </div>
  </div>
</div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mx-auto mt-7 flex max-w-[1450px] items-center justify-between border-t border-white/10 pt-5 text-[12px] text-green-100/50">
        <span>© {new Date().getFullYear()} EatProtein. All rights reserved.</span>

  
<button
  type="button"
  onClick={() =>
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }
  className="flex items-center gap-1 transition-colors hover:text-white"
>
  Back to top <ArrowUp size={12} />
</button>

      </div>
    </footer>
  );
}

