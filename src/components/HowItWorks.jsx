import {
  Search,
  ClipboardCheck,
  Calculator,
  ShoppingCart,
  ArrowRight,
  ShieldCheck,
  Heart,
  UsersRound,
  MapPin,
} from "lucide-react";

const STEPS = [
  {
    icon: Search,
    title: "Explore Foods",
    text: "Browse high-protein\nfoods from local stores.",
  },
  {
    icon: ClipboardCheck,
    title: "Check Nutrition",
    text: "View protein content\nand nutrition score.",
  },
  {
    icon: Calculator,
    title: "Calculate Your Need",
    text: "Know your BMI &\ndaily protein requirement.",
  },
  {
    icon: ShoppingCart,
    title: "Order from Nearby Stores",
    text: "Get healthy foods from\ntrusted local stores.",
  },
];

const FEATURES = [
  {
    icon: ShieldCheck,
    title: "Verified Nutrition Information",
    text: "Make informed choices\nwith nutrition intelligence.",
    iconColor: "text-green-700",
    iconBg: "bg-green-50",
  },
  {
    icon: Heart,
    title: "Wide Food Choices",
    text: "From everyday foods to\nspecial diets.",
    iconColor: "text-orange-600",
    iconBg: "bg-orange-50",
  },
  {
    icon: UsersRound,
    title: "Supports Your Goals",
    text: "Weight management,\nfitness, immunity and more.",
    iconColor: "text-blue-600",
    iconBg: "bg-blue-50",
  },
  {
    icon: MapPin,
    title: "Local Store Network",
    text: "Access foods from\nyour nearby stores.",
    iconColor: "text-orange-600",
    iconBg: "bg-orange-50",
  },
];

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="scroll-mt-20 bg-white px-4 py-8 sm:px-6 sm:py-10 lg:px-8"
    >
      <div className="mx-auto max-w-[1400px]">

        {/* HOW EATPROTEIN WORKS */}
        <div>
          <h2 className="text-xl font-black tracking-tight text-protein-dark sm:text-2xl">
            How EatProtein <span className="text-protein-green">Works</span>
          </h2>

          <p className="mt-1 text-xs leading-relaxed text-slate-500 sm:text-sm">
            From discovery to delivery — a simple journey to better nutrition.
          </p>

          {/* Four-step process */}
          <div className="mt-5 grid grid-cols-1 gap-x-6 gap-y-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-x-5 lg:gap-y-0">
            {STEPS.map(({ icon: Icon, title, text }, index) => (
              <div
                key={title}
                className="relative flex min-w-0 items-center gap-3"
              >
                {/* Icon */}
                <div className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-green-100 bg-green-50 sm:h-12 sm:w-12">
                  <Icon
                    size={22}
                    strokeWidth={2}
                    className="text-protein-green"
                  />
                </div>

                {/* Step content */}
                <div className="min-w-0 flex-1">
                  <h3 className="text-xs font-extrabold leading-snug text-protein-dark sm:text-sm">
                    {index + 1}. {title}
                  </h3>

                  <p className="mt-1 whitespace-pre-line text-[11px] leading-[1.5] text-slate-500 sm:text-xs">
                    {text}
                  </p>
                </div>

                {/* Connecting arrow */}
                {index < STEPS.length - 1 && (
                  <ArrowRight
                    size={16}
                    strokeWidth={1.8}
                    className="absolute right-0 top-1/2 hidden -translate-y-1/2 translate-x-1/2 text-slate-700 lg:block"
                  />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* WHY CHOOSE EATPROTEIN */}
        <div className="mt-7 sm:mt-8">
          <h2 className="text-xl font-black tracking-tight text-protein-dark sm:text-2xl">
            Why Choose EatProtein
          </h2>

          {/* Feature cards */}
          <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {FEATURES.map(
              (
                {
                  icon: Icon,
                  title,
                  text,
                  iconColor,
                  iconBg,
                },
                index
              ) => (
                <article
                  key={title}
                  className="flex min-w-0 items-center gap-3 rounded-xl border border-slate-100 bg-white px-3 py-3 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-green-100 hover:shadow-md sm:px-4 sm:py-4"
                >
                  {/* Feature icon */}
                  <div
                    className={`grid h-10 w-10 shrink-0 place-items-center rounded-full ${iconBg} sm:h-11 sm:w-11`}
                  >
                    <Icon
                      size={21}
                      strokeWidth={2}
                      className={iconColor}
                    />
                  </div>

                  {/* Feature details */}
                  <div className="min-w-0">
                    <h3 className="text-xs font-extrabold leading-snug text-protein-dark sm:text-sm">
                      {FEATURES[index].title}
                    </h3>

                    <p className="mt-1 whitespace-pre-line text-[11px] leading-[1.5] text-slate-500 sm:text-xs">
                      {text}
                    </p>
                  </div>
                </article>
              )
            )}
          </div>
        </div>

      </div>
    </section>
  );
}