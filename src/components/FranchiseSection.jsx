import { ArrowRight, BarChart3, Headphones, MapPin, Store, WalletCards } from "lucide-react";
import { FRANCHISE_FEATURES } from "../data/homeData";
import SectionTag from "./SectionTag";

const icons = { map: MapPin, store: Store, support: Headphones, chart: BarChart3, income: WalletCards };

export default function FranchiseSection() {
  return (
    <section id="franchise" className="scroll-mt-20 bg-[#fffaf2] px-5 py-9">
      <div className="mx-auto grid max-w-[1450px] items-center gap-4 lg:grid-cols-[48%_52%]">
        <div>
          <SectionTag orange>Business Opportunity</SectionTag>
          <h2 className="mt-3 text-[28px] font-black leading-[1.05] text-protein-dark">
            EatProtein
            <br /><span className="text-protein-green">Franchise Opportunity</span>
          </h2>
          <p className="mt-3 max-w-[500px] text-sm leading-5 text-slate-700">
            Be a part of a growing movement towards healthier communities. Get exclusive area rights, support and earn with every order placed from stores in your area.
          </p>

          <div className="mt-5 grid grid-cols-5 gap-2">
            {FRANCHISE_FEATURES.map((item) => {
              const Icon = icons[item.icon];
              return (
                <div key={item.title} className="text-center">
                  <div className="mx-auto grid h-9 w-9 place-items-center rounded-full border border-orange-200 bg-white text-orange-500">
                    <Icon size={16} />
                  </div>
                  <p className="mt-2 text-[8px] font-bold leading-3 text-slate-700">{item.title}</p>
                  <p className="text-[8px] font-bold leading-3 text-slate-700">{item.subtitle}</p>
                </div>
              );
            })}
          </div>

          <button className="mt-5 flex items-center gap-2 rounded-full bg-gradient-to-r from-protein-orange to-orange-500 px-6 py-3 text-xs font-bold text-white shadow-md">
            Send Franchise Inquiry <ArrowRight size={15} />
          </button>
        </div>

        <div className="overflow-hidden rounded-2xl">
          <img src="/assets/franchise-store.jpg" alt="EatProtein franchise store" className="h-[280px] w-full object-cover object-center" />
        </div>
      </div>
    </section>
  );
}