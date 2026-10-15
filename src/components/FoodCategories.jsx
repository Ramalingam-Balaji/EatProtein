import { ArrowRight } from "lucide-react";
import { CATEGORIES } from "../data/homeData";
import SectionTag from "./SectionTag";
import { Link, useNavigate } from "react-router-dom";

export default function FoodCategories() {
  const navigate = useNavigate();

  return (
    <section
      id="foods"
      className="scroll-mt-20 bg-white px-5 py-7"
    >
      <div className="mx-auto max-w-[1400px]">
        {/* Responsive Section Heading */}
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between sm:gap-5">
          {/* Heading and Description */}
          <div className="min-w-0 flex-1">
            <SectionTag>Discover & Choose</SectionTag>

            <h2 className="mt-3 text-[28px] font-black leading-tight text-protein-dark sm:text-[31px]">
              High Protein Foods from Local Stores
            </h2>

            <p className="mt-1 max-w-[700px] text-sm leading-relaxed text-slate-600">
              Explore a wide range of protein-rich foods available in
              stores near you. Each product comes with nutrition
              intelligence to help you make the right choice.
            </p>
          </div>

          {/* Explore All Items Link */}
          <div className="flex justify-end sm:shrink-0">
            <Link
              to="/food-stores"
              className="inline-flex items-center gap-2 py-2 font-bold text-green-800 transition-colors duration-200 hover:text-green-500"
            >
              <span className="whitespace-nowrap">
                Explore All Items
              </span>
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>

        {/* Food Category Cards */}
        <div className="mt-4 grid grid-cols-2 gap-2.5 sm:grid-cols-4 lg:grid-cols-7">
          {CATEGORIES.map((category) => (
            <button
              type="button"
              key={category.title}
              onClick={() => navigate("/food-stores")}
              aria-label={`Explore ${category.title}`}
              className="group overflow-hidden rounded-xl border border-slate-100 bg-white shadow-card transition duration-300 hover:-translate-y-1 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              {/* Category Image */}
              <div className="h-[110px] overflow-hidden bg-slate-50">
                <img
                  src={category.image}
                  alt={category.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                />
              </div>

              {/* Category Title */}
              <div className="flex min-h-[50px] items-center justify-center p-2 text-center">
                <span className="text-[12px] font-bold leading-3 text-slate-800">
                  {category.title}
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
