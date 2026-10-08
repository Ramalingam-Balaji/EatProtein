import { ArrowRight, Search, CheckCircle2, ShoppingBasket, Sparkles } from "lucide-react";
import SectionTag from "./SectionTag";

const STEPS = [
  { icon: Search, title: "Discover", text: "Find protein-rich foods from nearby stores." },
  { icon: Sparkles, title: "Understand", text: "Check protein, nutrition and healthy-choice insights." },
  { icon: ShoppingBasket, title: "Choose", text: "Compare options and make smarter food choices." },
  { icon: CheckCircle2, title: "Live Better", text: "Build simple habits for a healthier lifestyle." }
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="scroll-mt-20 bg-white px-5 py-10">
      <div className="mx-auto max-w-[1400px] text-center">
        <SectionTag>Simple. Smart. Healthy.</SectionTag>
        <h2 className="mt-3 text-3xl font-black text-protein-dark">How EatProtein Works</h2>
        <p className="mx-auto mt-2 max-w-2xl text-sm text-slate-600">
          From finding better foods to understanding your nutrition, EatProtein keeps the journey simple.
        </p>
        <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map(({ icon: Icon, title, text }, index) => (
            <div key={title} className="relative rounded-2xl border border-green-100 bg-[#f6fbf1] p-6">
              <div className="mx-auto grid h-12 w-12 place-items-center rounded-full bg-white text-protein-green shadow-sm">
                <Icon size={22} />
              </div>
              <span className="mt-3 block text-[10px] font-black uppercase tracking-widest text-green-600">Step 0{index + 1}</span>
              <h3 className="mt-1 font-extrabold text-protein-dark">{title}</h3>
              <p className="mt-2 text-xs leading-5 text-slate-600">{text}</p>
              {index < STEPS.length - 1 && <ArrowRight className="absolute -right-4 top-1/2 hidden text-green-300 lg:block" size={20} />}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}