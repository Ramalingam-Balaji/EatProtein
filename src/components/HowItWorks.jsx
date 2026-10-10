import {
  Smartphone,
  MapPin,
  ShoppingBag,
  Package,
  Gift,
  ArrowRight,
} from "lucide-react";
import SectionTag from "./SectionTag";

const STEPS = [
  {
    icon: Smartphone,
    title: "Download App",
    text: "Download & sign up\nin seconds",
    color: "bg-green-50",
    iconColor: "text-green-700",
  },
  {
    icon: MapPin,
    title: "Find & Explore",
    text: "Find stores, products &\nplans near you",
    color: "bg-orange-50",
    iconColor: "text-orange-600",
  },
  {
    icon: ShoppingBag,
    title: "Order / Join",
    text: "Order your favorites or join\nfitness & diet plans",
    color: "bg-green-50",
    iconColor: "text-green-700",
  },
  {
    icon: Package,
    title: "Track & Earn",
    text: "Track progress and earn\nrewards",
    color: "bg-red-50",
    iconColor: "text-red-600",
  },
  {
    icon: Gift,
    title: "Stay Healthy",
    text: "Stay consistent and live\na healthy life",
    color: "bg-amber-50",
    iconColor: "text-amber-600",
  },
];

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="scroll-mt-20 bg-white px-5 py-10"
    >
      <div className="mx-auto max-w-[1400px] text-center">
        {/* Original Section Tag */}
        <SectionTag>Simple. Smart. Healthy.</SectionTag>

        {/* Original Heading */}
        <h2 className="mt-3 text-3xl font-black text-protein-dark">
          How EatProtein Works
        </h2>

        {/* Original Description */}
        <p className="mx-auto mt-2 max-w-2xl text-sm text-slate-600">
          From finding better foods to understanding your nutrition,
          EatProtein keeps the journey simple.
        </p>

        {/* Five-Step Flow */}
        <div className="mt-8 grid grid-cols-1 gap-y-8 sm:grid-cols-2 lg:grid-cols-5 lg:gap-x-2 lg:gap-y-0">
          {STEPS.map(
            ({ icon: Icon, title, text, color, iconColor }, index) => (
              <div
                key={title}
                className="relative flex flex-col items-center text-center"
              >
                {/* Circular Icon and Dotted Connector */}
                <div className="relative flex w-full items-center justify-center">
                  <div
                    className={`grid h-14 w-14 place-items-center rounded-full ${color} sm:h-16 sm:w-16`}
                  >
                    <Icon
                      size={27}
                      strokeWidth={2.2}
                      className={iconColor}
                    />
                  </div>

                  {/* Arrow connecting each step */}
                  {index < STEPS.length - 1 && (
                    <div className="absolute left-[calc(50%+42px)] top-1/2 hidden w-[calc(100%-58px)] -translate-y-1/2 items-center lg:flex">
                      <div className="w-full border-t border-dotted border-gray-400" />
                      <ArrowRight
                        size={14}
                        strokeWidth={2}
                        className="-ml-1 shrink-0 text-gray-700"
                      />
                    </div>
                  )}
                </div>

                {/* Step Title */}
                <h3 className="mt-3 text-sm font-extrabold text-protein-dark">
                  {index + 1}. {title}
                </h3>

                {/* Step Description */}
                <p className="mt-1 whitespace-pre-line text-xs leading-[1.6] text-slate-600">
                  {text}
                </p>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
}
