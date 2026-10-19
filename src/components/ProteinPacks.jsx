
import { useState } from "react";
import {
  ArrowRight,
  CheckCircle2,
  UsersRound,
} from "lucide-react";

import SectionTag from "./SectionTag";
import {
  PACK_CATEGORIES,
  PACK_TYPES,
  PROTEIN_PACKS,
} from "../data/proteinPacksData";

export default function ProteinPacks() {
  const [activeCategory, setActiveCategory] = useState("all");

  const packs = PROTEIN_PACKS[activeCategory] ?? PROTEIN_PACKS.all;

  const handleViewPack = (pack) => {
    // Scroll to the app download section by default.
    if (pack.buttonLink === "#app-promo") {
      document.getElementById("app-promo")?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      return;
    }

    window.location.href = pack.buttonLink;
  };

  return (
    <section
      id="protein-packs"
      className="overflow-hidden bg-[#f7faf5] py-14 sm:py-16 lg:py-5"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading and category filter */}
        <div className="mb-7 flex flex-col gap-5 lg:mb-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <SectionTag>PROTEIN PACKS</SectionTag>

            <h2 className="mt-3 text-2xl font-extrabold leading-tight tracking-tight text-[#102e2b] sm:text-3xl lg:text-4xl">
              Daily. Weekly. Monthly Packs
            </h2>

            <p className="mt-2 max-w-xl text-sm leading-6 text-gray-600 sm:text-base">
              Convenient protein packs for your lifestyle, goals and family.
              Browse all packs and choose your favorites on the EatProtein app.
            </p>
          </div>

          {/* Category filter */}
          <div className="flex flex-wrap items-center gap-2">
           {/* <UsersRound
              size={21}
              className="mr-1 text-[#168344]"
            />*/}

            {PACK_CATEGORIES.map((category) => {
              const isActive = activeCategory === category.id;

              return (
                <button
                  key={category.id}
                  type="button"
                  onClick={() => setActiveCategory(category.id)}
                  aria-pressed={isActive}
                  className={`rounded-full border px-4 py-2 text-sm font-semibold transition-all duration-200 ${
                    isActive
                      ? "border-[#087d3d] bg-[#087d3d] text-white shadow-sm"
                      : "border-[#d6e5d8] bg-white text-[#28543b] hover:border-[#168344] hover:bg-green-50"
                  }`}
                >
                 {category.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Pack cards */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
          {packs.map((pack, index) => {
            const type = PACK_TYPES[index];
            const Icon = type.icon;

            return (
              <article
                key={`${activeCategory}-${type.id}`}
                className={`relative flex min-w-0 flex-col overflow-hidden rounded-2xl border bg-white p-4 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg sm:p-5 ${
                  index === 1
                    ? "border-[#a5d9b0]"
                    : "border-[#e7eee6]"
                }`}
              >
                {/* Popular badge */}
               {/* {type.badge && (
                  <span className="absolute right-4 top-0 z-10 rounded-b-lg bg-[#087d3d] px-3 py-1.5 text-[10px] font-bold text-white sm:right-5">
                    {type.badge}
                  </span>
                )} */}

                {/* Card content */}
                <div className="flex flex-1 items-start gap-3">
                  <div className="min-w-0 flex-1">
                    <div
                      className={`mb-3 flex h-9 w-9 items-center justify-center rounded-xl ${type.iconBg}`}
                    >
                      <Icon size={20} className={type.iconColor} />
                    </div>

                    <h3 className="text-base font-extrabold leading-snug text-[#102e2b] sm:text-lg">
                      {pack.title}
                    </h3>

                    <p className="mt-1.5 text-xs leading-5 text-gray-600 sm:text-sm">
                      {pack.description}
                    </p>

                    {/* Features */}
                    <ul className="mt-3 space-y-2">
                      {pack.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-start gap-2 text-[10px] leading-4 text-gray-700 sm:text-xs"
                        >
                          <CheckCircle2
                            size={14}
                            className="mt-0.5 shrink-0 fill-[#168344] text-white"
                            strokeWidth={2.5}
                          />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Food image */}
                  <div className="mt-2 w-[38%] shrink-0 sm:w-[40%]">
                    <img
                      src={pack.image}
                      alt={pack.title}
                      loading="lazy"
                      className="aspect-[4/5] w-full rounded-xl object-cover sm:aspect-square"
                    />
                  </div>
                </div>

                {/* Card action */}
                <div className="mt-4 flex justify-end border-t border-gray-100 pt-3">
                  <button
                    type="button"
                    onClick={() => handleViewPack(pack)}
                    className={`inline-flex min-h-10 items-center justify-center gap-2 rounded-lg border px-4 py-2 text-xs font-bold transition duration-200 sm:text-sm ${
                      index === 1
                        ? "border-[#91c7a2] bg-white text-[#087d3d] hover:bg-green-50"
                        : "border-[#91c7a2] bg-white text-[#087d3d] hover:bg-green-50"
                    }`}
                  >
                    {pack.buttonLabel}
                    <ArrowRight size={15} />
                  </button>
                </div>
              </article>
            );
          })}
        </div>

        {/* Supporting note */}
        <p className="mt-5 text-center text-xs leading-5 text-gray-500">
          Explore food options that fit your preferences and daily routine.
        </p>
      </div>
    </section>
  );
}
