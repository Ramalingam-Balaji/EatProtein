import {
  ArrowRight,
  Heart,
  Leaf,
  ShieldCheck,
  Store,
} from "lucide-react";
import { useEffect, useState } from "react";

import { BENEFITS } from "../data/homeData";
import BANNERS from "../data/bannerData";

const icons = {
  leaf: Leaf,
  shield: ShieldCheck,
  store: Store,
  heart: Heart,
};

export default function HeroSection() {
  // =========================================
  // BANNER STATE
  // =========================================

  const [currentBanner, setCurrentBanner] = useState(0);

  // =========================================
  // AUTO BANNER CHANGE
  // =========================================

  useEffect(() => {
    if (!BANNERS || BANNERS.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentBanner((prev) => {
        return (prev + 1) % BANNERS.length;
      });
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="
        relative
        scroll-mt-16
        overflow-hidden
        bg-[#f8f9f5]
      "
    >
      {/* =====================================================
          FULL BACKGROUND BANNER
      ===================================================== */}

      <div className="absolute inset-0 z-0">
        {BANNERS.map((banner, index) => (
          <div
            key={banner.id}
            className={`
              absolute
              inset-0
              transition-opacity
              duration-1000
              ease-in-out
              ${
                index === currentBanner
                  ? "z-10 opacity-100"
                  : "z-0 opacity-0"
              }
            `}
            style={{
              backgroundImage: `url("${banner.image}")`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
            aria-label={banner.alt}
          />
        ))}
      </div>

      {/* =====================================================
          LEFT SIDE WHITE FOG / READABILITY
          Keeps the text easy to read
      ===================================================== */}

     

      {/* =====================================================
          VERY LIGHT OVERLAY
          Helps the banner blend with your EatProtein theme
      ===================================================== */}

     

      {/* =====================================================
          MAIN CONTENT
      ===================================================== */}

      <div
        className="
          relative
          z-10
          mx-auto
          grid
          min-h-[600px]
          max-w-[1500px]
          grid-cols-1
          lg:grid-cols-[44%_56%]
        "
      >
        {/* =====================================================
            LEFT CONTENT
        ===================================================== */}

        <div
          className="
            relative
            z-20
            flex
            flex-col
            justify-center
            px-6
            py-12
            lg:px-7
          "
        >
          <h1
            className="
              max-w-[500px]
              text-[42px]
              font-black
              leading-[0.98]
              tracking-[-1.7px]
              text-protein-dark
              sm:text-[49px]
            "
          >
            Healthy
            <br />
            Protein Choices
            <br />
            <span className="text-protein-green">
              for a Better You
            </span>
          </h1>

          <p
            className="
              mt-4
              max-w-[465px]
              text-[15px]
              leading-6
              text-slate-700
            "
          >
            Discover high protein foods from local stores,
            make smarter choices with nutrition intelligence
            and live a healthier, stronger life.
          </p>

          {/* =================================================
              BENEFITS
          ================================================= */}

          <div
            className="
              mt-5
              grid
              max-w-[480px]
              grid-cols-4
              gap-3
            "
          >
            {BENEFITS.map((item) => {
              const Icon = icons[item.icon];

              return (
                <div
                  key={item.title}
                  className="text-center"
                >
                  <div
                    className="
                      mx-auto
                      mb-2
                      grid
                      h-11
                      w-11
                      place-items-center
                      rounded-full
                      border
                      border-green-100
                      bg-white
                      text-protein-green
                      shadow-sm
                    "
                  >
                    <Icon
                      size={22}
                      strokeWidth={1.8}
                    />
                  </div>

                  <p
                    className="
                      text-[10px]
                      font-semibold
                      leading-3
                      text-slate-800
                    "
                  >
                    {item.title}
                  </p>

                  <p
                    className="
                      text-[10px]
                      font-semibold
                      leading-3
                      text-slate-800
                    "
                  >
                    {item.subtitle}
                  </p>
                </div>
              );
            })}
          </div>

          {/* =================================================
              EXPLORE BUTTON
          ================================================= */}

          <button
            onClick={() =>
              document
                .getElementById("foods")
                ?.scrollIntoView({
                  behavior: "smooth",
                })
            }
            className="
              mt-5
              flex
              w-fit
              items-center
              gap-2
              rounded-full
              bg-gradient-to-r
              from-protein-orange
              to-orange-500
              px-7
              py-3
              text-sm
              font-bold
              text-white
              shadow-md
              transition
              hover:-translate-y-0.5
            "
          >
            Explore High Protein Foods

            <ArrowRight size={17} />
          </button>
        </div>

        {/* =====================================================
            RIGHT SIDE
            Kept only to preserve the original layout width.
            The banner is now behind the complete section.
        ===================================================== */}

        <div className="relative min-h-[420px]" />
      </div>

      {/* =====================================================
          EAT PROTEIN LIVE BETTER
          YOUR COMMENTED CONTAINER IS KEPT
      ===================================================== */}

  
      <div
        className="
          absolute
          right-7
          top-12
          z-20
          hidden
          w-32
          rotate-[-4deg]
          font-serif
          text-2xl
          italic
          leading-7
          text-[#073c26]
          xl:block
        "
      >
        Eat
        <br />
        Protein
        <br />
        Live
        <br />
        Better

        <span
          className="
            mt-2
            block
            h-1
            w-14
            rotate-[-10deg]
            rounded-full
            bg-orange-500
          "
        />
      </div>
      

      {/* =====================================================
          NUTRITION CONTAINER
          YOUR COMMENTED CONTAINER IS KEPT
      ===================================================== */}

      
      <div
        className="
          absolute
          bottom-14
          right-20
          z-20
          hidden
          w-40
          rounded-xl
          bg-white
          p-4
          shadow-xl
          sm:block
        "
      >
        <p className="text-[11px] font-bold text-slate-800">
          High Protein
        </p>

        <span
          className="
            mt-1
            inline-block
            rounded
            bg-green-100
            px-2
            py-1
            text-[10px]
            font-bold
            text-green-700
          "
        >
          24g Protein
        </span>

        <p
          className="
            mt-3
            text-[10px]
            font-semibold
            text-slate-700
          "
        >
          🌿 Nutri Score{" "}
          <b className="text-green-700">
            A
          </b>
        </p>

        <p
          className="
            mt-2
            text-[10px]
            font-semibold
            text-slate-700
          "
        >
          🧡 Healthy Choice
        </p>
      </div>
      

      {/* =====================================================
          BANNER DOTS
      ===================================================== */}

      <div
        className="
          absolute
          bottom-4
          left-1/2
          z-30
          flex
          -translate-x-1/2
          items-center
          gap-1.5
        "
      >
        {BANNERS.map((banner, index) => (
          <button
            key={banner.id}
            type="button"
            onClick={() => setCurrentBanner(index)}
            aria-label={`Go to banner ${index + 1}`}
            className={`
              h-1.5
              rounded-full
              transition-all
              duration-300
              ${
                index === currentBanner
                  ? "w-6 bg-protein-green"
                  : "w-1.5 bg-white/80"
              }
            `}
          />
        ))}
      </div>
    </section>
  );
}