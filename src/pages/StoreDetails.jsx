// import { useEffect, useMemo, useState } from "react";
// import { Link, useParams } from "react-router-dom";
// import {
//   ArrowLeft,
//   ChevronLeft,
//   ChevronRight,
//   Clock,
//   MapPin,
//   Search,
//   ShoppingBasket,
//   Star,
//   Truck,
// } from "lucide-react";

// import { FOOD_STORE_CATEGORIES } from "../data/foodStoresData";
// import {
//   storeProductsData,
//   STORE_FILTER_LABELS,
// } from "../data/storeProductsData";

// const ITEMS_PER_PAGE = 5;

// const slugify = (value = "") =>
//   String(value)
//     .normalize("NFKD")
//     .replace(/[\u0300-\u036f]/g, "")
//     .toLowerCase()
//     .trim()
//     .replace(/[^a-z0-9]+/g, "-")
//     .replace(/^-+|-+$/g, "");

// function getStoreBySlug(categorySlug, storeSlug) {
//   const category = FOOD_STORE_CATEGORIES?.[categorySlug];
//   if (!category || !Array.isArray(category.stores)) return null;

//   const decodedStoreSlug = (() => {
//     try {
//       return decodeURIComponent(storeSlug || "");
//     } catch {
//       return storeSlug || "";
//     }
//   })();

//   const store = category.stores.find(
//     (item) =>
//       slugify(item.name) === slugify(decodedStoreSlug) ||
//       slugify(item.name) === slugify(storeSlug)
//   );

//   if (!store) return null;

//   return {
//     ...store,
//     categorySlug,
//     categoryName: category.name,
//     banner:
//       store.bannerImage ||
//       store.banner ||
//       category.bannerImage ||
//       category.banner ||
//       store.image,
//   };
// }

// function StoreDetails() {
//   const { categorySlug, storeName } = useParams();

//   const [activeCategory, setActiveCategory] = useState("All");
//   const [activeLabel, setActiveLabel] = useState("All");
//   const [search, setSearch] = useState("");
//   const [currentPage, setCurrentPage] = useState(1);

//   const store = useMemo(
//     () => getStoreBySlug(categorySlug, storeName),
//     [categorySlug, storeName]
//   );

//   const storeData = useMemo(() => {
//     if (!store) return { categories: [], products: [] };

//     return (
//       storeProductsData[slugify(store.name)] || {
//         categories: [],
//         products: [],
//       }
//     );
//   }, [store]);

//   const products = storeData.products || [];
//   const categories = storeData.categories || [];

//   const categoryNames = useMemo(
//     () => ["All", ...categories.map((category) => category.name)],
//     [categories]
//   );

//   const filteredProducts = useMemo(() => {
//     const query = search.trim().toLowerCase();

//     return products.filter((product) => {
//       const matchesCategory =
//         activeCategory === "All" ||
//         product.category?.toLowerCase() === activeCategory.toLowerCase();

//       const productLabels = product.labels || [];
//       const matchesLabel =
//         activeLabel === "All" ||
//         productLabels.some(
//           (label) => label.toLowerCase() === activeLabel.toLowerCase()
//         );

//       const searchableText = [
//         product.name,
//         product.description || "",
//         product.category || "",
//         ...(product.labels || []),
//       ]
//         .join(" ")
//         .toLowerCase();

//       return (
//         matchesCategory &&
//         matchesLabel &&
//         (!query || searchableText.includes(query))
//       );
//     });
//   }, [products, activeCategory, activeLabel, search]);

//   const totalPages = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE);
//   const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
//   const visibleProducts = filteredProducts.slice(
//     startIndex,
//     startIndex + ITEMS_PER_PAGE
//   );

//   useEffect(() => {
//     setActiveCategory("All");
//     setActiveLabel("All");
//     setSearch("");
//     setCurrentPage(1);
//   }, [categorySlug, storeName]);

//   useEffect(() => {
//     setCurrentPage((page) => Math.min(page, Math.max(1, totalPages)));
//   }, [totalPages]);

//   const resetFilters = () => {
//     setActiveCategory("All");
//     setActiveLabel("All");
//     setSearch("");
//     setCurrentPage(1);
//   };

//   const changePage = (page) => {
//     setCurrentPage(page);
//     document.getElementById("store-products")?.scrollIntoView({
//       behavior: "smooth",
//       block: "start",
//     });
//   };

//   if (!store) {
//     return (
//       <main className="flex min-h-[60vh] items-center justify-center bg-[#fbfdfb] px-4">
//         <div className="max-w-md rounded-2xl border border-gray-200 bg-white p-8 text-center shadow-sm">
//           <ShoppingBasket size={42} className="mx-auto text-[#087b4b]" />
//           <h1 className="mt-4 text-xl font-extrabold text-[#075c40]">
//             Store not found
//           </h1>
//           <p className="mt-2 text-sm text-gray-500">
//             This store may have been removed or its URL may have changed.
//           </p>
//           <Link
//             to="/food-stores"
//             className="mt-5 inline-flex rounded-lg bg-[#087b4b] px-5 py-3 font-bold text-white transition hover:bg-[#075c40]"
//           >
//             Browse all stores
//           </Link>
//         </div>
//       </main>
//     );
//   }

//   const bannerImage = store.banner || store.image;

//   return (
//     <main className="min-h-screen bg-[#fbfdfb] pb-10">
//       <div className="mx-auto max-w-[1200px] space-y-6 px-3 py-4 sm:space-y-8 sm:px-6 sm:py-6 lg:px-8">
//         <Link
//           to="/food-stores"
//           className="inline-flex items-center gap-2 text-sm font-bold text-[#075c40] transition hover:text-[#70bd79]"
//         >
//           <ArrowLeft size={18} />
//           Back to stores
//         </Link>

//         {/* Store banner */}
//         <section className="relative isolate overflow-hidden rounded-2xl bg-[#075c40]">
//           {bannerImage && (
//             <img
//               src={bannerImage}
//               alt={`${store.name} banner`}
//               className="absolute inset-0 -z-10 h-full w-full object-cover"
//             />
//           )}
//           <div className="absolute inset-0 -z-10 bg-gradient-to-r from-black/80 via-black/45 to-black/10" />

//           <div className="flex min-h-[220px] flex-col justify-end p-5 text-white sm:min-h-[290px] sm:p-8 lg:min-h-[340px] lg:p-10">
//             <span className="mb-3 w-fit rounded-full bg-white/15 px-3 py-1.5 text-xs font-bold backdrop-blur-sm">
//               {store.categoryName}
//             </span>
//             <h1 className="max-w-3xl text-2xl font-black leading-tight sm:text-3xl lg:text-5xl">
//               {store.name}
//             </h1>
//             <p className="mt-2 max-w-2xl text-sm leading-6 text-white/90 sm:text-base">
//               {store.description ||
//                 "Discover fresh, quality food from this store."}
//             </p>

//             <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-3 text-xs font-semibold sm:text-sm">
//               {store.rating != null && (
//                 <span className="inline-flex items-center gap-1.5">
//                   <Star size={16} fill="#ffcf35" className="text-[#ffcf35]" />
//                   {store.rating} rating
//                 </span>
//               )}
//               {store.minutes != null && (
//                 <span className="inline-flex items-center gap-1.5">
//                   <Clock size={16} />
//                   {store.minutes} mins
//                 </span>
//               )}
//               {store.distance && (
//                 <span className="inline-flex items-center gap-1.5">
//                   <MapPin size={16} />
//                   {store.distance}
//                 </span>
//               )}
//               {store.delivery && (
//                 <span className="inline-flex items-center gap-1.5">
//                   <Truck size={17} />
//                   {store.delivery}
//                 </span>
//               )}
//             </div>

//             {store.isOpen != null && (
//               <span
//                 className={`mt-4 w-fit rounded-full px-3 py-1.5 text-xs font-bold ${
//                   store.isOpen
//                     ? "bg-green-100 text-green-800"
//                     : "bg-red-100 text-red-700"
//                 }`}
//               >
//                 {store.isOpen ? "Serving Now" : "Currently Closed"}
//               </span>
//             )}
//           </div>
//         </section>

//         {/* Food categories */}
//         <section>
//           <div className="mb-4">
//             <h2 className="text-xl font-extrabold text-[#075c40] sm:text-2xl">
//               Categories
//             </h2>
//             <p className="mt-1 text-sm text-gray-500">
//               Explore the food available at {store.name}
//             </p>
//           </div>

//           {categories.length > 0 ? (
//             <div className="hide-scrollbar flex snap-x snap-mandatory gap-3 overflow-x-auto pb-3">
//               {categoryNames.map((categoryName) => {
//                 const category = categories.find(
//                   (item) => item.name === categoryName
//                 );
//                 const selected = activeCategory === categoryName;

