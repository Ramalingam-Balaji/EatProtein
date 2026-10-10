import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function SectionHeading({
  title,
  subtitle,
  link = "/food-stores",
}) {
  return (
    <div className="mb-5 flex items-end justify-between gap-4 sm:mb-6">
      <div className="min-w-0">
        <h2 className="text-xl font-extrabold leading-tight text-[#075c40] sm:text-2xl">
          {title}
        </h2>

        {subtitle && (
          <p className="mt-1.5 text-sm leading-5 text-gray-500 sm:text-base">
            {subtitle}
          </p>
        )}
      </div>

      {link && (
        <Link
          to={link}
          className="group inline-flex shrink-0 items-center gap-1.5 rounded-full px-2 py-2 text-xs font-bold text-[#087b4b] transition hover:bg-[#eaf7ec] sm:px-3 sm:text-sm"
        >
          <span>View All</span>

          <ArrowRight
            size={16}
            className="transition-transform duration-200 group-hover:translate-x-1"
          />
        </Link>
      )}
    </div>
  );
}
