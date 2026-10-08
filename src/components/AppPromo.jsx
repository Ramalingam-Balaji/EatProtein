import { Apple, ArrowRight, Play } from "lucide-react";
import SectionTag from "./SectionTag";

export default function AppPromo() {
  return (
    <section id="app" className="scroll-mt-20 bg-[#f0fae9] px-5 py-8">
      <div className="mx-auto grid max-w-[1400px] items-center overflow-hidden rounded-2xl lg:grid-cols-[48%_52%]">
        <div className="px-1 py-5 lg:px-4">
          <SectionTag>EatProtein App</SectionTag>
          <h2 className="mt-3 text-[29px] font-black leading-[1.05] text-protein-dark">
            Your Nutrition Companion
            <br /><span className="text-protein-green">Anywhere, Anytime</span>
          </h2>
          <p className="mt-3 max-w-[520px] text-sm leading-5 text-slate-600">
            Explore food options, track your nutrition, get personalized recommendations and more — all in the EatProtein app.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
  {/* App Store */}
  <a
    href="https://apps.apple.com/us/search?term=EatProtein"
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-2 rounded-lg bg-black px-4 py-2 text-left text-white transition duration-200 hover:-translate-y-1 hover:bg-gray-900"
  >
    <Apple size={24} fill="white" />

    <span>
      <small className="block text-[7px]">
        Download on the
      </small>

      <b className="text-sm">
        App Store
      </b>
    </span>
  </a>

  {/* Google Play */}
  <a
    href="https://play.google.com/store/search?q=EatProtein&c=apps"
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-2 rounded-lg bg-black px-4 py-2 text-left text-white transition duration-200 hover:-translate-y-1 hover:bg-gray-900"
  >
    <Play size={22} fill="white" />

    <span>
      <small className="block text-[7px]">
        GET IT ON
      </small>

      <b className="text-sm">
        Google Play
      </b>
    </span>
  </a>
</div>
        </div>
        <div className="relative h-[245px]">
          <img src="/assets/app-phones.jpg" alt="EatProtein mobile app" className="absolute bottom-0 right-0 h-full w-full object-cover object-left" />
        </div>
      </div>
    </section>
  );
}