//                 return (
//                   <button
//                     key={categoryName}
//                     type="button"
//                     onClick={() => {
//                       setActiveCategory(categoryName);
//                       setCurrentPage(1);
//                     }}
//                     aria-pressed={selected}
//                     className={`group w-[100px] shrink-0 snap-start rounded-xl border p-2 text-center transition sm:w-[125px] sm:p-3 ${
//                       selected
//                         ? "border-[#087b4b] bg-[#eaf7ec] shadow-sm"
//                         : "border-gray-200 bg-white hover:border-[#a5d6ad]"
//                     }`}
//                   >
//                     <div className="flex h-[72px] items-center justify-center overflow-hidden rounded-lg bg-[#edf8ee] sm:h-[92px]">
//                       {category?.image ? (
//                         <img
//                           src={category.image}
//                           alt={categoryName}
//                           loading="lazy"
//                           className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
//                         />
//                       ) : (
//                         <ShoppingBasket
//                           size={26}
//                           className="text-[#087b4b]"
//                         />
//                       )}
//                     </div>
//                     <span className="mt-2 block text-xs font-bold text-[#075c40] sm:text-sm">
//                       {categoryName}
//                     </span>
//                   </button>
//                 );
//               })}
//             </div>
//           ) : (
//             <p className="rounded-xl bg-white p-4 text-sm text-gray-500">
//               No categories have been added for this store yet.
//             </p>
//           )}
//         </section>

//         {/* Filter labels */}
//         <section className="rounded-xl border border-gray-100 bg-white p-3 shadow-sm sm:p-4">
//           <div className="mb-2 text-sm font-bold text-[#075c40]">
//             Filter items
//           </div>
//           <div className="hide-scrollbar flex gap-2 overflow-x-auto pb-1">
//             {STORE_FILTER_LABELS.map((label) => {
//               const selected = activeLabel === label;
//               return (
//                 <button
//                   key={label}
//                   type="button"
//                   onClick={() => {
//                     setActiveLabel(label);
//                     setCurrentPage(1);
//                   }}
//                   aria-pressed={selected}
//                   className={`shrink-0 rounded-full border px-4 py-2 text-xs font-bold transition sm:text-sm ${
//                     selected
//                       ? "border-[#087b4b] bg-[#087b4b] text-white"
//                       : "border-gray-200 bg-white text-gray-600 hover:border-[#087b4b] hover:text-[#087b4b]"
//                   }`}
//                 >
//                   {label}
//                 </button>
//               );
//             })}
//           </div>
//         </section>

//         {/* Products */}
//         <section id="store-products" className="scroll-mt-24">
//           <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
//             <div>
//               <h2 className="text-xl font-extrabold text-[#075c40] sm:text-2xl">
//                 Food Items
//               </h2>
//               <p className="mt-1 text-sm text-gray-500">
//                 Fresh picks from {store.name}
//               </p>
//             </div>

//             <label className="flex w-full items-center gap-2 rounded-xl border border-gray-200 bg-white px-3 py-2.5 sm:max-w-[300px]">
//               <Search size={18} className="shrink-0 text-gray-400" />
//               <input
//                 type="search"
//                 value={search}
//                 onChange={(event) => {
//                   setSearch(event.target.value);
//                   setCurrentPage(1);
//                 }}
//                 placeholder="Search food items..."
//                 className="min-w-0 flex-1 bg-transparent text-sm outline-none"
//                 aria-label="Search food items"
//               />
//             </label>
//           </div>

//           {visibleProducts.length > 0 ? (
//             <div className="space-y-3">
//               {visibleProducts.map((product) => (
//                 <article
//                   key={product.id}
//                   className="flex min-w-0 flex-col gap-3 rounded-xl border border-gray-100 bg-white p-3 shadow-sm transition hover:border-[#b7ddbf] hover:shadow-md sm:flex-row sm:items-center sm:gap-4 sm:p-4"
//                 >
//                   <div className="h-36 w-full shrink-0 overflow-hidden rounded-lg bg-[#f1f7ef] sm:h-[100px] sm:w-[115px] lg:h-[110px] lg:w-[130px]">
//                     {product.image ? (
//                       <img
//                         src={product.image}
//                         alt={product.name}
//                         loading="lazy"
//                         className="h-full w-full object-cover"
//                       />
//                     ) : (
//                       <div className="flex h-full items-center justify-center">
//                         <ShoppingBasket
//                           size={32}
//                           className="text-[#087b4b]"
//                         />
//                       </div>
//                     )}
//                   </div>

//                   <div className="min-w-0 flex-1">
//                     <h3 className="text-sm font-extrabold text-[#075c40] sm:text-base">
//                       {product.name}
//                     </h3>
//                     {product.description && (
//                       <p className="mt-1 text-xs leading-5 text-gray-500 sm:text-sm">
//                         {product.description}
//                       </p>
//                     )}
//                     <p className="mt-2 text-base font-extrabold text-gray-900">
//                       ₹
//                       {Number(product.price).toLocaleString("en-IN", {
//                         maximumFractionDigits: 2,
//                       })}
//                     </p>
//                     <div className="mt-2 flex flex-wrap gap-1.5">
//                       {product.category && (
//                         <span className="rounded-full bg-gray-100 px-2 py-1 text-[10px] font-semibold text-gray-600 sm:text-xs">
//                           {product.category}
//                         </span>
//                       )}
//                       {(product.labels || []).map((label) => (
//                         <span
//                           key={label}
//                           className="rounded-full bg-[#eaf7ec] px-2 py-1 text-[10px] font-semibold text-[#087b4b] sm:text-xs"
//                         >
//                           {label}
//                         </span>
//                       ))}
//                     </div>
//                   </div>

//                   <div className="grid grid-cols-3 gap-2 rounded-lg bg-[#f5faf4] p-2 text-center sm:w-[180px] sm:shrink-0 sm:grid-cols-1 sm:bg-transparent sm:p-0 lg:w-[200px] lg:grid-cols-3">
//                     {[
//                       { label: "Protein", value: product.protein },
//                       { label: "Carbs", value: product.carbs },
//                       { label: "Fat", value: product.fat },
//                     ].map((nutrition) => (
//                       <div
//                         key={nutrition.label}
//                         className="rounded-md bg-[#eaf7ec] px-1.5 py-2 sm:px-1"
//                       >
//                         <p className="text-[10px] text-gray-500">
//                           {nutrition.label}
//                         </p>
//                         <p className="mt-1 text-xs font-extrabold text-[#075c40]">
//                           {nutrition.value ?? "—"} g
//                         </p>
//                       </div>
//                     ))}
//                   </div>

//                   <button
//                     type="button"
//                     onClick={() => window.alert(`${product.name} selected`)}
//                     className="w-full shrink-0 rounded-lg bg-[#087b4b] px-5 py-2.5 text-sm font-bold text-white transition hover:bg-[#075c40] sm:w-auto"
//                   >
//                     ADD
//                   </button>
//                 </article>
//               ))}
//             </div>
//           ) : (
//             <div className="rounded-2xl border border-dashed border-gray-300 bg-white px-4 py-12 text-center">
//               <ShoppingBasket
//                 size={38}
//                 className="mx-auto text-[#087b4b]"
//               />
//               <h3 className="mt-3 font-bold text-[#075c40]">
//                 No food items found
//               </h3>
//               <p className="mt-1 text-sm text-gray-500">
//                 Try another category, label, or search term.
//               </p>
//               <button
//                 type="button"
//                 onClick={resetFilters}
//                 className="mt-4 rounded-lg bg-[#087b4b] px-5 py-2.5 text-sm font-bold text-white hover:bg-[#075c40]"
//               >
//                 Clear filters
//               </button>
//             </div>
//           )}

//           {filteredProducts.length > 0 && (
//             <>
//               <p
//                 aria-live="polite"
//                 className="mt-4 text-center text-xs text-gray-500"
//               >
//                 Showing {startIndex + 1}–
//                 {Math.min(startIndex + ITEMS_PER_PAGE, filteredProducts.length)}{" "}
//                 of {filteredProducts.length} items
//               </p>

//               {totalPages > 1 && (
//                 <nav
//                   aria-label="Food items pagination"
//                   className="mt-4 flex flex-wrap items-center justify-center gap-2"
//                 >
//                   <button
//                     type="button"
//                     disabled={currentPage === 1}
//                     onClick={() => changePage(currentPage - 1)}
//                     className="inline-flex items-center gap-1 rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-semibold text-[#075c40] hover:bg-[#eaf7ec] disabled:cursor-not-allowed disabled:opacity-40"
//                   >
//                     <ChevronLeft size={16} />
//                     <span className="hidden sm:inline">Previous</span>
//                   </button>

//                   {Array.from({ length: totalPages }, (_, index) => index + 1).map(
//                     (page) => (
//                       <button
//                         key={page}
//                         type="button"
//                         onClick={() => changePage(page)}
//                         aria-current={currentPage === page ? "page" : undefined}
//                         className={`min-w-9 rounded-lg px-3 py-2 text-sm font-bold ${
//                           currentPage === page
//                             ? "bg-[#087b4b] text-white"
//                             : "border border-gray-200 bg-white text-[#075c40] hover:bg-[#eaf7ec]"
//                         }`}
//                       >
//                         {page}
//                       </button>
//                     )
//                   )}

