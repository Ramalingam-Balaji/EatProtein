
import {
  ArrowRight,
  BarChart3,
  Headphones,
  MapPin,
  Store,
  WalletCards,
} from "lucide-react";

import { useNavigate } from "react-router-dom";
import { FRANCHISE_FEATURES } from "../data/homeData";
import SectionTag from "./SectionTag";

const icons = {
  map: MapPin,
  store: Store,
  support: Headphones,
  chart: BarChart3,
  income: WalletCards,
};

export default function FranchiseSection() {
  const navigate = useNavigate();

  return (
    <section
      id="franchise"
      className="scroll-mt-20 bg-[#fffaf2] px-5 py-9"
    >
      <div className="mx-auto grid max-w-[1450px] items-center gap-6 lg:grid-cols-[48%_52%]">

        {/* Left side: Franchise details */}
        <div>
          <SectionTag orange>Business Opportunity</SectionTag>

          <h2 className="mt-3 text-[28px] font-black leading-tight text-protein-dark">
            EatProtein
            <br />
            <span className="text-protein-green">
              Franchise Opportunity
            </span>
          </h2>

          <p className="mt-3 max-w-[500px] text-sm leading-6 text-slate-700">
            Be a part of a growing movement towards healthier
            communities. Get exclusive area rights, support and
            earn with every order placed from stores in your area.
          </p>

          {/* Franchise features */}
          <div className="mt-5 grid grid-cols-3 gap-3 sm:grid-cols-5">
            {FRANCHISE_FEATURES.map((item) => {
              const Icon = icons[item.icon];

              if (!Icon) return null;

              return (
                <div key={item.title} className="text-center">
                  <div className="mx-auto grid h-10 w-10 place-items-center rounded-full border border-orange-200 bg-white text-orange-500 shadow-sm">
                    <Icon size={17} />
                  </div>

                  <p className="mt-2 text-xs font-bold text-slate-700">
                    {item.title}
                  </p>

                  <p className="mt-1 text-[10px] text-slate-500">
                    {item.subtitle}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Navigate to the Franchise page */}
          <button
            type="button"
            onClick={() => navigate("/franchise")}
            className="mt-5 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-protein-orange to-orange-500 px-6 py-3 text-xs font-bold text-white shadow-md transition hover:-translate-y-0.5 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-offset-2"
          >
            Send Franchise Inquiry
            <ArrowRight size={15} />
          </button>
        </div>

        {/* Right side: Franchise image */}
        <div className="overflow-hidden rounded-2xl shadow-md">
          <img
            src="/assets/franchise-store.jpg"
            alt="EatProtein franchise store"
            className="h-[240px] w-full object-cover sm:h-[320px] lg:h-[350px]"
            loading="lazy"
          />
        </div>

      </div>
    </section>
  );
}