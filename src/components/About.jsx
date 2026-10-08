import {
  Award,
  Heart,
  Leaf,
  ShieldCheck,
  Sparkles,
  Users,
  Store,
  Trophy,
} from "lucide-react";

const STATS = [
  {
    value: "10K+",
    label: "Happy Customers",
    color: "text-green-600",
  },
  {
    value: "3000+",
    label: "Premium Products",
    color: "text-orange-500",
  },
  {
    value: "500+",
    label: "Stores",
    color: "text-blue-600",
  },
  {
    value: "99%",
    label: "Satisfaction Rate",
    color: "text-purple-600",
  },
];

const FEATURES = [
  {
    icon: Leaf,
    title: "Protein Rich",
    text: "Carefully selected foods packed with quality nutrition.",
  },
  {
    icon: ShieldCheck,
    title: "Trusted Quality",
    text: "Quality-focused products selected for everyday wellness.",
  },
  {
    icon: Heart,
    title: "Healthy Choices",
    text: "Simple choices that help you build a healthier lifestyle.",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="
        relative
        overflow-hidden
        bg-gradient-to-br
        from-[#f4fff0]
        via-[#f8fff5]
        to-[#effbe9]
        px-4
        py-16
        sm:px-6
        lg:px-8
        lg:py-3
      "
    >
      {/* Decorative background circles */}
      <div className="pointer-events-none absolute -left-24 top-20 h-72 w-72 rounded-full bg-green-200/20 blur-3xl" />

      <div className="pointer-events-none absolute -right-24 bottom-10 h-80 w-80 rounded-full bg-yellow-200/20 blur-3xl" />

      <div className="relative mx-auto max-w-[1400px]">
        {/* =========================================
            HEADER
        ========================================= */}

        <div className="mx-auto max-w-4xl text-center">
          <div
            className="
              mx-auto
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-green-200
              bg-white/80
              px-4
              py-2
              text-xs
              font-bold
              text-green-700
              shadow-sm
              backdrop-blur
            "
          >
            <Sparkles size={15} />
            About Eat Protein
          </div>

          <h2
            className="
              mt-5
              text-3xl
              font-black
              leading-tight
              tracking-tight
              text-slate-900
              sm:text-4xl
              lg:text-5xl
            "
          >
            Nutrition That Fits
            <span className="text-protein-green">
              {" "}Your Lifestyle
            </span>
          </h2>

          <p
            className="
              mx-auto
              mt-5
              max-w-3xl
              text-sm
              leading-7
              text-slate-600
              sm:text-base
              lg:text-lg
            "
          >
            Eat Protein is built with a simple mission — to make
            nutritious, protein-rich food easier to discover, understand
            and enjoy every day.
          </p>
        </div>

        {/* =========================================
            STORY + QUALITY CARD
        ========================================= */}

        <div
          className="
            mt-5
            grid
            grid-cols-1
            gap-8
            lg:grid-cols-2
            lg:items-stretch
          "
        >
          {/* =====================================
              OUR STORY
          ===================================== */}

          <div
            className="
              rounded-3xl
              border
              border-green-100
              bg-white/80
              p-6
              shadow-[0_15px_50px_rgba(34,197,94,0.08)]
              backdrop-blur
              sm:p-8
              lg:p-10
            "
          >
            <div className="flex items-center gap-3">
              <div
                className="
                  grid
                  h-12
                  w-12
                  shrink-0
                  place-items-center
                  rounded-2xl
                  bg-green-100
                  text-protein-green
                "
              >
                <Leaf size={24} />
              </div>

              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-green-600">
                  Our Story
                </p>

                <h3 className="mt-1 text-2xl font-black text-slate-900">
                  Making Healthy Eating Easier
                </h3>
              </div>
            </div>

            <div className="mt-7 space-y-5">
              <p className="text-sm leading-7 text-slate-600 sm:text-base">
                We started Eat Protein with a simple belief:
                everyone deserves access to nutritious, protein-rich
                foods that support their health, fitness and everyday
                lifestyle.
              </p>

              <p className="text-sm leading-7 text-slate-600 sm:text-base">
                What began as a simple idea has grown into a platform
                designed to help people discover better food choices,
                understand nutrition and make informed decisions.
              </p>

              <p className="text-sm leading-7 text-slate-600 sm:text-base">
                From everyday nutrition to fitness-focused goals,
                Eat Protein brings quality food and useful nutrition
                insights together in one simple experience.
              </p>
            </div>

            {/* Mission */}
            <div
              className="
                mt-8
                rounded-2xl
                bg-gradient-to-r
                from-[#eefbea]
                to-[#f8fff5]
                p-5
              "
            >
              <div className="flex gap-4">
                <div
                  className="
                    grid
                    h-10
                    w-10
                    shrink-0
                    place-items-center
                    rounded-xl
                    bg-white
                    text-protein-green
                    shadow-sm
                  "
                >
                  <Heart size={19} />
                </div>

                <div>
                  <h4 className="font-black text-slate-900">
                    Our Mission
                  </h4>

                  <p className="mt-1 text-xs leading-5 text-slate-600 sm:text-sm">
                    To make healthy, protein-rich food choices simple,
                    accessible and enjoyable for everyone.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* =====================================
              AWARD / QUALITY CARD
          ===================================== */}

          <div
            className="
              relative
              overflow-hidden
              rounded-3xl
              bg-gradient-to-br
              from-[#dff6c9]
              via-[#eef4cf]
              to-[#ffdba7]
              p-6
              shadow-[0_15px_50px_rgba(34,197,94,0.12)]
              sm:p-8
              lg:p-10
            "
          >
            {/* Decorative circles */}
            <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-white/30" />

            <div className="absolute -bottom-20 -left-16 h-44 w-44 rounded-full bg-green-200/20" />

            <div className="relative flex h-full flex-col items-center justify-center text-center">
              {/* Trophy */}
              <div
                className="
                  grid
                  h-24
                  w-24
                  place-items-center
                  rounded-full
                  bg-white/80
                  shadow-lg
                  backdrop-blur
                "
              >
                <Trophy
                  size={50}
                  strokeWidth={2}
                  className="text-yellow-500"
                />
              </div>

              <span
                className="
                  mt-6
                  rounded-full
                  bg-white/70
                  px-4
                  py-2
                  text-[10px]
                  font-black
                  uppercase
                  tracking-widest
                  text-green-700
                "
              >
                Quality First
              </span>

              <h3
                className="
                  mt-4
                  text-2xl
                  font-black
                  text-slate-900
                  sm:text-3xl
                "
              >
                Award-Winning Quality
              </h3>

              <p
                className="
                  mt-4
                  max-w-md
                  text-sm
                  leading-6
                  text-slate-700
                  sm:text-base
                "
              >
                We believe better nutrition starts with better
                ingredients. Every product is selected with quality,
                nutrition and customer satisfaction in mind.
              </p>

              {/* Quality badges */}
              <div
                className="
                  mt-8
                  grid
                  w-full
                  max-w-md
                  grid-cols-3
                  gap-3
                "
              >
                <div
                  className="
                    rounded-2xl
                    bg-white/70
                    p-4
                    backdrop-blur
                  "
                >
                  <ShieldCheck
                    className="mx-auto text-green-600"
                    size={22}
                  />

                  <p className="mt-2 text-[10px] font-bold text-slate-700">
                    Trusted
                  </p>
                </div>

                <div
                  className="
                    rounded-2xl
                    bg-white/70
                    p-4
                    backdrop-blur
                  "
                >
                  <Leaf
                    className="mx-auto text-green-600"
                    size={22}
                  />

                  <p className="mt-2 text-[10px] font-bold text-slate-700">
                    Nutritious
                  </p>
                </div>

                <div
                  className="
                    rounded-2xl
                    bg-white/70
                    p-4
                    backdrop-blur
                  "
                >
                  <Heart
                    className="mx-auto text-red-500"
                    size={22}
                  />

                  <p className="mt-2 text-[10px] font-bold text-slate-700">
                    Customer First
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* =========================================
            STATISTICS
        ========================================= */}

        <div
          className="
            mt-5
            grid
            grid-cols-2
            gap-4
            lg:grid-cols-4
          "
        >
          {STATS.map((stat) => (
            <div
              key={stat.label}
              className="
                rounded-2xl
                border
                border-green-100
                bg-white/80
                px-4
                py-6
                text-center
                shadow-sm
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-lg
              "
            >
              <p
                className={`
                  text-3xl
                  font-black
                  sm:text-4xl
                  ${stat.color}
                `}
              >
                {stat.value}
              </p>

              <p className="mt-2 text-xs font-semibold text-slate-500 sm:text-sm">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}