//                   <button
//                     type="button"
//                     disabled={currentPage === totalPages}
//                     onClick={() => changePage(currentPage + 1)}
//                     className="inline-flex items-center gap-1 rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-semibold text-[#075c40] hover:bg-[#eaf7ec] disabled:cursor-not-allowed disabled:opacity-40"
//                   >
//                     <span className="hidden sm:inline">Next</span>
//                     <ChevronRight size={16} />
//                   </button>
//                 </nav>
//               )}
//             </>
//           )}
//         </section>
//       </div>
//     </main>
//   );
// }

// export default StoreDetails;


// import { useEffect, useMemo, useState } from "react";

// import { Link, useParams } from "react-router-dom";

// import {

//   ArrowLeft,

//   ChevronLeft,

//   ChevronRight,

//   Clock,

//   MapPin,

//   Search,

//   ShoppingBasket,

//   Star,

//   Truck,

// } from "lucide-react";



// import { FOOD_STORE_CATEGORIES } from "../data/foodStoresData";

// import {
//   getStoreItems,
//   STORE_FILTER_LABELS,
// } from "../data/foodStoreItems";



// const ITEMS_PER_PAGE = 5;



// const slugify = (value = "") =>

//   String(value)

//     .normalize("NFKD")

//     .replace(/[\u0300-\u036f]/g, "")

//     .toLowerCase()

//     .trim()

//     .replace(/[^a-z0-9]+/g, "-")

//     .replace(/^-+|-+$/g, "");



// function getStoreBySlug(categorySlug, storeSlug) {

//   const category = FOOD_STORE_CATEGORIES?.[categorySlug];

//   if (!category || !Array.isArray(category.stores)) return null;



//   const decodedStoreSlug = (() => {

//     try {

//       return decodeURIComponent(storeSlug || "");

//     } catch {

//       return storeSlug || "";

//     }

//   })();



//   const store = category.stores.find(

//     (item) =>

//       slugify(item.name) === slugify(decodedStoreSlug) ||

//       slugify(item.name) === slugify(storeSlug)

//   );



//   if (!store) return null;



//   return {

//     ...store,

//     categorySlug,

//     categoryName: category.name,

//     banner:

//       store.bannerImage ||

//       store.banner ||

//       category.bannerImage ||

//       category.banner ||

//       store.image,

//   };

// }



// function StoreDetails() {

//   const { categorySlug, storeName } = useParams();



//   const [activeCategory, setActiveCategory] = useState("All");

//   const [activeLabel, setActiveLabel] = useState("All");

//   const [search, setSearch] = useState("");

//   const [currentPage, setCurrentPage] = useState(1);



//   const store = useMemo(

//     () => getStoreBySlug(categorySlug, storeName),

//     [categorySlug, storeName]

//   );



//   const products = useMemo(
//     () => (store ? getStoreItems(store.name) : []),
//     [store]
//   );

//   const categories = useMemo(() => {
//     const names = [...new Set(products.map((product) => product.category).filter(Boolean))];
//     return names.map((name) => ({
//       name,
//       image: products.find((product) => product.category === name)?.image,
//     }));
//   }, [products]);

//   const categoryNames = useMemo(

//     () => ["All", ...categories.map((category) => category.name)],

//     [categories]

//   );



//   const filteredProducts = useMemo(() => {

//     const query = search.trim().toLowerCase();



//     return products.filter((product) => {

//       const matchesCategory =

//         activeCategory === "All" ||

//         product.category?.toLowerCase() === activeCategory.toLowerCase();



//       const productLabels = product.labels || [];

//       const matchesLabel =

//         activeLabel === "All" ||

//         productLabels.some(

//           (label) => label.toLowerCase() === activeLabel.toLowerCase()

//         );



//       const searchableText = [

//         product.name,

//         product.description || "",

//         product.category || "",

//         ...(product.labels || []),

//       ]

//         .join(" ")

//         .toLowerCase();



//       return (

//         matchesCategory &&

//         matchesLabel &&

//         (!query || searchableText.includes(query))

//       );

//     });

//   }, [products, activeCategory, activeLabel, search]);



//   const totalPages = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE);

//   const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;

//   const visibleProducts = filteredProducts.slice(

//     startIndex,

//     startIndex + ITEMS_PER_PAGE

//   );



//   useEffect(() => {

//     setActiveCategory("All");

//     setActiveLabel("All");

//     setSearch("");

//     setCurrentPage(1);

//   }, [categorySlug, storeName]);



//   useEffect(() => {

//     setCurrentPage((page) => Math.min(page, Math.max(1, totalPages)));

//   }, [totalPages]);



//   const resetFilters = () => {

//     setActiveCategory("All");

//     setActiveLabel("All");

//     setSearch("");

//     setCurrentPage(1);

//   };



//   const changePage = (page) => {

//     setCurrentPage(page);

//     document.getElementById("store-products")?.scrollIntoView({

//       behavior: "smooth",

//       block: "start",

//     });

//   };



//   if (!store) {

//     return (

//       <main className="flex min-h-[60vh] items-center justify-center bg-[#fbfdfb] px-4">

//         <div className="max-w-md rounded-2xl border border-gray-200 bg-white p-8 text-center shadow-sm">

//           <ShoppingBasket size={42} className="mx-auto text-[#087b4b]" />

//           <h1 className="mt-4 text-xl font-extrabold text-[#075c40]">

//             Store not found

//           </h1>

//           <p className="mt-2 text-sm text-gray-500">

//             This store may have been removed or its URL may have changed.

//           </p>

//           <Link

//             to="/food-stores"

//             className="mt-5 inline-flex rounded-lg bg-[#087b4b] px-5 py-3 font-bold text-white transition hover:bg-[#075c40]"

//           >

//             Browse all stores

//           </Link>

//         </div>

//       </main>

//     );

//   }



//   const bannerImage = store.banner || store.image;



//   return (

//     <main className="min-h-screen bg-[#fbfdfb] pb-10">

//       <div className="mx-auto max-w-[1200px] space-y-6 px-3 py-4 sm:space-y-8 sm:px-6 sm:py-6 lg:px-8">

//         <Link

//           to="/food-stores"

//           className="inline-flex items-center gap-2 text-sm font-bold text-[#075c40] transition hover:text-[#70bd79]"

//         >

//           <ArrowLeft size={18} />

//           Back to stores

//         </Link>



//         {/* Store banner */}

//         <section className="relative isolate overflow-hidden rounded-2xl bg-[#075c40]">

//           {bannerImage && (

//             <img

//               src={bannerImage}

//               alt={`${store.name} banner`}

//               className="absolute inset-0 -z-10 h-full w-full object-cover"

//             />

//           )}

//           <div className="absolute inset-0 -z-10 bg-gradient-to-r from-black/80 via-black/45 to-black/10" />



//           <div className="flex min-h-[220px] flex-col justify-end p-5 text-white sm:min-h-[290px] sm:p-8 lg:min-h-[340px] lg:p-10">

//             <span className="mb-3 w-fit rounded-full bg-white/15 px-3 py-1.5 text-xs font-bold backdrop-blur-sm">

//               {store.categoryName}

//             </span>

//             <h1 className="max-w-3xl text-2xl font-black leading-tight sm:text-3xl lg:text-5xl">

//               {store.name}

//             </h1>

//             <p className="mt-2 max-w-2xl text-sm leading-6 text-white/90 sm:text-base">

//               {store.description ||

//                 "Discover fresh, quality food from this store."}

//             </p>



//             <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-3 text-xs font-semibold sm:text-sm">

//               {store.rating != null && (

//                 <span className="inline-flex items-center gap-1.5">

//                   <Star size={16} fill="#ffcf35" className="text-[#ffcf35]" />

//                   {store.rating} rating

//                 </span>

//               )}

//               {store.minutes != null && (

//                 <span className="inline-flex items-center gap-1.5">

//                   <Clock size={16} />

//                   {store.minutes} mins

//                 </span>

//               )}

//               {store.distance && (

//                 <span className="inline-flex items-center gap-1.5">

//                   <MapPin size={16} />

//                   {store.distance}

//                 </span>

//               )}

//               {store.delivery && (

//                 <span className="inline-flex items-center gap-1.5">

//                   <Truck size={17} />

//                   {store.delivery}

//                 </span>

//               )}

//             </div>



//             {store.isOpen != null && (

//               <span

//                 className={`mt-4 w-fit rounded-full px-3 py-1.5 text-xs font-bold ${

//                   store.isOpen

//                     ? "bg-green-100 text-green-800"

//                     : "bg-red-100 text-red-700"

//                 }`}

//               >

//                 {store.isOpen ? "Serving Now" : "Currently Closed"}

//               </span>

//             )}

//           </div>

//         </section>



//         {/* Food categories */}

//         <section>

//           <div className="mb-4">

//             <h2 className="text-xl font-extrabold text-[#075c40] sm:text-2xl">

//               Categories

//             </h2>

