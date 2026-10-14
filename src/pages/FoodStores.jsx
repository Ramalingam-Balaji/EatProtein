
import { useMemo, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import {
  ArrowUpRight,
  Bike,
  ChevronRight,
  Leaf,
  MapPin,
  Search,
  ShoppingBasket,
  Star,
  Truck,
} from "lucide-react";

import SectionHeading from "../components/SectionHeading";
import {
  FOOD_STORE_CATEGORIES,
  foodStoreCategoryList,
} from "../data/foodStoresData";

export default function FoodStores() {
  const [searchParams] = useSearchParams();
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const selectedStore = searchParams.get("store");

  // Pagination settings
  const STORES_PER_PAGE = 7;

  // Get all stores from the category data
  const allStores = useMemo(
    () =>
      Object.entries(FOOD_STORE_CATEGORIES).flatMap(
        ([categorySlug, category]) =>
          category.stores.map((store) => ({
            ...store,
            categorySlug,
            categoryName: category.name,
          }))
      ),
    []
  );

  // Top Rated Stores
  const topRatedStores = useMemo(
    () =>
      [...allStores]
        .sort((a, b) => Number(b.rating) - Number(a.rating))
        .slice(0, 8),
    [allStores]
  );

  // Search and selected-store filtering
  const filteredStores = useMemo(() => {
    const query = search.trim().toLowerCase();

    return allStores.filter((store) => {
      const matchesSearch =
        !query ||
        `${store.name} ${store.description} ${store.categoryName}`
          .toLowerCase()
          .includes(query);

      const matchesSelectedStore =
        !selectedStore ||
        store.name.toLowerCase() === selectedStore.toLowerCase();

      return matchesSearch && matchesSelectedStore;
    });
  }, [allStores, search, selectedStore]);

  // Pagination calculations
  const totalPages = Math.ceil(
    filteredStores.length / STORES_PER_PAGE
  );

  const startIndex = (currentPage - 1) * STORES_PER_PAGE;

  const currentStores = filteredStores.slice(
    startIndex,
    startIndex + STORES_PER_PAGE
  );

  // Handle search changes and return to page 1
  const handleSearchChange = (event) => {
    setSearch(event.target.value);
    setCurrentPage(1);
  };

  // Clear search and reset pagination
  const handleClearSearch = () => {
    setSearch("");
    setCurrentPage(1);
    window.history.replaceState({}, "", "/food-stores");
  };

  // Navigate to a page and scroll to Nearby Stores
  const handlePageChange = (page) => {
    setCurrentPage(page);

    document.getElementById("nearby-stores")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <main className="min-h-screen bg-[#fbfdfb] pb-12">
      <div className="mx-auto max-w-[1200px] space-y-9 px-4 py-6 sm:px-6 lg:space-y-12">

        {/* Page Heading and Search */}
        <section className="rounded-2xl bg-[#075c40] px-5 py-7 text-white sm:px-8 sm:py-9">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 text-xs font-bold">
            <Leaf size={15} />
            EATPROTEIN FOOD STORES
          </span>

          <h1 className="mt-4 text-3xl font-black sm:text-4xl">
            Discover Food Stores
          </h1>

          <p className="mt-2 max-w-2xl text-sm leading-6 text-white/80 sm:text-base">
            Explore local stores, fresh ingredients and nutritious foods
            for your everyday needs.
          </p>

          <form
            onSubmit={(event) => {
              event.preventDefault();
              setCurrentPage(1);

              document
                .getElementById("nearby-stores")
                ?.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                });
            }}
            className="mt-6 flex max-w-xl items-center gap-2 rounded-xl bg-white p-2"
          >
            <Search
              size={21}
              className="ml-2 shrink-0 text-gray-400"
            />

            <input
              type="search"
              value={search}
              onChange={handleSearchChange}
              placeholder="Search stores, food or categories..."
              aria-label="Search food stores"
              className="min-w-0 flex-1 bg-transparent px-1 py-2 text-sm text-gray-800 outline-none placeholder:text-gray-400"
            />

            <button
              type="submit"
              className="rounded-lg bg-[#087b4b] px-4 py-2.5 text-sm font-bold text-white transition hover:bg-[#064f37]"
            >
              Search
            </button>
          </form>
        </section>

        {/* Browse Categories */}
        <section id="categories">
          <SectionHeading
            title="Browse Categories"
            subtitle="Find the food you're craving"
            link="/food-stores"
          />

          <div className="hide-scrollbar flex snap-x snap-mandatory gap-3 overflow-x-auto pb-3">
            {foodStoreCategoryList.map((category) => (
              <Link
                key={category.slug}
                to={`/food-stores/${category.slug}`}
                className="group w-[122px] shrink-0 snap-start overflow-hidden rounded-2xl border border-gray-200 bg-white p-2 text-center shadow-sm transition hover:-translate-y-1 hover:border-[#087b4b] hover:shadow-md sm:w-[145px] sm:p-3"
              >
                <div className="flex h-[94px] items-center justify-center overflow-hidden rounded-xl bg-[#eaf7ec] sm:h-[115px]">
                  <img
                    src={category.image}
                    alt={category.name}
                    loading="lazy"
                    className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                  />
                </div>

                <p className="mt-3 min-h-10 text-sm font-bold leading-5 text-[#075c40]">
                  {category.name}
                </p>

                <span className="mt-1 inline-flex items-center gap-1 text-xs font-semibold text-[#087b4b]">
                  Explore <ChevronRight size={13} />
                </span>
              </Link>
            ))}
          </div>
        </section>

        {/* Top Rated Stores */}
        <section id="top-rated">
          <SectionHeading
            title="Top Rated Stores"
            subtitle="Loved by our food community"
            link="/food-stores"
          />

          <div className="hide-scrollbar flex snap-x snap-mandatory gap-4 overflow-x-auto pb-3">
            {topRatedStores.map((store) => (
              <Link
                key={`${store.categorySlug}-${store.name}`}
                to={`/food-stores/${store.categorySlug}/${encodeURIComponent(
                  store.name
                )}`}
                className="group w-[235px] shrink-0 snap-start overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg sm:w-[260px] lg:w-[calc((100%-3rem)/4)]"
              >
                <div className="relative h-40 overflow-hidden sm:h-44">
                  <img
                    src={store.image}
                    alt={store.name}
                    loading="lazy"
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />

                  <div className="absolute left-3 top-3 flex items-center gap-1 rounded-full bg-[#075c40] px-3 py-1.5 text-xs font-bold text-white shadow">
                    <Star
                      size={13}
                      fill="#ffcf35"
                      className="text-[#ffcf35]"
                    />
                    {store.rating}
                  </div>

                  <span className="absolute bottom-3 right-3 rounded-full bg-white/95 px-3 py-1 text-xs font-bold text-[#075c40]">
                    {store.categoryName}
                  </span>
                </div>

                <div className="p-4">
                  <h3 className="font-extrabold text-[#075c40]">
                    {store.name}
                  </h3>

                  <p className="mt-1 line-clamp-2 text-xs leading-5 text-gray-500">
                    {store.description}
                  </p>

                  <p className="mt-3 flex items-center gap-1 text-xs font-bold text-[#087b4b]">
                    Explore store <ArrowUpRight size={14} />
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Nearby Stores with Pagination */}
        <section
          id="nearby-stores"
          className="scroll-mt-24"
        >
          <SectionHeading
            title="Near to Me"
            subtitle="Discover food stores around your area"
            link="/food-stores"
          />

          {/* Selected Store */}
          {selectedStore && (
            <div className="mb-4 flex flex-wrap items-center justify-between gap-3 rounded-xl bg-[#eaf7ec] p-3">
              <p className="text-sm font-semibold text-[#075c40]">
                Showing store: {selectedStore}
              </p>

              <Link
                to="/food-stores"
                className="text-sm font-bold text-[#087b4b] underline hover:text-[#70bd79]"
              >
                Show all stores
              </Link>
            </div>
          )}

          {/* Store Cards: Maximum 7 per page */}
          <div className="hide-scrollbar space-y-4 pb-2">
            {currentStores.length > 0 ? (
              currentStores.map((store) => (
                <Link
                  key={`${store.categorySlug}-${store.name}`}
                  to={`/food-stores/${store.categorySlug}/${encodeURIComponent(
                    store.name
                  )}`}
                  className="group flex flex-col gap-4 rounded-2xl border border-gray-200 bg-white p-3 shadow-sm transition hover:border-[#b7ddbf] hover:shadow-md sm:flex-row sm:items-center sm:p-4 lg:gap-5"
                >
                  {/* Store Image */}
                  <div className="h-28 w-full shrink-0 overflow-hidden rounded-xl bg-[#f1f7ef] sm:h-24 sm:w-28">
                    <img
                      src={store.image}
                      alt={store.name}
                      loading="lazy"
                      className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                    />
                  </div>

                  {/* Store Information */}
                  <div className="min-w-0 flex-1">
                    <h3 className="text-base font-extrabold text-[#075c40] sm:text-lg">
                      {store.name}
                    </h3>

                    <p className="mt-1 text-xs font-semibold text-[#087b4b]">
                      {store.categoryName}
                    </p>

                    <p className="mt-1 text-sm text-gray-500">
                      {store.description}
                    </p>

                    {/* Rating, Delivery Time and Distance */}
                    <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-2 text-xs text-gray-500 sm:text-sm">
                      <span className="inline-flex items-center gap-1 font-bold text-[#087b4b]">
                        <Star
                          size={15}
                          fill="#ffcf35"
                          className="text-[#eab308]"
                        />
                        {store.rating}
                      </span>

                      <span className="inline-flex items-center gap-1">
                        <Bike size={15} />
                        {store.minutes} mins
                      </span>

                      <span className="inline-flex items-center gap-1">
                        <MapPin size={14} />
                        {store.distance}
                      </span>
                    </div>
                  </div>

                  {/* Store Status and Delivery Offer */}
                  <div className="flex shrink-0 items-center justify-between gap-3 sm:w-[155px] sm:flex-col sm:items-start sm:justify-center">
                    <span
                      className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-bold ${
                        store.isOpen
                          ? "border border-green-200 bg-green-50 text-green-700"
                          : "border border-red-100 bg-red-50 text-red-600"
                      }`}
                    >
                      {store.isOpen ? "Serving Now" : "Closed"}
                    </span>

                    <span className="inline-flex items-center gap-2 rounded-xl bg-[#edf8ee] px-3 py-2 text-[#087b4b]">
                      <Truck size={19} />

                      <span>
                        <span className="block text-xs font-bold">
                          {store.delivery}
                        </span>

                        <span className="mt-0.5 block text-[11px] text-red-600">
                          {store.offer}
                        </span>
                      </span>
                    </span>
                  </div>

                  {/* Right Arrow */}
                  <ChevronRight
                    size={20}
                    className="hidden shrink-0 text-gray-400 transition group-hover:translate-x-1 group-hover:text-[#087b4b] sm:block"
                  />
                </Link>
              ))
            ) : (
              /* No Stores Found */
              <div className="rounded-2xl border border-dashed border-gray-300 bg-white px-4 py-12 text-center">
                <ShoppingBasket
                  size={34}
                  className="mx-auto text-[#087b4b]"
                />

                <h3 className="mt-3 font-bold text-[#075c40]">
                  No stores found
                </h3>

                <p className="mt-1 text-sm text-gray-500">
                  Try another store name or search term.
                </p>

                <button
                  type="button"
                  onClick={handleClearSearch}
                  className="mt-4 rounded-full bg-[#087b4b] px-5 py-2 text-sm font-bold text-white transition hover:bg-[#075c40]"
                >
                  Clear search
                </button>
              </div>
            )}
          </div>

          {/* Pagination Controls */}
          {totalPages > 1 && (
            <nav
              aria-label="Nearby stores pagination"
              className="mt-6 flex flex-wrap items-center justify-center gap-2"
            >
              {/* Previous */}
              <button
                type="button"
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-semibold text-[#075c40] transition hover:bg-[#eaf7ec] disabled:cursor-not-allowed disabled:opacity-40 sm:px-4"
              >
                Previous
              </button>

              {/* Page Numbers */}
              {Array.from(
                { length: totalPages },
                (_, index) => index + 1
              ).map((page) => (
                <button
                  key={page}
                  type="button"
                  onClick={() => handlePageChange(page)}
                  aria-label={`Go to page ${page}`}
                  aria-current={
                    currentPage === page ? "page" : undefined
                  }
                  className={`min-w-10 rounded-lg px-3 py-2 text-sm font-bold transition ${
                    currentPage === page
                      ? "bg-[#087b4b] text-white shadow-sm"
                      : "border border-gray-200 bg-white text-[#075c40] hover:bg-[#eaf7ec]"
                  }`}
                >
                  {page}
                </button>
              ))}

              {/* Next */}
              <button
                type="button"
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-semibold text-[#075c40] transition hover:bg-[#eaf7ec] disabled:cursor-not-allowed disabled:opacity-40 sm:px-4"
              >
                Next
              </button>
            </nav>
          )}

          {/* Results Counter */}
          {filteredStores.length > 0 && (
            <p
              aria-live="polite"
              className="mt-3 text-center text-xs text-gray-500"
            >
              Showing {startIndex + 1}–
              {Math.min(
                startIndex + STORES_PER_PAGE,
                filteredStores.length
              )}{" "}
              of {filteredStores.length} stores
            </p>
          )}
        </section>
      </div>
    </main>
  );
}
