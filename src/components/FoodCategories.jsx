import { ArrowRight } from "lucide-react";
import { CATEGORIES } from "../data/homeData";
import SectionTag from "./SectionTag";

export default function FoodCategories() {
  return (
    <section id="foods" className="scroll-mt-20 bg-white px-5 py-7">
      <div className="mx-auto max-w-[1400px]">
        <div className="flex items-end justify-between gap-5">
          <div>
            <SectionTag>Discover & Choose</SectionTag>
            
            <h2 className="mt-3 text-[28px] font-black leading-tight text-protein-dark sm:text-[31px]">
              High Protein Foods from Local Stores
            </h2>
            <p className="mt-1 max-w-[700px] text-sm text-slate-600">
              Explore a wide range of protein-rich foods available in stores near you. Each product comes with nutrition intelligence to help you make the right choice.
            </p>
          </div>
          <button className="hidden shrink-0 items-center gap-1 text-xs font-bold text-protein-green sm:flex">
            Explore All Foods <ArrowRight size={15} />
          </button>
        </div>

        <div className="mt-4 grid grid-cols-2 gap-2.5 sm:grid-cols-4 lg:grid-cols-7">
          {CATEGORIES.map((category) => (
            <button
              key={category.title}
              className="group overflow-hidden rounded-xl border border-slate-100 bg-white shadow-card transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="h-[110px] overflow-hidden bg-slate-50">
                <img src={category.image} alt={category.title} className="h-full w-full object-cover transition duration-300 group-hover:scale-105" />
              </div>
              <div className="flex min-h-[50px] items-center justify-center p-2 text-center">
                <span className="text-[10px] font-bold leading-3 text-slate-800">{category.title}</span>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}