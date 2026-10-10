
import {
  ArrowRight,
  TrendingUp,
  Wallet,
  BriefcaseBusiness,
  Rocket,
  Headset,
  MapPin,
  ChartNoAxesCombined,
  CalendarDays,
  CheckCircle2,
  ClipboardCheck,
  GraduationCap,
  Store,
  Phone,
  Mail,
  Leaf,
} from "lucide-react";
import { useState } from "react";

const benefits = [
  {
    icon: TrendingUp,
    title: "Low Investment, High Return",
    description:
      "Start with a small investment and grow a profitable business.",
    color: "bg-green-100 text-green-700",
  },
  {
    icon: Wallet,
    title: "Effortless Income",
    description:
      "Build recurring revenue with an established food brand.",
    color: "bg-orange-100 text-orange-600",
  },
  {
    icon: BriefcaseBusiness,
    title: "No Career Disruption",
    description:
      "Start alongside your current work.",
    color: "bg-red-100 text-red-600",
  },
  {
    icon: Rocket,
    title: "Ready-to-Launch",
    description:
      "Get a guided setup with launch support.",
    color: "bg-purple-100 text-purple-600",
  },
];

const investments = [
  {
    icon: Wallet,
    value: "₹5,00,000",
    title: "Area Investment",
    description:
      "Includes franchise fee, setup costs, and initial marketing.",
    color: "text-green-700",
    bg: "bg-green-50",
  },
  {
    icon: TrendingUp,
    value: "25–30%",
    title: "Expected ROI",
    description:
      "Illustrative expected return over the first 12–24 months of operation.",
    color: "text-orange-600",
    bg: "bg-orange-50",
  },
  {
    icon: CalendarDays,
    value: "30 Days",
    title: "Launch Timeline",
    description:
      "Target launch within 30 days of agreement, subject to readiness.",
    color: "text-blue-600",
    bg: "bg-blue-50",
  },
];

const supportFeatures = [
  {
    icon: Headset,
    title: "Technical Support",
    description:
      "24/7 technical support and regular app updates included.",
  },
  {
    icon: MapPin,
    title: "Territory Rights",
    description:
      "Exclusive operating rights in your designated geographic area.",
  },
  {
    icon: ChartNoAxesCombined,
    title: "Analytics Dashboard",
    description:
      "Real-time business metrics and performance tracking tools.",
  },
];

const steps = [
  {
    number: "01",
    icon: ClipboardCheck,
    title: "Submit Application",
    description:
      "Fill out your franchise application form and submit the required documents.",
    color: "bg-green-600",
  },
  {
    number: "02",
    icon: CheckCircle2,
    title: "Review & Approval",
    description:
      "Our team reviews your application and conducts an interview.",
    color: "bg-blue-600",
  },
  {
    number: "03",
    icon: GraduationCap,
    title: "Agreement & Training",
    description:
      "Sign the franchise agreement and complete the training program.",
    color: "bg-orange-500",
  },
  {
    number: "04",
    icon: Rocket,
    title: "Launch Your Business",
    description:
      "Launch your Eat Protein franchise with support and guidance.",
    color: "bg-purple-600",
  },
];

function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="mx-auto mb-10 max-w-2xl text-center">
      {eyebrow && (
        <p className="mb-3 text-xs font-black uppercase tracking-[0.2em] text-green-700">
          {eyebrow}
        </p>
      )}

      <h2 className="text-2xl font-black tracking-tight text-slate-900 sm:text-3xl lg:text-4xl">
        {title}
      </h2>

      {description && (
        <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
          {description}
        </p>
      )}

      <div className="mx-auto mt-5 h-1 w-14 rounded-full bg-green-600" />
    </div>
  );
}