//             <p className="mt-1 text-sm text-gray-500">

//               Explore the food available at {store.name}

//             </p>

//           </div>



//           {categories.length > 0 ? (

//             <div className="hide-scrollbar flex snap-x snap-mandatory gap-3 overflow-x-auto pb-3">

//               {categoryNames.map((categoryName) => {

//                 const category = categories.find(

//                   (item) => item.name === categoryName

//                 );

//                 const selected = activeCategory === categoryName;



//                 return (

//                   <button

//                     key={categoryName}

//                     type="button"

//                     onClick={() => {

//                       setActiveCategory(categoryName);

//                       setCurrentPage(1);

//                     }}

//                     aria-pressed={selected}

//                     className={`group w-[100px] shrink-0 snap-start rounded-xl border p-2 text-center transition sm:w-[125px] sm:p-3 ${

//                       selected

//                         ? "border-[#087b4b] bg-[#eaf7ec] shadow-sm"

//                         : "border-gray-200 bg-white hover:border-[#a5d6ad]"

//                     }`}

//                   >

//                     <div className="flex h-[72px] items-center justify-center overflow-hidden rounded-lg bg-[#edf8ee] sm:h-[92px]">

//                       {category?.image ? (

//                         <img

//                           src={category.image}

//                           alt={categoryName}

//                           loading="lazy"

//                           className="h-full w-full object-cover transition duration-300 group-hover:scale-105"

//                         />

//                       ) : (

//                         <ShoppingBasket

//                           size={26}

//                           className="text-[#087b4b]"

//                         />

//                       )}

//                     </div>

//                     <span className="mt-2 block text-xs font-bold text-[#075c40] sm:text-sm">

//                       {categoryName}

//                     </span>

//                   </button>

//                 );

//               })}

//             </div>

//           ) : (

//             <p className="rounded-xl bg-white p-4 text-sm text-gray-500">

//               No categories have been added for this store yet.

//             </p>

//           )}

//         </section>



//         {/* Filter labels */}

//         <section className="rounded-xl border border-gray-100 bg-white p-3 shadow-sm sm:p-4">

//           <div className="mb-2 text-sm font-bold text-[#075c40]">

//             Filter items

//           </div>

//           <div className="hide-scrollbar flex gap-2 overflow-x-auto pb-1">

//             {STORE_FILTER_LABELS.map((label) => {

//               const selected = activeLabel === label;

//               return (

//                 <button

//                   key={label}

//                   type="button"

//                   onClick={() => {

//                     setActiveLabel(label);

//                     setCurrentPage(1);

//                   }}

//                   aria-pressed={selected}

//                   className={`shrink-0 rounded-full border px-4 py-2 text-xs font-bold transition sm:text-sm ${

//                     selected

//                       ? "border-[#087b4b] bg-[#087b4b] text-white"

//                       : "border-gray-200 bg-white text-gray-600 hover:border-[#087b4b] hover:text-[#087b4b]"

//                   }`}

//                 >

//                   {label}

//                 </button>

//               );

//             })}

//           </div>

//         </section>



//         {/* Products */}

//         <section id="store-products" className="scroll-mt-24">

//           <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">

//             <div>

//               <h2 className="text-xl font-extrabold text-[#075c40] sm:text-2xl">

//                 Food Items

//               </h2>

//               <p className="mt-1 text-sm text-gray-500">

//                 Fresh picks from {store.name}

//               </p>

//             </div>



//             <label className="flex w-full items-center gap-2 rounded-xl border border-gray-200 bg-white px-3 py-2.5 sm:max-w-[300px]">

//               <Search size={18} className="shrink-0 text-gray-400" />

//               <input

//                 type="search"

//                 value={search}

//                 onChange={(event) => {

//                   setSearch(event.target.value);

//                   setCurrentPage(1);

//                 }}

//                 placeholder="Search food items..."

//                 className="min-w-0 flex-1 bg-transparent text-sm outline-none"

//                 aria-label="Search food items"

//               />

//             </label>

//           </div>



//           {visibleProducts.length > 0 ? (

//             <div className="space-y-3">

//               {visibleProducts.map((product) => (

//                 <article

//                   key={product.id}

//                   className="flex min-w-0 flex-col gap-3 rounded-xl border border-gray-100 bg-white p-3 shadow-sm transition hover:border-[#b7ddbf] hover:shadow-md sm:flex-row sm:items-center sm:gap-4 sm:p-4"

//                 >

//                   <div className="h-36 w-full shrink-0 overflow-hidden rounded-lg bg-[#f1f7ef] sm:h-[100px] sm:w-[115px] lg:h-[110px] lg:w-[130px]">

//                     {product.image ? (

//                       <img

//                         src={product.image}

//                         alt={product.name}

//                         loading="lazy"

//                         className="h-full w-full object-cover"

//                       />

//                     ) : (

//                       <div className="flex h-full items-center justify-center">

//                         <ShoppingBasket

//                           size={32}

//                           className="text-[#087b4b]"

//                         />

//                       </div>

//                     )}

//                   </div>



//                   <div className="min-w-0 flex-1">

//                     <h3 className="text-sm font-extrabold text-[#075c40] sm:text-base">

//                       {product.name}

//                     </h3>

//                     {product.description && (

//                       <p className="mt-1 text-xs leading-5 text-gray-500 sm:text-sm">

//                         {product.description}

//                       </p>

//                     )}

//                     <p className="mt-2 text-base font-extrabold text-gray-900">

//                       ₹

//                       {Number(product.price).toLocaleString("en-IN", {

//                         maximumFractionDigits: 2,

//                       })}

//                     </p>

//                     <div className="mt-2 flex flex-wrap gap-1.5">

//                       {product.category && (

//                         <span className="rounded-full bg-gray-100 px-2 py-1 text-[10px] font-semibold text-gray-600 sm:text-xs">

//                           {product.category}

//                         </span>

//                       )}

//                       {(product.labels || []).map((label) => (

//                         <span

//                           key={label}

//                           className="rounded-full bg-[#eaf7ec] px-2 py-1 text-[10px] font-semibold text-[#087b4b] sm:text-xs"

//                         >

//                           {label}

//                         </span>

//                       ))}

//                     </div>

//                   </div>



//                   <div className="flex shrink-0 items-center justify-center gap-3 rounded-lg bg-[#f5faf4] px-4 py-3 sm:min-w-[100px]">
//                     <div className="text-center">
//                       <p className="text-[10px] text-gray-500">Protein</p>
//                       <p className="mt-1 text-sm font-extrabold text-[#075c40]">
//                         {product.protein ?? "—"} g
//                       </p>
//                     </div>
//                   </div>

//                     ))}

//                   </div>



//                   <button

//                     type="button"

//                     onClick={() => window.alert(`${product.name} selected`)}

//                     className="w-full shrink-0 rounded-lg bg-[#087b4b] px-5 py-2.5 text-sm font-bold text-white transition hover:bg-[#075c40] sm:w-auto"

//                   >

//                     ADD

//                   </button>

//                 </article>

//               ))}

//             </div>

//           ) : (

//             <div className="rounded-2xl border border-dashed border-gray-300 bg-white px-4 py-12 text-center">

//               <ShoppingBasket

//                 size={38}

//                 className="mx-auto text-[#087b4b]"

//               />

//               <h3 className="mt-3 font-bold text-[#075c40]">

//                 No food items found

//               </h3>

//               <p className="mt-1 text-sm text-gray-500">

//                 Try another category, label, or search term.

//               </p>

//               <button

//                 type="button"

//                 onClick={resetFilters}

//                 className="mt-4 rounded-lg bg-[#087b4b] px-5 py-2.5 text-sm font-bold text-white hover:bg-[#075c40]"

//               >

//                 Clear filters

//               </button>

//             </div>

//           )}



//           {filteredProducts.length > 0 && (

//             <>

//               <p

//                 aria-live="polite"

//                 className="mt-4 text-center text-xs text-gray-500">

//                 Showing {startIndex + 1}–

//                 {Math.min(startIndex + ITEMS_PER_PAGE, filteredProducts.length)}{" "}

//                 of {filteredProducts.length} items

//               </p>



//               {totalPages > 1 && (

//                 <nav

//                   aria-label="Food items pagination"

//                   className="mt-4 flex flex-wrap items-center justify-center gap-2"

//                 >

//                   <button

//                     type="button"

//                     disabled={currentPage === 1}

//                     onClick={() => changePage(currentPage - 1)}

//                     className="inline-flex items-center gap-1 rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-semibold text-[#075c40] hover:bg-[#eaf7ec] disabled:cursor-not-allowed disabled:opacity-40"

//                   >

//                     <ChevronLeft size={16} />

//                     <span className="hidden sm:inline">Previous</span>

//                   </button>



//                   {Array.from({ length: totalPages }, (_, index) => index + 1).map(

//                     (page) => (

//                       <button

//                         key={page}

//                         type="button"

//                         onClick={() => changePage(page)}

//                         aria-current={currentPage === page ? "page" : undefined}

