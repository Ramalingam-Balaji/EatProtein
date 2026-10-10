
import { useMemo, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import {
  ArrowLeft,
  ChevronRight,
  Clock3,
  MapPin,
  Search,
  Star,
  Bike,
  Leaf,
  Tag,
} from "lucide-react";

import { FOOD_STORE_CATEGORIES } from "../data/foodStoresData";

export default function CategoryStores() {
  const { category: categorySlug } = useParams();
  const navigate = useNavigate();

  const [searchOpen, setSearchOpen] = useState(false);
  const [search, setSearch] = useState("");

  const category = FOOD_STORE_CATEGORIES[categorySlug];

  const filteredStores = useMemo(() => {
    if (!category) return [];

    const query = search.trim().toLowerCase();

    if (!query) return category.stores;

    return category.stores.filter((store) =>
      `${store.name} ${store.description}`
        .toLowerCase()
        .includes(query)
    );
  }, [category, search]);

  if (!category) {
    return (
      <main className="flex min-h-[60vh] flex-col items-center justify-center bg-[#f8faf7] px-5 text-center">
        <Leaf size={44} className="text-[#087b4b]" />
        <h1 className="mt-4 text-2xl font-extrabold text-[#075c40]">
          Category not found
        </h1>
        <p className="mt-2 text-sm text-gray-500">
          Please select a valid food category.
        </p>
        <button
          onClick={() => navigate("/food-stores")}
          className="mt-5 rounded-full bg-[#087b4b] px-5 py-3 font-bold text-white hover:bg-[#075c40]"
        >
          Browse Food Stores
        </button>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-white pb-10">
      {/* Category header */}
      <header className="sticky top-0 z-30 border-b border-gray-100 bg-white/95 backdrop-blur">
        <div className="mx-auto flex min-h-[76px] max-w-[1200px] items-center justify-between gap-3 px-4 sm:px-6">
          <button
            type="button"
            onClick={() => navigate(-1)}
            aria-label="Go back"
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#f1f7f2] text-[#075c40] transition hover:bg-[#dff1e3]"
          >
            <ArrowLeft size={25} />
          </button>

          {searchOpen ? (
            <input
              autoFocus
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder={`Search ${category.name} stores`}
              aria-label="Search stores"
              className="min-w-0 flex-1 rounded-full border border-green-200 bg-[#f8faf7] px-4 py-3 text-sm outline-none focus:border-[#087b4b]"
            />
          ) : (
            <h1 className="flex-1 text-center text-xl font-extrabold text-[#075c40] sm:text-2xl">
              {category.name}
            </h1>
          )}

          <button
            type="button"
            onClick={() => {
              setSearchOpen((open) => !open);
              setSearch("");
            }}
            aria-label={searchOpen ? "Close search" : "Search stores"}
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#f1f7f2] text-[#075c40] transition hover:bg-[#dff1e3]"
          >
            <Search size={23} />
          </button>
        </div>
      </header>

      <div className="mx-auto max-w-[1200px] space-y-7 px-4 py-5 sm:space-y-9 sm:px-6 sm:py-7">
        {/* Two promotional banners */}
        <section aria-label={`${category.name} promotions`}>
          <div className="hide-scrollbar flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 lg:grid lg:grid-cols-2 lg:overflow-visible">
            {category.banners.map((banner, index) => (
              <article
                key={banner.id}
                className="group relative min-h-[235px] w-full shrink-0 snap-start overflow-hidden rounded-2xl bg-[#075c40] sm:min-h-[275px] lg:min-w-0"
              >
                <img
                  src={banner.image}
                  alt={`${category.name} food promotion`}
                  loading={index === 0 ? "eager" : "lazy"}
                  className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-r from-[#034b32]/95 via-[#075c40]/75 to-transparent" />

                <div className="relative flex min-h-[235px] max-w-[82%] flex-col items-start justify-center p-5 sm:min-h-[275px] sm:p-7">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-white/15 px-3 py-1.5 text-[11px] font-bold text-white ring-1 ring-white/20 sm:text-xs">
                    <Leaf size={14} />
                    EatProtein
                  </span>

                  <h2 className="mt-4 text-2xl font-black leading-tight text-white sm:text-3xl">
                    {banner.title}
                  </h2>

                  <p className="mt-2 line-clamp-2 text-xs leading-5 text-white/90 sm:text-sm">
                    {banner.subtitle}
                  </p>

                  <a
                    href="#category-stores"
                    className="mt-5 inline-flex items-center gap-2 rounded-full bg-[#ffcf35] px-4 py-2.5 text-xs font-extrabold text-[#075c40] transition hover:bg-white sm:text-sm"
                  >
                    {banner.button}
                    <ChevronRight size={16} />
                  </a>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-2 flex justify-center gap-1.5 lg:hidden">
            {category.banners.map((banner, index) => (
              <span
                key={banner.id}
                className={`h-2 rounded-full ${
                  index === 0 ? "w-5 bg-[#087b4b]" : "w-2 bg-gray-300"
                }`}
              />
            ))}
          </div>
        </section>

        {/* Store list */}
        <section id="category-stores" className="scroll-mt-24">
          <div className="mb-5 flex flex-wrap items-end justify-between gap-3">
            <div>
              <h2 className="text-xl font-extrabold text-[#075c40] sm:text-2xl">
                {category.name} Stores
              </h2>
              <p className="mt-1 text-sm text-gray-500">
                Find your favourites near you
              </p>
            </div>

            <span className="rounded-full bg-[#eaf7ec] px-3 py-1.5 text-xs font-bold text-[#087b4b]">
              {filteredStores.length} stores
            </span>
          </div>

          <div className="space-y-4">
            {filteredStores.length > 0 ? (
              filteredStores.map((store) => (
                <Link
                  key={store.name}
                  to={`/food-stores/${categorySlug}/${encodeURIComponent(
                    store.name
                  )}`}
                  className="group flex flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-[0_3px_10px_rgba(0,0,0,0.08)] transition hover:border-[#c4e4cb] hover:shadow-md sm:flex-row"
                >
                  {/* Store image */}
                  <div className="h-44 w-full shrink-0 overflow-hidden bg-[#f1f7ef] sm:h-auto sm:min-h-[150px] sm:w-[185px] md:w-[205px]">
                    <img
                      src={store.image}
                      alt={store.name}
                      loading="lazy"
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    />
                  </div>

                  {/* Store details */}
                  <div className="flex min-w-0 flex-1 flex-col justify-center p-4 sm:p-5">
                    <h3 className="text-lg font-extrabold leading-snug text-gray-800 sm:text-xl">
                      {store.name}
                    </h3>

                    <p className="mt-1 text-sm text-gray-500">
                      {store.description}
                    </p>

                    <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-gray-600">
                      <span className="inline-flex items-center gap-1.5">
                        <Star
                          size={18}
                          fill="#ffca28"
                          className="text-[#eab308]"
                        />
                        {store.rating}
                      </span>

                      <span className="inline-flex items-center gap-1.5">
                        <Bike size={19} className="text-[#087b4b]" />
                        {store.minutes} mins
                      </span>

                      <span className="inline-flex items-center gap-1.5">
                        <MapPin size={17} className="text-red-500" />
                        {store.distance}
                      </span>
                    </div>

                    <div className="mt-4 flex flex-wrap items-center gap-2">
                      <span
                        className={`rounded-md px-3 py-1.5 text-xs font-bold ${
                          store.isOpen
                            ? "bg-[#e8f7ed] text-[#24834c]"
                            : "bg-red-50 text-red-600"
                        }`}
                      >
                        {store.isOpen ? "Serving Now" : "Closed"}
                      </span>

                      <span className="inline-flex items-center gap-1 rounded-md bg-red-600 px-3 py-1.5 text-xs font-bold text-white">
                        <Tag size={13} />
                        {store.offer}
                      </span>
                    </div>
                  </div>

                  {/* Delivery details */}
                  <div className="flex items-center justify-between gap-3 border-t border-gray-100 px-4 py-3 sm:w-[155px] sm:shrink-0 sm:flex-col sm:items-end sm:justify-center sm:border-l sm:border-t-0 sm:px-4">
                    <div className="text-left sm:text-right">
                      <p className="text-xs font-bold text-[#087b4b]">
                        {store.delivery}
                      </p>
                      <p className="mt-1 text-xs text-gray-400">
                        Delivery available
                      </p>
                    </div>

                    <ChevronRight
                      size={22}
                      className="shrink-0 text-gray-400 transition group-hover:translate-x-1 group-hover:text-[#087b4b]"
                    />
                  </div>
                </Link>
              ))
            ) : (
              <div className="rounded-2xl border border-dashed border-gray-200 px-5 py-14 text-center">
                <Search
                  size={34}
                  className="mx-auto text-[#087b4b]"
                />
                <h3 className="mt-3 font-bold text-[#075c40]">
                  No stores found
                </h3>
                <p className="mt-1 text-sm text-gray-500">
                  Try a different search term.
                </p>
                <button
                  onClick={() => setSearch("")}
                  className="mt-4 rounded-full bg-[#087b4b] px-5 py-2.5 text-sm font-bold text-white hover:bg-[#075c40]"
                >
                  Clear search
                </button>
              </div>
            )}
          </div>
        </section>
      </div>
    </main>
  );
}