export default function Franchise() {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    location: "",
    investment: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setSubmitted(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Frontend validation and confirmation only.
    // Connect your backend or email service to receive enquiries.
    setSubmitted(true);
  };

  return (
    <main className="min-h-screen overflow-hidden bg-white text-slate-800">
      {/* ======================================
          HERO SECTION
      ====================================== */}
      <section
        id="franchise"
        className="relative bg-gradient-to-br from-[#f0fff1] via-[#fbfff8] to-[#eaf5ff]"
      >
        <div className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-green-200/25 blur-3xl" />
        <div className="pointer-events-none absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-yellow-200/25 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 py-12 sm:px-6 sm:py-16 lg:grid-cols-12 lg:gap-8 lg:px-8 lg:py-20">
          {/* Hero content */}
          <div className="lg:col-span-6">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-green-200 bg-white/80 px-4 py-2 text-xs font-black uppercase tracking-wider text-green-700 shadow-sm">
              <Leaf size={15} />
              Grow with Eat Protein
            </div>

            <h1 className="max-w-2xl text-4xl font-black leading-[1.1] tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              Build Your Own
              <span className="block text-green-700">
                Healthy Food Business
              </span>
            </h1>

            <p className="mt-5 max-w-xl text-base leading-7 text-slate-600 sm:text-lg">
              Join the Eat Protein franchise network and bring
              premium nuts, seeds and protein-rich foods to
              your community.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full bg-green-700 px-6 py-3.5 text-sm font-bold text-white shadow-xl shadow-green-800/15 transition hover:-translate-y-1 hover:bg-green-800"
              >
                Apply for Franchise
                <ArrowRight size={18} />
              </a>

              <a
                href="#investment"
                className="inline-flex items-center gap-2 rounded-full border border-green-200 bg-white px-6 py-3.5 text-sm font-bold text-green-800 transition hover:bg-green-50"
              >
                View Investment
              </a>
            </div>

            <div className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-3 text-sm font-medium text-slate-600">
              <span className="inline-flex items-center gap-2">
                <CheckCircle2 size={17} className="text-green-600" />
                Guided Setup
              </span>

              <span className="inline-flex items-center gap-2">
                <CheckCircle2 size={17} className="text-green-600" />
                Training Support
              </span>

              <span className="inline-flex items-center gap-2">
                <CheckCircle2 size={17} className="text-green-600" />
                Business Tools
              </span>
            </div>
          </div>

          {/* Hero illustration */}
          <div className="relative lg:col-span-6">
            <div className="absolute inset-8 rounded-full bg-green-200/40 blur-3xl" />

            <img
              src="/assets/franchise.png"
              alt="Eat Protein healthy food store with franchise partners"
              className="relative z-10 mx-auto w-full max-w-2xl object-contain drop-shadow-[0_20px_35px_rgba(22,101,52,0.12)]"
            />

            <div className="absolute bottom-2 left-2 z-20 rounded-2xl border border-white bg-white/95 p-4 shadow-xl sm:bottom-6 sm:left-0">
              <p className="text-xs font-semibold text-slate-500">
                Starting investment
              </p>
              <p className="mt-1 text-xl font-black text-green-700">
                ₹5,00,000
              </p>
            </div>

            <div className="absolute right-2 top-2 z-20 flex items-center gap-2 rounded-2xl border border-white bg-white/95 px-4 py-3 shadow-xl sm:right-0 sm:top-8">
              <span className="grid h-9 w-9 place-items-center rounded-full bg-green-100 text-green-700">
                <TrendingUp size={19} />
              </span>

              <div>
                <p className="text-sm font-black text-slate-900">
                  25–30%
                </p>
                <p className="text-xs text-slate-500">
                  Expected ROI*
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================
          WHY CHOOSE US
      ====================================== */}
      <section
        id="why-us"
        className="px-4 py-16 sm:px-6 lg:px-8 lg:py-20"
      >
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Your business advantage"
            title="Why Choose Eat Protein?"
            description="Build your business with a focused food brand, practical tools, and support at every stage."
          />

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.title}
                  className="group rounded-3xl border border-slate-100 bg-white p-6 shadow-[0_8px_30px_rgba(15,23,42,0.04)] transition duration-300 hover:-translate-y-2 hover:border-green-200 hover:shadow-xl hover:shadow-green-900/5"
                >
                  <div
                    className={`grid h-14 w-14 place-items-center rounded-2xl ${item.color} transition group-hover:scale-105`}
                  >
                    <Icon size={26} />
                  </div>

                  <h3 className="mt-5 text-lg font-extrabold text-slate-900">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    {item.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ======================================
          INVESTMENT DETAILS
      ====================================== */}
      <section
        id="investment"
        className="bg-[#f5fbf4] px-4 py-16 sm:px-6 lg:px-8 lg:py-20"
      >
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Plan your next move"
            title="Investment Details"
            description="Understand the estimated investment, potential returns, and launch timeline before getting started."
          />

          <div className="grid gap-5 md:grid-cols-3">
            {investments.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.title}
                  className="group relative overflow-hidden rounded-3xl border border-green-100 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-8"
                >
                  <div className="absolute -right-8 -top-8 h-28 w-28 rounded-full bg-green-50 transition group-hover:scale-125" />

                  <div className="relative flex items-start gap-4">
                    <div
                      className={`grid h-14 w-14 shrink-0 place-items-center rounded-2xl ${item.bg} ${item.color}`}
                    >
                      <Icon size={27} />
                    </div>

                    <div>
                      <p
                        className={`text-2xl font-black sm:text-3xl ${item.color}`}
                      >
                        {item.value}
                      </p>

                      <h3 className="mt-2 font-bold text-slate-900">
                        {item.title}
                      </h3>
                    </div>
                  </div>

                  <p className="mt-5 text-sm leading-6 text-slate-600">
                    {item.description}
                  </p>

                  <div className="mt-5 h-1 w-12 rounded-full bg-green-600 transition-all group-hover:w-20" />
                </article>
              );
            })}
          </div>

          <p className="mx-auto mt-5 max-w-3xl text-center text-xs leading-5 text-slate-500">
            *Investment, ROI and launch timeline are estimates supplied
            for this page, not guaranteed outcomes. Actual costs, returns
            and launch dates depend on location, operating expenses,
            agreement terms and business performance. Confirm all details
            with Eat Protein before investing.
          </p>

          {/* Included support */}
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {supportFeatures.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.title}
                  className="flex gap-4 rounded-2xl border border-green-100 bg-white p-5 transition hover:border-green-300 hover:shadow-lg"
                >
                  <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-green-100 text-green-700">
                    <Icon size={23} />
                  </div>

                  <div>
                    <h3 className="font-extrabold text-slate-900">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      {item.description}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ======================================
          HOW TO GET STARTED
      ====================================== */}
      <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Your journey starts here"
            title="How to Get Started"
            description="Four clear steps to take your franchise idea from application to launch."
          />

          <div className="relative grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div className="absolute left-[12%] right-[12%] top-8 hidden border-t-2 border-dashed border-green-200 lg:block" />

            {steps.map((step) => {
              const Icon = step.icon;

              return (
                <article
                  key={step.number}
                  className="relative z-10 flex flex-col items-center text-center"
                >
                  <div
                    className={`grid h-16 w-16 place-items-center rounded-2xl ${step.color} text-white shadow-lg transition duration-300 hover:-translate-y-1 hover:scale-105`}
                  >
                    <Icon size={27} />
                  </div>

                  <span className="mt-4 text-xs font-black tracking-widest text-green-700">
                    STEP {step.number}
                  </span>

                  <h3 className="mt-2 text-lg font-extrabold text-slate-900">
                    {step.title}
                  </h3>

                  <p className="mt-3 max-w-xs text-sm leading-6 text-slate-600">
                    {step.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ======================================
          FRANCHISE ENQUIRY FORM & CONTACT
      ====================================== */}
      <section
        id="contact"
        className="relative isolate overflow-hidden bg-gradient-to-r from-green-700 via-teal-600 to-blue-600 px-4 py-10 text-white sm:px-6 lg:px-8 lg:py-12"
      >
        {/* Background decorations */}
        <div className="pointer-events-none absolute -left-20 -top-24 h-64 w-64 rounded-full border-[35px] border-white/10" />

        <div className="pointer-events-none absolute -bottom-24 -right-16 h-72 w-72 rounded-full border-[40px] border-white/10" />

        <div className="relative mx-auto max-w-4xl">
          {/* Heading and subtitle */}
          <div className="text-center">
            {/*<div className="mx-auto grid h-12 w-12 place-items-center rounded-xl border border-white/20 bg-white/10">
              <Store size={25} />
            </div>*/}

            <h2 className="mt-4 text-2xl font-black sm:text-3xl lg:text-4xl">
              Ready to Start Your Journey?
            </h2>

            <p className="mx-auto mt-2 max-w-2xl text-sm leading-6 text-white/85 sm:text-base">
              Join the Eat Protein franchise network and bring
              quality protein-rich foods to your area.
            </p>
          </div>

          {/* Compact franchise form */}
          <div className="mx-auto mt-6 max-w-2xl rounded-2xl border border-white/30 bg-white p-5 text-gray-800 shadow-2xl sm:p-6">
            <div className="mb-4 text-center">
              <h3 className="text-xl font-extrabold text-green-800">
                Franchise Enquiry
              </h3>

              <p className="mt-1 text-xs text-gray-500 sm:text-sm">
                Share your details and our team can contact you.
              </p>
            </div>

            {submitted ? (
              <div
                role="status"
                className="rounded-xl bg-green-50 px-4 py-7 text-center"
              >
                <CheckCircle2
                  size={42}
                  className="mx-auto text-green-600"
                />

                <h4 className="mt-3 text-lg font-bold text-green-800">
                  Thank You for Your Interest!
                </h4>

                <p className="mt-2 text-sm leading-6 text-gray-600">
                  Your form has been validated successfully.
                  Please contact our team directly to discuss your
                  franchise enquiry.
                </p>

                <a
                  href="mailto:support@eatprotein.in?subject=Eat%20Protein%20Franchise%20Enquiry"
                  className="mt-4 inline-flex items-center gap-2 rounded-full bg-green-700 px-5 py-2.5 text-sm font-bold text-white transition hover:bg-green-800"
                >
                  Contact Our Team
                  <ArrowRight size={16} />
                </a>

                <div>
                  <button
                    type="button"
                    onClick={() => {
                      setFormData({
                        fullName: "",
                        phone: "",
                        email: "",
                        location: "",
                        investment: "",
                      });
                      setSubmitted(false);
                    }}
                    className="mt-4 text-sm font-semibold text-green-700 underline"
                  >
                    Submit another enquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3.5">
                <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2">
                  {/* Full name */}
                  <div>
                    <label
                      htmlFor="fullName"
                      className="mb-1 block text-xs font-bold text-gray-700"
                    >
                      Full Name *
                    </label>

                    <input
                      id="fullName"
                      name="fullName"
                      type="text"
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="Enter your full name"
                      autoComplete="name"
                      maxLength={100}
                      required
                      className="w-full rounded-lg border border-gray-200 bg-gray-50 px-3 py-2.5 text-sm outline-none transition placeholder:text-gray-400 focus:border-green-600 focus:bg-white focus:ring-2 focus:ring-green-100"
                    />
                  </div>

                  {/* Phone number */}
                  <div>
                    <label
                      htmlFor="phone"
                      className="mb-1 block text-xs font-bold text-gray-700"
                    >
                      Phone Number *
                    </label>

                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="10-digit mobile number"
                      autoComplete="tel"
                      inputMode="numeric"
                      pattern="[0-9]{10}"
                      title="Enter a valid 10-digit Indian mobile number"
                      maxLength={10}
                      required
                      className="w-full rounded-lg border border-gray-200 bg-gray-50 px-3 py-2.5 text-sm outline-none transition placeholder:text-gray-400 focus:border-green-600 focus:bg-white focus:ring-2 focus:ring-green-100"
                    />
                  </div>

                  {/* Email address */}
                  <div>
                    <label
                      htmlFor="email"
                      className="mb-1 block text-xs font-bold text-gray-700"
                    >
                      Email Address *
                    </label>

                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      autoComplete="email"
                      maxLength={254}
                      required
                      className="w-full rounded-lg border border-gray-200 bg-gray-50 px-3 py-2.5 text-sm outline-none transition placeholder:text-gray-400 focus:border-green-600 focus:bg-white focus:ring-2 focus:ring-green-100"
                    />
                  </div>

                  {/* Preferred location */}
                  <div>
                    <label
                      htmlFor="location"
                      className="mb-1 block text-xs font-bold text-gray-700"
                    >
                      Preferred Location *
                    </label>

                    <input
                      id="location"
                      name="location"
                      type="text"
                      value={formData.location}
                      onChange={handleChange}
                      placeholder="City / District"
                      autoComplete="address-level2"
                      maxLength={150}
                      required
                      className="w-full rounded-lg border border-gray-200 bg-gray-50 px-3 py-2.5 text-sm outline-none transition placeholder:text-gray-400 focus:border-green-600 focus:bg-white focus:ring-2 focus:ring-green-100"
                    />
                  </div>
                </div>

                {/* Investment budget */}
                <div>
                  <label
                    htmlFor="investment"
                    className="mb-1 block text-xs font-bold text-gray-700"
                  >
                    Expected Investment Budget *
                  </label>

                  <select
                    id="investment"
                    name="investment"
                    value={formData.investment}
                    onChange={handleChange}
                    required
                    className="w-full rounded-lg border border-gray-200 bg-gray-50 px-3 py-2.5 text-sm text-gray-700 outline-none transition focus:border-green-600 focus:bg-white focus:ring-2 focus:ring-green-100"
                  >
                    <option value="" disabled>
                      Select your investment budget
                    </option>

                    <option value="Below ₹5 Lakhs">
                      Below ₹5 Lakhs
                    </option>

                    <option value="₹5–10 Lakhs">
                      ₹5–10 Lakhs
                    </option>

                    <option value="₹10–20 Lakhs">
                      ₹10–20 Lakhs
                    </option>

                    <option value="Above ₹20 Lakhs">
                      Above ₹20 Lakhs
                    </option>

                    <option value="Need guidance">
                      Need guidance
                    </option>
                  </select>
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  className="group flex w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-green-700 to-teal-600 px-5 py-3 text-sm font-extrabold text-white shadow-md transition duration-300 hover:-translate-y-0.5 hover:from-green-800 hover:to-teal-700 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
                >
                  Submit Franchise Enquiry
                  <ArrowRight
                    size={17}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </button>

                <p className="text-center text-[11px] leading-5 text-gray-500">
                  By submitting, you agree to be contacted about
                  your Eat Protein franchise enquiry.
                </p>
              </form>
            )}
          </div>

          {/* Contact details below the form */}
          <div className="mt-6 flex flex-col items-center justify-center gap-3 text-sm text-white/95 sm:flex-row sm:flex-wrap sm:gap-x-8 sm:gap-y-3">
            <a
              href="tel:+919440701380"
              className="inline-flex items-center gap-2 transition hover:text-green-100"
            >
              <Phone size={16} />
              +91 9440701380
            </a>

            <a
              href="mailto:support@eatprotein.in"
              className="inline-flex items-center gap-2 transition hover:text-green-100"
            >
              <Mail size={16} />
              support@eatprotein.in
            </a>

            <span className="inline-flex items-center gap-2">
              <MapPin size={16} />
              Available Nationwide
            </span>
          </div>
        </div>
      </section>
    </main>
  );
}