//                         className={`min-w-9 rounded-lg px-3 py-2 text-sm font-bold ${

//                           currentPage === page

//                             ? "bg-[#087b4b] text-white"

//                             : "border border-gray-200 bg-white text-[#075c40] hover:bg-[#eaf7ec]"

//                         }`}

//                       >

//                         {page}

//                       </button>

//                     )

//                   )}



//                   <button

//                     type="button"

//                     disabled={currentPage === totalPages}

//                     onClick={() => changePage(currentPage + 1)}

//                     className="inline-flex items-center gap-1 rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-semibold text-[#075c40] hover:bg-[#eaf7ec] disabled:cursor-not-allowed disabled:opacity-40"

//                   >

//                     <span className="hidden sm:inline">Next</span>

//                     <ChevronRight size={16} />

//                   </button>

//                 </nav>

//               )}

//             </>

//           )}

//         </section>

//       </div>

//     </main>

//   );

// }



// import { useEffect, useMemo, useState } from "react";
// import { Link, useParams } from "react-router-dom";
// import {
//   ArrowLeft,
//   ChevronLeft,
//   ChevronRight,
//   Clock,
//   MapPin,
//   Search,
//   ShoppingBasket,
//   Star,
//   Truck,
// } from "lucide-react";

// import { FOOD_STORE_CATEGORIES } from "../data/foodStoresData";
// import {
//   getStoreItems,
//   STORE_FILTER_LABELS,
// } from "../data/foodStoreItems";

// const ITEMS_PER_PAGE = 5;

// const slugify = (value = "") =>
//   String(value)
//     .normalize("NFKD")
//     .replace(/[\u0300-\u036f]/g, "")
//     .toLowerCase()
//     .trim()
//     .replace(/[^a-z0-9]+/g, "-")
//     .replace(/^-+|-+$/g, "");

// function getStoreBySlug(categorySlug, storeSlug) {
//   const category = FOOD_STORE_CATEGORIES?.[categorySlug];

//   if (!category || !Array.isArray(category.stores)) {
//     return null;
//   }

//   const decodedStoreSlug = (() => {
//     try {
//       return decodeURIComponent(storeSlug || "");
//     } catch {
//       return storeSlug || "";
//     }
//   })();

//   const store = category.stores.find(
//     (item) =>
//       slugify(item.name) === slugify(decodedStoreSlug) ||
//       slugify(item.name) === slugify(storeSlug)
//   );

//   if (!store) return null;

//   return {
//     ...store,
//     categorySlug,
//     categoryName: category.name,
//     banner:
//       store.bannerImage ||
//       store.banner ||
//       category.bannerImage ||
//       category.banner ||
//       store.image,
//   };
// }

// function StoreDetails() {
//   const { categorySlug, storeName } = useParams();

//   const [activeCategory, setActiveCategory] = useState("All");
//   const [activeLabel, setActiveLabel] = useState("All");
//   const [search, setSearch] = useState("");
//   const [currentPage, setCurrentPage] = useState(1);

//   const store = useMemo(
//     () => getStoreBySlug(categorySlug, storeName),
//     [categorySlug, storeName]
//   );

//   const products = useMemo(
//     () => (store ? getStoreItems(store.name) : []),
//     [store]
//   );

//   const categories = useMemo(() => {
//     const names = [
//       ...new Set(
//         products
//           .map((product) => product.category)
//           .filter(Boolean)
//       ),
//     ];

//     return names.map((name) => ({
//       name,
//       image: products.find((product) => product.category === name)?.image,
//     }));
//   }, [products]);

//   const categoryNames = useMemo(
//     () => ["All", ...categories.map((category) => category.name)],
//     [categories]
//   );

//   const filteredProducts = useMemo(() => {
//     const query = search.trim().toLowerCase();

//     return products.filter((product) => {
//       const matchesCategory =
//         activeCategory === "All" ||
//         product.category?.toLowerCase() === activeCategory.toLowerCase();

//       const productLabels = product.labels || [];

//       const matchesLabel =
//         activeLabel === "All" ||
//         productLabels.some(
//           (label) =>
//             label.toLowerCase() === activeLabel.toLowerCase()
//         );

//       const searchableText = [
//         product.name,
//         product.description || "",
//         product.category || "",
//         ...productLabels,
//       ]
//         .join(" ")
//         .toLowerCase();

//       return (
//         matchesCategory &&
//         matchesLabel &&
//         (!query || searchableText.includes(query))
//       );
//     });
//   }, [products, activeCategory, activeLabel, search]);

//   const totalPages = Math.ceil(
//     filteredProducts.length / ITEMS_PER_PAGE
//   );

//   const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;

//   const visibleProducts = filteredProducts.slice(
//     startIndex,
//     startIndex + ITEMS_PER_PAGE
//   );

//   useEffect(() => {
//     setActiveCategory("All");
//     setActiveLabel("All");
//     setSearch("");
//     setCurrentPage(1);
//   }, [categorySlug, storeName]);

//   useEffect(() => {
//     setCurrentPage((page) =>
//       Math.min(page, Math.max(1, totalPages))
//     );
//   }, [totalPages]);

//   const resetFilters = () => {
//     setActiveCategory("All");
//     setActiveLabel("All");
//     setSearch("");
//     setCurrentPage(1);
//   };

//   const changePage = (page) => {
//     setCurrentPage(page);

//     document.getElementById("store-products")?.scrollIntoView({
//       behavior: "smooth",
//       block: "start",
//     });
//   };

//   if (!store) {
//     return (
//       <main className="flex min-h-[60vh] items-center justify-center bg-[#fbfdfb] px-4">
//         <div className="max-w-md rounded-2xl border border-gray-200 bg-white p-8 text-center shadow-sm">
//           <ShoppingBasket
//             size={42}
//             className="mx-auto text-[#087b4b]"
//           />

//           <h1 className="mt-4 text-xl font-extrabold text-[#075c40]">
//             Store not found
//           </h1>

//           <p className="mt-2 text-sm text-gray-500">
//             This store may have been removed or its URL may have changed.
//           </p>

//           <Link
//             to="/food-stores"
//             className="mt-5 inline-flex rounded-lg bg-[#087b4b] px-5 py-3 font-bold text-white transition hover:bg-[#075c40]"
//           >
//             Browse all stores
//           </Link>
//         </div>
//       </main>
//     );
//   }

//   const bannerImage = store.banner || store.image;

//   return (
//     <main className="min-h-screen bg-[#fbfdfb] pb-10">
//       <div className="mx-auto max-w-[1200px] space-y-6 px-3 py-4 sm:space-y-8 sm:px-6 sm:py-6 lg:px-8">
//         <Link
//           to="/food-stores"
//           className="inline-flex items-center gap-2 text-sm font-bold text-[#075c40] transition hover:text-[#70bd79]"
//         >
//           <ArrowLeft size={18} />
//           Back to stores
//         </Link>

//         {/* Store banner */}
//         <section className="relative isolate overflow-hidden rounded-2xl bg-[#075c40]">
//           {bannerImage && (
//             <img
//               src={bannerImage}
//               alt={`${store.name} banner`}
//               className="absolute inset-0 -z-10 h-full w-full object-cover"
//             />
//           )}

//           <div className="absolute inset-0 -z-10 bg-gradient-to-r from-black/80 via-black/45 to-black/10" />

//           <div className="flex min-h-[220px] flex-col justify-end p-5 text-white sm:min-h-[290px] sm:p-8 lg:min-h-[340px] lg:p-10">
//             <span className="mb-3 w-fit rounded-full bg-white/15 px-3 py-1.5 text-xs font-bold backdrop-blur-sm">
//               {store.categoryName}
//             </span>

//             <h1 className="max-w-3xl text-2xl font-black leading-tight sm:text-3xl lg:text-5xl">
//               {store.name}
//             </h1>

//             <p className="mt-2 max-w-2xl text-sm leading-6 text-white/90 sm:text-base">
//               {store.description ||
//                 "Discover fresh, quality food from this store."}
//             </p>

//             <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-3 text-xs font-semibold sm:text-sm">
//               {store.rating != null && (
//                 <span className="inline-flex items-center gap-1.5">
//                   <Star
//                     size={16}
//                     fill="#ffcf35"
//                     className="text-[#ffcf35]"
//                   />
//                   {store.rating} rating
//                 </span>
//               )}

//               {store.minutes != null && (
//                 <span className="inline-flex items-center gap-1.5">
//                   <Clock size={16} />
//                   {store.minutes} mins
//                 </span>
//               )}

//               {store.distance && (
//                 <span className="inline-flex items-center gap-1.5">
//                   <MapPin size={16} />
//                   {store.distance}
//                 </span>
//               )}

//               {store.delivery && (
//                 <span className="inline-flex items-center gap-1.5">
//                   <Truck size={17} />
//                   {store.delivery}
//                 </span>
//               )}
//             </div>

