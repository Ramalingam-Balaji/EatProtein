
import {
  Heart,
  Leaf,
  ShieldCheck,
  Sparkles,
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
        relative overflow-hidden
        bg-gradient-to-br
        from-[#f4fff0] via-[#f8fff5] to-[#effbe9]
        px-4 py-16
        sm:px-6
        lg:px-8 lg:py-12
      "
    >
      {/* Decorative background circles */}
      <div
        className="
          pointer-events-none absolute
          -left-24 top-20
          h-72 w-72 rounded-full
          bg-green-200/20 blur-3xl
        "
      />

      <div
        className="
          pointer-events-none absolute
          -right-24 bottom-10
          h-80 w-80 rounded-full
          bg-yellow-200/20 blur-3xl
        "
      />

      <div className="relative mx-auto max-w-[1400px]">

        {/* =====================================
            HEADER
        ===================================== */}
        <div className="mx-auto max-w-4xl text-center">

          <div
            className="
              mx-auto inline-flex items-center gap-2
              rounded-full border border-green-200
              bg-white/80 px-4 py-2
              text-xs font-bold text-green-700
              shadow-sm backdrop-blur
            "
          >
            <Sparkles size={15} />
            About Eat Protein
          </div>

          <h2
            className="
              mt-5 text-3xl font-black
              leading-tight tracking-tight text-slate-900
              sm:text-4xl lg:text-5xl
            "
          >
            Nutrition That Fits
            <span className="text-protein-green">
              {" "}Your Lifestyle
            </span>
          </h2>

          <p
            className="
              mx-auto mt-5 max-w-3xl
              text-sm leading-7 text-slate-600
              sm:text-base lg:text-lg
            "
          >
            Eat Protein is built with a simple mission — to make
            nutritious, protein-rich food easier to discover,
            understand and enjoy every day.
          </p>
        </div>

        {/* =====================================
            STORY + QUALITY CARDS
            Side by side on desktop
        ===================================== */}
        <div
          className="
            mt-8 grid grid-cols-1
            items-stretch gap-6
            lg:grid-cols-2
          "
        >

          {/* =====================================
              LEFT CARD: STORY + STATISTICS
          ===================================== */}
          <div
            className="
              flex h-full flex-col
              rounded-3xl border border-green-100
              bg-white/80 p-6
              shadow-[0_15px_50px_rgba(34,197,94,0.08)]
              sm:p-8 lg:p-8
            "
          >

            {/* Story heading */}
            <div className="flex items-center gap-4">

              <div
                className="
                  grid h-14 w-14 shrink-0
                  place-items-center rounded-2xl
                  bg-green-100
                "
              >
                <Leaf
                  size={28}
                  className="text-green-700"
                />
              </div>

              <div>
                <p
                  className="
                    text-xs font-black uppercase
                    tracking-widest text-green-600
                  "
                >
                  Our Story
                </p>

                <h3
                  className="
                    mt-2 text-xl font-black
                    leading-tight text-slate-900
                    sm:text-2xl
                  "
                >
                  Making Healthy Eating Easier
                </h3>
              </div>
            </div>

            {/* Story paragraphs */}
            <div
              className="
                mt-7 space-y-4
                text-sm leading-7 text-slate-600
                sm:text-base
              "
            >
              <p>
                We started Eat Protein with a simple belief:
                everyone deserves access to premium, protein-rich
                foods that support their health, fitness and
                everyday lifestyle.
              </p>

              <p>
                What began as a small initiative has grown into
                a comprehensive platform offering the finest
                selection of nuts, seeds, and protein food.
              </p>

              <p>
                Our team of nutrition experts carefully curates
                every product, ensuring you receive only the
                highest quality, most nutritious options available.
              </p>
            </div>

            {/* Statistics: 2 columns × 2 rows */}
            <div
              className="
                mt-auto grid grid-cols-2
                gap-3 pt-7 sm:gap-4
              "
            >
              {STATS.map((stat) => (
                <div
                  key={stat.label}
                  className="
                    flex min-h-[95px]
                    flex-col items-center justify-center
                    rounded-2xl border border-green-100
                    bg-white/80 px-2 py-4 text-center
                    shadow-sm transition-all duration-300
                    hover:-translate-y-1 hover:shadow-lg
                  "
                >
                  <p
                    className={`
                      text-2xl font-black sm:text-3xl
                      ${stat.color}
                    `}
                  >
                    {stat.value}
                  </p>

                  <p
                    className="
                      mt-2 text-xs font-semibold
                      text-slate-500 sm:text-sm
                    "
                  >
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* =====================================
              RIGHT CARD: QUALITY + IMAGE
          ===================================== */}
          <div
            className="
              relative isolate flex h-full
              min-h-[520px] flex-col
              items-center justify-center
              overflow-hidden rounded-3xl
              bg-gradient-to-br
              from-[#dff6c9] via-[#eef4cf] to-[#ffdba7]
              px-6 py-8
              shadow-[0_15px_50px_rgba(34,197,94,0.12)]
              sm:px-8 sm:py-10 lg:px-8
            "
          >

            {/* Decorative circles */}
            <div
              className="
                pointer-events-none absolute
                -right-16 -top-16
                h-48 w-48 rounded-full bg-white/30
              "
            />

            <div
              className="
                pointer-events-none absolute
                -bottom-16 -left-16
                h-44 w-44 rounded-full bg-green-200/30
              "
            />

            {/* Floating leaf icons */}
            <Leaf
              className="
                pointer-events-none absolute
                left-[10%] top-[15%]
                h-8 w-8 -rotate-45
                text-green-600/80
              "
              strokeWidth={1.8}
            />

            <Leaf
              className="
                pointer-events-none absolute
                right-[12%] top-[20%]
                h-10 w-10 rotate-45
                text-green-600/80
              "
              strokeWidth={1.8}
            />

            <Leaf
              className="
                pointer-events-none absolute
                bottom-[30%] left-[8%]
                h-7 w-7 rotate-12
                text-green-600/70
              "
              strokeWidth={1.8}
            />

            <Leaf
              className="
                pointer-events-none absolute
                bottom-[30%] right-[8%]
                h-8 w-8 -rotate-12
                text-green-600/70
              "
              strokeWidth={1.8}
            />

            {/* Quality card content */}
            <div
              className="
                relative z-10 flex w-full
                flex-col items-center text-center
              "
            >

              {/* Quality badge */}
              <span
                className="
                  inline-flex items-center
                  rounded-full bg-white/75
                  px-5 py-2
                  text-[10px] font-black
                  uppercase tracking-[0.16em]
                  text-green-700 shadow-sm
                  sm:text-xs
                "
              >
                Quality First
              </span>

              {/* Nuts and seeds image */}
              <div
                className="
                  mt-5 flex w-full
                  items-center justify-center
                "
              >
                <img
                  src="./assets/quality.png"
                  alt="Premium nuts, seeds and protein-rich foods"
                  className="
                    h-auto w-full max-w-[480px]
                    max-h-[280px] object-contain
                    drop-shadow-[0_12px_18px_rgba(70,90,30,0.10)]
                  "
                  loading="lazy"
                />
              </div>

              {/* Quality heading */}
              <h3
                className="
                  mt-5 text-2xl font-black
                  leading-tight tracking-tight
                  text-slate-900 sm:text-3xl
                "
              >
                Award-Winning Quality
              </h3>

              {/* Quality description */}
              <p
                className="
                  mt-4 max-w-md
                  text-sm leading-7 text-slate-700
                  sm:text-base
                "
              >
                We believe better nutrition starts with better
                ingredients. Every product is selected with
                quality, nutrition and customer satisfaction
                in mind.
              </p>
            </div>
          </div>
        </div>

        {/* =====================================
            OPTIONAL FEATURES
            Keep this section if you use FEATURES
        ===================================== */}
        {/*
        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {FEATURES.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="rounded-2xl border border-green-100 bg-white/80 p-5"
              >
                <Icon size={26} className="text-green-600" />
                <h3 className="mt-3 font-bold text-slate-900">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {feature.text}
                </p>
              </div>
            );
          })}
        </div>
        */}
      </div>
    </section>
  );
}