//             {store.isOpen != null && (
//               <span
//                 className={`mt-4 w-fit rounded-full px-3 py-1.5 text-xs font-bold ${
//                   store.isOpen
//                     ? "bg-green-100 text-green-800"
//                     : "bg-red-100 text-red-700"
//                 }`}
//               >
//                 {store.isOpen ? "Serving Now" : "Currently Closed"}
//               </span>
//             )}
//           </div>
//         </section>

//         {/* Food categories */}
//         <section>
//           <div className="mb-4">
//             <h2 className="text-xl font-extrabold text-[#075c40] sm:text-2xl">
//               Categories
//             </h2>

//             <p className="mt-1 text-sm text-gray-500">
//               Explore the food available at {store.name}
//             </p>
//           </div>

//           {categories.length > 0 ? (
//             <div className="hide-scrollbar flex snap-x snap-mandatory gap-3 overflow-x-auto pb-3">
//               {categoryNames.map((categoryName) => {
//                 const category = categories.find(
//                   (item) => item.name === categoryName
//                 );

//                 const selected = activeCategory === categoryName;

//                 return (
//                   <button
//                     key={categoryName}
//                     type="button"
//                     onClick={() => {
//                       setActiveCategory(categoryName);
//                       setCurrentPage(1);
//                     }}
//                     aria-pressed={selected}
//                     className={`group w-[100px] shrink-0 snap-start rounded-xl border p-2 text-center transition sm:w-[125px] sm:p-3 ${
//                       selected
//                         ? "border-[#087b4b] bg-[#eaf7ec] shadow-sm"
//                         : "border-gray-200 bg-white hover:border-[#a5d6ad]"
//                     }`}
//                   >
//                     <div className="flex h-[72px] items-center justify-center overflow-hidden rounded-lg bg-[#edf8ee] sm:h-[92px]">
//                       {category?.image ? (
//                         <img
//                           src={category.image}
//                           alt={categoryName}
//                           loading="lazy"
//                           className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
//                         />
//                       ) : (
//                         <ShoppingBasket
//                           size={26}
//                           className="text-[#087b4b]"
//                         />
//                       )}
//                     </div>

//                     <span className="mt-2 block text-xs font-bold text-[#075c40] sm:text-sm">
//                       {categoryName}
//                     </span>
//                   </button>
//                 );
//               })}
//             </div>
//           ) : (
//             <p className="rounded-xl bg-white p-4 text-sm text-gray-500">
//               No categories have been added for this store yet.
//             </p>
//           )}
//         </section>

//         {/* Filter labels */}
//         <section className="rounded-xl border border-gray-100 bg-white p-3 shadow-sm sm:p-4">
//           <div className="mb-2 text-sm font-bold text-[#075c40]">
//             Filter items
//           </div>

//           <div className="hide-scrollbar flex gap-2 overflow-x-auto pb-1">
//             {STORE_FILTER_LABELS.map((label) => {
//               const selected = activeLabel === label;

//               return (
//                 <button
//                   key={label}
//                   type="button"
//                   onClick={() => {
//                     setActiveLabel(label);
//                     setCurrentPage(1);
//                   }}
//                   aria-pressed={selected}
//                   className={`shrink-0 rounded-full border px-4 py-2 text-xs font-bold transition sm:text-sm ${
//                     selected
//                       ? "border-[#087b4b] bg-[#087b4b] text-white"
//                       : "border-gray-200 bg-white text-gray-600 hover:border-[#087b4b] hover:text-[#087b4b]"
//                   }`}
//                 >
//                   {label}
//                 </button>
//               );
//             })}
//           </div>
//         </section>

//         {/* Products */}
//         <section id="store-products" className="scroll-mt-24">
//           <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
//             <div>
//               <h2 className="text-xl font-extrabold text-[#075c40] sm:text-2xl">
//                 Food Items
//               </h2>

//               <p className="mt-1 text-sm text-gray-500">
//                 Fresh picks from {store.name}
//               </p>
//             </div>

//             <label className="flex w-full items-center gap-2 rounded-xl border border-gray-200 bg-white px-3 py-2.5 sm:max-w-[300px]">
//               <Search size={18} className="shrink-0 text-gray-400" />

//               <input
//                 type="search"
//                 value={search}
//                 onChange={(event) => {
//                   setSearch(event.target.value);
//                   setCurrentPage(1);
//                 }}
//                 placeholder="Search food items..."
//                 className="min-w-0 flex-1 bg-transparent text-sm outline-none"
//                 aria-label="Search food items"
//               />
//             </label>
//           </div>

//           {visibleProducts.length > 0 ? (
//             <div className="space-y-3">
//               {visibleProducts.map((product) => (
//                 <article
//                   key={product.id}
//                   className="flex min-w-0 flex-col gap-3 rounded-xl border border-gray-100 bg-white p-3 shadow-sm transition hover:border-[#b7ddbf] hover:shadow-md sm:flex-row sm:items-center sm:gap-4 sm:p-4"
//                 >
//                   {/* Product image */}
//                   <div className="h-36 w-full shrink-0 overflow-hidden rounded-lg bg-[#f1f7ef] sm:h-[100px] sm:w-[115px] lg:h-[110px] lg:w-[130px]">
//                     {product.image ? (
//                       <img
//                         src={product.image}
//                         alt={product.name}
//                         loading="lazy"
//                         className="h-full w-full object-cover"
//                       />
//                     ) : (
//                       <div className="flex h-full items-center justify-center">
//                         <ShoppingBasket
//                           size={32}
//                           className="text-[#087b4b]"
//                         />
//                       </div>
//                     )}
//                   </div>

//                   {/* Product information */}
//                   <div className="min-w-0 flex-1">
//                     <h3 className="text-sm font-extrabold text-[#075c40] sm:text-base">
//                       {product.name}
//                     </h3>

//                     {product.description && (
//                       <p className="mt-1 text-xs leading-5 text-gray-500 sm:text-sm">
//                         {product.description}
//                       </p>
//                     )}

//                     <p className="mt-2 text-base font-extrabold text-gray-900">
//                       ₹
//                       {Number(product.price).toLocaleString("en-IN", {
//                         maximumFractionDigits: 2,
//                       })}
//                     </p>

//                     <div className="mt-2 flex flex-wrap gap-1.5">
//                       {product.category && (
//                         <span className="rounded-full bg-gray-100 px-2 py-1 text-[10px] font-semibold text-gray-600 sm:text-xs">
//                           {product.category}
//                         </span>
//                       )}

//                       {(product.labels || []).map((label) => (
//                         <span
//                           key={label}
//                           className="rounded-full bg-[#eaf7ec] px-2 py-1 text-[10px] font-semibold text-[#087b4b] sm:text-xs"
//                         >
//                           {label}
//                         </span>
//                       ))}
//                     </div>
//                   </div>

//                   {/* Protein information */}
//                   <div className="flex shrink-0 items-center justify-center gap-3 rounded-lg bg-[#f5faf4] px-4 py-3 sm:min-w-[100px]">
//                     <div className="text-center">
//                       <p className="text-[10px] text-gray-500">Protein</p>
//                       <p className="mt-1 text-sm font-extrabold text-[#075c40]">
//                         {product.protein ?? "—"} g
//                       </p>
//                     </div>
//                   </div>

//                   {/* Add button */}
//                   <button
//                     type="button"
//                     onClick={() =>
//                       window.alert(`${product.name} selected`)
//                     }
//                     className="w-full shrink-0 rounded-lg bg-[#087b4b] px-5 py-2.5 text-sm font-bold text-white transition hover:bg-[#075c40] sm:w-auto"
//                   >
//                     ADD
//                   </button>
//                 </article>
//               ))}
//             </div>
//           ) : (
//             <div className="rounded-2xl border border-dashed border-gray-300 bg-white px-4 py-12 text-center">
//               <ShoppingBasket
//                 size={38}
//                 className="mx-auto text-[#087b4b]"
//               />

//               <h3 className="mt-3 font-bold text-[#075c40]">
//                 No food items found
//               </h3>

//               <p className="mt-1 text-sm text-gray-500">
//                 Try another category, label, or search term.
//               </p>

//               <button
//                 type="button"
//                 onClick={resetFilters}
//                 className="mt-4 rounded-lg bg-[#087b4b] px-5 py-2.5 text-sm font-bold text-white hover:bg-[#075c40]"
//               >
//                 Clear filters
//               </button>
//             </div>
//           )}

//           {/* Pagination */}
//           {filteredProducts.length > 0 && (
//             <>
//               <p
//                 aria-live="polite"
//                 className="mt-4 text-center text-xs text-gray-500"
//               >
//                 Showing {startIndex + 1}–
//                 {Math.min(
//                   startIndex + ITEMS_PER_PAGE,
//                   filteredProducts.length
//                 )}{" "}
//                 of {filteredProducts.length} items
//               </p>

//               {totalPages > 1 && (
//                 <nav
//                   aria-label="Food items pagination"
//                   className="mt-4 flex flex-wrap items-center justify-center gap-2"
//                 >
//                   <button
//                     type="button"
//                     disabled={currentPage === 1}
//                     onClick={() => changePage(currentPage - 1)}
//                     className="inline-flex items-center gap-1 rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-semibold text-[#075c40] hover:bg-[#eaf7ec] disabled:cursor-not-allowed disabled:opacity-40"
//                   >
//                     <ChevronLeft size={16} />
//                     <span className="hidden sm:inline">Previous</span>
//                   </button>

//                   {Array.from(
//                     { length: totalPages },
//                     (_, index) => index + 1
//                   ).map((page) => (
//                     <button
//                       key={page}
//                       type="button"
//                       onClick={() => changePage(page)}
//                       aria-current={
//                         currentPage === page ? "page" : undefined
//                       }
//                       className={`min-w-9 rounded-lg px-3 py-2 text-sm font-bold ${
//                         currentPage === page
//                           ? "bg-[#087b4b] text-white"
//                           : "border border-gray-200 bg-white text-[#075c40] hover:bg-[#eaf7ec]"
//                       }`}
//                     >
//                       {page}
//                     </button>
//                   ))}

//                   <button
//                     type="button"
//                     disabled={currentPage === totalPages}
//                     onClick={() => changePage(currentPage + 1)}
//                     className="inline-flex items-center gap-1 rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-semibold text-[#075c40] hover:bg-[#eaf7ec] disabled:cursor-not-allowed disabled:opacity-40"
//                   >
//                     <span className="hidden sm:inline">Next</span>
//                     <ChevronRight size={16} />
//                   </button>
//                 </nav>
//               )}
//             </>
//           )}
//         </section>
//       </div>
//     </main>
//   );
// }

// export default StoreDetails;

import { useEffect, useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import {
  ArrowLeft,
  ChevronLeft,
  ChevronRight,
  Clock,
  MapPin,
  Search,
  ShoppingBasket,
  Star,
  Truck,
} from "lucide-react";

import { FOOD_STORE_CATEGORIES } from "../data/foodStoresData";
import {
  getStoreItems,
  STORE_FILTER_LABELS,
} from "../data/foodStoreItems";

const ITEMS_PER_PAGE = 5;

const slugify = (value = "") =>
  String(value)
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

function getStoreBySlug(categorySlug, storeSlug) {
  const category = FOOD_STORE_CATEGORIES?.[categorySlug];

  if (!category || !Array.isArray(category.stores)) {
    return null;
  }

  const decodedStoreSlug = (() => {
    try {
      return decodeURIComponent(storeSlug || "");
    } catch {
      return storeSlug || "";
    }
  })();

  const store = category.stores.find(
    (item) =>
      slugify(item.name) === slugify(decodedStoreSlug) ||
      slugify(item.name) === slugify(storeSlug)
  );

  if (!store) return null;

  return {
    ...store,
    categorySlug,
    categoryName: category.name,
    banner:
      store.bannerImage ||
      store.banner ||
      category.bannerImage ||
      category.banner ||
      store.image,
  };
}

function StoreDetails() {
  const { categorySlug, storeName } = useParams();

  const [activeCategory, setActiveCategory] = useState("All");
  const [activeLabel, setActiveLabel] = useState("All");
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const store = useMemo(
    () => getStoreBySlug(categorySlug, storeName),
    [categorySlug, storeName]
  );

  const products = useMemo(
    () => (store ? getStoreItems(store.name) : []),
    [store]
  );

  const categories = useMemo(() => {
    const names = [
      ...new Set(
        products
          .map((product) => product.category)
          .filter(Boolean)
      ),
    ];

    return names.map((name) => ({
      name,
      image: products.find((product) => product.category === name)?.image,
    }));
  }, [products]);

  const categoryNames = useMemo(
    () => ["All", ...categories.map((category) => category.name)],
    [categories]
  );

  const filteredProducts = useMemo(() => {
    const query = search.trim().toLowerCase();

    return products.filter((product) => {
      const matchesCategory =
        activeCategory === "All" ||
        product.category?.toLowerCase() === activeCategory.toLowerCase();

      const productLabels = product.labels || [];

      const matchesLabel =
        activeLabel === "All" ||
        productLabels.some(
          (label) =>
            label.toLowerCase() === activeLabel.toLowerCase()
        );

      const searchableText = [
        product.name,
        product.description || "",
        product.category || "",
        ...productLabels,
      ]
        .join(" ")
        .toLowerCase();

      return (
        matchesCategory &&
        matchesLabel &&
        (!query || searchableText.includes(query))
      );
    });
  }, [products, activeCategory, activeLabel, search]);

  const totalPages = Math.ceil(
    filteredProducts.length / ITEMS_PER_PAGE
  );

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;

  const visibleProducts = filteredProducts.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  useEffect(() => {
    setActiveCategory("All");
    setActiveLabel("All");
    setSearch("");
    setCurrentPage(1);
  }, [categorySlug, storeName]);

  useEffect(() => {
    setCurrentPage((page) =>
      Math.min(page, Math.max(1, totalPages))
    );
  }, [totalPages]);

  const resetFilters = () => {
    setActiveCategory("All");
    setActiveLabel("All");
    setSearch("");
    setCurrentPage(1);
  };

  const changePage = (page) => {
    setCurrentPage(page);

    document.getElementById("store-products")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  if (!store) {
    return (
      <main className="flex min-h-[60vh] items-center justify-center bg-[#fbfdfb] px-4">
        <div className="max-w-md rounded-2xl border border-gray-200 bg-white p-8 text-center shadow-sm">
          <ShoppingBasket
            size={42}
            className="mx-auto text-[#087b4b]"
          />

          <h1 className="mt-4 text-xl font-extrabold text-[#075c40]">
            Store not found
          </h1>

          <p className="mt-2 text-sm text-gray-500">
            This store may have been removed or its URL may have changed.
          </p>

          <Link
            to="/food-stores"
            className="mt-5 inline-flex rounded-lg bg-[#087b4b] px-5 py-3 font-bold text-white transition hover:bg-[#075c40]"
          >
            Browse all stores
          </Link>
        </div>
      </main>
    );
  }

  const bannerImage = store.banner || store.image;

  return (
    <main className="min-h-screen bg-[#fbfdfb] pb-10">
      <div className="mx-auto max-w-[1200px] space-y-6 px-3 py-4 sm:space-y-8 sm:px-6 sm:py-6 lg:px-8">
        <Link
          to="/food-stores"
          className="inline-flex items-center gap-2 text-sm font-bold text-[#075c40] transition hover:text-[#70bd79]"
        >
          <ArrowLeft size={18} />
          Back to stores
        </Link>

        {/* Store banner */}
        <section className="relative isolate overflow-hidden rounded-2xl bg-[#075c40]">
          {bannerImage && (
            <img
              src={bannerImage}
              alt={`${store.name} banner`}
              className="absolute inset-0 -z-10 h-full w-full object-cover"
            />
          )}

          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-black/80 via-black/45 to-black/10" />

          <div className="flex min-h-[220px] flex-col justify-end p-5 text-white sm:min-h-[290px] sm:p-8 lg:min-h-[340px] lg:p-10">
            <span className="mb-3 w-fit rounded-full bg-white/15 px-3 py-1.5 text-xs font-bold backdrop-blur-sm">
              {store.categoryName}
            </span>

            <h1 className="max-w-3xl text-2xl font-black leading-tight sm:text-3xl lg:text-5xl">
              {store.name}
            </h1>

            <p className="mt-2 max-w-2xl text-sm leading-6 text-white/90 sm:text-base">
              {store.description ||
                "Discover fresh, quality food from this store."}
            </p>

            <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-3 text-xs font-semibold sm:text-sm">
              {store.rating != null && (
                <span className="inline-flex items-center gap-1.5">
                  <Star
                    size={16}
                    fill="#ffcf35"
                    className="text-[#ffcf35]"
                  />
                  {store.rating} rating
                </span>
              )}

              {store.minutes != null && (
                <span className="inline-flex items-center gap-1.5">
                  <Clock size={16} />
                  {store.minutes} mins
                </span>
              )}

              {store.distance && (
                <span className="inline-flex items-center gap-1.5">
                  <MapPin size={16} />
                  {store.distance}
                </span>
              )}

              {store.delivery && (
                <span className="inline-flex items-center gap-1.5">
                  <Truck size={17} />
                  {store.delivery}
                </span>
              )}
            </div>

            {store.isOpen != null && (
              <span
                className={`mt-4 w-fit rounded-full px-3 py-1.5 text-xs font-bold ${
                  store.isOpen
                    ? "bg-green-100 text-green-800"
                    : "bg-red-100 text-red-700"
                }`}
              >
                {store.isOpen ? "Serving Now" : "Currently Closed"}
              </span>
            )}
          </div>
        </section>

        {/* Food categories */}
        <section>
          <div className="mb-4">
            <h2 className="text-xl font-extrabold text-[#075c40] sm:text-2xl">
              Categories
            </h2>

            <p className="mt-1 text-sm text-gray-500">
              Explore the food available at {store.name}
            </p>
          </div>

          {categories.length > 0 ? (
            <div className="hide-scrollbar flex snap-x snap-mandatory gap-3 overflow-x-auto pb-3">
              {categoryNames.map((categoryName) => {
                const category = categories.find(
                  (item) => item.name === categoryName
                );

                const selected = activeCategory === categoryName;

                return (
                  <button
                    key={categoryName}
                    type="button"
                    onClick={() => {
                      setActiveCategory(categoryName);
                      setCurrentPage(1);
                    }}
                    aria-pressed={selected}
                    className={`group w-[100px] shrink-0 snap-start rounded-xl border p-2 text-center transition sm:w-[125px] sm:p-3 ${
                      selected
                        ? "border-[#087b4b] bg-[#eaf7ec] shadow-sm"
                        : "border-gray-200 bg-white hover:border-[#a5d6ad]"
                    }`}
                  >
                    <div className="flex h-[72px] items-center justify-center overflow-hidden rounded-lg bg-[#edf8ee] sm:h-[92px]">
                      {category?.image ? (
                        <img
                          src={category.image}
                          alt={categoryName}
                          loading="lazy"
                          className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                        />
                      ) : (
                        <ShoppingBasket
                          size={26}
                          className="text-[#087b4b]"
                        />
                      )}
                    </div>

                    <span className="mt-2 block text-xs font-bold text-[#075c40] sm:text-sm">
                      {categoryName}
                    </span>
                  </button>
                );
              })}
            </div>
          ) : (
            <p className="rounded-xl bg-white p-4 text-sm text-gray-500">
              No categories have been added for this store yet.
            </p>
          )}
        </section>

        {/* Filter labels */}
        <section className="rounded-xl border border-gray-100 bg-white p-3 shadow-sm sm:p-4">
          <div className="mb-2 text-sm font-bold text-[#075c40]">
            Filter items
          </div>

          <div className="hide-scrollbar flex gap-2 overflow-x-auto pb-1">
            {STORE_FILTER_LABELS.map((label) => {
              const selected = activeLabel === label;

              return (
                <button
                  key={label}
                  type="button"
                  onClick={() => {
                    setActiveLabel(label);
                    setCurrentPage(1);
                  }}
                  aria-pressed={selected}
                  className={`shrink-0 rounded-full border px-4 py-2 text-xs font-bold transition sm:text-sm ${
                    selected
                      ? "border-[#087b4b] bg-[#087b4b] text-white"
                      : "border-gray-200 bg-white text-gray-600 hover:border-[#087b4b] hover:text-[#087b4b]"
                  }`}
                >
                  {label}
                </button>
              );
            })}
          </div>
        </section>

        {/* Products */}
        <section id="store-products" className="scroll-mt-24">
          <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="text-xl font-extrabold text-[#075c40] sm:text-2xl">
                Food Items
              </h2>

              <p className="mt-1 text-sm text-gray-500">
                Fresh picks from {store.name}
              </p>
            </div>

            <label className="flex w-full items-center gap-2 rounded-xl border border-gray-200 bg-white px-3 py-2.5 sm:max-w-[300px]">
              <Search size={18} className="shrink-0 text-gray-400" />

              <input
                type="search"
                value={search}
                onChange={(event) => {
                  setSearch(event.target.value);
                  setCurrentPage(1);
                }}
                placeholder="Search food items..."
                className="min-w-0 flex-1 bg-transparent text-sm outline-none"
                aria-label="Search food items"
              />
            </label>
          </div>

          {visibleProducts.length > 0 ? (
            <div className="space-y-3">
              {visibleProducts.map((product) => (
                <article
                  key={product.id}
                  className="flex min-w-0 flex-col gap-3 rounded-xl border border-gray-100 bg-white p-3 shadow-sm transition hover:border-[#b7ddbf] hover:shadow-md sm:flex-row sm:items-center sm:gap-4 sm:p-4"
                >
                  {/* Product image */}
                  <div className="h-36 w-full shrink-0 overflow-hidden rounded-lg bg-[#f1f7ef] sm:h-[100px] sm:w-[115px] lg:h-[110px] lg:w-[130px]">
                    {product.image ? (
                      <img
                        src={product.image}
                        alt={product.name}
                        loading="lazy"
                        className="h-full w-full object-cover"
                      />
                    ) : (
                      <div className="flex h-full items-center justify-center">
                        <ShoppingBasket
                          size={32}
                          className="text-[#087b4b]"
                        />
                      </div>
                    )}
                  </div>

                  {/* Product information */}
                  <div className="min-w-0 flex-1">
                    <h3 className="text-sm font-extrabold text-[#075c40] sm:text-base">
                      {product.name}
                    </h3>

                    {product.description && (
                      <p className="mt-1 text-xs leading-5 text-gray-500 sm:text-sm">
                        {product.description}
                      </p>
                    )}

                    <p className="mt-2 text-base font-extrabold text-gray-900">
                      ₹
                      {Number(product.price).toLocaleString("en-IN", {
                        maximumFractionDigits: 2,
                      })}
                    </p>

                    <div className="mt-2 flex flex-wrap gap-1.5">
                      {product.category && (
                        <span className="rounded-full bg-gray-100 px-2 py-1 text-[10px] font-semibold text-gray-600 sm:text-xs">
                          {product.category}
                        </span>
                      )}

                      {(product.labels || []).map((label) => (
                        <span
                          key={label}
                          className="rounded-full bg-[#eaf7ec] px-2 py-1 text-[10px] font-semibold text-[#087b4b] sm:text-xs"
                        >
                          {label}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Protein information */}
                  <div className="flex shrink-0 items-center justify-center gap-3 rounded-lg bg-[#f5faf4] px-4 py-3 sm:min-w-[100px]">
                    <div className="text-center">
                      <p className="text-[10px] text-gray-500">Protein</p>
                      <p className="mt-1 text-sm font-extrabold text-[#075c40]">
                        {product.protein ?? "—"} g
                      </p>
                    </div>
                  </div>

                  {/* Add button */}
                  <button
                    type="button"
                    onClick={() =>
                      window.alert(`${product.name} selected`)
                    }
                    className="w-full shrink-0 rounded-lg bg-[#087b4b] px-5 py-2.5 text-sm font-bold text-white transition hover:bg-[#075c40] sm:w-auto"
                  >
                    ADD
                  </button>
                </article>
              ))}
            </div>
          ) : (
            <div className="rounded-2xl border border-dashed border-gray-300 bg-white px-4 py-12 text-center">
              <ShoppingBasket
                size={38}
                className="mx-auto text-[#087b4b]"
              />

              <h3 className="mt-3 font-bold text-[#075c40]">
                No food items found
              </h3>

              <p className="mt-1 text-sm text-gray-500">
                Try another category, label, or search term.
              </p>

              <button
                type="button"
                onClick={resetFilters}
                className="mt-4 rounded-lg bg-[#087b4b] px-5 py-2.5 text-sm font-bold text-white hover:bg-[#075c40]"
              >
                Clear filters
              </button>
            </div>
          )}

          {/* Pagination */}
          {filteredProducts.length > 0 && (
            <>
              <p
                aria-live="polite"
                className="mt-4 text-center text-xs text-gray-500"
              >
                Showing {startIndex + 1}–
                {Math.min(
                  startIndex + ITEMS_PER_PAGE,
                  filteredProducts.length
                )}{" "}
                of {filteredProducts.length} items
              </p>

              {totalPages > 1 && (
                <nav
                  aria-label="Food items pagination"
                  className="mt-4 flex flex-wrap items-center justify-center gap-2"
                >
                  <button
                    type="button"
                    disabled={currentPage === 1}
                    onClick={() => changePage(currentPage - 1)}
                    className="inline-flex items-center gap-1 rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-semibold text-[#075c40] hover:bg-[#eaf7ec] disabled:cursor-not-allowed disabled:opacity-40"
                  >
                    <ChevronLeft size={16} />
                    <span className="hidden sm:inline">Previous</span>
                  </button>

                  {Array.from(
                    { length: totalPages },
                    (_, index) => index + 1
                  ).map((page) => (
                    <button
                      key={page}
                      type="button"
                      onClick={() => changePage(page)}
                      aria-current={
                        currentPage === page ? "page" : undefined
                      }
                      className={`min-w-9 rounded-lg px-3 py-2 text-sm font-bold ${
                        currentPage === page
                          ? "bg-[#087b4b] text-white"
                          : "border border-gray-200 bg-white text-[#075c40] hover:bg-[#eaf7ec]"
                      }`}
                    >
                      {page}
                    </button>
                  ))}

                  <button
                    type="button"
                    disabled={currentPage === totalPages}
                    onClick={() => changePage(currentPage + 1)}
                    className="inline-flex items-center gap-1 rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-semibold text-[#075c40] hover:bg-[#eaf7ec] disabled:cursor-not-allowed disabled:opacity-40"
                  >
                    <span className="hidden sm:inline">Next</span>
                    <ChevronRight size={16} />
                  </button>
                </nav>
              )}
            </>
          )}
        </section>
      </div>
    </main>
  );
}

export default StoreDetails;
